"use client";

import { useEffect, useRef } from "react";

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const photoCell = gridRef.current.querySelector('[data-area="photo"]');
    if (photoCell) {
      const rect = photoCell.getBoundingClientRect();
      const scrollTarget =
        window.scrollY +
        rect.top -
        window.innerHeight / 2 +
        rect.height / 2;
      window.scrollTo({ top: Math.max(0, scrollTarget), behavior: "instant" });
    }
  }, []);

  return (
    <div
      ref={gridRef}
      className="bento-grid w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
    >
      {children}
    </div>
  );
}
