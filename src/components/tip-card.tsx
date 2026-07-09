import Link from "next/link";
import type { Tip } from "@/data/tips";
import { pick, type Dictionary, type Locale } from "@/lib/i18n";
import { AudienceBadge, SectionBadge } from "./badges";

export default function TipCard({
  tip,
  locale,
  dict,
}: {
  tip: Tip;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={`/${locale}/tip/${tip.slug}`}
      className="card-lift group flex flex-col rounded-2xl border border-border bg-surface p-5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-2xl">{tip.icon}</span>
        <div className="flex items-center gap-1.5">
          {tip.isNew && (
            <span className="rounded-full bg-pub/15 px-2 py-0.5 text-[11px] font-semibold text-pub">
              {dict.common.new}
            </span>
          )}
          <SectionBadge section={tip.section} dict={dict} />
        </div>
      </div>

      <h3 className="mb-1.5 text-base font-semibold leading-snug text-foreground group-hover:text-ms-blue transition">
        {pick(tip.title, locale)}
      </h3>
      <p className="mb-4 line-clamp-2 text-sm text-muted">
        {pick(tip.summary, locale)}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-1.5">
        {tip.audience.map((a) => (
          <AudienceBadge key={a} audience={a} dict={dict} />
        ))}
        <span className="ml-auto text-xs text-muted">
          {tip.readMinutes} {dict.common.minutes_read}
        </span>
      </div>
    </Link>
  );
}
