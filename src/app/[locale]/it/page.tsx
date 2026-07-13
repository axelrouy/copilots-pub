import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import { tipsByAudience, governanceTips } from "@/data/tips";
import FilterableTips from "@/components/filterable-tips";

export default async function ITPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const list = tipsByAudience("it", { excludeGovernance: true });
  const govCount = governanceTips().length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <span className="text-3xl">🔵</span>
        <h1 className="mt-2 text-3xl font-extrabold">{dict.itHub.title}</h1>
        <p className="mt-2 max-w-2xl text-muted">{dict.itHub.desc}</p>
        <p className="mt-3 text-sm font-medium text-ms-blue">
          {list.length} {dict.sections.count_tips}
        </p>
      </div>

      <Link
        href={`/${locale}/gouvernance`}
        className="card-lift mb-6 flex items-center gap-4 rounded-2xl border border-border bg-surface p-5"
      >
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-2 text-2xl">
          🛡️
        </span>
        <div className="flex-1">
          <h2 className="font-bold">{dict.governanceHub.title}</h2>
          <p className="text-sm text-muted">{dict.governanceHub.desc}</p>
        </div>
        <span className="hidden shrink-0 rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted sm:block">
          {govCount} {dict.sections.count_tips} →
        </span>
      </Link>

      <FilterableTips
        tips={list}
        locale={locale}
        dict={dict}
        showSectionFilter={true}
      />
    </div>
  );
}
