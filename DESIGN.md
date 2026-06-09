# Design System: Dos Ruedas Pro

## 1. Visual Theme & Atmosphere
A high-utility, **"Cockpit Dense" (8/10)** interface engineered for last-mile logistics precision in Mar del Plata. The atmosphere is **"Industrial Modern"** — blending the technical urgency of a flight deck with the polished restraint of a premium corporate suite. Layouts prioritize **"Offset Asymmetry" (6/10)** to avoid generic dashboard patterns, utilizing staggered grids and varied column widths to guide the eye toward critical delivery metrics. Motion follows a **"Fluid CSS" (6/10)** philosophy, employing heavy spring physics that make the interface feel like a well-oiled machine.

## 2. Color Palette & Roles
- **Steel Azure** (#0A0D16) — Deep immersive floor. Primary background surface.
- **Surface Ink** (#121620) — Secondary layer for cards and dashboard panels.
- **High-Vis Silver** (#E2E2E2) — Primary text and data labels. High AAA contrast.
- **Muted Cobalt** (#2D3748) — Tertiary text, metadata, and inactive state borders.
- **Sunflower Gold** (#E2A632) — Single calibrated accent (75% saturation). Used for primary CTAs, active tracking status, and critical alerts.
- **Banned:** No AI Purple, no neon glows, no pure black (#000000).

## 3. Typography Rules
- **Display:** Orbitron — Track-tight, weight-driven hierarchy. Used strictly for branding, tracking codes, and section headers.
- **Body/UI:** Satoshi — Relaxed leading (1.6), 65ch max-width. Primary interface font for all operational data.
- **Mono:** JetBrains Mono — Reserved for numerical metrics, timestamps, and geocoordinates.
- **Banned:** Inter is BANNED. Generic system serifs are BANNED.

## 4. Component Stylings
- **Buttons:** Tactile -1px vertical translate on active state. Sharp 4px (0.25rem) rounding. No outer glows. Primary buttons use Sunflower Gold with Steel Azure text.
- **Cards:** Standard 12px (0.75rem) rounding. No blur shadows; use 1px High-Contrast Outlines (white/10%) to define boundaries. Used only for top-level grouping.
- **Inputs:** Label strictly above. 2px Sunflower Gold border on focus. No floating labels.
- **Loaders:** Custom skeletal shimmer matching the dashboard's dense grid. No circular spinners.
- **Perpetual Motion:** Active route markers and "Live" status indicators must have a subtle infinite pulse or shimmer micro-interaction.

## 5. Layout Principles
- **Asymmetric Grid:** Avoid the "3 equal cards" row. Use 2/3 and 1/3 splits for map-vs-list views.
- **No Overlapping:** Every element (text, images, maps) occupies its own clear spatial zone.
- **A4 Precision:** Print-ready views (labels/invoices) must use strict `mm` units and `page-break-inside: avoid`.
- **Responsive:** Strict single-column collapse below 768px. All metrics must scale via `clamp()`.

## 6. Motion & Interaction
- **Spring Physics:** `stiffness: 100, damping: 20` for all drawer and modal transitions.
- **Staggered Reveals:** Dashboard lists must animate via Y-axis translate with a 0.05s stagger per item.
- **Hardware Acceleration:** Animations limited to `transform` and `opacity`.

## 7. Anti-Patterns (Banned)
- No emojis.
- No `Inter` font.
- No generic serif fonts.
- No pure black (`#000000`).
- No neon/outer glow shadows.
- No oversaturated accents (>80% saturation).
- No 3-column equal card layouts.
- No generic placeholder names ("John Doe").
- No fabricated data or statistics.
- No AI copywriting clichés ("Seamless", "Next-Gen", "Elevate").
- No filler UI text ("Scroll to explore").
