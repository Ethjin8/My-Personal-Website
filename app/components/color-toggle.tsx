"use client";

import { useState, useEffect } from "react";

export default function ColorToggle() {
  const [theme, setTheme] = useState<"ucla" | "tphs">("ucla");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "ucla" | "tphs" | null;
    if (saved === "tphs") {
      document.documentElement.setAttribute("data-theme", "tphs");
      setTheme("tphs");
    }
  }, []);

  function toggle() {
    const next = theme === "ucla" ? "tphs" : "ucla";
    setTheme(next);
    localStorage.setItem("theme", next);
    if (next === "tphs") {
      document.documentElement.setAttribute("data-theme", "tphs");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  const isTPHS = theme === "tphs";

  return (
    <button
      onClick={toggle}
      className="neu-raised rounded-2xl w-full h-full flex items-center justify-center cursor-pointer transition-shadow duration-300 hover:shadow-none active:shadow-none"
    >
      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-current/10">
        <div
          className="absolute inset-0 transition-transform duration-500"
          style={{
            background: isTPHS
              ? "linear-gradient(135deg, #2774AE 50%, #FFD100 50%)"
              : "linear-gradient(135deg, #C41230 50%, #FFD700 50%)",
            transform: isTPHS ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
    </button>
  );
}
