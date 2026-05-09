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
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  up: { x: 0, y: -50 },
  down: { x: 0, y: 50 },
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
      <motion.div
        data-area={area}
        className={`glass-card ${className}`}
        style={{ gridArea: area }}
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 18,
          delay,
        }}
      >
        {children}
      </motion.div>
    );
  }

  const offset = slideOffsets[slideFrom];

  return (
    <motion.div
      style={{ gridArea: area }}
      className={`glass-card h-full ${className}`}
      initial={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
