# CLAUDE.md

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build with Turbopack
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

Next.js 15 personal website using the App Router. Three-page structure with neumorphic bento grid design.

### Pages
- `app/layout.tsx` — root layout with title template (`%s | Ethan Jin`)
- `app/page.tsx` — About / home page (`/`) — **client component** with GSAP scrollytelling
- `app/experience/page.tsx` — Experience page (`/experience`) — stacked neumorphic cards
- `app/projects/page.tsx` — Projects page (`/projects`) — **client component** with flip cards + modal

### Homepage Components
- `app/components/navbar.tsx` — floating **glassmorphic** navbar with sliding pill indicator (measured offsets via refs, spring animation via framer-motion)
- `app/components/typewriter.tsx` — typewriter effect cycling through interests (client component)
- `app/components/tech-stack.tsx` — 2-column grid of 16 tech icons (react-icons), neumorphic inset tiles with hover pop
- `app/components/currently-into.tsx` — fan/stack image gallery (3 images), click-to-rotate, front image centered with back images faded/rotated, front image pops on hover (scale 1.1)
- `app/components/currently-building.tsx` — "Currently Building..." card with project screenshot (galaxi-photo.png), title + description, screenshot pops on hover (scale 1.1, contained by overflow-hidden)
- `app/components/color-toggle.tsx` — theme toggle button switching between UCLA and TPHS color schemes, persists to localStorage, desktop only
- `app/components/github-graph.tsx` — live GitHub contribution heatmap fetched from public API (jogruber.de), UCLA blue color scale, SVG grid with **glassmorphic** hover tooltip pill
- `app/components/currently-learning.tsx` — skill pills with branded icons (tech-tile hover effect), currently: Rust, Kubernetes, TensorFlow, AWS
- `public/images/` — logos, screenshots, and hobby images

### Key Libraries
- **GSAP** + `@gsap/react` — scrollytelling animations on homepage (ScrollTrigger, pinned hero, scrubbed timeline), mobile scroll-reveal animations, SplitText bio card reveal
- **framer-motion** — navbar pill spring animation
- **react-icons** — tech stack and learning skill icons

## Styling

- Tailwind v4 with `tailwind.config.js` and `postcss.config.mjs`
- Neumorphic bento grid design system with glassmorphic accents

## Typography

- **Display font:** Libre Baskerville (Google Fonts) — used for headings, navbar links, bento card titles, Experience/Projects page headings. Applied via CSS variable `--font-display` and utility class `.font-display`.
- **Body font:** DM Sans (Google Fonts) — used for all body text, bio card, typewriter, descriptions. Applied via CSS variable `--font-body` on `html, body`.
- Both fonts loaded via `next/font` in `app/layout.tsx` with `display: "swap"` and CSS variable strategy.

## Design System

- **Background:** Soft silver `#E5E5EA` with fixed SVG grain texture overlay (feTurbulence fractalNoise, tiling 256px, opacity 0.7 UCLA / 0.35 TPHS) — gives a paper-like feel that breaks up flat digital surfaces
- **Neumorphic shadows:** dark `#c2c2c7`, light `#ffffff` (light source: top-left)
- **Brand colors:** UCLA Blue `#2774AE`, UCLA Gold `#FFD100` — used for headings, buttons, accents
- **Text:** Primary `#1C1C1E`, Secondary `#3C3C43`
- **UCLA palette (extended):** Darkest Blue `#003B5C`, Darker Blue `#005587`, Lightest Blue `#8BB8E8`, Darkest Gold `#FFB81C`
- **Gradient mid:** `#7CB850` (yellowish-green) — bridges blue-to-gold in typewriter and name gradients
- **GitHub graph levels:** shadow-dark (0), `#8BB8E8` (1), `#2774AE` (2), `#005587` (3), `#003B5C` (4)
- All CSS variables defined in `app/globals.css` under `:root`
- **TPHS theme** (alternate): activated via `[data-theme="tphs"]` on `<html>`, overrides all CSS variables
  - Background: `#1C1C1E`, Shadow dark: `#000000`, Shadow light: `#353537`
  - Warm Red `#C4362A` (replaces UCLA Blue), Yellow `#FFD700` (replaces UCLA Gold)
  - Gradient mid: `#FF6B35` (warm orange bridge)
  - Text Primary: `#F2F2F7`, Text Secondary: `#AEAEB2`
  - Nav active color: `--nav-active: #C4362A` (matches `--ucla-blue` in TPHS; UCLA uses `--nav-active: #2774AE`)
  - Toggled by `color-toggle.tsx`, persisted to localStorage

