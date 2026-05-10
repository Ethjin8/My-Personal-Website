"use client";

import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionData {
  total: { lastYear: number };
  contributions: ContributionDay[];
}

const LEVEL_COLORS = [
  "var(--shadow-dark)",
  "#8BB8E8",
  "#2774AE",
  "#005587",
  "#003B5C",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function buildWeeks(contributions: ContributionDay[]) {
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  for (const day of contributions) {
    const dow = new Date(day.date + "T00:00:00").getDay();
    if (dow === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  }
  if (currentWeek.length > 0) weeks.push(currentWeek);
  return weeks;
}

function getMonthLabels(weeks: ContributionDay[][]) {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  for (let i = 0; i < weeks.length; i++) {
    const firstDay = weeks[i][0];
    const month = new Date(firstDay.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], col: i });
      lastMonth = month;
    }
  }
  return labels;
}

export default function GitHubGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/Ethjin8?y=last")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => {});
  }, []);

  if (!data) {
    return (
      <div className="neu-raised rounded-2xl px-4 py-2.5 w-full h-full flex items-center justify-center">
        <div
          className="text-[9px] tracking-wider uppercase"
          style={{ color: "var(--text-secondary)" }}
        >
          Loading contributions...
        </div>
      </div>
    );
  }

  const weeks = buildWeeks(data.contributions);
  const monthLabels = getMonthLabels(weeks);
  const cellSize = 9;
  const cellGap = 2;
  const step = cellSize + cellGap;
  const labelOffsetX = 24;
  const labelOffsetY = 12;
  const svgWidth = weeks.length * step + labelOffsetX;
  const svgHeight = 7 * step + labelOffsetY;

  return (
    <div className="neu-raised rounded-2xl px-4 py-2.5 w-full h-full flex flex-col">
      <div className="flex items-baseline justify-between mb-1">
        <h3
          className="text-xs font-display font-bold tracking-[0.2em] uppercase"
          style={{ color: "var(--ucla-blue)" }}
        >
          GitHub
        </h3>
        <span
          className="text-[10px] font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {data.total.lastYear} Contributions (Public)
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-hidden">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="h-full w-auto block max-[1439px]:h-auto max-[1439px]:w-full"
        >
          {monthLabels.map((m) => (
            <text
              key={m.label + m.col}
              x={m.col * step + labelOffsetX}
              y={9}
              fill="var(--text-secondary)"
              fontSize={8}
              fontFamily="inherit"
            >
              {m.label}
            </text>
          ))}

          {["Mon", "Wed", "Fri"].map((day, i) => (
            <text
              key={day}
              x={0}
              y={labelOffsetY + (i * 2 + 1) * step + cellSize * 0.7}
              fill="var(--text-secondary)"
              fontSize={7}
              fontFamily="inherit"
            >
              {day}
            </text>
          ))}

          {weeks.map((week, wi) =>
            week.map((day) => {
              const dow = new Date(day.date + "T00:00:00").getDay();
              return (
                <rect
                  key={day.date}
                  x={wi * step + labelOffsetX}
                  y={dow * step + labelOffsetY}
                  width={cellSize}
                  height={cellSize}
                  rx={2}
                  fill={LEVEL_COLORS[day.level]}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  style={{ cursor: "pointer" }}
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="flex items-center justify-between mt-1 h-[18px]">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[9px] transition-opacity duration-150 ${
            hoveredDay ? "glass-tooltip opacity-100" : "opacity-0"
          }`}
          style={{ color: "var(--text-primary)" }}
        >
          {hoveredDay
            ? `${hoveredDay.count} contribution${hoveredDay.count !== 1 ? "s" : ""} on ${new Date(
                hoveredDay.date + "T00:00:00"
              ).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
            : " "}
        </span>
        <div className="flex items-center gap-0.5">
          <span
            className="text-[8px] mr-0.5"
            style={{ color: "var(--text-secondary)" }}
          >
            Less
          </span>
          {LEVEL_COLORS.map((color, i) => (
            <div
              key={i}
              className="rounded-sm"
              style={{ width: 8, height: 8, backgroundColor: color }}
            />
          ))}
          <span
            className="text-[8px] ml-0.5"
            style={{ color: "var(--text-secondary)" }}
          >
            More
          </span>
        </div>
      </div>
    </div>
  );
}
