import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <img src="/logo.png" alt="" className="h-6 w-6 rounded-full" /> AI Tip&apos;s Pub
          </div>
          <p className="mt-1 text-xs text-muted">{dict.footer.rights}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
          <Link href={`/${locale}/m365`} className="hover:text-foreground">
            {dict.nav.m365}
          </Link>
          <Link href={`/${locale}/chat`} className="hover:text-foreground">
            {dict.nav.chat}
          </Link>
          <Link href={`/${locale}/prompts`} className="hover:text-foreground">
            {dict.nav.prompts}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-foreground">
            {dict.nav.about}
          </Link>
          <Link href={`/${locale}/legal`} className="hover:text-foreground">
            {dict.nav.legal}
          </Link>
          <Link href="/admin" className="hover:text-foreground">
            {dict.nav.admin}
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-3 text-center text-xs text-muted">
        {dict.footer.built} · {dict.footer.phase}
      </div>
    </footer>
  );
}
