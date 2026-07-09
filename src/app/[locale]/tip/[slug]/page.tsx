import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, pick, locales } from "@/lib/i18n";
import { getTip, relatedTips, tips } from "@/data/tips";
import { AudienceBadge, SectionBadge } from "@/components/badges";
import CopyButton from "@/components/copy-button";
import TipCard from "@/components/tip-card";
import Comments from "@/components/comments";
import PageTracker from "@/components/page-tracker";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    tips.map((t) => ({ locale, slug: t.slug })),
  );
}

export default async function TipPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const tip = getTip(slug);
  if (!tip) notFound();

  const related = relatedTips(tip, 3);
  const steps = pick(tip.steps, locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <PageTracker path={`/${locale}/tip/${slug}`} />

      <Link
        href={`/${locale}/prompts`}
        className="text-sm text-muted hover:text-foreground"
      >
        ← {dict.tip.back}
      </Link>

      <div className="mt-4 mb-2 flex flex-wrap items-center gap-2">
        <SectionBadge section={tip.section} dict={dict} />
        {tip.audience.map((a) => (
          <AudienceBadge key={a} audience={a} dict={dict} />
        ))}
        <span className="text-xs text-muted">
          {tip.readMinutes} {dict.common.minutes_read}
        </span>
      </div>

      <div className="flex items-start gap-4">
        <span className="text-5xl">{tip.icon}</span>
        <div>
          <h1 className="text-3xl font-extrabold leading-tight">
            {pick(tip.title, locale)}
          </h1>
          <p className="mt-2 text-lg text-muted">{pick(tip.summary, locale)}</p>
        </div>
      </div>

      {/* Steps */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-bold">✅ {dict.tip.steps}</h2>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-2xl border border-border bg-surface p-4"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full brand-gradient text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Prompt */}
      {tip.prompt && (
        <section className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold">⚡ {dict.tip.prompt}</h2>
            <CopyButton
              text={pick(tip.prompt, locale)}
              labelCopy={dict.tip.copy}
              labelCopied={dict.tip.copied}
            />
          </div>
          <pre className="overflow-x-auto rounded-2xl border border-border bg-surface-2 p-4 font-mono text-sm whitespace-pre-wrap">
            {pick(tip.prompt, locale)}
          </pre>
        </section>
      )}

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tip.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-2 px-3 py-1 text-xs text-muted"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Comments */}
      <Comments slug={tip.slug} dict={dict} />

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-lg font-bold">✨ {dict.tip.related}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((t) => (
              <TipCard key={t.slug} tip={t} locale={locale} dict={dict} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
