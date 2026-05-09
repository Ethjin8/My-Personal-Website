"use client";

export default function GitHubCard() {
  const weeks = 12;
  const days = 7;
  const levels = [0, 0.1, 0.25, 0.5, 0.8];

  return (
    <div className="flex flex-col justify-center h-full p-5">
      <h3
        className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider"
        style={{ color: "var(--muted-foreground)" }}
      >
        GitHub
      </h3>
      <div className="flex gap-[3px]">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: days }).map((_, d) => {
              const level = levels[Math.floor(Math.random() * levels.length)];
              return (
                <div
                  key={d}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor:
                      level === 0
                        ? "var(--muted)"
                        : `color-mix(in srgb, var(--accent) ${level * 100}%, var(--muted))`,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
