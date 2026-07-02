-- ============================================================
-- Phase 0 Tenant-Isolation Audit
-- Run against your app database:
--   psql "$DATABASE_URL" -f scripts/tenant_isolation_audit.sql
-- Every section prints rows ONLY where a problem is found.
-- An empty result set for a section = that check passes.
-- ============================================================

\echo ''
\echo '=== 1. Tables WITHOUT a tenant_id column ==='
\echo '(Every business-data table should carry tenant_id. Pure lookup/reference'
\echo ' tables are OK to appear here — review each hit manually.)'
SELECT t.table_schema, t.table_name
FROM information_schema.tables t
WHERE t.table_type = 'BASE TABLE'
  AND t.table_schema NOT IN ('pg_catalog', 'information_schema')
  AND NOT EXISTS (
    SELECT 1 FROM information_schema.columns c
    WHERE c.table_schema = t.table_schema
      AND c.table_name  = t.table_name
      AND c.column_name IN ('tenant_id', 'tenant')
  )
ORDER BY 1, 2;

\echo ''
\echo '=== 2. tenant_id columns that allow NULL ==='
\echo '(A nullable tenant_id means rows can silently belong to no one —'
\echo ' those rows are invisible to tenant-scoped queries or leak into all of them.)'
SELECT table_schema, table_name, column_name, is_nullable
FROM information_schema.columns
WHERE column_name IN ('tenant_id', 'tenant')
  AND is_nullable = 'YES'
  AND table_schema NOT IN ('pg_catalog', 'information_schema')
ORDER BY 1, 2;

\echo ''
\echo '=== 3. Actual NULL / orphaned tenant_id data ==='
\echo '(Generates one COUNT query per table — copy/paste the output and run it.)'
SELECT format(
  'SELECT %L AS tbl, count(*) AS null_tenant_rows FROM %I.%I WHERE tenant_id IS NULL;',
  table_schema || '.' || table_name, table_schema, table_name
) AS run_this
FROM information_schema.columns
WHERE column_name = 'tenant_id'
  AND table_schema NOT IN ('pg_catalog', 'information_schema');

\echo ''
\echo '=== 4. Tables with tenant_id but NO index starting with it ==='
\echo '(Not a leak, but every tenant-scoped query will seq-scan — fix before scale.)'
SELECT c.table_schema, c.table_name
FROM information_schema.columns c
WHERE c.column_name = 'tenant_id'
  AND c.table_schema NOT IN ('pg_catalog', 'information_schema')
  AND NOT EXISTS (
    SELECT 1
    FROM pg_index i
    JOIN pg_class cls  ON cls.oid = i.indrelid
    JOIN pg_namespace n ON n.oid = cls.relnamespace
    JOIN pg_attribute a ON a.attrelid = cls.oid
                       AND a.attnum   = i.indkey[0]  -- leading column only
    WHERE n.nspname = c.table_schema
      AND cls.relname = c.table_name
      AND a.attname  = 'tenant_id'
  )
ORDER BY 1, 2;

\echo ''
\echo '=== 5. Row-Level Security status per table ==='
\echo '(relrowsecurity = false means RLS is OFF — one buggy WHERE clause in app'
\echo ' code can leak data across tenants. Enable RLS + a tenant policy on every'
\echo ' table that has tenant_id.)'
SELECT n.nspname AS schema, c.relname AS table_name,
       c.relrowsecurity AS rls_enabled,
       c.relforcerowsecurity AS rls_forced
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE c.relkind = 'r'
  AND n.nspname NOT IN ('pg_catalog', 'information_schema')
  AND c.relrowsecurity = false
ORDER BY 1, 2;

\echo ''
\echo '=== 6. Tables WITH RLS enabled but NO policies defined ==='
\echo '(RLS on with zero policies blocks all access for non-owners — usually a'
\echo ' half-finished migration.)'
SELECT n.nspname AS schema, c.relname AS table_name
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE c.relkind = 'r'
  AND c.relrowsecurity = true
  AND NOT EXISTS (SELECT 1 FROM pg_policy p WHERE p.polrelid = c.oid)
ORDER BY 1, 2;

\echo ''
\echo '=== 7. Suspicious plaintext-credential columns ==='
\echo '(Columns that look like they hold Meta/API tokens. If these are TEXT and'
\echo ' not encrypted (pgcrypto) or a reference/ID into a vault, that is a gap.)'
SELECT table_schema, table_name, column_name, data_type
FROM information_schema.columns
WHERE table_schema NOT IN ('pg_catalog', 'information_schema')
  AND (column_name ~* 'token|secret|api_key|apikey|password|credential')
  AND column_name !~* '_ref$|_id$|hash'
ORDER BY 1, 2, 3;

\echo ''
\echo '=== 8. Foreign keys that skip the tenant boundary ==='
\echo '(FKs referencing a tenant-scoped table by bare id only. Combined with a'
\echo ' missing app-level check, this lets tenant A attach rows to tenant B'\''s'
\echo ' parents. Informational — verify the app enforces tenant match on insert.)'
SELECT tc.table_schema, tc.table_name, kcu.column_name,
       ccu.table_name AS references_table
FROM information_schema.table_constraints tc
JOIN information_schema.key_column_usage kcu
  ON tc.constraint_name = kcu.constraint_name
 AND tc.table_schema   = kcu.table_schema
JOIN information_schema.constraint_column_usage ccu
  ON tc.constraint_name = ccu.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
  AND tc.table_schema NOT IN ('pg_catalog', 'information_schema')
  AND ccu.table_name IN (
    SELECT table_name FROM information_schema.columns
    WHERE column_name = 'tenant_id'
  )
ORDER BY 1, 2;

\echo ''
\echo '=== Audit complete. Empty sections = pass. ==='
