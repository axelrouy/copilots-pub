import type { Audience, Section } from "@/data/tips";
import type { Dictionary } from "@/lib/i18n";

export function AudienceBadge({
  audience,
  dict,
}: {
  audience: Audience;
  dict: Dictionary;
}) {
  const isIt = audience === "it";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
        isIt
          ? "bg-it-pro/15 text-it-pro"
          : "bg-end-user/15 text-end-user"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isIt ? "bg-it-pro" : "bg-end-user"}`}
      />
      {isIt ? dict.badges.it : dict.badges.user}
    </span>
  );
}

export function SectionBadge({
  section,
  dict,
}: {
  section: Section;
  dict: Dictionary;
}) {
  const premium = section === "m365";
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
        premium
          ? "bg-copilot/15 text-copilot"
          : "bg-ms-blue/15 text-ms-blue"
      }`}
    >
      <img src="/copilot.png" alt="" className="h-3.5 w-3.5 object-contain" />
      {premium ? dict.badges.premium : dict.badges.chat}
    </span>
  );
}
