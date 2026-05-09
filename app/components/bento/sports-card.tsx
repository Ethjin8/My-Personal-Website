interface SportsCardProps {
  sport: "basketball" | "badminton";
}

const sportConfig = {
  basketball: {
    label: "Basketball",
  },
  badminton: {
    label: "Badminton",
  },
};

export default function SportsCard({ sport }: SportsCardProps) {
  const config = sportConfig[sport];

  return (
    <div className="relative h-full min-h-[120px] overflow-hidden rounded-[24px]">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--muted)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, transparent 40%, var(--card) 100%)`,
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
