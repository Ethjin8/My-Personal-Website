"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  shortBullets: string[];
  techStack: string[];
  screenshot: string;
  githubUrl: string;
}

export default function ProjectCard({
  data,
  index,
  onSelect,
}: {
  data: ProjectData;
  index: number;
  onSelect: (data: ProjectData) => void;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
      className="cursor-pointer perspective-[1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => onSelect(data)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <div
          className="glass-card absolute inset-0 overflow-hidden hover:!transform-none"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="relative w-full h-full min-h-[280px] md:min-h-[320px]"
            style={{ backgroundColor: "var(--muted)" }}
          >
            <Image
              src={data.screenshot}
              alt={`${data.title} screenshot`}
              fill
              className="object-contain p-4"
              quality={95}
            />
            <div
              className="absolute inset-x-0 bottom-0 p-5"
              style={{
                background: `linear-gradient(to top, var(--card) 20%, transparent 100%)`,
              }}
            >
              <h3
                className="font-heading text-xl font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {data.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back face */}
        <div
          className="glass-card absolute inset-0 p-6 flex flex-col justify-center hover:!transform-none"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <h3
            className="font-heading text-xl font-semibold mb-3"
            style={{ color: "var(--foreground)" }}
          >
            {data.title}
          </h3>
          <ul className="space-y-2 mb-4">
            {data.shortBullets.map((bullet, i) => (
              <li
                key={i}
                className="text-sm flex items-start"
                style={{ color: "var(--foreground)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {data.techStack.map((tech) => (
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
          <p
            className="text-xs font-medium"
            style={{ color: "var(--muted-foreground)" }}
          >
            Click for details →
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
