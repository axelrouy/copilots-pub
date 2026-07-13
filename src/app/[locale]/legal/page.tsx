import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mentions légales : AI Tip's Pub",
};

type Section = { heading: string; body: string[] };
type Content = {
  kicker: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
  back: string;
};

const content: Record<Locale, Content> = {
  fr: {
    kicker: "Informations légales",
    title: "Mentions légales",
    updated: "Dernière mise à jour : 9 juillet 2026",
    intro:
      "AI Tip's Pub est un site personnel, indépendant et non commercial, dédié au partage d'astuces et de bonnes pratiques autour de Microsoft Copilot et de l'IA.",
    sections: [
      {
        heading: "Éditeur du site",
        body: [
          "Ce site est édité à titre personnel par Axel Rouy.",
          "Il s'agit d'un projet indépendant, mené sur son temps personnel, sans but lucratif.",
          "Contact : axelrouy.ms@gmail.com",
        ],
      },
      {
        heading: "Indépendance vis-à-vis de Microsoft",
        body: [
          "AI Tip's Pub N'EST PAS un site officiel de Microsoft. Ce site n'est pas affilié à Microsoft Corporation, n'est ni sponsorisé, ni approuvé, ni endossé par Microsoft, et n'engage en aucune façon Microsoft ou son employeur.",
          "Les opinions, contenus et astuces publiés ici sont ceux de l'auteur à titre strictement personnel et ne représentent pas la position officielle de Microsoft.",
          "Pour toute information officielle sur Microsoft Copilot, référez-vous aux sources officielles de Microsoft (microsoft.com).",
        ],
      },
      {
        heading: "Marques et propriété intellectuelle",
        body: [
          "« Microsoft », « Microsoft 365 », « Copilot », « Teams », « Outlook », « Excel », « PowerPoint » ainsi que les logos et icônes associés sont des marques déposées et/ou la propriété de Microsoft Corporation.",
          "Ces marques et logos sont mentionnés et, le cas échéant, reproduits à des fins purement descriptives et référentielles (nominative fair use), sans aucune modification, altération ou détournement.",
          "Aucun droit sur ces marques n'est revendiqué par l'auteur du site. Leur utilisation ne saurait suggérer un quelconque partenariat ou une approbation de la part de Microsoft.",
          "Les autres marques citées appartiennent à leurs propriétaires respectifs.",
        ],
      },
      {
        heading: "Contenu et responsabilité",
        body: [
          "Les astuces, prompts et scénarios sont fournis « en l'état », à titre informatif et sans garantie d'exactitude, d'exhaustivité ou d'adéquation à un usage particulier.",
          "Les fonctionnalités de Microsoft Copilot évoluent rapidement : certaines informations peuvent devenir obsolètes. Vérifiez toujours auprès des sources officielles avant tout usage professionnel.",
          "L'auteur ne saurait être tenu responsable d'un quelconque dommage résultant de l'utilisation des informations publiées sur ce site.",
        ],
      },
      {
        heading: "Hébergement",
        body: [
          "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis, vercel.com.",
        ],
      },
      {
        heading: "Données personnelles & cookies",
        body: [
          "Le site mesure une audience anonyme (pages vues), sans cookie ni traceur, et permet le dépôt de commentaires modérés. Aucune donnée n'est revendue ni utilisée à des fins publicitaires.",
          "Les commentaires que vous soumettez (pseudonyme et message) sont stockés afin d'être affichés après modération. Aucune adresse e-mail n'est demandée.",
          "Pour le détail des traitements, vos droits (accès, rectification, effacement…) et le contact RGPD, consultez la Politique de confidentialité du site.",
        ],
      },
    ],
    back: "Retour à l'accueil",
  },
  en: {
    kicker: "Legal information",
    title: "Legal notice",
    updated: "Last updated: 9 July 2026",
    intro:
      "AI Tip's Pub is a personal, independent and non-commercial website dedicated to sharing tips and best practices around Microsoft Copilot and AI.",
    sections: [
      {
        heading: "Site publisher",
        body: [
          "This website is published in a personal capacity by Axel Rouy.",
          "It is an independent, non-profit project run on personal time.",
          "Contact: axelrouy.ms@gmail.com",
        ],
      },
      {
        heading: "Independence from Microsoft",
        body: [
          "AI Tip's Pub is NOT an official Microsoft website. It is not affiliated with Microsoft Corporation, is neither sponsored, approved nor endorsed by Microsoft, and does not in any way bind Microsoft or the author's employer.",
          "The opinions, content and tips published here are those of the author in a strictly personal capacity and do not represent Microsoft's official position.",
          "For official information about Microsoft Copilot, please refer to Microsoft's official sources (microsoft.com).",
        ],
      },
      {
        heading: "Trademarks and intellectual property",
        body: [
          "\u201cMicrosoft\u201d, \u201cMicrosoft 365\u201d, \u201cCopilot\u201d, \u201cTeams\u201d, \u201cOutlook\u201d, \u201cExcel\u201d, \u201cPowerPoint\u201d and the associated logos and icons are registered trademarks and/or the property of Microsoft Corporation.",
          "These trademarks and logos are referenced and, where applicable, reproduced for purely descriptive and referential purposes (nominative fair use), without any modification, alteration or misuse.",
          "The author claims no rights over these trademarks. Their use must not be taken to suggest any partnership with or endorsement by Microsoft.",
          "Other trademarks mentioned belong to their respective owners.",
        ],
      },
      {
        heading: "Content and liability",
        body: [
          "Tips, prompts and scenarios are provided \u201cas is\u201d, for informational purposes and without any warranty of accuracy, completeness or fitness for a particular purpose.",
          "Microsoft Copilot features evolve rapidly: some information may become outdated. Always check official sources before any professional use.",
          "The author cannot be held liable for any damage resulting from the use of the information published on this site.",
        ],
      },
      {
        heading: "Hosting",
        body: [
          "The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, vercel.com.",
        ],
      },
      {
        heading: "Personal data & cookies",
        body: [
          "The site measures anonymous audience metrics (page views), with no cookie or tracker, and allows moderated comments. No data is resold or used for advertising purposes.",
          "The comments you submit (nickname and message) are stored so they can be displayed after moderation. No email address is requested.",
          "For details of the processing, your rights (access, rectification, erasure…) and the GDPR contact, see the site's Privacy Policy.",
        ],
      },
    ],
    back: "Back to home",
  },
};

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const c = content[locale];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <section className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full brand-gradient opacity-20 blur-3xl" />
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-copilot">
          {c.kicker}
        </p>
        <h1 className="text-4xl font-extrabold sm:text-5xl">{c.title}</h1>
        <p className="mt-2 text-sm text-muted">{c.updated}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-foreground/90">
          {c.intro}
        </p>
      </section>

      <div className="mt-6 space-y-6">
        {c.sections.map((s) => (
          <section
            key={s.heading}
            className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
          >
            <h2 className="mb-4 text-lg font-bold">{s.heading}</h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-foreground/90">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-8 rounded-2xl border border-border bg-surface-2 p-4 text-center text-sm font-medium text-muted">
        {dict.footer.rights}
      </p>

      <div className="mt-6 text-center">
        <Link
          href={`/${locale}`}
          className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold hover:bg-surface-2"
        >
          ← {c.back}
        </Link>
      </div>
    </div>
  );
}
