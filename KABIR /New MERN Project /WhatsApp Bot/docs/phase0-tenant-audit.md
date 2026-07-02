# Phase 0 — Tenant-Isolation Audit Checklist

Goal: know exactly which parts of the existing bot backend + dashboard are
already tenant-safe before starting Phase 1 (multi-tenancy hardening) and
Phase 2 (social media management). Every "No" answer below becomes a Phase 1
task.

**Exit criteria for the whole audit:** create two test tenants and prove that
neither can see the other's conversations, contacts, AI config, or connected
channels through *any* path — dashboard UI, API calls, or n8n workflows.

---

## A. Database (automated)

Run the companion script against your app database:

```bash
psql "$DATABASE_URL" -f scripts/tenant_isolation_audit.sql
```

It flags, per section:

1. Tables missing a `tenant_id` column
2. Nullable `tenant_id` columns
3. Rows with NULL `tenant_id` (generates the count queries for you)
4. `tenant_id` columns with no leading index (performance, pre-scale)
5. Tables without Row-Level Security enabled
6. Tables with RLS enabled but no policies (half-finished migrations)
7. Columns that look like plaintext tokens/secrets
8. Foreign keys that cross the tenant boundary

Empty output for a section = pass.

> If the backend is MongoDB (MERN) rather than Postgres, the equivalent manual
> checks: every collection's schema has a required, indexed `tenantId`; every
> query in the codebase includes `tenantId` in its filter (grep for `find(`,
> `findOne(`, `updateOne(`, `aggregate(` and inspect each); no RLS equivalent
> exists, so app-level enforcement is the only line of defense — consider a
> Mongoose plugin that injects `tenantId` into every query automatically.

## B. Auth & sessions (manual)

- [ ] Does the session/JWT carry a `tenant_id` claim, or only a `user_id`?
- [ ] Is `tenant_id` derived **server-side from the session** on every request,
      never accepted from the request body/query/header?
- [ ] Are there roles (owner / admin / agent / viewer), or is every user
      equal within a tenant?
- [ ] Is there an invite flow, or are users created manually?
- [ ] Test: log in as tenant A, request a tenant B resource by ID
      (e.g. `GET /api/conversations/<tenant-B-conversation-id>`). Expect 403/404.
      This IDOR test is the single highest-value check in the audit.

## C. API layer (manual)

- [ ] Grep every route handler: does each DB query filter by the
      session-derived tenant, or do some fetch by bare `id`?
- [ ] List endpoints that return collections (conversations, contacts,
      messages, analytics) — confirm each is tenant-scoped.
- [ ] Any admin/debug/internal endpoints that bypass tenant scoping? Are they
      protected by a separate super-admin role?

## D. Meta credentials & token storage (manual)

- [ ] Are Meta access tokens stored per-tenant, or is there one shared/
      hardcoded token?
- [ ] Are tokens encrypted at rest (pgcrypto / KMS / Doppler), or plaintext in
      the DB / n8n credentials / workflow JSON / `.env`?
- [ ] Grep the repo and n8n workflow exports for `EAA` (Meta token prefix) —
      any hit in committed code or workflow JSON is a leak to fix now.
- [ ] Is there a mapping table (`tenant_channels`) from
      `phone_number_id` / `page_id` → `tenant_id` → token reference?

## E. n8n workflows (manual)

- [ ] Is there **one** inbound workflow that resolves the tenant dynamically
      from `phone_number_id` / `page_id`, or one duplicated workflow per client?
- [ ] Does the AI node fetch the system prompt per-tenant from the DB, or is
      it hardcoded in the workflow?
- [ ] If a webhook arrives with an unknown `phone_number_id`, does the
      workflow fail closed (log + drop) or fall through to a default tenant?
- [ ] Are DB credentials in n8n scoped to an app role, or a superuser that
      would bypass RLS? (RLS does not apply to table owners/superusers unless
      `FORCE ROW LEVEL SECURITY` is set.)

## F. Dashboard frontend (manual)

- [ ] Does the frontend ever pass `tenant_id` explicitly in API calls?
      (It shouldn't — server derives it from the session.)
- [ ] Any client-side filtering of multi-tenant data (i.e., the API returns
      everything and the UI filters)? That's a leak regardless of what the
      screen shows.

---

## Scoring

| Result | Meaning |
|---|---|
| A–F all pass | Skip most of Phase 1; go straight to Phase 2 schema work |
| DB passes, B/C fail | Phase 1 is auth work (~1 week) |
| DB fails (no tenant_id / no RLS) | Full Phase 1 retrofit (~2 weeks) — do not start Phase 2 features first |
| D fails (plaintext/shared tokens) | Fix immediately regardless of everything else — this is the security-critical item |
