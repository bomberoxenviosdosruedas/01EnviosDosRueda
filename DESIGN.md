---
tokens:
  colors:
    primary: "hsl(221.2 83.2% 53.3%)" # Steel Azure (#2563EB)
    secondary: "hsl(45 93% 47%)" # Sunflower Gold (#E89A17)
    background: "hsl(0 0% 100%)"
    foreground: "hsl(222.2 84% 4.9%)"
    muted: "hsl(210 40% 96.1%)"
    accent: "hsl(210 40% 96.1%)"
    destructive: "hsl(0 84.2% 60.2%)"
    border: "hsl(214.3 31.8% 91.4%)"
    input: "hsl(214.3 31.8% 91.4%)"
    ring: "hsl(222.2 84% 4.9%)"
    dark:
      background: "hsl(225 57% 3.9%)"
      foreground: "hsl(210 40% 98%)"
      primary: "hsl(217.2 91.2% 59.8%)"
  typography:
    font_families:
      sans: "Roboto, sans-serif"
      display: "Orbitron, monospace"
      code: "JetBrains Mono, monospace"
    base_size: "16px"
    weights:
      regular: 400
      medium: 500
      semibold: 600
      bold: 700
      black: 900
    scale:
      xs: "12px"
      sm: "14px"
      md: "16px"
      lg: "18px"
      xl: "20px"
      "2xl": "24px"
      "3xl": "32px"
      "4xl": "48px"
  shapes:
    border_radius:
      none: "0px"
      sm: "0.25rem" # 4px
      default: "0.5rem" # 8px
      md: "0.75rem" # 12px
      lg: "1.0rem" # 16px
      xl: "1.5rem" # 24px
      full: "9999px"
    spacing_base: "4px"
  layout:
    container_max_width: "1400px"
    gutters:
      mobile: "16px"
      desktop: "32px"
---

# Overview
**Dos Ruedas Pro** utilizes a "Corporate / Modern" visual identity inspired by industrial dashboards and high-precision logistics systems. The design philosophy emphasizes reliability, speed, and high information density. It is specifically tailored for the Mar del Plata urban context, balancing technical precision with a localized Argentine tone.

# Colors
The color palette is built around **Steel Azure** (#2563EB) for institutional authority and **Sunflower Gold** (#E89A17) for high-visibility actions and CTAs.
- **Primary (Steel Azure):** Used for headers, primary actions, and brand reinforcement.
- **Secondary (Sunflower Gold):** Reserved for critical call-to-actions, status highlights, and interactive accents.
- **Surface & Backgrounds:** Utilizes tonal layers (Neutral Light #F8F9FA) rather than pure white to reduce eye strain in high-density dashboards.
- **Accessibility:** Text-to-background contrast is strictly maintained at AAA levels for all critical UI labels.

# Typography
The system uses a dual-font approach to separate brand identity from technical utility.
- **Display (Orbitron):** Used exclusively for headers, brand elements, and large decorative numbers. It conveys an industrial, technological feel.
- **Sans (Roboto):** The primary body font, chosen for its high legibility across all screen sizes and densities.
- **Code (JetBrains Mono):** Used for tracking numbers, technical labels, and high-precision data fields.
- **Hierarchy:** Strictly follows a predefined scale from 12px (labels) up to 48px (hero displays), with specific mobile-responsive overrides (e.g., 20px headlines).

# Shapes
The geometry of the interface is modern and approachable yet structured.
- **Border Radius:** The standard corner rounding is **0.75rem (12px)**. Interactive elements like buttons may use a tighter **0.5rem (8px)** or sharp edges in specialized hero sections to denote "industrial" precision.
- **Depth:** Elevation is achieved through low-contrast outlines (`--border`) and subtle tonal shifts rather than heavy drop shadows.
- **Grid:** Layouts are based on a **4px baseline grid**. All spacing (paddings, margins) must be multiples of 4.

# Components
- **Buttons:** Support multiple variants including 'gradient' (for hero CTAs) and 'outline' (for secondary actions). Hero buttons often feature a 'no-radius' industrial style.
- **Cards:** Used for modular data presentation. They feature a 1px border and a subtle shadow-sm.
- **Inputs:** High-contrast fields with focus rings based on the primary brand color.
- **Navigation:** Mobile-first vertical hierarchy with a persistent BottomNav for courier-facing views.
- **Dashboards:** Designed for speed, replacing complex dropdowns with segmented controls (Tabs) for faster interaction.

# Do's and Don'ts

### Do
- Use Argentine Spanish with **voseo** (e.g., "Cotizá", "Seguí tu envío").
- Maintain **A4 precision** for operational documents using `mm` units and page-break controls.
- Use **Server Components** for data-heavy views to ensure performance.
- Group secondary conditions in **Accordions** to maintain vertical rhythm.

### Don'ts
- **No Pure Black (#000000):** Use Brand Dark (#050810) or Dark HSL for depth.
- **No Generic Serifs:** Stick to the Roboto/Orbitron pairing.
- **No 3-Column Equal Grids:** Favor asymmetric layouts or single-column mobile-first stacks.
- **No Destruction of Real Data:** Never truncate critical logistics information for aesthetics; implement pagination or font-scaling instead.
