# Design Tokens - Envios DosRuedas

## Colors
Extracted from `src/app/globals.css`, `tailwind.config.ts`, `DESIGN.md` and `README.md`.

### Theming
**Light Mode (Default Base)**
- Background: `hsl(0 0% 100%)` (#FFFFFF)
- Foreground: `hsl(222.2 84% 4.9%)` (#020817)

**Dark Mode**
- Background: `hsl(225 57% 3.9%)` (#040914) -> Maps to `#050810` / `#030710` (Level 0/Floor) from DESIGN.md
- Foreground: `hsl(210 40% 98%)` (#F8FAFC)

### Brand / Semantic Colors
- **Primary / Action Yellow**: `hsl(217.2 91.2% 59.8%)` (Dark mode) / `hsl(221.2 83.2% 53.3%)` (Light mode)
  - _Note: DESIGN.md specifies `#FFE600` / `#FDE400` as Action Yellow. The CSS uses a Blue as primary and Yellow as secondary._
- **Secondary / Surface**: `hsl(45 93% 47%)` -> Yellow-ish
  - _Note: DESIGN.md specifies `#00246B` / `#0A0D16` as Nautical Blue._
- **Accent / Interaction**: `hsl(217.2 32.6% 17.5%)` (Dark) / `hsl(210 40% 96.1%)` (Light)
  - _Note: DESIGN.md specifies `#0047AB` / `#001A4D` as Cobalt Blue._
- **Muted**: `hsl(217.2 32.6% 17.5%)` (Dark)
- **Destructive**: `hsl(0 62.8% 30.6%)` (Dark)
- **Border / Input**: `hsl(217.2 32.6% 17.5%)` (Dark)
- **Ring**: `hsl(217.2 91.2% 59.8%)` (Dark)

## Typography
Extracted from `tailwind.config.ts` and `src/app/globals.css`.

### Font Families
- **Display**: `Orbitron` (`var(--font-orbitron)`, `monospace`)
- **Sans (Body)**: `Roboto` (`var(--font-roboto)`, `sans-serif`)

### Sizes & Weights
- **text-display-lg**: 48px, Weight 900, Line Height 1.1, Letter Spacing -0.02em (Orbitron)
- **text-display-md**: 32px, Weight 700, Line Height 1.2, Letter Spacing -0.01em (Orbitron)
- **text-headline-lg**: 24px, Weight 700, Line Height 1.3, Letter Spacing 0.02em (Orbitron)
- **text-headline-lg-mobile**: 20px, Weight 700, Line Height 1.3 (Orbitron)
- **text-headline-md**: 24px, Weight 600, Line Height 1.3 (Orbitron)
- **text-body-lg**: 18px, Weight 400, Line Height 1.6 (Roboto)
- **text-body-md**: 16px, Weight 400, Line Height 1.5 (Roboto)
- **text-label-md**: 14px, Weight 700, Line Height 1.2, Letter Spacing 0.05em (Roboto)
- **text-label-sm**: 12px, Weight 400, Line Height 1.2, Letter Spacing 0.1em (Roboto)
- **text-code-tracking**: 16px, Weight 400, Line Height 1.0, Letter Spacing 0.1em (Orbitron)

## Spacing
Extracted from `tailwind.config.ts`.
- `base`: 4px
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 32px
- `xl`: 64px
- `gutter`: 16px
- `margin-mobile`: 16px
- `margin-desktop`: 32px
- `container-max`: 1400px

## Border Radius
Extracted from `tailwind.config.ts`.
- `sm`: 0.25rem (4px)
- `DEFAULT`: 0.5rem (8px)
- `md`: 0.75rem (12px)
- `lg`: 1rem (16px)
- `xl`: 1.5rem (24px)
- `full`: 9999px

## Breakpoints
Standard Tailwind breakpoints (implied):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px (Customized in `tailwind.config.ts`)
