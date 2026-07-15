type IconName = "trending" | "new" | "browse";

const TINT: Record<IconName, string> = {
  trending: "text-pub bg-pub/10",
  new: "text-copilot bg-copilot/10",
  browse: "text-ms-blue bg-ms-blue/10",
};

function Glyph({ name }: { name: IconName }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "trending") {
    // Trending-up arrow (line chart)
    return (
      <svg {...common} aria-hidden="true">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </svg>
    );
  }

  if (name === "new") {
    // Sparkles
    return (
      <svg {...common} aria-hidden="true">
        <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
        <path d="M19 14l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7L19 14z" />
      </svg>
    );
  }

  // browse — apps grid
  return (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export default function SectionIcon({ name }: { name: IconName }) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${TINT[name]}`}
    >
      <Glyph name={name} />
    </span>
  );
}
