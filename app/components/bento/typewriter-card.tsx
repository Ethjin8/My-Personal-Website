"use client";

import { useEffect } from "react";

export default function TypewriterCard() {
  useEffect(() => {
    const fullPhrases = [
      "software engineering.",
      "web development.",
      "artificial intelligence.",
      "data science.",
      "accessible computing.",
      "healthcare.",
      "sustainability.",
    ];

    const getAppropriatePhrase = (index: number): string => {
      const isMobile = window.innerWidth < 640;
      const phrase = fullPhrases[index];
      if (isMobile && phrase.length > 15) {
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
        charIndex--;
        typingSpeed = 35;
      } else {
        charIndex++;
        typingSpeed = 80 + Math.random() * 50;
      }
      if (typewriterElement) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);
      }
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % fullPhrases.length;
        typingSpeed = 700;
      }
      setTimeout(typeWriter, typingSpeed);
    }

    const typewriterTimer = setTimeout(typeWriter, 1200);
    return () => clearTimeout(typewriterTimer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 md:p-8 text-center">
      <span
        className="text-lg md:text-xl font-medium block mb-2"
        style={{ color: "var(--muted-foreground)" }}
      >
        I am passionate about
      </span>
      <span className="text-xl md:text-2xl font-bold typewriter-text" />
    </div>
  );
}
