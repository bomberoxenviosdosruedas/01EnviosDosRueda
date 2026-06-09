# Layout Architecture

## Grid System
- Uses Tailwind's native Flexbox and CSS Grid capabilities.
- The `DESIGN.md` specifies a 12-column fluid grid for desktop and 4 columns for mobile.
- The `container` class is customized in `tailwind.config.ts`:
  - `center: true`
  - `padding: "2rem"`
  - `screens.2xl: "1400px"`

## Page Layouts (Next.js App Router)
- Built on Next.js 14+ App Router (`src/app/`).
- Main layout is likely defined in `src/app/layout.tsx`.
- Dark mode is supported via `next-themes` (implied by `theme-provider.tsx` and `.dark` class in `globals.css`).

## Responsive Behavior
- Standard Tailwind breakpoints are used.
- Fluid layouts are encouraged, with a maximum width defined by `max-w-screen-2xl` or the custom `container` utility.

## Print Layout
- `globals.css` contains extensive `@media print` rules specifically for printing A4 labels.
- Hides non-essential elements (`.no-print`, `print-only`).
- Enforces a grid for printing labels: `.labels-container-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10mm; }`
