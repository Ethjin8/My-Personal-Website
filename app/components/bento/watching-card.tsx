export default function WatchingCard() {
  return (
    <div className="flex flex-col justify-between h-full p-5 min-h-[200px]">
      <h3
        className="font-heading text-sm font-semibold uppercase tracking-wider"
        style={{ color: "var(--muted-foreground)" }}
      >
        Currently Watching
      </h3>
      <div
        className="flex-1 flex items-center justify-center rounded-xl mt-3"
        style={{ backgroundColor: "var(--muted)" }}
      >
        <span
          className="text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          Add a show or movie...
        </span>
      </div>
    </div>
  );
}
