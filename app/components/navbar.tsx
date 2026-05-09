// app/components/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "about", href: "/" },
  { label: "experience", href: "/experience" },
  { label: "projects", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
      style={{
        background: "color-mix(in srgb, var(--card) 80%, transparent)",
        borderColor: "var(--border)",
        borderWidth: "1px",
        borderStyle: "solid",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              color: isActive ? "var(--accent)" : "var(--foreground)",
              backgroundColor: isActive ? "var(--muted)" : "transparent",
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
