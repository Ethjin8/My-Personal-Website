export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-24 pb-10">
      <h1
        className="font-heading text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-gold))`,
        }}
      >
        Experience
      </h1>
      <p style={{ color: "var(--muted-foreground)" }}>Coming soon...</p>
    </div>
  );
}
