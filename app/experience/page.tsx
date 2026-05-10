"use client";

import { useState } from "react";
import Image from "next/image";

interface BulletPoint {
  text: string;
  linkText?: string;
  linkHref?: string;
}

interface Experience {
  logo: string;
  logoAlt: string;
  logoSize: number;
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: BulletPoint[];
}

const experiences: Experience[] = [
  {
    logo: "/images/experience/mdd-lab-logo.png",
    logoAlt: "Materials Design Through Dynamics Lab",
    logoSize: 80,
    company: "Materials Design Through Dynamics Lab",
    role: "Undergraduate Researcher",
    dates: "Nov. 2025 – Present",
    summary:
      "Architecting a full-stack AI platform for substance identification — ~200x faster than manual lab methods, backed by 18,000 neural networks.",
    bullets: [
      {
        text: "Architecting a full-stack AI analysis platform to identify unknown substance compositions **~200x faster** than manual lab methods",
      },
      {
        text: "Designing a dynamic FastAPI backend that selects models from a pool of **18,000 pre-trained neural networks** based on user query",
      },
      {
        text: "Optimized model inference pipeline by implementing a **custom LRU cache**, achieving a **~99.9% reduction** in model loading times",
      },
      {
        text: "Containerizing the application with Docker, packaging the frontend, backend, and ML engine together for seamless deployment",
      },
    ],
  },
  {
    logo: "/images/experience/acm-logo.png",
    logoAlt: "ACM @ UCLA",
    logoSize: 48,
    company: "Association for Computing Machinery @ UCLA",
    role: "Software Engineer",
    dates: "Oct. 2025 – Present",
    summary:
      "Maintaining web services for 3,500+ members — MongoDB migration, REST API development, and role-based auth.",
    bullets: [
      {
        text: "Supporting a community of **3,500+ members & event attendees** by maintaining and optimizing the organization's primary website",
      },
      {
        text: "Migrated internship applications to MongoDB by writing new schemas, enabling scalable querying across **400+ applications** per cycle",
      },
      {
        text: "Created **5 REST API endpoints** for committee management with role-based auth and rate limiting **(100 req/15 min)**",
      },
    ],
  },
  {
    logo: "/images/experience/rehs_logo.png",
    logoAlt: "SDSC",
    logoSize: 48,
    company: "San Diego Supercomputer Center",
    role: "Software Engineering Intern",
    dates: "June 2023 – Aug. 2024",
    summary:
      "Built Python tooling to automate dependency analysis and software usage tracking on the Expanse supercomputer.",
    bullets: [
      {
        text: "Developed Python scripts to process and visualize **150+** system dependency files on the Expanse supercomputer, enabling automation of software package installation workflows",
        linkText: "(project presentation)",
        linkHref:
          "https://docs.google.com/presentation/d/1-1d2MG9vXZXKiK2H7ER2NWmSVbiMt40v/edit?slide=id.p1#slide=id.p1",
      },
      {
        text: "Created a custom **command-line interface tool** that generated Python Pandas dataframe structures and pie chart models from **~13M lines** in **60+ module logs** to analyze software usage patterns",
        linkText: "(project presentation)",
        linkHref:
          "https://docs.google.com/presentation/u/1/d/1SZSHN_lNp8_bxzvU3WAFB3IY7McgDpLM/edit?slide=id.p1#slide=id.p1",
      },
      {
        text: "**Exposed a time-tracking error** in the original module logging program, improving system-wide data collection accuracy",
      },
    ],
  },
  {
    logo: "/images/experience/map_logo.png",
    logoAlt: "UCSD MAP",
    logoSize: 80,
    company: "UCSD Mentor Assistance Program",
    role: "IT Services Intern",
    dates: "Oct. 2022 – May 2024",
    summary:
      "Learned mobile development through weekly stand-ups — built features for UCSD's official app and shipped ClassTime and Cartelligence.",
    bullets: [
      {
        text: "Learned mobile computing by developing various projects through weekly stand-up meetings alongside other interns",
      },
      {
        text: "Built **6+ features** for UCSD's official mobile app to improve accessibility & data flow for users with audiovisual impairments",
      },
      {
        text: "Developed **ClassTime**, a time-tracking scheduler app aiming to enhance student productivity",
      },
      {
        text: "Utilized Google's Gemini LLM to create **Cartelligence**, an AI-based grocery shopping web application",
      },
    ],
  },
];

function renderBulletText(bullet: BulletPoint) {
  const parts = bullet.text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i}>{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
      {bullet.linkText && bullet.linkHref && (
        <>
          {" "}
          <a
            href={bullet.linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--ucla-blue)" }}
          >
            {bullet.linkText}
          </a>
        </>
      )}
    </>
  );
}

function ExperienceCard({ exp }: { exp: Experience }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="neu-raised rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-700 ease-in-out"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-3">
          <div className="w-[52px] h-[52px] shrink-0 flex items-center justify-center overflow-visible">
            <Image
              src={exp.logo}
              alt={exp.logoAlt}
              width={exp.logoSize}
              height={exp.logoSize}
              className="object-contain max-h-[52px] w-auto"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2
              className="text-sm sm:text-base font-bold leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              {exp.company}
            </h2>
            <p
              className="text-xs sm:text-sm mt-0.5"
              style={{ color: "var(--ucla-blue)" }}
            >
              {exp.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 ml-[64px] sm:ml-auto shrink-0">
          <span
            className="text-xs neu-inset rounded-full px-3 py-1"
            style={{ color: "var(--ucla-blue)" }}
          >
            {exp.dates}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-500 ${expanded ? "rotate-180" : ""}`}
            style={{ color: "var(--text-secondary)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div
        className="grid transition-[grid-template-rows] ease-in-out mt-3"
        style={{
          gridTemplateRows: expanded ? "0fr" : "1fr",
          transitionDuration: expanded ? "400ms" : "500ms",
        }}
      >
        <div className="overflow-hidden">
          <p
            className="text-xs sm:text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {exp.summary}
          </p>
        </div>
      </div>

      <div
        className="grid transition-[grid-template-rows] ease-in-out"
        style={{
          gridTemplateRows: expanded ? "1fr" : "0fr",
          transitionDuration: expanded ? "500ms" : "400ms",
        }}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-2.5 ml-1 mt-4">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-[7px] w-[6px] h-[6px] rounded-full shrink-0"
                  style={{ backgroundColor: "var(--ucla-blue)" }}
                />
                <span
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: "var(--text-primary)" }}
                >
                  {renderBulletText(bullet)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 pt-24 pb-16">
      <h1
        className="text-2xl sm:text-3xl font-display italic mb-8"
        style={{ color: "var(--ucla-blue)" }}
      >
        Experience
      </h1>

      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} exp={exp} />
        ))}
      </div>
    </main>
  );
}
