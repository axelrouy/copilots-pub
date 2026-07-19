import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

/** Anciens slugs d'articles renommés → nouveau slug (redirection 301 permanente, préserve le SEO et les liens partagés). */
const SLUG_REDIRECTS: Record<string, string> = {
  "creer-un-notebook": "creer-notebook-copilot-veille",
};

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Redirection 301 des anciens slugs d'articles (avec ou sans préfixe de locale).
  const slugMatch = pathname.match(/^(?:\/(fr|en))?\/tip\/([^/]+)\/?$/);
  if (slugMatch) {
    const [, loc, slug] = slugMatch;
    const target = SLUG_REDIRECTS[slug];
    if (target) {
      const url = req.nextUrl.clone();
      url.pathname = `/${loc ?? defaultLocale}/tip/${target}`;
      return NextResponse.redirect(url, 301);
    }
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};

