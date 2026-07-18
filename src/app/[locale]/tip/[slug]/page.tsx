import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, pick, locales, type Locale } from "@/lib/i18n";
import { getTip, relatedTips, tips } from "@/data/tips";
import { AudienceBadge, SectionBadge } from "@/components/badges";
import CopyButton from "@/components/copy-button";
import TipCard from "@/components/tip-card";
import Comments from "@/components/comments";
import PageTracker from "@/components/page-tracker";
import ProductIcon from "@/components/product-icon";

const BASE = "https://ai-tips-pub.com";

function truncate(text: string, max = 160) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tip = getTip(slug);
  if (!isLocale(locale) || !tip) return {};
  const loc = locale as Locale;
  const title = pick(tip.title, loc);
  const description = truncate(pick(tip.summary, loc));
  const url = `${BASE}/${loc}/tip/${slug}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        fr: `${BASE}/fr/tip/${slug}`,
        en: `${BASE}/en/tip/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "AI Tip's Pub",
      locale: loc === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function renderWithLinks(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ms-blue underline break-words"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

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

  const firstImage = tip.stepImages?.find(
    (im): im is string => typeof im === "string",
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: pick(tip.title, locale),
    description: pick(tip.summary, locale),
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    datePublished: tip.date || undefined,
    author: { "@type": "Person", name: "Axel Rouy" },
    publisher: { "@type": "Organization", name: "AI Tip's Pub" },
    mainEntityOfPage: `${BASE}/${locale}/tip/${slug}`,
    ...(firstImage ? { image: `${BASE}${firstImage}` } : {}),
    ...(tip.tags && tip.tags.length ? { keywords: tip.tags.join(", ") } : {}),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <span><ProductIcon icon={tip.icon} size={80} /></span>
        <div>
          <h1 className="text-3xl font-extrabold leading-tight">
            {pick(tip.title, locale)}
          </h1>
          <p className="mt-2 text-lg text-muted">{pick(tip.summary, locale)}</p>
        </div>
      </div>

      {/* Demo video (looping) */}
      {tip.video && tip.videoStep === undefined && (
        <video
          className="mt-6 w-full rounded-2xl border border-border"
          src={tip.video}
          poster={tip.videoPoster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}

      {/* Steps */}
      <section className="mt-8">
        <h2 className="mb-3 text-lg font-bold">✅ {dict.tip.steps}</h2>
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li
              key={i}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4"
            >
              {tip.imagesBeforeText &&
                tip.stepImages?.[i] &&
                !Array.isArray(tip.stepImages[i]) && (
                  <img
                    src={tip.stepImages[i] as string}
                    alt={`${pick(tip.title, locale)} : étape ${i + 1}`}
                    loading="lazy"
                    className={`rounded-xl border border-border ${
                      i === 0 ? "w-full" : "w-full max-w-sm"
                    }`}
                  />
                )}
              <div className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full brand-gradient text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed whitespace-pre-line">{renderWithLinks(s)}</span>
              </div>
              {tip.stepVideos
                ?.filter((v) => v.step === i)
                .map((v, vi) => (
                  <video
                    key={vi}
                    className={`ml-10 rounded-xl border border-border ${
                      v.width === "sm"
                        ? "w-full max-w-xs"
                        : v.width === "md"
                          ? "w-full max-w-md"
                          : "w-[calc(100%-2.5rem)]"
                    }`}
                    src={v.src}
                    poster={v.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                ))}
              {!tip.imagesBeforeText &&
                tip.stepImages?.[i] &&
                (Array.isArray(tip.stepImages[i]) ? (
                  <div className="ml-10 grid gap-3 sm:grid-cols-2">
                    {(tip.stepImages[i] as string[]).map((src, k) => (
                      <img
                        key={k}
                        src={src}
                        alt={`${pick(tip.title, locale)} : étape ${i + 1} (${k + 1})`}
                        loading="lazy"
                        className="w-full rounded-xl border border-border"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={tip.stepImages[i] as string}
                    alt={`${pick(tip.title, locale)} : étape ${i + 1}`}
                    loading="lazy"
                    className={`ml-10 rounded-xl border border-border ${
                      tip.imageWidth === "xs"
                        ? "w-full max-w-xs"
                        : tip.imageWidth === "md"
                          ? "w-full max-w-md"
                          : "w-[calc(100%-2.5rem)]"
                    }`}
                  />
                ))}
              {tip.imageCaptions
                ?.filter((c) => c.step === i)
                .map((c, ci) => (
                  <p key={ci} className="ml-10 -mt-1 text-xs italic text-muted">
                    {pick(c.text, locale)}
                  </p>
                ))}
              {tip.stepTable && tip.stepTable.step === i && (
                <div className="ml-10 overflow-hidden rounded-xl border border-border">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-black/5 dark:bg-white/5">
                        {tip.stepTable.columns.map((c, ci) => (
                          <th
                            key={ci}
                            className="border-b border-border px-4 py-2.5 text-left font-bold"
                          >
                            {pick(c, locale)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tip.stepTable.rows.map((row, ri) => (
                        <tr key={ri} className="border-b border-border last:border-0">
                          {row.map((cell, cii) => (
                            <td
                              key={cii}
                              className={`px-4 py-2.5 align-top ${
                                cii === 0 ? "font-medium" : "text-muted"
                              }`}
                            >
                              {pick(cell, locale)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {tip.phoneVideo && tip.phoneVideo.step === i && (
                <div className="flex justify-center py-3">
                  <div className="relative w-full max-w-[260px] rounded-[2.5rem] bg-neutral-900 p-2 shadow-2xl ring-1 ring-black/20 dark:bg-neutral-800">
                    <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-900 dark:bg-neutral-800" />
                    <video
                      className="aspect-[1080/2340] w-full rounded-[2rem] bg-black object-cover"
                      src={tip.phoneVideo.src}
                      poster={tip.phoneVideo.poster}
                      controls
                      loop
                      autoPlay
                      muted
                      playsInline
                      preload="metadata"
                    />
                  </div>
                </div>
              )}
              {tip.video && tip.videoStep === i && (
                <video
                  className="ml-10 w-[calc(100%-2.5rem)] rounded-xl border border-border"
                  src={tip.video}
                  poster={tip.videoPoster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              )}
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

      {/* Info callout */}
      {tip.info && (
        <div className="mt-8 flex gap-3 rounded-2xl border border-border bg-surface-2 p-4">
          <span className="text-xl leading-none">💡</span>
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {pick(tip.info, locale)}
          </p>
        </div>
      )}

      {/* Official sources */}
      {tip.links && tip.links.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-lg font-bold">📚 {dict.tip.sources}</h2>
          <ul className="space-y-2 rounded-2xl border border-border bg-surface p-4">
            {tip.links.map((l) => (
              <li key={l.url}>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ms-blue hover:underline break-words"
                >
                  {pick(l.label, locale)} ↗
                </a>
              </li>
            ))}
          </ul>
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
