"use client";

import { useState } from "react";
import Image from "next/image";

const interests = [
  { id: "basketball", imageSrc: "/images/homepage/curry.jpg" },
  { id: "badminton", imageSrc: "/images/homepage/LCW-jump-smash-1-scaled.jpg" },
  { id: "daredevil", imageSrc: "/images/homepage/daredevil-s3-poster.jpg" },
];

export default function CurrentlyInto() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + interests.length) % interests.length;
    if (diff === 0) return "front";
    if (diff === 1) return "right";
    return "left";
  };

  const positionStyles: Record<string, React.CSSProperties> = {
    front: {
      transform: `translateX(0) scale(1)`,
      zIndex: 3,
      opacity: 1,
      filter: "none",
    },
    frontHover: {
      transform: "translateX(0) scale(1.1)",
      zIndex: 3,
      opacity: 1,
      filter: "none",
    },
    left: {
      transform: "translateX(-60px) scale(0.8) rotate(-6deg)",
      zIndex: 1,
      opacity: 0.5,
      filter: "brightness(0.7)",
    },
    right: {
      transform: "translateX(60px) scale(0.8) rotate(6deg)",
      zIndex: 1,
      opacity: 0.5,
      filter: "brightness(0.7)",
    },
  };

  return (
    <div className="neu-raised rounded-3xl px-5 pt-3 pb-2 w-full min-[1440px]:w-[300px]">
      <h3
        className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-1 text-center"
        style={{ color: "var(--ucla-blue)" }}
      >
        Currently Into…
      </h3>
      <div className="relative h-[140px] flex items-center justify-center">
        {interests.map((item, i) => {
          const pos = getPosition(i);
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="interest-card absolute w-[100px] h-[130px] rounded-xl overflow-hidden border-0 p-0 bg-transparent"
              style={{
                ...positionStyles[pos === "front" && hoveredIndex === i ? "frontHover" : pos],
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: pos === "front" ? "default" : "pointer",
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.id}
                fill
                className="object-cover rounded-xl"
                sizes="100px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
