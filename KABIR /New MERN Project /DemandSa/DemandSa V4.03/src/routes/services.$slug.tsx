import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Star, BadgeCheck, MapPin, Calendar, CheckCircle2, Sparkles, Clock, ShieldCheck, Phone, MessageSquare, Search, Briefcase, Users, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SERVICES, TECHNICIANS, PROVIDERS } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { useBookingStore } from "@/lib/booking-store";
import { getServiceContent, POPULAR_CITIES, relatedServices } from "@/lib/service-content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData ? SERVICES.find((x) => x.slug === loaderData.slug) : undefined;
    if (!s) return { meta: [{ title: "Service — DemandSa" }] };
    const c = getServiceContent(s);
    const title = `${s.en} in Saudi Arabia — Book Verified Pros | DemandSa`;
    const desc = `${c.tagline.en}. Book ${s.en.toLowerCase()} on DemandSa: verified technicians, transparent pricing, 30-day warranty. Riyadh, Jeddah, Dammam & 55+ KSA cities.`;
    const url = `/services/${params.slug}`;
    return {
      meta: [
        { title }, { name: "description", content: desc.slice(0, 158) },
        { name: "keywords", content: c.keywords.join(", ") },
        { property: "og:title", content: title }, { property: "og:description", content: desc.slice(0, 200) },
        { property: "og:type", content: "product" }, { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: s.en, description: s.desc_en,
          areaServed: { "@type": "Country", name: "Saudi Arabia" },
          provider: { "@type": "Organization", name: "DemandSa", url: "https://demandsa.com" },
          offers: c.pricing.map((p) => ({ "@type": "Offer", name: p.name.en, price: p.price, priceCurrency: "SAR" })),
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q.en,
            acceptedAnswer: { "@type": "Answer", text: f.a.en } })),
        }) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
            { "@type": "ListItem", position: 3, name: s.en, item: url },
          ],
        }) },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-md p-12 text-center">
        <p className="font-semibold">Service not found.</p>
        <Link to="/services" className="mt-3 inline-block text-primary underline">Back to services</Link>
      </div>
    </SiteLayout>
  ),
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = SERVICES.find((s) => s.slug === slug)!;
  const { lang } = useI18n();
  const { openBooking } = useBookingStore();
  const tt = (en: string, ar: string) => (lang === "ar" ? ar : en);
  const b = (x: { en: string; ar: string }) => (lang === "ar" ? x.ar : x.en);
  const Icon = service.icon;
  const c = getServiceContent(service);
  const title = lang === "ar" ? service.ar : service.en;
  const techs = TECHNICIANS.filter((t) => t.service === service.slug);
  const providers = PROVIDERS.filter((p) => p.services.includes(service.slug));
  const related = relatedServices(service.slug, 8);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary to-brand-pink text-white">
        <div className="pointer-events-none absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(circle at 12% 20%, white 0, transparent 45%), radial-gradient(circle at 88% 70%, white 0, transparent 40%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/85">
            <Link to="/" className="hover:underline">{tt("Home", "الرئيسية")}</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:underline">{tt("Services", "الخدمات")}</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">{title}</span>
          </nav>
          <div className="grid items-start gap-8 lg:grid-cols-[1fr,360px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest ring-1 ring-white/30 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> {tt("Home Service", "خدمة منزلية")}
              </span>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">{b(c.tagline)}</p>
              <p className="mt-2 max-w-2xl text-sm text-white/80">{b(c.long)}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button onClick={() => openBooking({ service: service.slug })}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary shadow-elevated hover:bg-white/95">
                  <Calendar className="h-4 w-4" /> {tt("Book Now", "احجز الآن")}
                </button>
                <Link to="/find-technician"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/25">
                  <Search className="h-4 w-4" /> {tt("Find Technician", "ابحث عن فني")}
                </Link>
                <Link to="/find-provider"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/25">
                  <Building2 className="h-4 w-4" /> {tt("Find Provider", "ابحث عن مزوّد")}
                </Link>
                <Link to="/post-job"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-pink px-5 py-3 text-sm font-bold text-white shadow-elevated hover:bg-brand-pink/90">
                  <Briefcase className="h-4 w-4" /> {tt("Post a Job", "أضف وظيفة")}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/90">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4" /> {tt("Verified pros", "فنيون موثّقون")}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {tt("30-min ETA", "وصول 30 دقيقة")}</span>
                <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4" /> {tt("30-day warranty", "ضمان 30 يوم")}</span>
                <span className="inline-flex items-center gap-1.5"><Star className="h-4 w-4 fill-warning text-warning" /> {tt("4.9 avg rating", "تقييم 4.9")}</span>
              </div>
            </div>
            <aside className="rounded-2xl bg-white p-5 text-foreground shadow-elevated">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-6 w-6" /></span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{tt("Starting from", "تبدأ من")}</p>
                  <p className="text-2xl font-extrabold text-foreground">SAR {c.pricing[0].price}</p>
                </div>
              </div>
              <button onClick={() => openBooking({ service: service.slug })}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-brand-pink px-4 py-3 text-sm font-bold text-white shadow-blue hover:opacity-95">
                <Calendar className="h-4 w-4" /> {tt("Book this service", "احجز هذه الخدمة")}
              </button>
              <a href="tel:+966511091067" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground hover:bg-muted">
                <Phone className="h-4 w-4" /> +966 51 109 1067
              </a>
              <a href="https://wa.me/966511091067" target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-success px-4 py-3 text-sm font-bold text-white hover:opacity-95">
                <MessageSquare className="h-4 w-4" /> {tt("WhatsApp Chat", "محادثة واتساب")}
              </a>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
          <main className="space-y-10">
            {/* Key services grid */}
            <Section title={tt("What we cover", "ما نقدّمه")} sub={tt(`Popular ${service.en.toLowerCase()} tasks our pros handle every day.`, `مهام ${service.ar} الشائعة التي ينجزها فنيونا يوميًا.`)}>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {c.keyServices.map((k, i) => (
                  <li key={i} className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary hover:shadow-soft transition">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm font-semibold text-foreground">{b(k)}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Process */}
            <Section title={tt("How it works", "كيف تعمل الخدمة")} sub={tt("From booking to completion in 4 simple steps.", "من الحجز حتى الإنجاز في 4 خطوات.")}>
              <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {c.process.map((p, i) => (
                  <li key={i} className="relative rounded-2xl border border-border bg-card p-5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-extrabold text-primary-foreground">{i + 1}</span>
                    <p className="mt-3 text-sm font-bold text-foreground">{b(p.title)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{b(p.desc)}</p>
                  </li>
                ))}
              </ol>
            </Section>

            {/* Pricing */}
            <Section title={tt("Transparent pricing", "أسعار شفافة")} sub={tt("Choose what fits your job. All prices in SAR.", "اختر ما يناسب مهمتك. جميع الأسعار بالريال.")}>
              <div className="grid gap-4 md:grid-cols-3">
                {c.pricing.map((tier, i) => {
                  const featured = i === 1;
                  return (
                    <div key={i} className={`relative rounded-2xl border p-5 ${featured ? "border-primary bg-primary-soft/40 shadow-elevated" : "border-border bg-card"}`}>
                      {featured && <span className="absolute -top-2 start-4 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">{tt("Popular", "الأكثر طلبًا")}</span>}
                      <p className="text-sm font-bold text-foreground">{b(tier.name)}</p>
                      <p className="mt-2 flex items-baseline gap-1">
                        <span className="text-3xl font-black text-foreground">SAR {tier.price}</span>
                        <span className="text-xs text-muted-foreground">{b(tier.unit)}</span>
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {tier.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-foreground"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-success" /> {b(f)}</li>
                        ))}
                      </ul>
                      <button onClick={() => openBooking({ service: service.slug })}
                        className={`mt-4 w-full rounded-lg px-3 py-2 text-xs font-bold ${featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border bg-background text-foreground hover:bg-muted"}`}>
                        {tt("Book this", "احجز")}
                      </button>
                    </div>
                  );
                })}
              </div>
            </Section>

            {/* Why DemandSa */}
            <Section title={tt("Why DemandSa", "لماذا ديماند سا")} sub={tt("Built for Saudi homes & businesses.", "صُمّمت للمنازل والشركات في السعودية.")}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {c.benefits.map((bn, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><ShieldCheck className="h-5 w-5" /></span>
                    <p className="text-sm font-semibold text-foreground">{b(bn)}</p>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Technicians */}
            {techs.length > 0 && (
              <Section title={tt("Top technicians", "أفضل الفنيين")} sub={tt(`Verified ${service.en.toLowerCase()} pros near you.`, `محترفو ${service.ar} الموثوقون بقربك.`)}>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {techs.slice(0, 6).map((t) => (
                    <li key={t.id}>
                      <Link to="/technician/$id" params={{ id: t.id }}
                        className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-primary hover:shadow-soft">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-brand-pink text-sm font-extrabold text-white">{t.avatar}</span>
                        <div className="min-w-0 flex-1">
                          <p className="flex items-center gap-1 truncate text-sm font-bold text-foreground group-hover:text-primary">
                            {lang === "ar" ? t.name_ar : t.name_en} {t.verified && <BadgeCheck className="h-3.5 w-3.5 text-primary" />}
                          </p>
                          <p className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-0.5"><Star className="h-3 w-3 fill-warning text-warning" /> {t.rating}</span>
                            <span>·</span>
                            <span className="inline-flex items-center gap-0.5"><MapPin className="h-3 w-3" /> {lang === "ar" ? t.city_ar : t.city_en}</span>
                          </p>
                        </div>
                        <span className="text-xs font-bold text-primary">SAR {t.priceFrom}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link to="/find-technician" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                    {tt("Browse all technicians", "تصفح جميع الفنيين")} <ArrowRight className="h-4 w-4 rtl-flip" />
                  </Link>
                </div>
              </Section>
            )}

            {/* Providers */}
            {providers.length > 0 && (
              <Section title={tt("Companies offering this service", "شركات تقدّم هذه الخدمة")}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {providers.slice(0, 6).map((p) => (
                    <li key={p.id}>
                      <Link to="/providers/$id" params={{ id: p.id }}
                        className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-primary">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-sm font-extrabold text-primary">{p.logo}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-foreground">{lang === "ar" ? p.name_ar : p.name_en}</p>
                          <p className="text-xs text-muted-foreground">{p.technicians} {tt("techs", "فنيون")} · ⭐ {p.rating}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground rtl-flip" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Cities */}
            <Section title={tt(`Available across Saudi Arabia`, "متاحة في جميع أنحاء السعودية")} sub={tt(`Book ${service.en.toLowerCase()} in your city.`, `احجز ${service.ar} في مدينتك.`)}>
              <ul className="flex flex-wrap gap-2">
                {POPULAR_CITIES.map((city) => (
                  <li key={city.en}>
                    <button onClick={() => openBooking({ service: service.slug })}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:bg-primary-soft/30">
                      <MapPin className="h-3 w-3 text-primary" /> {b(city)}
                    </button>
                  </li>
                ))}
              </ul>
            </Section>

            {/* FAQ */}
            <Section title={tt("Frequently asked questions", "الأسئلة الشائعة")}>
              <ul className="space-y-2">
                {c.faqs.map((f, i) => (
                  <li key={i} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-sm font-bold text-foreground">{b(f.q)}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{b(f.a)}</p>
                  </li>
                ))}
              </ul>
            </Section>

            {/* CTA */}
            <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-brand-pink p-6 text-white shadow-elevated sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-black sm:text-2xl">{tt(`Ready to book ${service.en.toLowerCase()}?`, `جاهز لحجز ${service.ar}؟`)}</h2>
                  <p className="mt-1 text-sm text-white/90">{tt("Get matched with a verified pro in minutes.", "اربط مع فني موثّق خلال دقائق.")}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => openBooking({ service: service.slug })}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-primary hover:bg-white/95">
                    <Calendar className="h-4 w-4" /> {tt("Book Now", "احجز الآن")}
                  </button>
                  <Link to="/post-job" className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/30 hover:bg-white/25">
                    <Briefcase className="h-4 w-4" /> {tt("Post a Job", "أضف وظيفة")}
                  </Link>
                </div>
              </div>
            </section>

            {/* Related */}
            <Section title={tt("Related services", "خدمات ذات صلة")}>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((r) => {
                  const RIcon = r.icon;
                  return (
                    <li key={r.slug}>
                      <Link to="/services/$slug" params={{ slug: r.slug }}
                        className="group flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-primary hover:shadow-soft">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                          <RIcon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-bold text-foreground group-hover:text-primary">{lang === "ar" ? r.ar : r.en}</p>
                          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{lang === "ar" ? r.desc_ar : r.desc_en}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Section>
          </main>

          {/* Sticky aside */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{tt("Quick actions", "إجراءات سريعة")}</p>
              <div className="mt-3 space-y-2">
                <button onClick={() => openBooking({ service: service.slug })}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-brand-pink px-4 py-3 text-sm font-bold text-white shadow-blue hover:opacity-95">
                  <Calendar className="h-4 w-4" /> {tt("Book Now", "احجز الآن")}
                </button>
                <Link to="/find-technician" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground hover:bg-muted">
                  <Users className="h-4 w-4" /> {tt("Find Technician", "ابحث عن فني")}
                </Link>
                <Link to="/find-provider" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground hover:bg-muted">
                  <Building2 className="h-4 w-4" /> {tt("Find Provider", "ابحث عن مزوّد")}
                </Link>
                <Link to="/post-job" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground hover:bg-muted">
                  <Briefcase className="h-4 w-4" /> {tt("Post a Job", "أضف وظيفة")}
                </Link>
                <Link to="/job-marketplace" className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-3 text-sm font-bold text-foreground hover:bg-muted">
                  <Search className="h-4 w-4" /> {tt("Browse Jobs", "تصفح الوظائف")}
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{tt("Need help?", "تحتاج مساعدة؟")}</p>
              <p className="mt-2 text-sm text-muted-foreground">{tt("Talk to our team 7 days a week.", "تواصل مع فريقنا 7 أيام في الأسبوع.")}</p>
              <a href="tel:+966511091067" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90">
                <Phone className="h-4 w-4" /> +966 51 109 1067
              </a>
              <a href="https://wa.me/966511091067" target="_blank" rel="noopener noreferrer"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-success px-4 py-2.5 text-sm font-bold text-white hover:opacity-95">
                <MessageSquare className="h-4 w-4" /> {tt("WhatsApp", "واتساب")}
              </a>
            </div>

            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4 rtl-flip" /> {tt("All services", "كل الخدمات")}
            </Link>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}

function Section({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-xl font-black tracking-tight text-foreground sm:text-2xl">{title}</h2>
        {sub && <p className="mt-1 text-sm text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </section>
  );
}
