# Interaction Patterns

## Animations & Transitions
- `tailwindcss-animate` plugin is used.
- Custom Keyframes (defined in `tailwind.config.ts`):
  - `accordion-down` & `accordion-up`: For expanding/collapsing sections.
  - `h-scroll`: Continuous horizontal scrolling (likely for marquees or carousels).
  - `float`: Gentle vertical floating effect.
  - `spin-slow`: Continuous slow rotation.

## Hover States
- Hover states typically use structural color changes (e.g., `hover:bg-accent hover:text-accent-foreground`).
- `DESIGN.md` mentions that hover states on cards should use "a subtle glow or a solid 2px left border in action yellow."

## Focus States
- Globally defined in `globals.css`:
  ```css
  *:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }
  ```
- This ensures accessible keyboard navigation across all interactive elements.

## Micro-interactions
- Buttons and links likely have subtle opacity or background color transitions (`transition-colors`).
- `shadcn/ui` components come with built-in Radix UI micro-interactions (e.g., dropdown open animations, dialog overlay fades).
