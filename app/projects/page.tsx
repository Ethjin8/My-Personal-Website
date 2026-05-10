"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

interface ProjectLink {
  label: string;
  href: string;
  icon: "github" | "devpost" | "site";
}

interface Project {
  name: string;
  caption: string;
  screenshot?: string;
  imgWidth?: number;
  imgHeight?: number;
  description: string;
  techStack: string[];
  bullets: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    name: "Inner Circle",
    caption: "Agentic relationship management system",
    screenshot: "/images/projects/inner-circle.png",
    imgWidth: 3022,
    imgHeight: 1500,
    description:
      "An AI-powered relationship manager visualized as a constellation graph — store contacts as nodes, reach out via email and calendar automation.",
    techStack: ["React", "Vite", "Firebase", "Voyage AI", "Claude API"],
    bullets: [
      "Constellation graph network for contact visualization and outreach automation",
      "Custom LLM pipeline scoring relationship strength across 5 dimensions, under 2% error",
      "RAG retrieval with Voyage AI embeddings, batching up to 128 nodes per API call",
      "Change-aware caching cutting repeat retrieval latency from 273ms to 0.13ms",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Ethjin8/Inner-Circle", icon: "github" },
      { label: "Devpost", href: "https://devpost.com/software/inner-circle-tqavge", icon: "devpost" },
    ],
  },
  {
    name: "LegalEase",
    caption: "AI legal document assistant with voice",
    screenshot: "/images/projects/legalease.png",
    imgWidth: 3022,
    imgHeight: 1500,
    description:
      "A legal document assistant that explains content through real-time voice conversations and chat, supporting 42 languages and 3 reading levels.",
    techStack: ["Next.js", "Tailwind", "Supabase", "Gemini Live"],
    bullets: [
      "Real-time voice and chat legal explanations across 42 languages and 3 reading levels",
      "WebSocket connection to Gemini 3.1 Flash Live API with ephemeral tokens",
      "Bidirectional audio pipeline with sub-20ms latency for gapless playback",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Ethjin8/LegalEase", icon: "github" },
      { label: "Live Site", href: "https://trylegalease.vercel.app", icon: "site" },
    ],
  },
  {
    name: "Cartelligence",
    caption: "AI-powered grocery shopping assistant",
    screenshot: "/images/projects/cartelligence_screenshot.png",
    imgWidth: 1637,
    imgHeight: 1235,
    description:
      "A full-stack grocery assistant powered by Google Gemini — personalized recipes, budget alternatives, and nutritional analysis.",
    techStack: ["Flask", "Python", "Bootstrap", "SQLAlchemy", "Gemini"],
    bullets: [
      "Personalized recipe generation with 3–4 budget alternatives based on dietary restrictions",
      "Nutrition analysis dashboard backed by SQLite with cascading list-item management",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/alephnull07/Cartelligence", icon: "github" },
    ],
  },
  {
    name: "ClassTime",
    caption: "Student productivity & time-tracking app",
    screenshot: "/images/projects/classtime_screenshot.png",
    imgWidth: 455,
    imgHeight: 889,
    description:
      "A mobile app designed to bolster student productivity with comprehensive tools for managing assignments and deadlines.",
    techStack: ["Flutter", "Dart", "C++", "Firebase"],
    bullets: [
      "Schedule view with Today, Future, and Past sections plus quick-add",
      "Assignment tracking with due dates, completion status, and search/filter",
      "Real-time sync across devices via Firebase",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Ethjin8/ClassTime", icon: "github" },
    ],
  },
];

function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="flex items-center gap-1.5 px-3 py-2" style={{ backgroundColor: "#e0e0e0" }}>
        <span className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <span className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <span className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: "#28c840" }} />
        <div className="flex-1 mx-2 rounded-sm py-0.5 px-2" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: "#d0d0d0" }} />
        </div>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full aspect-[9/19] rounded-[24px] overflow-hidden shadow-md border-[3px] flex flex-col"
      style={{ borderColor: "#2a2a2a", backgroundColor: "#1a1a1a" }}
    >
      <div className="flex justify-center py-1.5" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="w-16 h-[5px] rounded-full" style={{ backgroundColor: "#333" }} />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function LinkIcon({ type, size = 20 }: { type: ProjectLink["icon"]; size?: number }) {
  switch (type) {
    case "github":
      return <FaGithub size={size} />;
    case "devpost":
      return <SiDevpost size={size} />;
    case "site":
      return <FiExternalLink size={size} />;
  }
}

function useCanHover() {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover)");
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return canHover;
}

function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false);
  const canHover = useCanHover();
  const hasImage = !!project.screenshot;
  const isPortrait = hasImage && project.imgHeight! > project.imgWidth!;

  return (
    <div
      className="group perspective-[1000px] h-[420px] sm:h-[480px] cursor-pointer"
      onClick={() => { if (!canHover) setFlipped((f) => !f); }}
      onMouseEnter={() => { if (canHover) setFlipped(true); }}
      onMouseLeave={() => { if (canHover) setFlipped(false); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 neu-raised rounded-2xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex-1 m-3 mb-0 rounded-xl overflow-hidden neu-inset flex items-center justify-center p-4">
            {hasImage && isPortrait ? (
              <PhoneMockup>
                <Image
                  src={project.screenshot!}
                  alt={project.name}
                  width={project.imgWidth!}
                  height={project.imgHeight!}
                  className="w-full h-full object-cover object-top"
                  sizes="200px"
                />
              </PhoneMockup>
            ) : hasImage ? (
              <BrowserMockup>
                <Image
                  src={project.screenshot!}
                  alt={project.name}
                  width={project.imgWidth!}
                  height={project.imgHeight!}
                  className="w-full h-auto"
                  sizes="380px"
                />
              </BrowserMockup>
            ) : null}
          </div>
          <div className="p-4 text-center">
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.caption}
            </p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass-card rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-between gap-3 sm:gap-6 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Section 1: Text */}
          <div className="min-h-0 overflow-y-auto">
            <h3
              className="text-base sm:text-lg font-bold text-center mb-2 sm:mb-3"
              style={{ color: "var(--ucla-blue)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {project.description}
            </p>
            <ul className="flex flex-col gap-1 sm:gap-1.5">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="mt-[5px] sm:mt-[6px] w-[5px] h-[5px] rounded-full shrink-0"
                    style={{ backgroundColor: "var(--ucla-blue)" }}
                  />
                  <span
                    className="text-[11px] sm:text-xs leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 shrink-0">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill rounded-full px-4 py-2 sm:px-5 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 hover:scale-[1.03] active:scale-[0.97] transition-transform"
                style={{ color: "var(--ucla-blue)" }}
              >
                <LinkIcon type={link.icon} size={16} />
                <span className="text-xs sm:text-sm font-semibold">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Section 3: Tech stack */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 shrink-0">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="glass-pill rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-medium"
                style={{ color: "var(--ucla-blue)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 pt-24 pb-16">
      <h1
        className="text-2xl sm:text-3xl font-display italic mb-8"
        style={{ color: "var(--ucla-blue)" }}
      >
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
