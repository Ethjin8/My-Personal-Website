"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  shortBullets: string[];
  techStack: string[];
  screenshot: string;
  githubUrl: string;
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectData | null;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="glass-card relative z-10 w-full max-w-[640px] max-h-[85vh] overflow-y-auto p-6 md:p-8 hover:!transform-none"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
              style={{ backgroundColor: "var(--muted)", color: "var(--foreground)" }}
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2
              className="font-heading text-2xl md:text-3xl font-bold mb-4 pr-10"
              style={{ color: "var(--foreground)" }}
            >
              {project.title}
            </h2>

            <div
              className="w-full rounded-xl overflow-hidden mb-5"
              style={{ backgroundColor: "var(--muted)" }}
            >
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                width={700}
                height={394}
                className="w-full h-auto object-contain p-2"
                quality={100}
              />
            </div>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "var(--foreground)" }}
            >
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "var(--tag-bg)",
                    color: "var(--accent)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center theme-link font-medium"
            >
              View Project
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
