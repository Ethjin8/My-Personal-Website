"use client";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPandas,
  SiPostman,
  SiFirebase,
  SiPytorch,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

const techStack: TechItem[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#ED8B00" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#1C1C1E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
];

export default function TechStack() {
  return (
    <div className="neu-raised rounded-3xl p-4 w-full min-[1440px]:w-[180px] min-[1440px]:h-full min-[1440px]:flex min-[1440px]:flex-col">
      <h3
        className="text-xs font-display font-bold tracking-[0.2em] uppercase mb-3 text-center shrink-0"
        style={{ color: "var(--ucla-blue)" }}
      >
        Tech Stack
      </h3>
      <div className="grid grid-cols-4 min-[640px]:grid-cols-8 min-[1440px]:grid-cols-2 gap-2 min-[1440px]:flex-1 min-[1440px]:grid-rows-8">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="tech-tile neu-inset rounded-2xl flex flex-col items-center justify-center py-3 px-1 gap-1.5"
          >
            <tech.icon size={26} color={tech.color} />
            <span
              className="text-[9px] font-medium tracking-wider uppercase text-center leading-tight"
              style={{ color: "var(--text-secondary)" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
