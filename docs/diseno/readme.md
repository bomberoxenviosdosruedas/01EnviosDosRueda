# Envios Dosruedas — Design System

Envios Dosruedas is a **courier and urban logistics company based in Mar del Plata, Argentina** ("mensajería y logística urbana sobre dos ruedas"). It sells four shipping products — **Envíos Express** (2-hour delivery), **Envíos LowCost** (same-day, zone-batched), **Envíos Flex** (MercadoLibre Flex partner) and **E-Commerce & 3PL** (fulfilment for PyMEs) — plus B2B quoting for online stores. Real contact details in the source: **223 660-2699**, WhatsApp `wa.me/542236602699`, office **Friuli 1972, Mar del Plata**, `hola@enviosdosruedas.com`.

## Sources

| Source | What was taken |
| --- | --- |
| https://github.com/dosruedasmdq/BaseEnviosDosruedas (branch `main`) | Colour + type tokens (`src/app/globals.css`), brand rules (`AGENTS.md`), style brief (`docs/blueprint.md`), shadcn/ui primitives (`src/components/ui/*`), layout + hero + section components, logo and photography (`public/`) |
| Uploaded font files | `AntonSC-Regular.ttf`, `BebasNeue-Regular.ttf` → `assets/fonts/` |

Explore that repository further before building anything production-facing — it is the ground truth for this system, and the `src/components/ui` folder holds the full shadcn primitive set the site is assembled from.

**Products represented:** one surface exists today — the **public marketing website** (Next.js 15 App Router, React 19, Tailwind v4, Firebase, Genkit). The repo also ships two internal documentation routes (`/design-tokens`, `/components-library`). There is **no customer app or dashboard** in the sources, so none is recreated here.

## Index

- `styles.css` — the one file consumers link. Imports only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `guidelines/` — 19 foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — reusable primitives, grouped: `core/`, `forms/`, `feedback/`, `navigation/`, `data/`
- `ui_kits/website/` — click-through recreation of the marketing site (see its README for the screen → source map)
- `assets/` — `logo_envios.webp`, `fonts/`, `img/` (service photography and backgrounds)
- `SKILL.md`, `github.md`

### Components

