"use client";

import { motion, useReducedMotion } from "framer-motion";

type SlideDirection = "left" | "right" | "up" | "down";

interface BentoCellProps {
  area: string;
  children: React.ReactNode;
  isHero?: boolean;
  slideFrom?: SlideDirection;
  delay?: number;
  className?: string;
}

const slideOffsets: Record<SlideDirection, { x: number; y: number }> = {
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
  up: { x: 0, y: -40 },
  down: { x: 0, y: 40 },
};

export default function BentoCell({
  area,
  children,
  isHero = false,
  slideFrom = "down",
  delay = 0,
  className = "",
}: BentoCellProps) {
  const reducedMotion = useReducedMotion();

  if (isHero) {
    return (
      <div
        data-area={area}
        className={`glass-card ${className}`}
        style={{ gridArea: area }}
      >
        {children}
      </div>
    );
  }

  const offset = slideOffsets[slideFrom];

  return (
    <div style={{ gridArea: area }} className="relative">
      {/* Ghost placeholder */}
      <motion.div
        className="ghost-placeholder absolute inset-0"
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      />
      {/* Actual cell content */}
      <motion.div
        className={`glass-card h-full ${className}`}
        initial={
          reducedMotion
            ? { opacity: 1 }
            : { opacity: 0, x: offset.x, y: offset.y }
        }
        whileInView={
          reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          duration: 0.5,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
