interface SportsCardProps {
  sport: "basketball" | "badminton";
}

const sportConfig = {
  basketball: {
    label: "Basketball",
    emoji: "🏀",
  },
  badminton: {
    label: "Badminton",
    emoji: "🏸",
  },
};

export default function SportsCard({ sport }: SportsCardProps) {
  const config = sportConfig[sport];

  return (
    <div className="relative h-full min-h-[160px] overflow-hidden rounded-[24px]">
      <div
        className="absolute inset-0 flex items-center justify-center text-6xl opacity-30"
        style={{ backgroundColor: "var(--muted)" }}
      >
        {config.emoji}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, var(--card) 0%, transparent 60%)`,
        }}
      />
      <div className="absolute bottom-4 left-5">
        <span
          className="font-heading text-lg font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          {config.label}
        </span>
      </div>
    </div>
  );
}
