import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, pick } from "@/lib/i18n";
import {
  tipOfTheDay,
  trendingTips,
  newTips,
  PRODUCTS,
  tips,
} from "@/data/tips";
import TipCard from "@/components/tip-card";
import ProductIcon from "@/components/product-icon";
import { AudienceBadge, SectionBadge } from "@/components/badges";

// Regénère la page au moins une fois par heure pour que l'astuce du jour
// bascule automatiquement au changement de journée.
export const revalidate = 3600;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const tod = tipOfTheDay();
  const trending = trendingTips(3);
  const fresh = newTips(3);

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 sm:px-10 sm:py-16 mt-6">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full brand-gradient opacity-20 blur-3xl" />
        <img
          src="/pub-hero.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover object-right opacity-90 [mask-image:linear-gradient(to_right,transparent,black_45%)] sm:block"
        />
        <div className="relative">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-copilot">
            {dict.home.hero_kicker}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {dict.brand.question}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{dict.brand.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/explorer`}
              className="rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-copilot/20 hover:opacity-95"
            >
              🧭 {dict.home.hero_cta_explore}
            </Link>
            <Link
              href={`/${locale}/m365`}
              className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold hover:bg-surface-2"
            >
              {dict.home.hero_cta_browse}
            </Link>
          </div>
        </div>
      </section>

      {/* Tip of the day */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          💡 {dict.home.tip_of_day}
        </h2>
        <Link
          href={`/${locale}/tip/${tod.slug}`}
          className="card-lift group grid gap-6 rounded-3xl border border-border bg-surface p-6 sm:grid-cols-[auto_1fr] sm:p-8"
        >
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-surface-2 text-5xl">
            <ProductIcon icon={tod.icon} size={52} className="text-5xl" />
          </div>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <SectionBadge section={tod.section} dict={dict} />
              {tod.audience.map((a) => (
                <AudienceBadge key={a} audience={a} dict={dict} />
              ))}
            </div>
            <h3 className="text-2xl font-bold group-hover:text-ms-blue transition">
              {pick(tod.title, locale)}
            </h3>
            <p className="mt-2 text-muted">{pick(tod.summary, locale)}</p>
          </div>
        </Link>
      </section>

      {/* Trending */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            🔥 {dict.home.trending}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((t) => (
            <TipCard key={t.slug} tip={t} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      {/* What's new */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          🆕 {dict.home.whats_new}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fresh.map((t) => (
            <TipCard key={t.slug} tip={t} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      {/* Browse by product */}
      <section className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          🗂️ {dict.home.browse_by}
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.filter((p) => tips.some((t) => t.product === p.id)).map(
            (p) => (
              <Link
                key={p.id}
                href={`/${locale}/prompts#${p.id}`}
                className="card-lift flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface p-5 text-center"
              >
                <ProductIcon icon={p.icon} label={pick(p.label, locale)} size={44} className="text-4xl" />
                <span className="text-sm font-medium">
                  {pick(p.label, locale)}
                </span>
              </Link>
            ),
          )}
        </div>
      </section>

      {/* Two big sections */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href={`/${locale}/m365`}
          className="card-lift rounded-3xl border border-border bg-surface p-6"
        >
          <img
            src="/copilot-m365.png"
            alt="Copilot M365"
            width={48}
            height={48}
            className="mb-2 h-12 w-12 object-contain"
          />
          <h3 className="text-lg font-bold">{dict.sections.m365_title}</h3>
          <p className="mt-1 text-sm text-muted">{dict.sections.m365_desc}</p>
        </Link>
        <Link
          href={`/${locale}/chat`}
          className="card-lift rounded-3xl border border-border bg-surface p-6"
        >
          <img
            src="/copilot.png"
            alt="Copilot"
            width={48}
            height={48}
            className="mb-2 h-12 w-12 object-contain"
          />
          <h3 className="text-lg font-bold">{dict.sections.chat_title}</h3>
          <p className="mt-1 text-sm text-muted">{dict.sections.chat_desc}</p>
        </Link>
      </section>

      <div className="h-6" />
    </div>
  );
}
