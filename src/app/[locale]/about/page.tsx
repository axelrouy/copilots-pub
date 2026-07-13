import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type Content = {
  kicker: string;
  name: string;
  role: string;
  intro: string[];
  hatsTitle: string;
  hats: string[];
  valuesTitle: string;
  values: string;
  manifestoTitle: string;
  manifesto: string[];
  signature: string;
  ctaExplore: string;
  ctaBrowse: string;
};

const content: Record<Locale, Content> = {
  fr: {
    kicker: "À propos",
    name: "Axel Rouy",
    role: "Cloud Solution Architect, M365 Copilot · Microsoft France",
    intro: [
      "Moi c'est Axel. J'aide les organisations à adopter Copilot et l'IA pour transformer la façon dont les gens travaillent. C'est un métier, mais c'est surtout une conviction.",
      "Au quotidien, j'accompagne des entreprises de toutes tailles, de la construction à l'hôtellerie en passant par les grands groupes français, sur toute la chaîne : comprendre les usages, inspirer, démontrer avec des cas concrets, déployer de façon sécurisée et pilotée, mesurer l'adoption, puis passer à l'échelle. De l'idée à l'impact, avec toujours l'humain au centre.",
      "Ce qui me fait vibrer ? La tech, bien sûr. Mais surtout les gens. Je suis convaincu qu'une techno ne vaut que par ce qu'elle change concrètement dans le quotidien de quelqu'un. Alors je passe mon temps à traduire Copilot en gestes simples : gagner 30 minutes, préparer une réunion en deux clics, rédiger plus vite, monter un agent métier qui tient la route.",
    ],
    hatsTitle: "Mes casquettes",
    hats: [
      "Cloud Solution Architect",
      "Copilot Advisor",
      "Copilot Studio Specialist",
      "Adoption Lead",
      "Speaker & Evangelist",
      "Trusted Advisor",
      "Community Builder",
    ],
    valuesTitle: "Ce qui me guide",
    values:
      "Hors du bureau, c'est l'océan qui me recentre : le surf, l'équilibre, prendre du recul pour mieux avancer. Curiosité, bienveillance, apprentissage continu et partage de connaissances : c'est ma boussole. Sécuriser, connecter, automatiser, innover. Et toujours : more adoption, more impact, more human.",
    manifestoTitle: "Pourquoi AI Tip's Pub ?",
    manifesto: [
      "Parce que les meilleures astuces, on se les échange rarement dans une doc de 80 pages. On se les file au comptoir, entre deux, quand quelqu'un lâche : « attends, montre-moi comment t'as fait ça ».",
      "AI Tip's Pub, c'est exactement ça. Un endroit sans chichi où je pose les usages Copilot qui marchent vraiment. Pas la théorie, pas le blabla marketing : ce que tu peux faire aujourd'hui, tout de suite, avec le Copilot que tu as déjà sous la main.",
      "D'un côté du bar : Copilot M365 (Premium), intégré dans Outlook, Teams, Word, Excel, Notebooks, les Agents. De l'autre : Copilot Chat, pour la productivité perso et la recherche. Et à chaque astuce, je te dis clairement si c'est un truc pour l'IT ou pour l'utilisateur final. Zéro jargon inutile.",
      "Mon pari est simple : si tu repars d'ici avec une astuce que tu utilises dès demain, il est gagné. Allez, sers-toi, la première tournée est offerte. 🍻",
    ],
    signature: "— Axel",
    ctaExplore: "Explorer Copilot",
    ctaBrowse: "Parcourir les astuces",
  },
  en: {
    kicker: "About",
    name: "Axel Rouy",
    role: "Cloud Solution Architect, M365 Copilot · Microsoft France",
    intro: [
      "I'm Axel. I help organizations adopt Copilot and AI to transform the way people work. It's a job, but mostly it's a conviction.",
      "Day to day, I work with companies of every size, from construction to hospitality to large French groups, across the whole journey: understand the use cases, inspire, prove it with real scenarios, deploy securely and with proper governance, measure adoption, then scale. From idea to impact, always with people at the center.",
      "What gets me going? Tech, sure. But mostly people. I'm convinced a technology is only worth what it actually changes in someone's day. So I spend my time turning Copilot into simple moves: save 30 minutes, prep a meeting in two clicks, write faster, ship a business agent that actually holds up.",
    ],
    hatsTitle: "My hats",
    hats: [
      "Cloud Solution Architect",
      "Copilot Advisor",
      "Copilot Studio Specialist",
      "Adoption Lead",
      "Speaker & Evangelist",
      "Trusted Advisor",
      "Community Builder",
    ],
    valuesTitle: "What guides me",
    values:
      "Off the clock, the ocean is what recenters me : surfing, balance, stepping back to move forward better. Curiosity, kindness, continuous learning and knowledge sharing: that's my compass. Secure, connect, automate, innovate. And always: more adoption, more impact, more human.",
    manifestoTitle: "Why AI Tip's Pub?",
    manifesto: [
      "Because the best tips rarely get shared in an 80-page doc. They get passed along at the counter, in between things, when someone says: “wait, show me how you did that.”",
      "AI Tip's Pub is exactly that. A no-nonsense place where I drop the Copilot use cases that actually work. No theory, no marketing fluff : what you can do today, right now, with the Copilot you already have.",
      "On one side of the bar: Copilot M365 (Premium), built into Outlook, Teams, Word, Excel, Notebooks, Agents. On the other: Copilot Chat, for personal productivity and search. And for every tip, I tell you clearly whether it's an IT thing or an end-user thing. Zero useless jargon.",
      "My bet is simple: if you leave with one tip you use tomorrow, it's a win. Come on in, help yourself, the first round's on me. 🍻",
    ],
    signature: "— Axel",
    ctaExplore: "Explore Copilot",
    ctaBrowse: "Browse the tips",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const c = content[locale];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full brand-gradient opacity-20 blur-3xl" />
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-copilot">
          {c.kicker}
        </p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">{c.name}</h1>
        <p className="mt-2 text-lg font-medium text-ms-blue">{c.role}</p>

        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/90">
          {c.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-3xl border border-border bg-surface">
        <Image
          src="/axel-infographic.png"
          alt="Axel Rouy, Cloud Solution Architect M365 Copilot"
          width={1536}
          height={1024}
          className="h-auto w-full"
          priority
        />
      </section>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <section className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold">🎩 {c.hatsTitle}</h2>
          <ul className="flex flex-wrap gap-2">
            {c.hats.map((h) => (
              <li
                key={h}
                className="rounded-full bg-surface-2 px-3 py-1.5 text-sm font-medium"
              >
                {h}
              </li>
            ))}
          </ul>
        </section>
        <section className="rounded-3xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-lg font-bold">🧭 {c.valuesTitle}</h2>
          <p className="text-[15px] leading-relaxed text-foreground/90">
            {c.values}
          </p>
        </section>
      </div>

      <section className="mt-6 rounded-3xl border border-border bg-surface p-6 sm:p-10">
        <h2 className="mb-5 flex items-center gap-2 text-2xl font-extrabold">
          🍻 {c.manifestoTitle}
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
          {c.manifesto.map((p, i) => (
            <p key={i} className={i === 0 ? "text-lg font-medium" : ""}>
              {p}
            </p>
          ))}
        </div>
        <p className="mt-6 text-lg font-bold brand-gradient-text">
          {c.signature}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/explorer`}
            className="rounded-xl brand-gradient px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            🧭 {c.ctaExplore}
          </Link>
          <Link
            href={`/${locale}/prompts`}
            className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold hover:bg-surface-2"
          >
            {c.ctaBrowse}
          </Link>
        </div>
      </section>

      <p className="mt-6 text-center text-xs text-muted">{dict.footer.rights}</p>
    </div>
  );
}
