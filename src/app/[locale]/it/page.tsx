import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { tipsByAudience, governanceTips } from "@/data/tips";
import FilterableTips from "@/components/filterable-tips";
import TipCard from "@/components/tip-card";

export default async function ITPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const list = tipsByAudience("it", { excludeGovernance: true });
  const gov = governanceTips();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <span className="text-3xl">🔵</span>
        <h1 className="mt-2 text-3xl font-extrabold">{dict.itHub.title}</h1>
        <p className="mt-2 max-w-2xl text-muted">{dict.itHub.desc}</p>
      </div>

      {/* IT Pro */}
      <section id="it-pro">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          🔵 {dict.itHub.itProLabel}
          <span className="text-sm font-medium text-muted">
            {list.length} {dict.sections.count_tips}
          </span>
        </h2>
        <FilterableTips
          tips={list}
          locale={locale}
          dict={dict}
          showSectionFilter={true}
        />
      </section>

      {/* Governance, kept as a distinct block */}
      <section id="gouvernance" className="mt-12">
        <div className="mb-4 rounded-2xl border border-border bg-surface-2 p-5">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            🛡️ {dict.governanceHub.title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            {dict.governanceHub.desc}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gov.map((t) => (
            <TipCard key={t.slug} tip={t} locale={locale} dict={dict} />
          ))}
        </div>
      </section>
    </div>
  );
}
