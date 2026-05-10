"use client";

import { useState, useEffect } from "react";

const ENTRIES = [
  "software engineering.",
  "applied AI/ML.",
  "distributed systems.",
  "data science.",
  "UI/UX design.",
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function Typewriter() {
  const [entryIndex, setEntryIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentEntry = ENTRIES[entryIndex];

  useEffect(() => {
    const delay = isDeleting
      ? (displayText.length > 0 ? DELETE_SPEED : PAUSE_AFTER_DELETE)
      : (displayText.length < currentEntry.length ? TYPE_SPEED : PAUSE_AFTER_TYPE);

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentEntry.length) {
          setDisplayText(currentEntry.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setEntryIndex((prev) => (prev + 1) % ENTRIES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentEntry]);

  return (
    <div className="text-center">
      <p
        className="text-xl font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        I am passionate about...
      </p>
      <p className="text-xl font-semibold typewriter-gradient mt-1.5">
        {displayText}
        <span className="typewriter-cursor">|</span>
      </p>
    </div>
  );
}
