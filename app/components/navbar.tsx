"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "about", href: "/" },
  { label: "experience", href: "/experience" },
  { label: "projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(
    null
  );

  useLayoutEffect(() => {
    function measure() {
      const activeIndex = NAV_ITEMS.findIndex((item) => item.href === pathname);
      const el = itemRefs.current[activeIndex];
      if (el) {
        setPill({ left: el.offsetLeft, width: el.offsetWidth });
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [pathname]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-card rounded-full px-2 py-2 flex items-center gap-1 relative">
        {pill && (
          <motion.span
            className="absolute top-2 bottom-2 rounded-full glass-pill"
            initial={false}
            animate={{ left: pill.left, width: pill.width }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}
        {NAV_ITEMS.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative px-3 sm:px-6 py-2 text-xs sm:text-sm font-display font-bold tracking-wide transition-colors duration-200 z-10"
              style={{
                color: isActive
                  ? "var(--nav-active)"
                  : "var(--text-secondary)",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
