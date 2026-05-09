export default function BuildingCard() {
  return (
    <div className="flex flex-col justify-center h-full p-6 md:p-8">
      <h3
        className="font-heading text-sm font-semibold mb-2 uppercase tracking-wider"
        style={{ color: "var(--muted-foreground)" }}
      >
        Currently Building
      </h3>
      <p
        className="text-base md:text-lg font-medium"
        style={{ color: "var(--foreground)" }}
      >
        This personal website!
      </p>
      <p
        className="text-sm mt-1"
        style={{ color: "var(--muted-foreground)" }}
      >
        Next.js, Tailwind, Framer Motion
      </p>
    </div>
  );
}
