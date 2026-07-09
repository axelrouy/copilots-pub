"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    const segments = pathname.split("/");
    segments[1] = next; // replace locale segment
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div className="inline-flex overflow-hidden rounded-lg border border-border text-sm">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={`px-2.5 py-1.5 font-medium uppercase transition ${
            l === locale
              ? "bg-ms-blue text-white"
              : "bg-surface text-muted hover:bg-surface-2"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
