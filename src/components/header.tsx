"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import ThemeToggle from "./theme-toggle";
import LanguageSwitcher from "./language-switcher";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home, exact: true },
    { href: `/${locale}/m365`, label: dict.nav.m365 },
    { href: `/${locale}/chat`, label: dict.nav.chat },
    { href: `/${locale}/prompts`, label: dict.nav.prompts },
    { href: `/${locale}/explorer`, label: dict.nav.explorer },
    { href: `/${locale}/about`, label: dict.nav.about },
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-4 px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="AI Tip's Pub"
            className="h-16 w-16 rounded-full ring-1 ring-border shadow-sm"
          />
          <span className="text-lg font-bold tracking-tight">
            AI Tip&apos;s <span className="brand-gradient-text">Pub</span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive(l.href, l.exact)
                  ? "bg-surface-2 text-ms-blue"
                  : "text-muted hover:bg-surface-2 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                isActive(l.href, l.exact)
                  ? "bg-surface-2 text-ms-blue"
                  : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
