"use client";

import { useState } from "react";
import ProjectCard from "@/app/components/projects/project-card";
import ProjectModal from "@/app/components/projects/project-modal";

const PROJECTS = [
  {
    id: "ai-resume",
    title: "AI Resume Critiquer",
    description:
      "A web application that leverages Meta's open-source LLM, Llama, to provide constructive feedback for resumes. Outputs can be customized for specific job descriptions, creativity level, response length, and depth of analysis.",
    shortBullets: [
      "Leverages Meta's Llama LLM for intelligent resume feedback",
      "Customizable for specific job descriptions and analysis depth",
      "Adjustable creativity level and response length",
    ],
    techStack: ["Ollama", "Streamlit", "Python"],
    screenshot: "/images/ai_resume_screenshot.png",
    githubUrl: "https://github.com/Ethjin8/AI-Resume-Critiquer",
  },
  {
    id: "cartelligence",
    title: "Cartelligence",
    description:
      "Powered by Google's Gemini LLM, this web application improves the grocery shopping experience by offering grocery list creation, recipe generation, diet analysis, alternative ingredient finder, and detailed nutritional insights.",
    shortBullets: [
      "Powered by Google's Gemini LLM",
      "Grocery list creation and recipe generation",
      "Diet analysis and nutritional insights",
    ],
    techStack: ["Flask", "Python", "Bootstrap", "SQLAlchemy"],
    screenshot: "/images/cartelligence_screenshot.png",
    githubUrl: "https://github.com/alephnull07/Cartelligence",
  },
  {
    id: "classtime",
    title: "ClassTime",
    description:
      "As a simple time-tracking app geared towards students, this mobile app is designed to bolster productivity by providing a comprehensive suite of tools for managing important assignments and various deadlines.",
    shortBullets: [
      "Time-tracking scheduler for student productivity",
      "Comprehensive assignment and deadline management",
      "Built with Flutter for cross-platform support",
    ],
    techStack: ["Flutter", "Dart", "C++", "Firebase"],
    screenshot: "/images/classtime_screenshot.png",
    githubUrl: "https://github.com/Ethjin8/ClassTime",
  },
];

type ProjectData = (typeof PROJECTS)[number];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 pt-24 pb-10">
      <h1
        className="font-heading text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-gold))`,
        }}
      >
        Projects
      </h1>

      {/* Asymmetric grid: featured large + smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
          <ProjectCard
            data={PROJECTS[0]}
            index={0}
            onSelect={setSelectedProject}
          />
        </div>
        {PROJECTS.slice(1).map((project, i) => (
          <ProjectCard
            key={project.id}
            data={project}
            index={i + 1}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <footer className="mt-16 pb-8">
        <div
          className="text-center text-xs md:text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          &copy; 2025 Ethan Jin. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
