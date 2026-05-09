"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, GitHubIcon } from "@/app/social-icons";
import { toggleTheme } from "@/app/theme-toggle";

export default function ProfileHero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full p-4">
      <button
        onClick={toggleTheme}
        className="relative group cursor-pointer"
        aria-label="Toggle color theme"
        title="Click to switch theme"
      >
        <div
          className="absolute -inset-2 rounded-full opacity-40 blur-lg group-hover:opacity-80 transition-all duration-500"
          style={{
            backgroundImage: `linear-gradient(to right, var(--accent), var(--accent-gold))`,
          }}
        />
        <div
          className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full relative shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        >
          <Image
            src="/images/website_headshot.jpg"
            alt="Ethan Jin profile photo"
            width={288}
            height={288}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </button>

      {/* Buttons overlaid on the bottom edge of the photo */}
      <div
        className="flex items-center gap-2 -mt-6 relative z-10 px-4 py-2 rounded-full"
        style={{
          background: "color-mix(in srgb, var(--card) 90%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid var(--border)",
        }}
      >
        <Link
          href="https://docs.google.com/document/d/1yULjROx-WTMg-UTXc1oL_uEzvVU3c7TnIKhflOpT7tY/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center px-4 py-1.5 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          style={{
            backgroundImage: `linear-gradient(to right, var(--accent), var(--gradient-mid))`,
          }}
        >
          Resume
          <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <Link
          href="https://linkedin.com/in/ethanrjin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <span className="group inline-flex items-center justify-center w-9 h-9 rounded-full theme-social-btn">
            <span className="transition-all duration-300 ease-out transform group-hover:scale-125">
              <LinkedInIcon className="w-5 h-5 theme-social-icon group-hover:text-[#0A66C2]" />
            </span>
          </span>
        </Link>
        <Link
          href="https://github.com/ethjin8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <span className="group inline-flex items-center justify-center w-9 h-9 rounded-full theme-social-btn">
            <span className="transition-all duration-300 ease-out transform group-hover:scale-125">
              <GitHubIcon className="w-5 h-5 theme-social-icon" />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
