## My Personal Website

Personal portfolio site showcasing my experiences and projects. Built with a hybrid neumorphic + glassmorphic bento grid design system featuring Apple-style scrollytelling animations and a dual-theme color system.

### Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4, hybrid neumorphic + glassmorphic design system with CSS variable theming
- **Typography:** Libre Baskerville (display), DM Sans (body) via `next/font`
- **Animation:** GSAP (ScrollTrigger, SplitText, scrubbed timelines), Framer Motion
- **Deployment:** Vercel

### Pages

- **About** (`/`) — Scrollytelling homepage with centered profile, bento cards that reveal on scroll (desktop: pinned scrubbed timeline, mobile: per-element scroll triggers with reverse on scroll-back). Bio card features SplitText line-by-line reveal with highlighted key phrases. Name displays with animated flowing gradient.
- **Experience** (`/experience`) — Expandable cards with company logos, roles, and bullet points (grid-based expand/collapse animation)
- **Projects** (`/projects`) — Flip cards with hover-to-reveal and click-to-expand modal

### Features

- **Hybrid design:** Neumorphic base layer (cards, tiles) with glassmorphic floating layer (navbar, tooltips, flip card backs, profile overlay buttons)
- **Dual theme:** UCLA (light neumorphic, blue/gold) and TPHS (dark, warm red/yellow) — toggled via bento card, persisted to localStorage
- **Responsive:** Desktop scrollytelling layout (1440px+) with separate mobile stack layout and scroll-reveal animations
- **Hover interactions:** Currently Into front image and Currently Building screenshot pop on hover
- **Animated gradient:** Name and typewriter use a 4-stop flowing gradient (dark blue → blue → yellow-green → gold)

### Running Locally

```bash
npm install
npm run dev
```
