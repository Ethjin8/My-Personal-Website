"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BulletPoint {
  text: string;
  link?: { href: string; label: string };
}

interface ExperienceData {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  organization: string;
  role: string;
  dates: string;
  blurb: string;
  bullets: BulletPoint[];
}

export default function ExperienceCard({
  data,
  index,
}: {
  data: ExperienceData;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
    >
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="glass-card p-6 md:p-8 cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ layout: { duration: 0.3 } }}
      >
        <motion.div layout="position" className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src={data.logo}
              alt={data.logoAlt}
              width={data.logoWidth}
              height={data.logoWidth}
              className="object-contain max-h-16 md:max-h-20 rounded p-1"
              style={{
                background: "var(--img-logo-bg)",
                borderColor: "var(--border)",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            />
          </div>

          <div className="flex flex-1 flex-wrap md:flex-nowrap justify-between items-start">
            <div>
              <h3
                className="font-heading text-lg md:text-xl font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {data.organization}
              </h3>
              <p className="font-medium mt-1" style={{ color: "var(--accent)" }}>
                {data.role}
              </p>
              {!expanded && (
                <p
                  className="text-sm mt-2 line-clamp-1"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {data.blurb}
                </p>
              )}
            </div>
            <span
              className="px-3 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap mt-2 md:mt-0"
              style={{
                backgroundColor: "var(--tag-bg)",
                color: "var(--accent)",
              }}
            >
              {data.dates}
            </span>
          </div>
        </motion.div>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, opacity: { delay: 0.1 } }}
              className="space-y-3 mt-4 overflow-hidden"
            >
              {data.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: "var(--bullet-bg)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                    />
                  </span>
                  <span style={{ color: "var(--foreground)" }}>
                    {bullet.text}
                    {bullet.link && (
                      <>
                        {" "}
                        <Link
                          href={bullet.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline inline-flex items-center theme-link font-medium text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          ({bullet.link.label})
                        </Link>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
