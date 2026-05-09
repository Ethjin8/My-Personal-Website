"use client";

import ExperienceCard from "@/app/components/experience/experience-card";

const EXPERIENCES = [
  {
    logo: "/images/mdd-lab-logo.png",
    logoAlt: "MDD Lab logo",
    logoWidth: 90,
    organization: "Materials Design Through Dynamics Lab",
    role: "Undergraduate Researcher",
    dates: "November 2025 - Present",
    blurb: "Conducting research under Professor Szymanski to design and implement a user-friendly web interface for ML-assisted powder X-ray diffraction analysis",
    bullets: [
      {
        text: "Conducting research under Professor Szymanski to design and implement a user-friendly web interface for ML-assisted powder X-ray diffraction analysis",
      },
    ],
  },
  {
    logo: "/images/acm-logo.png",
    logoAlt: "ACM UCLA logo",
    logoWidth: 65,
    organization: "Association of Computing Machinery @ UCLA",
    role: "Development Team Intern",
    dates: "October 2025 - Present",
    blurb: "Full-stack development with a focus on backend to support ACM's web services",
    bullets: [
      {
        text: "Full-stack development with a focus on backend to support ACM's web services (membership portal, main website)",
      },
      { text: "Building with Git, React, Next.js, Tailwind, AWS, MongoDB" },
    ],
  },
  {
    logo: "/images/rehs_logo.png",
    logoAlt: "UCSD REHS logo",
    logoWidth: 90,
    organization: "UCSD Research Experience for High School Students",
    role: "HPC Systems Engineer",
    dates: "June-August (2023-2024)",
    blurb: "Developed Python scripts to process and visualize 158+ system dependency files",
    bullets: [
      {
        text: "Developed Python scripts to process and visualize 158+ system dependency files, enabling automation of software package installation workflows",
        link: {
          href: "https://docs.google.com/presentation/d/1-1d2MG9vXZXKiK2H7ER2NWmSVbiMt40v/edit?slide=id.p1#slide=id.p1",
          label: "project presentation",
        },
      },
      {
        text: "Created command-line interface tool that generated Python Pandas dataframe structures and pie chart models from 63 module logs to analyze software usage patterns within Expanse, increasing deployment efficiency",
        link: {
          href: "https://docs.google.com/presentation/u/1/d/1SZSHN_lNp8_bxzvU3WAFB3IY7McgDpLM/edit?slide=id.p1#slide=id.p1",
          label: "project poster",
        },
      },
      {
        text: "Exposed time-tracking error in the original logging program, improving the accuracy of data collection processes",
      },
    ],
  },
  {
    logo: "/images/map_logo.png",
    logoAlt: "UCSD MAP logo",
    logoWidth: 150,
    organization: "UCSD Mentor Assistance Program",
    role: "IT Services Intern",
    dates: "October-May (2022-2024)",
    blurb: "Learned mobile computing by developing various projects through weekly stand-up meetings",
    bullets: [
      {
        text: "Learned mobile computing by developing various projects through weekly stand-up meetings alongside other interns",
      },
      {
        text: "Built 6+ features for UCSD's official mobile app to improve accessibility & data flow for users with audiovisual impairments",
      },
      {
        text: "Developed ClassTime, a time-tracking scheduler app aiming to enhance student productivity",
      },
      {
        text: "Utilized Google's Gemini LLM to create Cartelligence, an AI-based grocery shopping web application",
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 pt-24 pb-10">
      <h1
        className="font-heading text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-gold))`,
        }}
      >
        Experience
      </h1>
      <div className="space-y-6">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={exp.organization} data={exp} index={i} />
        ))}
      </div>
    </div>
  );
}
