# Master Prompt for Google Stitch AI: Web Redesign System
**Role**: Expert Design Engineer & Lead UI Architect  
**Objective**: Generate highly consistent, premium frontend screens for *Dos Ruedas Pro / Envios DosRuedas* that align exactly with the existing repository architecture, database schemas, and visual guides.

---

## 1. Brand Identity & Copywriting Tone

When generating UI text, titles, button labels, and marketing copy, strictly enforce the following brand framework:
*   **Vibe**: High-tech, reliable, premium, and lightning-fast. A digital "beacon" guiding urban logistics in Mar del Plata.
*   **Copywriting (Argentine Voseo)**: All customer-facing text must leverage natural Argentine *voseo* (*cotizá tu envío*, *seguí tu pedido en tiempo real*, *tenés el control absoluto*, *hablá con nosotros*, *ahorrá con ruteo inteligente*). Never use neutral Spanish or *tuteo*.
*   **Values**: Speed, security, real-time operational feedback, and local trust.
*   **Tagline**: "Tu solución confiable".

---

## 2. Visual Hierarchy & Core Layouts

Structure generated pages using a clear hierarchy, dividing sections horizontally to allow background gradients to breathe.

### 2.1 Critical Page Structuring
1.  **Above-the-Fold (LCP Critical Area)**:
    *   *Hero Section*: Dark background (`#050810`), prominent displays featuring the **Orbitron** font, and glowing blue gradients. Key action CTA: a secondary Gold button (`#E89A17`) leading to the Cotizador (`/cotizar/express`).
2.  **Below-the-Fold (Modular Services Overview)**:
    *   Grid sections detailing the services: `Envíos Express`, `Envíos LowCost`, `Envíos Flex (MeLi)`, and `Plan Emprendedores`.
    *   Use low-opacity frosted glass cards (`bg-white/10` with `backdrop-blur-md` and `border-white/20`) to separate items.
3.  **Utility Integrations**:
    *   *Cotizador (Calculator)*: Sleek split-view. Form input controls on the left; geocoded Leaflet map frame showing routing on the right.
    *   *Seguimiento (Tracking Timeline)*: Vertical kinetic timeline using `PENDIENTE`, `EN_CURSO`, `ENTREGADO`, `CANCELADO` status enums.

---

## 3. Technical Constraints & Design Rules

Stitch must maintain absolute technical compliance with the repository's configuration:
*   **Mobile-First Tailwind CSS**: Design interfaces starting from mobile layouts, scaling to desktop (max-width `1400px`).
*   **Design Tokens**: Use HSL variables defined in `src/app/globals.css`.
    - `Primary Blue`: `221.2 83.2% 53.3%` (Light) / `217.2 91.2% 59.8%` (Dark)
    - `Secondary Gold`: `45 93% 47%`
    - `Background Dark`: `#050810`
*   **Typography**: **Orbitron** for headers, **Roboto** for body text.
*   **No Placeholders Policy**: Use real descriptions and authentic copy extracted from `README.md`.
*   **Tailwind-Only styling**: Use native classes and arbitrary properties. No inline `<style>`.

---

## 4. Instructions for System & File Inheritance (Context Matching)

To guarantee that new screens integrate perfectly with existing logical structures, Stitch must read and inherit data from the repository's main blueprints:

```markdown
### STEP 1: READ THE SOURCE OF TRUTH
Before writing any code:
1. Load **docs/DESIGN.md** for tokens and transitions.
2. Load **prisma/schema.prisma** for exact model fields (e.g., `Order`, `Client`, `PriceRange`).

### STEP 2: INHERIT COMPONENT HOOKS
1. Use `cn()` from `@/lib/utils`.
2. Forms must use `react-hook-form` and `zod`.
3. Database mutations must call Server Actions in `src/app/actions.ts`.

### STEP 3: PRESERVE PRINT FIDELITY
*   Use `@media print` rules for A4 pagination (size: A4, 10mm margins).
```
