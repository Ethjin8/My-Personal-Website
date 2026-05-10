"use client";

import {
  SiRust,
  SiKubernetes,
  SiTensorflow,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: "Rust", icon: SiRust, color: "#CE422B" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "AWS", icon: FaAws, color: "#232F3E" },
];

export default function CurrentlyLearning() {
  return (
    <div className="neu-raised rounded-2xl px-4 py-2.5 w-full h-full flex flex-col">
      <h3
        className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: "var(--ucla-blue)" }}
      >
        Currently Learning…
      </h3>
      <div className="flex-1 flex flex-wrap content-center justify-center gap-2.5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="tech-tile neu-inset rounded-2xl flex flex-col items-center justify-center py-3 px-4 gap-1.5"
          >
            <skill.icon size={26} color={skill.color} />
            <span
              className="text-[9px] font-medium tracking-wider uppercase text-center leading-tight"
              style={{ color: "var(--text-secondary)" }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
