import Image from "next/image";

interface SportsCardProps {
  sport: "basketball" | "badminton";
}

const sportConfig = {
  basketball: {
    label: "Basketball",
    placeholder: "/images/placeholder-logo.png",
  },
  badminton: {
    label: "Badminton",
    placeholder: "/images/placeholder-logo.png",
  },
};

export default function SportsCard({ sport }: SportsCardProps) {
  const config = sportConfig[sport];

  return (
    <div className="relative h-full min-h-[160px] overflow-hidden rounded-[24px]">
      <Image
        src={config.placeholder}
        alt={config.label}
        fill
        className="object-cover opacity-60"
      />
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
