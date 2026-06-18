# Design System: Envios DosRuedas

## 1. Visual Theme & Atmosphere
A restrained, high-density dashboard interface with confident asymmetric layouts and fluid spring-physics motion. The atmosphere is an authoritative, hyper-efficient "night-ops" environment—like a well-lit logistics command center or a high-performance IDE. The aesthetic is clean, rigorous, and unapologetically technical, balancing the raw energy of aggressive logistics with the calculated reliability of modern SaaS.

## 2. Color Palette & Roles
- **Off-Black Base** (#030710) — Primary background surface for the application canvas.
- **Deep Navy Surface** (#0A0D16) — Card and container fill.
- **Charcoal Ink** (#18181B) — Secondary background shifts for modal depth.
- **Muted Steel** (#71717A) — Secondary text, descriptions, metadata.
- **Canvas White** (#F9FAFB) — Primary text and highly readable data points.
- **Whisper Border** (rgba(255,255,255,0.1)) — Card borders, 1px structural lines for technical schematics.
- **Sunflower Gold Accent** (#FFE600) — Single accent for CTAs, critical alerts, active states, and focus rings.

## 3. Typography Rules
- **Display:** Orbitron — Track-tight, controlled scale, weight-driven hierarchy. Reserved exclusively for major headers and tracking codes to evoke a technical, "on-the-move" vibe.
- **Body:** Roboto — Relaxed leading, 65ch max-width, neutral secondary color. High legibility for operational data.
- **Mono:** JetBrains Mono — For code, metadata, timestamps, high-density numbers, and tracking statuses.
- **Banned:** Inter, generic system fonts for premium contexts. Serif fonts banned in dashboards.

## 4. Component Stylings
* **Buttons:** Flat, no outer glow. Tactile -1px translate on active. Accent fill for primary, ghost/outline for secondary.
* **Cards:** Generously rounded corners (1rem). Diffused whisper shadow or strict 1px light border. Used only when elevation serves hierarchy. High-density: replace with border-top dividers.
* **Inputs:** Label above, error below. Focus ring in accent color. No floating labels. Darker background with 1px border.
* **Loaders:** Skeletal shimmer matching exact layout dimensions. No circular spinners.
* **Empty States:** Composed, illustrated compositions — not just "No data" text.

## 5. Layout Principles
Grid-first responsive architecture. Asymmetric splits for Hero sections.
Strict single-column collapse below 768px. Max-width containment (1400px).
No flexbox percentage math. Generous internal padding. No overlapping elements — every element occupies its own clear spatial zone.

## 6. Motion & Interaction
Spring physics for all interactive elements (stiffness: 100, damping: 20). Staggered cascade reveals.
Perpetual micro-loops on active dashboard components. Hardware-accelerated transforms only.

## 7. Anti-Patterns (Banned)
- No emojis anywhere.
- No `Inter` font.
- No generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`).
- No pure black (`#000000`).
- No neon/outer glow shadows.
- No oversaturated accents (except the primary Sunflower Gold).
- No excessive gradient text on large headers.
- No custom mouse cursors.
- No overlapping elements — clean spatial separation always.
- No 3-column equal card layouts.
- No generic names ("John Doe", "Acme", "Nexus").
- No fake round numbers (`99.99%`, `50%`).
- No fabricated data or statistics — never generate metrics, performance numbers, uptime percentages, response times. Use placeholder labels like `[metric]`.
- No fake system/metric sections — "SYSTEM PERFORMANCE METRICS", "KEY STATISTICS" filled with invented data are BANNED.
- No `LABEL // YEAR` formatting.
- No AI copywriting clichés ("Elevate", "Seamless", "Unleash", "Next-Gen").
- No filler UI text: "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons.
- No broken Unsplash links — use `picsum.photos` or SVG avatars.
- No centered Hero sections.