### Glassmorphism Classes

Hybrid design hierarchy: neumorphic cards as the base "solid" layer, glassmorphic elements as the "floating" layer. All glass classes have TPHS theme variants in `globals.css`.

- **`.glass-card`** — semi-transparent background (`rgba(255,255,255,0.25)`), `backdrop-filter: blur(20px)`, subtle border + shadow. Used for navbar, project flip card backs. TPHS variant uses darker glass (`rgba(255,255,255,0.08)`) for contrast against dark background.
- **`.glass-pill`** — prominent glass (`rgba(255,255,255,0.55)`), `blur(12px)`, subtle shadow. Used for navbar pill indicator, project tech stack pills, project link buttons.
- **`.glass-tooltip`** — medium glass (`rgba(255,255,255,0.4)`), `blur(16px)`. Used for GitHub graph hover tooltip.

### Profile Overlay Buttons

Glassmorphic buttons overlaid on the profile picture. Base class `.profile-overlay-btn`: `rgba(255,255,255,0.75)`, `blur(16px)`, scales to 1.1 on hover. Theme-identical across UCLA and TPHS.

- **`.resume-btn`** — solid gold fill (`#FFD100`), dark text (`#1C1C1E`), hover darkens to `#FFB81C`. Hardcoded colors (not CSS variables) so it looks identical on both themes.
- **`.linkedin-btn`** — LinkedIn blue text (`#0A66C2`), hover fills solid blue with white text.
- **`.github-btn`** — dark text (`#333`), hover fills solid dark (`#24292e`) with white text.

## Homepage Scrollytelling

The homepage uses GSAP ScrollTrigger for Apple-style scrollytelling. The page is 300vh tall with the hero section pinned.

**Initial view (no scroll):** Navbar, heading (Libre Baskerville, with "Ethan" in animated flowing gradient + italic), profile picture (dead center), bio card (SplitText line-by-line reveal on mount, key phrases highlighted in UCLA Blue via `.bio-highlight`), typewriter (4-stop gradient: darkest-blue → blue → green-yellow → gold), and a bobbing "Scroll down" indicator.

**Hidden initially (CSS `.bento-reveal`):** Tech Stack, Currently Into, Currently Building, Color Toggle, GitHub Graph, Currently Learning — these are hidden via CSS (`visibility: hidden; opacity: 0`) to prevent FOUC, then revealed by GSAP.

**Scroll reveal order (scrubbed timeline):**
1. Scroll indicator fades out
2. Currently Into drops in, then Tech Stack slides from left
3. Currently Building drops from top
4. Color Toggle slides from right
5. GitHub Graph rises from below
6. Currently Learning rises from bottom-right

**Mobile scroll reveal (CSS `.mobile-reveal`):** On viewports below 1440px, bento cards use per-element ScrollTrigger animations (fade up from 30px, triggered at 85% viewport). Cards reverse on scroll-back (`toggleActions: "play none none reverse"`). Heading and profile picture remain always visible.

**Architecture:** Outer wrapper divs handle CSS positioning (Tailwind transforms). Inner `.bento-reveal` divs are GSAP animation targets. This avoids transform conflicts between Tailwind and GSAP.

## Bio Card Text

The bio card uses GSAP SplitText for a line-by-line reveal animation on mount (~0.9s total). Key phrases ("Computer Engineering", "social good", "applied AI/ML", "reach out") are highlighted with `.bio-highlight` (UCLA Blue, font-weight 600). Text is hidden initially via `.bio-text-hidden` CSS class to prevent FOUC; GSAP removes the class and runs `fromTo` with explicit start/end states.

## Name Gradient

The italicized "Ethan" in the heading uses `.name-gradient` — a 6-stop animated gradient (`background-size: 300%`) that cycles via `background-position` animation (6s ease-in-out infinite), creating a flowing color shift effect. Uses `display: inline-block` with padding/negative-margin to prevent italic glyph clipping from `background-clip: text`.

## Homepage Layout

Profile picture is the **center anchor** of the page (absolute center). All other elements are positioned relative to it using `absolute top-1/2 left-1/2` with translate offsets.

### Element Positions (all from center = 50vw, 50vh)

**Top row (top-6 = 24px from viewport top):**
- Currently Into (300px): `top-6 left-1/2 -translate-x-[calc(100%+190px)]` — left-aligned with bio card
- Currently Building (520px): `top-6 left-1/2 translate-x-[190px]` — h-[250px], right edge at 50vw+710px

