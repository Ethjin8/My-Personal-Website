export default function TechStackCard() {
  const techs = [
    "React", "Next.js", "TypeScript", "Python",
    "Tailwind", "Node.js", "Git", "C++",
    "Flutter",
  ];

  return (
    <div className="flex flex-col justify-center h-full p-5">
      <h3
        className="font-heading text-sm font-semibold mb-3 uppercase tracking-wider"
        style={{ color: "var(--muted-foreground)" }}
      >
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: "var(--tag-bg)",
              color: "var(--accent)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
