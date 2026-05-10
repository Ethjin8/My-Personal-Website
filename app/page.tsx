"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Typewriter from "./components/typewriter";
import TechStack from "./components/tech-stack";
import CurrentlyInto from "./components/currently-into";
import GitHubGraph from "./components/github-graph";
import CurrentlyBuilding from "./components/currently-building";
import CurrentlyLearning from "./components/currently-learning";
import ColorToggle from "./components/color-toggle";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

function Heading({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1
        className="font-display text-3xl min-[1440px]:text-4xl font-bold tracking-wide"
        style={{ color: "var(--ucla-blue)" }}
      >
        Hi! I&apos;m <em className="name-gradient italic">Ethan</em>
      </h1>
      <p
        className="mt-1.5 min-[1440px]:mt-2 text-base min-[1440px]:text-lg tracking-wide"
        style={{ color: "var(--text-secondary)" }}
      >
        Studying CE @ UCLA
      </p>
    </div>
  );
}

function ProfilePicture({ desktop, className }: { desktop?: boolean; className?: string }) {
  const size = desktop ? 280 : 180;
  return (
    <div className={className}>
      <div className={`neu-raised rounded-full ${desktop ? "p-3" : "p-2.5"}`}>
        <div className={`neu-inset rounded-full ${desktop ? "p-2" : "p-1.5"}`}>
          <Image
            src="/images/homepage/website-headshot.png"
            alt="Ethan Jin"
            width={size}
            height={size}
            priority
            className="rounded-full object-cover"
            style={{ width: size, height: size }}
          />
        </div>
      </div>
      <div className={`absolute ${desktop ? "bottom-5 gap-2.5" : "bottom-4 gap-2"} left-1/2 -translate-x-1/2 flex items-center z-20`}>
        <Link
          href="/resume.pdf"
          target="_blank"
          className={`profile-overlay-btn resume-btn flex items-center rounded-full font-bold whitespace-nowrap ${desktop ? "gap-2 px-7 py-3 text-sm" : "gap-1.5 px-5 py-2 text-xs"}`}
        >
          Resume <HiArrowRight className={desktop ? "text-base" : "text-sm"} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ethanrjin/"
          target="_blank"
          className={`profile-overlay-btn linkedin-btn flex items-center justify-center ${desktop ? "w-11 h-11 rounded-xl text-lg" : "w-9 h-9 rounded-lg text-base"}`}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/Ethjin8"
          target="_blank"
          className={`profile-overlay-btn github-btn flex items-center justify-center ${desktop ? "w-11 h-11 rounded-xl text-xl" : "w-9 h-9 rounded-lg text-base"}`}
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

function BioContent() {
  return (
    <>
      <p style={{ color: "var(--text-primary)" }} className="text-sm leading-relaxed">
        I&apos;m Ethan, a sophomore at UCLA studying <span className="bio-highlight">Computer Engineering</span>.
      </p>
      <p style={{ color: "var(--text-primary)" }} className="text-sm leading-relaxed mt-3">
        From sustainability to healthcare, I love developing for <span className="bio-highlight">social good</span>. I focus on building systems that scale—especially those that involve <span className="bio-highlight">applied AI/ML</span>.
      </p>
      <p style={{ color: "var(--text-primary)" }} className="text-sm leading-relaxed mt-3">
        Feel free to <span className="bio-highlight">reach out</span>, whether it&apos;s about opportunities, collaboration, or just to connect!
      </p>
    </>
  );
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bioDesktopRef = useRef<HTMLDivElement>(null);
  const bioMobileRef = useRef<HTMLDivElement>(null);
  const intoRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const [twMinHeight, setTwMinHeight] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    function compute() {
      if (window.innerWidth < 1440) return;
      const bio = bioDesktopRef.current;
      const into = intoRef.current;
      const building = buildingRef.current;
      if (!bio || !into || !building) return;

      const hBio = bio.offsetHeight;
      const hInto = into.offsetHeight;
      const hBuilding = building.offsetHeight;

      // Top gap match: hTw = hBio + 2*(hInto - hBuilding)
      // Bottom gap match: hTw = hBio - 128  (128 = 2*(GH_Y - CL_Y) = 2*(180-116))
      // Average for balanced result:
      const target = hBio + (hInto - hBuilding) - 64;
      if (target > 0) setTwMinHeight(target);
    }
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useGSAP(
    () => {
      // Bio card SplitText reveal — runs on mount
      [bioDesktopRef.current, bioMobileRef.current].forEach((bio) => {
        if (!bio) return;
        bio.classList.remove("bio-text-hidden");
        const paragraphs = bio.querySelectorAll("p");
        const allLines: Element[] = [];
        paragraphs.forEach((p) => {
          const split = SplitText.create(p, { type: "lines" });
          allLines.push(...split.lines);
        });
        gsap.fromTo(
          allLines,
          { autoAlpha: 0, y: 12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: { amount: 0.4 },
            ease: "power2.out",
          }
        );
      });

      const mm = gsap.matchMedia();

      mm.add("(max-width: 1439px)", () => {
        const mobileCards = gsap.utils.toArray<HTMLElement>(".mobile-reveal");
        gsap.set(mobileCards, { autoAlpha: 0, y: 30 });

        mobileCards.forEach((card) => {
          gsap.to(card, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      mm.add("(min-width: 1440px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".bento-reveal");
        gsap.set(cards, { autoAlpha: 0, y: 40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: heroRef.current,
          },
        });

        tl.to(
          ".scroll-indicator",
          { autoAlpha: 0, y: -10, duration: 0.08, ease: "none" },
          0
        );

        tl.to(
          '[data-card="currently-into"]',
          { autoAlpha: 1, y: 0, duration: 0.15, ease: "none" },
          0.05
        );

        tl.fromTo(
          '[data-card="tech-stack"]',
          { autoAlpha: 0, x: -50, y: 0 },
          { autoAlpha: 1, x: 0, y: 0, duration: 0.15, ease: "none" },
          0.12
        );

        tl.fromTo(
          '[data-card="currently-building"]',
          { autoAlpha: 0, y: -40, x: 0 },
          { autoAlpha: 1, y: 0, x: 0, duration: 0.15, ease: "none" },
          0.28
        );

        tl.fromTo(
          '[data-card="color-toggle"]',
          { autoAlpha: 0, x: 30, y: 0 },
          { autoAlpha: 1, x: 0, y: 0, duration: 0.15, ease: "none" },
          0.35
        );

        tl.fromTo(
          '[data-card="github-graph"]',
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, duration: 0.15, ease: "none" },
          0.48
        );

        tl.fromTo(
          '[data-card="currently-learning"]',
          { autoAlpha: 0, y: 50, x: 20 },
          { autoAlpha: 1, y: 0, x: 0, duration: 0.15, ease: "none" },
          0.58
        );

        gsap.to(".scroll-indicator-arrow", {
          y: 6,
          duration: 1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="min-[1440px]:hidden flex flex-col items-center gap-5 px-3 pt-24 pb-16">
        <Heading className="text-center" />

        <ProfilePicture className="relative" />

        <div ref={bioMobileRef} className="mobile-reveal bio-text-hidden neu-raised rounded-3xl p-5 w-full">
          <BioContent />
        </div>

        <div className="mobile-reveal neu-raised rounded-3xl p-5 w-full">
          <Typewriter />
        </div>

        <div className="mobile-reveal w-full">
          <CurrentlyInto />
        </div>

        <div className="mobile-reveal w-full">
          <TechStack />
        </div>

        <div className="mobile-reveal w-full">
          <CurrentlyBuilding />
        </div>

        <div className="mobile-reveal w-full overflow-x-auto">
          <GitHubGraph />
        </div>

        <div className="mobile-reveal w-full">
          <CurrentlyLearning />
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden min-[1440px]:block relative" style={{ height: "300vh" }}>
        <div ref={heroRef} className="h-screen w-full relative overflow-hidden">
          {/* Profile picture — true center */}
          <ProfilePicture desktop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Heading — above profile */}
          <Heading className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+185px)] text-center z-10" />

          {/* Bio card — left of profile */}
          <div ref={bioDesktopRef} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[calc(100%+190px)] bio-text-hidden neu-raised rounded-3xl p-6 w-[300px] z-10">
            <BioContent />
          </div>

          {/* Typewriter + Color toggle row — right of profile */}
          <div
            className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-[190px] flex items-stretch gap-5 z-10"
            style={twMinHeight ? { minHeight: twMinHeight } : undefined}
          >
            <div className="neu-raised rounded-3xl p-6 w-[300px] flex items-center justify-center">
              <Typewriter />
            </div>
            <div className="bento-reveal w-[200px]" data-card="color-toggle">
              <ColorToggle />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[220px] flex flex-col items-center gap-1.5 z-10">
            <span
              className="text-[11px] font-medium tracking-[0.15em] uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              Scroll down
            </span>
            <div className="scroll-indicator-arrow">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 3v9m0 0l-3.5-3.5M9 12l3.5-3.5"
                  stroke="var(--ucla-blue)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* === BENTO CARDS === */}
          <div ref={intoRef} className="absolute top-6 left-1/2 -translate-x-[calc(100%+190px)]">
            <div className="bento-reveal" data-card="currently-into">
              <CurrentlyInto />
            </div>
          </div>

          <div
            className="absolute top-6 left-1/2 -translate-x-[calc(100%+530px)]"
            style={{ height: "calc(50vh + 295px)" }}
          >
            <div className="bento-reveal h-full" data-card="tech-stack">
              <TechStack />
            </div>
          </div>

          <div ref={buildingRef} className="absolute top-6 left-1/2 translate-x-[190px] w-[520px]">
            <div className="bento-reveal" data-card="currently-building">
              <CurrentlyBuilding />
            </div>
          </div>

          <div
            className="absolute top-1/2 left-1/2 w-[700px] h-[139px]"
            style={{ transform: "translateX(-490px) translateY(180px)" }}
          >
            <div className="bento-reveal w-full h-full" data-card="github-graph">
              <GitHubGraph />
            </div>
          </div>

          <div
            className="absolute top-1/2 left-1/2 w-[480px] h-[203px]"
            style={{ transform: "translateX(230px) translateY(116px)" }}
          >
            <div className="bento-reveal w-full h-full" data-card="currently-learning">
              <CurrentlyLearning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