**Center row (vertically centered at 50vh):**
- Heading + subheading: above profile, `top-1/2 -translate-y-[calc(100%+200px)]`
- Tech stack (180px): far left, `top-6` with `height: calc(50vh + 295px)` — spans from navbar level to GitHub graph bottom, left edge at 50vw-710px
- Bio card (300px): left of profile, `-translate-x-[calc(100%+190px)]` — left edge at 50vw-490px
- Profile picture (280px + padding): dead center, `-translate-x-1/2 -translate-y-1/2`
- Typewriter + Color Toggle (flex row): right of profile, `translate-x-[190px]`, `flex items-stretch gap-5`, dynamic `minHeight` computed at runtime to match bio card gap ratios
  - Typewriter: `w-[300px]`, text centered vertically (`flex items-center justify-center`), right edge at 50vw+490px
  - Color Toggle: `w-[200px]`, right edge at 50vw+710px (aligns with currently-building/learning right margin)

**Bottom row (below center content, bottom-aligned with tech stack):**
- GitHub graph (700px): `translateX(-490px) translateY(180px)`, h-[139px] — left-aligned with bio card, bottom at 50vh+319px
- Currently Learning (480px): `translateX(230px) translateY(116px)`, h-[203px] — 20px right of GitHub, bottom at 50vh+319px

### Key Position References
- **Tech stack left margin** from viewport left = `50vw - 710px` — mirrored on right side for right-margin alignment
- **Bio card left edge** = `50vw - 490px` — GitHub graph and bottom row align to this
- **Tech stack bottom** = `50vh + 319px` — bottom-row cards align to this

## Navbar

The navbar uses `glass-card` (outer) and `glass-pill` (sliding indicator) for a glassmorphic floating appearance. The pill indicator uses **measured offsets** (not framer-motion `layoutId`) to avoid GSAP/scroll layout interference. Each nav link's `offsetLeft`/`offsetWidth` is measured via refs in `useLayoutEffect`, and the pill animates to those values with a spring transition. Re-measures on window resize for responsive adaptation. The pill only renders once measurements exist (`initial={false}`), preventing mount animation flash.

## Experience Page

Stacked neumorphic cards (`neu-raised rounded-2xl`). Each card has:
- Logo (per-logo size: MDD Lab 80px, ACM 48px, SDSC 48px, MAP 80px) in a fixed 52x52 container
- Company name (bold), role (UCLA Blue), date pill (`neu-inset rounded-full`)
- Bullet points with UCLA Blue dots
- **Expand/collapse:** uses two independent `grid-template-rows: 0fr/1fr` sections (summary collapses, bullets expands) for proper height-based animation. Expand: 500ms, collapse: 400ms.

## Projects Page

Grid of flip cards (`grid-cols-2`). Projects: Cartelligence, ClassTime (AI Resume Critiquer removed).
- **Front:** Screenshot + name + caption (neumorphic `neu-raised`)
- **Back (hover):** Glassmorphic (`glass-card`) with description + tech stack pills (`glass-pill`) + link buttons (`glass-pill`) + "Click for details"
- **Modal (click):** Full screenshot, description, bullet points, tech stack, GitHub link
- Card flip uses CSS `transform: rotateY(180deg)` with `backface-visibility: hidden`

## Layout Constraints

- **Profile = dead center** — never displaced by other elements
- **Nothing exceeds navbar top** — navbar is `fixed top-6`; no bento card's top edge should go above 24px
- **Consistent gaps** — maintain ~20px gaps between adjacent bento cards
- **Symmetrical margins** — right-side card margins mirror the tech stack's left margin from the viewport edge
- **Bottom alignment** — GitHub graph and Currently Learning bottom edges align with tech stack bottom
- **Gap consistency** — gap between a top-row card bottom and its center-row neighbor should be consistent (viewport-dependent but visually matched)
- **Left-alignment** — "Currently Into" card left-aligns with bio card below it
- **Spacing over size** — when overflow or spacing issues arise, shrink internal content (images, tiles, padding) rather than breaking gaps or boundaries
- **Desktop-first** — mobile layout deferred

## GitHub Integration

- Uses public API: `https://github-contributions-api.jogruber.de/v4/Ethjin8?y=last`
- No auth token needed — only counts public contributions (shows ~261 vs GitHub's ~314 which includes private)
- Label reads "X Contributions (Public)" to clarify
- SVG is height-constrained (`h-full w-auto`) inside a fixed-height container to prevent clipping
