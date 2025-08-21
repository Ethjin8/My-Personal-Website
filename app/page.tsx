"use client";

import Link from "next/link";
import { LinkedInIcon, GitHubIcon } from "./social-icons";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Typewriter effect
    const fullPhrases = [
      "software engineering.",
      "web development.",
      "artificial intelligence.",
      "data science.",
      "accessible computing.",
    ];

    // Get the appropriate phrase based on screen size
    const getAppropriatePhrase = (index: number): string => {
      const isMobile = window.innerWidth < 640;
      const phrase = fullPhrases[index];

      // For mobile screens, shorten longer phrases to prevent overflow
      if (isMobile && phrase.length > 15) {
        // Map long phrases to shorter versions for mobile
        const shortPhrases: Record<string, string> = {
          "software engineering.": "coding.",
          "artificial intelligence.": "AI.",
          "accessible computing.": "accessibility.",
        };
        return shortPhrases[phrase] || phrase;
      }

      return phrase;
    };

    const typewriterElement = document.querySelector(".typewriter-text");
    if (!typewriterElement) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
      const currentPhrase = getAppropriatePhrase(phraseIndex);

      if (isDeleting) {
        // Deleting text
        charIndex--;
        typingSpeed = 35; // Faster when deleting
      } else {
        // Typing text
        charIndex++;
        typingSpeed = 80 + Math.random() * 50; // Slightly random typing speed for realism
      }

      // Update text content
      if (typewriterElement) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);
      }

      // Check if word is complete
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end of phrase
        isDeleting = true;
        typingSpeed = 2000; // Wait before deleting
      } else if (isDeleting && charIndex === 0) {
        // Move to next phrase when deletion complete
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % fullPhrases.length;
        typingSpeed = 700; // Pause before typing next phrase
      }

      setTimeout(typeWriter, typingSpeed);
    }

    // Start the typewriter effect
    typeWriter();
  }, []);

  return (
    <div className="space-y-14 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-10">
      {/* Header */}
      <section className="space-y-3 md:space-y-5">
        <h1
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#2774AE] via-[#1384CB] to-[#FFD100] bg-clip-text text-transparent"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient 8s ease infinite",
          }}
        >
          Ethan Jin
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center font-light tracking-wide">
          Welcome to my website!
        </p>
      </section>

      {/* Personal Description */}
      <section>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
          {/* Left: Profile Icon Placeholder */}
          <div className="relative group self-center md:self-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2774AE] to-[#FFD100] rounded-full opacity-50 blur-md group-hover:opacity-100 transition-all duration-500"></div>
            <div className="flex flex-col items-center justify-center w-48 h-48 md:w-56 md:h-56 bg-white rounded-full relative border border-gray-50 shadow-md overflow-hidden">
              {/* Profile Image */}
              <Image
                src="/images/website_headshot.jpg" // Images in public folder are referenced from the root
                alt="Ethan Jin profile photo"
                width={224} // 56*4 for high resolution
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Divider - Only visible on md screens and up */}
          <div className="hidden md:flex w-[2px] bg-gradient-to-b from-transparent via-[#2774AE] to-transparent opacity-80 self-stretch" />
          {/* Right: Personal Description Placeholder */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-lg md:text-xl text-gray-700 text-center mb-5 md:mb-7 leading-relaxed px-2">
                Hi! I&apos;m Ethan, a computer engineering student @ UCLA. By
                exploring the intersection of technology and society, I aim to
                develop creative and impactful solutions that improve lives and
                tackle real-world challenges.
                <br />
                <br />
                In my free time, I enjoy playing basketball and badminton, reading, and
                watching movies. Feel free to reach out, whether it's about
                opportunities, collaboration, or just to connect!
              </p>
              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4">
                <Link
                  href="https://docs.google.com/document/d/1yULjROx-WTMg-UTXc1oL_uEzvVU3c7TnIKhflOpT7tY/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-[#2774AE] to-[#0056A5] text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Resume</span>
                  <svg
                    className="ml-1.5 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/ethanrjin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="group inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full hover:bg-blue-50 transition-all duration-300">
                    <span className="transition-all duration-300 ease-out transform group-hover:scale-125">
                      <LinkedInIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-[#0A66C2]" />
                    </span>
                  </span>
                </Link>
                <Link
                  href="https://github.com/ethjin8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <span className="group inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300">
                    <span className="transition-all duration-300 ease-out transform group-hover:scale-125">
                      <GitHubIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-black" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typewriter Effect */}
      <section className="flex justify-center items-center py-4 md:py-6">
        <div className="bg-white/50 backdrop-blur-sm px-4 sm:px-8 py-4 rounded-xl shadow-sm border border-gray-50 text-center">
          <div className="typewriter-container">
            <div className="w-full md:w-auto">
              <span className="text-xl md:text-3xl font-medium text-gray-700">
                I am passionate about{" "}
              </span>
            </div>
            <div className="inline-block">
              <span className="text-xl md:text-3xl font-bold bg-gradient-to-r from-[#2774AE] via-[#1384CB] to-[#FFD100] bg-clip-text text-transparent typewriter-text"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#2774AE] to-[#FFD100] bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-6">
          <div className="card-hover p-6 md:p-8 bg-white border border-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 mb-4">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/rehs_logo.png"
                  alt="UCSD REHS logo"
                  width={90}
                  height={90}
                  className="object-contain max-h-20 md:max-h-24 rounded border border-gray-200 p-1"
                  style={{ background: "rgba(243, 244, 246, 0.5)" }}
                />
              </div>

              <div className="flex flex-1 flex-wrap md:flex-nowrap justify-between items-start">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 hover:text-[#2774AE] transition-colors duration-300">
                    UCSD Research Experience for High School Students
                  </h3>
                  <p className="text-[#2774AE] font-medium mt-1">
                    HPC Systems Engineer
                  </p>
                </div>
                <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-50 text-[#2774AE] rounded-full text-xs md:text-sm font-medium whitespace-nowrap mt-2 md:mt-0">
                  June-August (2023-2024)
                </span>
              </div>
            </div>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-blue-100 rounded-full mr-2 md:mr-3 flex-shrink-0">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-sm md:text-base text-gray-700">
                  Developed Python scripts to process and visualize 158+ system
                  dependency files, enabling automation of software package
                  installation workflows
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-gray-700">
                  Generated Python dataframe structures using Pandas and pie
                  chart models from 63 module logs to detect usage patterns,
                  increasing deployment efficiency
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-gray-700">
                  Exposed time-tracking error in the original logging program,
                  improving the accuracy of data collection processes
                </span>
              </li>
            </ul>
          </div>

          <div className="card-hover p-6 md:p-8 bg-white border border-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 mb-4">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/map_logo.png"
                  alt="UCSD MAP logo"
                  width={150}
                  height={150}
                  className="object-contain max-h-20 md:max-h-24 rounded border border-gray-200 p-1"
                  style={{ background: "rgba(243, 244, 246, 0.5)" }}
                />
              </div>

              <div className="flex flex-1 flex-wrap md:flex-nowrap justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-[#2774AE] transition-colors duration-300">
                    UCSD Mentor Assistance Program
                  </h3>
                  <p className="text-[#2774AE] font-medium mt-1">
                    IT Services Intern
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-[#2774AE] rounded-full text-sm font-medium whitespace-nowrap">
                  October-May (2022-2024)
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-gray-700">
                  Learned mobile computing by developing various projects
                  through weekly stand-up meetings alongside other interns
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-gray-700">
                  Built 6+ features for UCSD’s official mobile app to improve
                  accessibility & data flow for users with audiovisual
                  impairments
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-gray-700">
                  Developed <b>ClassTime</b>, a time-tracking scheduler app
                  aiming to enhance student productivity
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-[#2774AE] rounded-full"></span>
                </span>
                <span className="text-gray-700">
                  Utilized Google’s Gemini LLM to create <b>Cartelligence</b>,
                  an AI-based grocery shopping web application
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#2774AE] to-[#FFD100] bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-6 md:gap-8">
          <div className="card-hover group p-6 md:p-8 bg-white border border-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              {/* Project Content */}
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 group-hover:text-[#2774AE] transition-colors duration-300">
                  Cartelligence
                </h3>
                <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3 mb-3 md:mb-4 max-w-md">
                  Powered by Google&apos;s Gemini LLM, this web application
                  improves the grocery shopping experience by offering the
                  following features:
                </p>
                <ul className="space-y-2 md:space-y-3 mb-4 text-left">
                  {[
                    "Grocery list creation",
                    "Recipe generation",
                    "Diet analysis",
                    "Alternative ingredient finder",
                    "Detailed nutritional insights",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-4 h-4 md:w-5 md:h-5 bg-blue-100 rounded-full mr-2 md:mr-3 flex-shrink-0">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#2774AE] rounded-full"></span>
                      </span>
                      <span className="text-sm md:text-base text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {["Flask", "Python", "Bootstrap", "SQLAlchemy"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-[#2774AE] rounded-full text-xs font-medium whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <Link
                  href="https://github.com/alephnull07/Cartelligence"
                  target="_blank"
                  className="inline-flex items-center text-[#2774AE] hover:text-[#FFD100] font-medium text-sm md:text-base transition-colors duration-300"
                >
                  <span>View Project</span>
                  <svg
                    className="ml-1.5 md:ml-2 w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>

              {/* Project Image Area */}
              <div className="w-full md:w-2/5 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/images/cartelligence_screenshot.png"
                  alt="Cartelligence app screenshot"
                  width={700}
                  height={394}
                  className="w-full h-auto object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="card-hover group p-6 md:p-8 bg-white border border-gray-50 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              {/* Project Content */}
              <div className="flex flex-col flex-1 justify-center items-center text-center">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#2774AE] transition-colors duration-300">
                  ClassTime
                </h3>
                <p className="text-gray-600 mt-3 mb-4 max-w-md">
                  As a simple time-tracking app geared towards students, this
                  mobile app is designed to bolster productivity by providing a
                  comprehensive suite of tools for managing important
                  assignments and various deadlines.
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {["Flutter", "Dart", "C++", "Firebase"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-[#2774AE] rounded-full text-xs font-medium whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://github.com/Ethjin8/ClassTime"
                  target="_blank"
                  className="inline-flex items-center text-[#2774AE] hover:text-[#FFD100] font-medium transition-colors duration-300"
                >
                  <span>View Project</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </div>

              {/* Project Image Area */}
              <div className="w-full md:w-2/5 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-4">
                <Image
                  src="/images/classtime_screenshot.png"
                  alt="ClassTime app screenshot"
                  width={600}
                  height={338}
                  className="w-3/4 h-auto object-contain"
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="mt-12 md:mt-16 pb-6 md:pb-8">
        <div className="text-center text-gray-500 text-xs md:text-sm">
          © 2025 Ethan Jin. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
