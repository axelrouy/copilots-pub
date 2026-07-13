import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Politique de confidentialité : AI Tip's Pub",
};

const CONTACT = "axelrouy.ms@gmail.com";

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
    kicker: "Vie privée & RGPD",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 10 juillet 2026",
    intro:
      "AI Tip's Pub respecte votre vie privée. Ce site personnel collecte le strict minimum de données, sans publicité, sans revente et sans profilage. Voici, en toute transparence, ce qui est collecté, pourquoi, et comment exercer vos droits.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [
          "Le responsable du traitement des données est Axel Rouy, éditeur du site à titre personnel.",
          `Pour toute question ou demande relative à vos données : ${CONTACT}.`,
        ],
      },
      {
        heading: "Données collectées & finalités",
        body: [
          "Statistiques d'audience anonymes : à chaque page consultée, le site enregistre l'adresse de la page et la provenance (site référent). Aucune adresse IP, aucun identifiant unique, aucun cookie ne sont associés à cette mesure. Finalité : comprendre quelles astuces sont utiles. Base légale : intérêt légitime à mesurer une audience de façon anonyme.",
          "Commentaires : lorsque vous publiez un commentaire, seuls le pseudonyme que vous choisissez (facultatif : « Anonymous » par défaut) et le texte de votre message sont enregistrés. Aucune adresse e-mail n'est demandée. Finalité : afficher les commentaires après modération. Base légale : votre consentement, donné en publiant le commentaire.",
          "Le site ne comporte aucun formulaire de contact, ne collecte aucune adresse e-mail et n'utilise aucun service publicitaire.",
        ],
      },
      {
        heading: "Cookies & traceurs",
        body: [
          "Ce site n'utilise AUCUN cookie, ni traceur publicitaire, ni Google Analytics ou équivalent.",
          "La mesure d'audience est réalisée côté serveur, de façon anonyme, sans dépôt de cookie ni empreinte de navigateur. Aucun consentement cookie n'est donc requis.",
          "Seul votre choix de thème (clair/sombre) peut être conservé localement dans votre navigateur (localStorage) pour votre confort : cette information reste sur votre appareil et n'est jamais transmise.",
        ],
      },
      {
        heading: "Durée de conservation",
        body: [
          "Statistiques anonymes : conservées de façon agrégée pour le suivi de l'audience. N'étant liées à aucune personne identifiable, elles ne constituent pas des données personnelles.",
          "Commentaires : conservés tant qu'ils restent publiés sur le site. Vous pouvez en demander la suppression à tout moment.",
        ],
      },
      {
        heading: "Hébergement & sous-traitants",
        body: [
          "Le site est hébergé par Vercel Inc. (États-Unis), vercel.com.",
          "Les commentaires sont stockés via Supabase (base de données PostgreSQL managée, hébergement dans l'Union européenne, région eu-west-1).",
          "Ces prestataires agissent en qualité de sous-traitants techniques et n'exploitent pas vos données pour leur propre compte.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité concernant vos données.",
          `Pour exercer ces droits, écrivez à ${CONTACT}. Votre demande sera traitée dans les meilleurs délais.`,
          "Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés), cnil.fr.",
        ],
      },
    ],
    back: "Retour à l'accueil",
  },
  en: {
    kicker: "Privacy & GDPR",
    title: "Privacy Policy",
    updated: "Last updated: 10 July 2026",
    intro:
      "AI Tip's Pub respects your privacy. This personal website collects the bare minimum of data, with no advertising, no resale and no profiling. Here is, transparently, what is collected, why, and how to exercise your rights.",
    sections: [
      {
        heading: "Data controller",
        body: [
          "The data controller is Axel Rouy, who publishes this website in a personal capacity.",
          `For any question or request regarding your data: ${CONTACT}.`,
        ],
      },
      {
        heading: "Data collected & purposes",
        body: [
          "Anonymous audience metrics: for each page viewed, the site records the page address and the referrer. No IP address, no unique identifier and no cookie are associated with this measurement. Purpose: understand which tips are useful. Legal basis: legitimate interest in measuring anonymous audience.",
          "Comments: when you post a comment, only the nickname you choose (optional : defaults to “Anonymous”) and your message text are stored. No email address is requested. Purpose: display comments after moderation. Legal basis: your consent, given by posting the comment.",
          "The site has no contact form, collects no email address and uses no advertising service.",
        ],
      },
      {
        heading: "Cookies & trackers",
        body: [
          "This site uses NO cookies, no advertising trackers, and no Google Analytics or equivalent.",
          "Audience measurement is performed server-side, anonymously, without setting any cookie or browser fingerprint. No cookie consent is therefore required.",
          "Only your theme choice (light/dark) may be stored locally in your browser (localStorage) for your convenience: this stays on your device and is never transmitted.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "Anonymous metrics: kept in aggregate form to track audience. As they are not linked to any identifiable person, they do not constitute personal data.",
          "Comments: kept as long as they remain published on the site. You may request their deletion at any time.",
        ],
      },
      {
        heading: "Hosting & processors",
        body: [
          "The site is hosted by Vercel Inc. (United States), vercel.com.",
          "Comments are stored via Supabase (managed PostgreSQL database, hosted in the European Union, eu-west-1 region).",
          "These providers act as technical sub-processors and do not use your data for their own purposes.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under the GDPR, you have the right to access, rectify, erase, restrict, object to and port your data.",
          `To exercise these rights, email ${CONTACT}. Your request will be handled as promptly as possible.`,
          "You may also lodge a complaint with the CNIL (the French data protection authority), cnil.fr.",
        ],
      },
    ],
    back: "Back to home",
  },
};

export default async function PrivacyPage({
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
