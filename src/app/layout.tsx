import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-tips-pub.vercel.app"),
  title: {
    default: "AI Tip's Pub : Le comptoir des astuces Microsoft Copilot",
    template: "%s : AI Tip's Pub",
  },
  description:
    "Le référentiel pratique des fonctionnalités, prompts et scénarios Microsoft Copilot pour IT Pros et End Users.",
  applicationName: "AI Tip's Pub",
  authors: [{ name: "Axel Rouy" }],
  keywords: [
    "Microsoft Copilot",
    "Copilot M365",
    "Copilot Chat",
    "astuces",
    "prompts",
    "adoption",
  ],
  openGraph: {
    type: "website",
    siteName: "AI Tip's Pub",
    title: "AI Tip's Pub : Le comptoir des astuces Microsoft Copilot",
    description:
      "Le référentiel pratique des fonctionnalités, prompts et scénarios Microsoft Copilot pour IT Pros et End Users.",
    url: "https://ai-tips-pub.vercel.app",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tip's Pub : Le comptoir des astuces Microsoft Copilot",
    description:
      "Le référentiel pratique des fonctionnalités, prompts et scénarios Microsoft Copilot.",
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (d) document.documentElement.classList.add('dark');
  } catch(e){}
  document.documentElement.classList.add('theme-ready');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
