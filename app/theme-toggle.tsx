// app/theme-toggle.tsx
"use client";

type Theme = "ucla" | "torrey-pines";

export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") as Theme;
  const next: Theme = current === "ucla" ? "torrey-pines" : "ucla";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}