**core/** Button · Badge · Card (CardHeader, CardTitle, CardDescription, CardContent, CardFooter) · Separator · Skeleton · Avatar
**forms/** Input · Textarea · Label · Checkbox · RadioGroup · Switch · Select · Slider
**feedback/** Alert · Progress · Toast · Tooltip · Dialog
**navigation/** Tabs · Accordion · NavItem
**data/** Table · StatBlock

**Intentional additions** (no direct counterpart in the repo, needed to express the brand): `NavItem` (extracted from the inline navbar markup), `StatBlock` (the eyebrow-over-figure pattern repeated in the quoting card and hero docks).

**Not built** (present in the repo as stock shadcn, no brand-specific styling to preserve): calendar, carousel, chart, menubar, sidebar, sheet, popover, dropdown-menu, collapsible, scroll-area, form, alert-dialog, label-primitive. Ask if you want any of them added.

---

## Content fundamentals

**Language: Argentinian Spanish, voseo.** "Cotizá", "Elegí el canal", "Contanos", "Necesitás" — never "cotiza/elige" (peninsular) and never English in customer-facing copy. Interface labels stay Spanish: *Cotizar Ya*, *Ver Tarifas*, *Rastrear Guía*, *Solicitar Envío*.

**Person: "nosotros" for the company, "vos/tu" for the reader.** "Somos tu partner estratégico"; "Llegamos a cada rincón de la ciudad"; "Elegí el canal que mejor se adapte al ritmo de tu e-commerce."

**Casing.** Headlines are ALL CAPS by rule (the global stylesheet uppercases every `h1–h6`). Eyebrows, badges and button labels are uppercase with wide tracking. Body copy is normal sentence case. Never Title Case sentences.

**Tone: fast, blunt, proof-driven — a promise plus its consequence.** "Si no llegamos a la hora acordada, el costo de tu envío corre por nuestra cuenta. **Sin excusas.**" · "Sin formularios complejos ni esperas." · "Rápido, transparente y sin sorpresas." · "Diseñado para la velocidad."

**Devices used repeatedly**
- Question headlines answered by the page: "**¿HABLAMOS AHORA?**", "**¿Listo para enviar con Los Mejores?**"
- Two-word noun stacks for headings: "Velocidad Extrema", "Cobertura Total", "Express 24h"
- Short negations as reassurance: "Sin Contrato", "Sin Registro", "Sin Excusas", "Sin Sorpresas"
- A number as the payoff: "+1M Envíos", "Menos de 60m", "3.7 km", "$4.600 ARS"
- Prices always formatted with a dot thousands separator and an ARS suffix in small caps type.

**Emoji.** Not part of the brand system — a couple of stray emoji exist in the repo (⚡, 📟 in `HeroCotizar.tsx`) but they read as prototype leftovers. **Do not use emoji**; use Lucide icons. The one glyph worth keeping is the arrow **➜ / →**, used inline in CTAs and route strings ("Centro ➜ Terminal").

**Vibe.** Sports-poster energy applied to a service business: monumental type, one loud accent colour, hard-edged blocks, everything sounds like it is already moving.

---

## Visual foundations

**Colour.** Three corporate colours and nothing else — blue `#0636A5`, yellow `#FFEC01`, white `#FFFFFF`. The repo's `AGENTS.md` explicitly forbids generic Tailwind greys ("queda estrictamente prohibido... slate, zinc, gray"). Neutrals come only from the shadcn HSL channels (`--muted 210 40% 96.1%`, `--muted-foreground 215.4 16.3% 46.9%`, `--border 214.3 31.8% 91.4%`). Blue is the primary and the section-invert surface; yellow is the accent — used for CTAs, icons on blue, active underlines, status dots, and small knockout highlights, **never for large areas of body text**. `docs/blueprint.md` names a slightly different yellow `#FFF12E`; `#FFEC01` is authoritative (kept as `--brand-yellow-alt`).

**Type.** Three families, strictly assigned: **Anton SC** (`--font-headline`) for H1/H2 and any impact figure, always uppercase, `letter-spacing: -0.05em`, line-height 0.8–0.85; **Bebas Neue** (`--font-subheading`) for subtitles, labels, badges, table headers and marketing button text; **Outfit** (`--font-body`, weights 100–900) for all paragraphs and UI. Two signature display treatments: yellow-on-blue knockout with a 1° rotation, and transparent text with a `2px #0636A5` outline stroke. Display sizes go up to `9rem` on contact/hero pages. Some headlines add `italic`.

**Spacing & layout.** `max-w-7xl` (1280px) centred container, 16/24px side padding, `py-24` (96px) as the standard section rhythm, `gap-8` (32px) between cards, `gap-4` in control rows. Header is **fixed/sticky** at top with a translucent blue background that thickens on scroll (py-5 → py-3). Control heights ladder 36/40/44 px for UI and 56/64 px for marketing CTAs.

**Backgrounds.** Three modes: plain white; `bg-muted/30` for alternating sections; and full brand-blue invert sections. Blue sections layer a **radial white glow at centre** plus large blurred colour blooms (yellow at 10–18%, white at 10%) at 80–130px blur, and sometimes faint concentric rings at `rgba(255,255,255,0.05)`. A recurring device is a **giant ghost wordmark** ("ENVÍOS DOS RUEDAS") at `text-[15vw]` and ~4.5% white behind hero content, plus a **skewed yellow slab** (`-skew-x-12`, yellow at 10%) bleeding off the right edge of CTA bands. No gradients as decoration for their own sake; no textures or hand-drawn illustration.

**Imagery.** Real photography of couriers, boxes and city maps — warm daylight, mildly saturated, no grain, no duotone. Blue is added on top rather than baked in: `bg-primary/10` with `mix-blend-multiply`, or a bottom-up `rgba(6,54,165,0.95) → 0.35` protection gradient behind text. Photos sit in `rounded-3xl` frames with `shadow-2xl`, occasionally rotated 2°.

**Cards.** White `--surface-card`, `rounded-lg` (8px) by default, `1px` `--border-subtle` hairline, `shadow-sm`. Marketing/service cards drop the border and go `shadow-xl → shadow-2xl` on hover; the recommended plan gets a **4px solid yellow border** and a yellow ribbon strip. Blue-header cards put a solid `brand-blue` block behind the title. Glass cards (on blue) are `rgba(255,255,255,0.05)` + `1px rgba(255,255,255,0.10)` + `backdrop-blur-xl`, `rounded-3xl`.

**Radii.** 0 for the sharp navbar CTA; 6–8px for controls and default cards; 12–16px for icon tiles and dialogs; 24px for glass panels and photo frames; **40px** (`rounded-[2.5rem]`) for large feature panels; pill for badges and status chips.

**Shadows.** Two systems. Neutral elevation (`sm / xl / 2xl`, Tailwind values) for cards and popovers; and **coloured bloom shadows** for brand emphasis: `0 32px 120px -20px rgba(6,54,165,0.15)` under large light panels, `0 12px 40px -6px rgba(255,236,1,0.3)` under yellow CTAs (rising to `0 6px 25px rgba(255,236,1,0.4)` on hover), and `0 0 10px rgba(255,236,1,0.8)` as a glow on live status dots. No inner shadows anywhere.

**Transparency & blur.** Only on blue: the header (`bg-primary/95 backdrop-blur-md`), dropdown panels, glass cards and chips. On light backgrounds transparency appears as `rgba(255,255,255,0.6)` cards over a tinted `#F0F4FF` panel. Text protection uses **gradients over photos** and **solid capsules** over busy areas — both, never neither.

**Borders.** `1px` hairlines everywhere; on blue they become `rgba(255,255,255,0.10)`. The navbar is built as a row of bordered *cells* (`border-r border-white/10`) rather than spaced links. Section eyebrows sometimes use an `8px` yellow left border; section headings a `2px` yellow bottom rule.

**Motion.** Short and functional, always `ease-out`: 200ms for colour, 300ms for transforms and dropdowns, 500ms for the premium hover on contact cards. Dropdowns fade + rise 8px. Active nav items get a **yellow underline that wipes in from the left** (`scaleX(0→1)`, transform-origin left, 300ms). Hero art floats ±7px on a 4.5s loop. Status dots pulse. No bounce, no spring, no parallax.

**Hover states.** Solid buttons darken (`/90`, i.e. brightness ≈0.92); ghost/outline fill with the yellow accent; icons scale to 1.1; cards lift to `scale(1.03)` and swap their border to yellow while shadow deepens; icon tiles invert (blue tile → yellow tile, yellow glyph → blue glyph). Nav text goes `white/80 → white` with a `white/5` backplate.

**Press states.** `scale(0.98)`, no colour change. Focus is a 2px `--focus-ring` (brand blue) offset from the page background by 2px.

---

## Iconography

**Lucide (`lucide-react` 0.468.0) is the only icon system** in the sources — no custom icon font, no SVG sprite, no PNG icons, no emoji in the design system. Default size 16–24px (`w-4 h-4` in nav, `w-5 h-5` in lists, `h-6 w-6`–`h-8 w-8` in feature tiles), stroke weight left at Lucide's default 2, never filled.

Glyphs actually used in the repo: `home, bike, chevron-down, clock, help-circle, info, mail, menu, phone, share-2, shopping-bag, trending-down, x, zap, arrow-right, package, package-open, map-pin, fast-forward, shield-check, globe, credit-card, headphones, message-square, chevron-right, facebook, twitter, instagram, paintbrush, type, layout, send, separator`.

**Colour rule:** on blue surfaces icons are `--brand-yellow`; on white they are `--brand-blue` or inherit `--text-muted`. Icon tiles are `rounded-xl/2xl` squares (48–56px) in solid blue or solid yellow, glyph in the opposite colour.

**Substitution flagged:** `lucide-react` is a React package and cannot be loaded here, so cards and UI kits pull the *same* icon set as SVGs from the pinned CDN `cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/<name>.svg` — identical artwork, same version. In production code keep using `lucide-react`.

**Logo.** `assets/logo_envios.webp` is the only mark in the sources and is used as-is; the lockup pairs it with the wordmark set in Anton SC uppercase, "Envios" in white and "Dosruedas" in yellow (on blue) or both in blue (on white). No alternate mark, monochrome version, or favicon-quality SVG exists — request one if you need vector output.

## Fonts

Anton SC and Bebas Neue ship as the user-provided TTFs in `assets/fonts/`. **Outfit** was not provided as a file and is loaded from Google Fonts (`@import` in `tokens/fonts.css`), matching the repo, which loads all three from Google. Send the Outfit binaries if you need fully offline rendering.
