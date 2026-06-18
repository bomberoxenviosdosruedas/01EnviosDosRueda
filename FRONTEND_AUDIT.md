# Frontend Audit Report: Envios DosRuedas

This report contains a deep static analysis of the frontend codebase, focusing on the UI components, layout files, and styling configurations. It extracts the established design system and audits the codebase for hardcoded design values and technical debt.

## PHASE 1: Design System Extraction

The core design system is defined primarily through `DESIGN.md`, `tailwind.config.ts`, and `src/app/globals.css`.

### Color Palette (Tokens)

| Token | Light Mode (HSL) | Dark Mode (HSL) | Usage |
| :--- | :--- | :--- | :--- |
| `primary` | `221.2 83.2% 53.3%` | `217.2 91.2% 59.8%` | Main blue. Primary buttons, accents. |
| `secondary` | `45 93% 47%` | `45 93% 47%` | Yellow/Gold. Call to Actions (CTA), warnings. |
| `background` | `0 0% 100%` | `222.2 84% 4.9%`* | Main application background. |
| `foreground` | `222.2 84% 4.9%` | `210 40% 98%`* | Main text color. |
| `accent` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Soft section backgrounds. |
| `destructive` | `0 84.2% 60.2%` | `0 62.8% 30.6%` | Errors and dangerous actions. |
| `border` / `input`| `214.3 31.8% 91.4%` | `217.2 32.6% 17.5%` | Borders and inputs. |
| `muted` | `210 40% 96.1%` | `217.2 32.6% 17.5%` | Muted backgrounds. |

*\* Note: There is a syntax error in `src/app/globals.css` where some dark mode percentages are improperly formatted as `222% 84% 4.9%` and `210% 40% 98%` instead of standard HSL components.*

### Typography Scale

| Type | Font Family | Variable | Usage |
| :--- | :--- | :--- | :--- |
| Sans | Roboto | `--font-roboto` | Body, paragraphs, forms, button labels, data tables. |
| Display | Orbitron | `--font-orbitron` | Section titles, text logos, hero headings. |

### Spacing & Layout System

- **Container:** Max width of `1400px` (`2xl` screen breakpoint).
- **Section Padding:** Standard `2rem` mobile / `4rem` desktop.
- **Border Radius:** Base `--radius: 0.75rem`. Mapped to `lg` (`0.75rem`), `md` (`calc(0.75rem - 2px)`), `sm` (`calc(0.75rem - 4px)`).

---

## PHASE 2: Hardcode & Technical Debt Audit

The codebase contains numerous hardcoded inline values that bypass the `tailwind.config.ts` theme.

### 1. Arbitrary Color Values (`[#hex]`)

Numerous files use arbitrary brackets for background and text colors instead of semantic theme tokens:
- **Dark Backgrounds:** `bg-[#050810]` is heavily used across pages (`src/app/page.tsx`, `src/app/servicios/...`, `src/components/homenew/...`). `[#0f172a]`, `[#1e293b]`, `[#334155]` are used in `src/components/homenew/HeroPrototype.tsx`.
- **Blues:** `[#2563EB]`, `[#1e40af]` are used in `src/components/repartidor/AssignEtiqueta.tsx` and `HojaDeRutaRepartidor.tsx`.
- **Ambers/Oranges:** `[#E89A17]`, `[#d97706]` are used in `src/components/repartidor/RepartidorDashboard.tsx`.
- **Mercado Libre Flex Brand Colors:** `[#2D3277]` is hardcoded in `src/components/homenew/services-overview.tsx`.

### 2. Arbitrary Spacing & Typography (`[valuepx]`)

- **Typography:** `text-[10px]` is used in multiple places including `src/components/design-v2/LandingPageV2.tsx`, `src/components/repartidor/HojaDeRutaRepartidor.tsx`, and `src/components/express/...`.
- **Sizing:** `h-[320px]`, `w-[320px]`, `max-w-[425px]`, `h-[450px]`, `h-[500px]`, `h-[550px]` appear in layout files and map components (e.g., `src/components/maps/leaflet-map.tsx`, `src/components/contact/contact-map.tsx`).

### 3. Inline Styles

- `style={{ height: '100%', width: '100%' }}` in `src/components/maps/leaflet-map.tsx`.
- `style={{ border: 0 }}` in `src/components/contact/contact-map.tsx`.

### 4. Hardcoded Raw Text Strings

- Forms (`src/components/delivery-form.tsx`): "Ubicar en mapa".
- Scanners (`src/components/repartidor/BarcodeScanner.tsx`): "Detectando código...".
- Badges (`src/components/design-v2/LandingPageV2.tsx`): "POPULAR".

---

## ACTIONABLE REFACTORING PLAN

### 1. Fix CSS Syntax Errors
In `src/app/globals.css`, fix the malformed dark mode HSL variables:
```css
/* Change from */
--background: 222% 84% 4.9%;
--foreground: 210% 40% 98%;
--card: 222% 84% 4.9%;
--popover: 222% 84% 4.9%;

/* Change to */
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--card: 222.2 84% 4.9%;
--popover: 222.2 84% 4.9%;
```

### 2. Centralize Theme in `tailwind.config.ts`
Extend the theme configuration to support the arbitrary values:
```typescript
extend: {
  colors: {
    brand: {
      dark: "#050810",
      flex: "#2D3277",
    },
    // ... other existing colors
  },
  fontSize: {
    xxs: "10px",
  },
  // ...
}
```

### 3. Replace Arbitrary Bracket Classes
Search and replace arbitrary bracket classes with semantic ones:
- Replace `bg-[#050810]` with `bg-brand-dark`.
- Replace `text-[10px]` with `text-xxs`.

Example for `src/app/page.tsx`:
```tsx
// Before
<div className="min-h-[400px] bg-[#050810]" />
// After
<div className="min-h-[400px] bg-brand-dark" />
```

### 4. Remove Inline Styles
Use Tailwind utility classes directly on elements.

Example for `src/components/maps/leaflet-map.tsx`:
```tsx
// Before
<div style={{ height: '100%', width: '100%' }}>
// After
<div className="h-full w-full">
```
