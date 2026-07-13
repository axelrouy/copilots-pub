import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, pick } from "@/lib/i18n";
import { getTip } from "@/data/tips";
import {
  ADOPTION_STEPS,
  ADOPTION_WEEKS,
  ADOPTION_INTRO,
  ADOPTION_MISTAKE,
} from "@/data/adoption";
import ProductIcon from "@/components/product-icon";

export default async function AdoptionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <div className="mb-2 text-3xl">🚀</div>
        <h1 className="text-3xl font-extrabold">{dict.adoption.title}</h1>
        <p className="mt-3 max-w-2xl text-muted">{pick(ADOPTION_INTRO, locale)}</p>
        <div className="mt-5 rounded-2xl border-l-4 border-copilot bg-surface-2 p-4 text-sm font-medium">
          ⚠️ {pick(ADOPTION_MISTAKE, locale)}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-5">
        {ADOPTION_STEPS.map((step) => {
          const articles = step.articleSlugs
            .map((s) => getTip(s))
            .filter((t): t is NonNullable<typeof t> => Boolean(t));
          return (
            <section
              key={step.n}
              className="rounded-3xl border border-border bg-surface p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl brand-gradient text-lg font-extrabold text-white">
                  {step.n}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-copilot">
                    {dict.adoption.step} {step.n}
                  </p>
                  <h2 className="text-xl font-bold">
                    {step.emoji} {pick(step.title, locale)}
                  </h2>

                  {/* Objective */}
                  <div className="mt-3 rounded-xl bg-surface-2 p-3 text-sm">
                    <span className="font-semibold text-ms-blue">
                      {dict.adoption.objective} :
                    </span>{" "}
                    {pick(step.objective, locale)}
                  </div>

                  {step.intro && (
                    <p className="mt-3 text-sm text-muted">{pick(step.intro, locale)}</p>
                  )}

                  {/* Content blocks */}
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {step.blocks.map((b, bi) => (
                      <div key={bi}>
                        {b.heading && (
                          <h3 className="mb-1.5 text-sm font-bold">
                            {pick(b.heading, locale)}
                          </h3>
                        )}
                        <ul className="space-y-1 text-sm text-muted">
                          {b.items.map((it, ii) => (
                            <li key={ii} className="flex gap-2">
                              <span className="text-copilot">›</span>
                              <span>{pick(it, locale)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Good / bad example */}
                  {step.example && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-3 text-sm">
                        <p className="mb-1 font-semibold text-red-500">
                          ❌ {dict.adoption.avoid}
                        </p>
                        <p className="text-muted">{pick(step.example.bad, locale)}</p>
                      </div>
                      <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-3 text-sm">
                        <p className="mb-1 font-semibold text-green-600">
                          ✅ {dict.adoption.better}
                        </p>
                        <p className="text-muted">{pick(step.example.good, locale)}</p>
                      </div>
                    </div>
                  )}

                  {/* Note */}
                  {step.note && (
                    <p className="mt-4 rounded-xl border-l-4 border-border bg-surface-2 p-3 text-sm italic text-muted">
                      {pick(step.note, locale)}
                    </p>
                  )}

                  {/* Fil rouge: blog articles */}
                  {articles.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        📘 {dict.adoption.on_blog}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {articles.map((t) => (
                          <Link
                            key={t.slug}
                            href={`/${locale}/tip/${t.slug}`}
                            className="card-lift inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium hover:text-ms-blue"
                          >
                            <ProductIcon icon={t.icon} size={16} />
                            {pick(t.title, locale)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* External resources */}
                  {step.resources.length > 0 && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        🔗 {dict.adoption.resources}
                      </p>
                      <ul className="space-y-1 text-sm">
                        {step.resources.map((r, ri) => (
                          <li key={ri}>
                            <a
                              href={r.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ms-blue hover:underline"
                            >
                              {pick(r.label, locale)} ↗
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 8-week plan */}
      <section className="mt-8 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold">📅 {dict.adoption.plan_title}</h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-2 text-left">
                <th className="w-24 px-4 py-2.5 font-semibold">{dict.adoption.week}</th>
                <th className="px-4 py-2.5 font-semibold">{dict.adoption.topic}</th>
              </tr>
            </thead>
            <tbody>
              {ADOPTION_WEEKS.map((w) => (
                <tr key={w.week} className="border-t border-border">
                  <td className="px-4 py-2.5 font-bold text-copilot">{w.week}</td>
                  <td className="px-4 py-2.5">{pick(w.topic, locale)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
