import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/i18n";
import ExplorerClient from "@/components/explorer-client";

export default async function ExplorerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 rounded-3xl border border-border bg-surface p-6 sm:p-8">
        <div className="mb-2 text-3xl">🧭</div>
        <h1 className="text-3xl font-extrabold">{dict.explorer.title}</h1>
        <p className="mt-2 max-w-2xl text-muted">{dict.explorer.subtitle}</p>
      </div>
      <ExplorerClient locale={locale} dict={dict} />
    </div>
  );
}
