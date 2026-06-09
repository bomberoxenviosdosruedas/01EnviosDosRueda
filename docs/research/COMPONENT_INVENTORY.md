# Component Inventory

Based on the `/src/components/ui` directory and `shadcn/ui` conventions.

## Core UI Components

1.  **Accordion (`accordion.tsx`)**
    *   **Structure**: Radix UI primitives. `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`.
    *   **Animations**: Uses `accordion-down` and `accordion-up` keyframes.

2.  **Alert & Alert Dialog (`alert.tsx`, `alert-dialog.tsx`)**
    *   **Variants**: `default` (bg-background text-foreground), `destructive` (border-destructive text-destructive).
    *   **Structure**: Uses Radix primitives for modal dialogs.

3.  **Avatar (`avatar.tsx`)**
    *   **Structure**: `Avatar`, `AvatarImage`, `AvatarFallback`.
    *   **Border Radius**: Uses `rounded-full`.

4.  **Badge (`badge.tsx`)**
    *   **Variants**: `default`, `secondary`, `destructive`, `outline`.
    *   **Border Radius**: `rounded-full` (Conflicts with `DESIGN.md` recommendation to avoid pill shapes, might need review if used in dashboards).

5.  **Button (`button.tsx`)**
    *   **Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`.
    *   **Sizes**: `default`, `sm`, `lg`, `icon`.
    *   **Border Radius**: `rounded-md` (Standard).

6.  **Card (`card.tsx`)**
    *   **Structure**: `Card`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `CardContent`.
    *   **Border Radius**: `rounded-lg` or `rounded-xl`.
    *   **Background**: Uses `--card` CSS variable.

7.  **Form Elements**
    *   **Checkbox (`checkbox.tsx`)**
    *   **Input (`input.tsx`)**: `rounded-md`, border-input. Focus visible ring.
    *   **Label (`label.tsx`)**: Uses font-medium.
    *   **Radio Group (`radio-group.tsx`)**
    *   **Select (`select.tsx`)**
    *   **Slider (`slider.tsx`)**
    *   **Switch (`switch.tsx`)**
    *   **Textarea (`textarea.tsx`)**

8.  **Navigation & Menus**
    *   **Dropdown Menu (`dropdown-menu.tsx`)**
    *   **Menubar (`menubar.tsx`)**
    *   **Navigation Menu (`navigation-menu.tsx`)**
    *   **Sidebar (`sidebar.tsx`)**: Complex layout component with extensive state management for mobile/desktop sidebars.

9.  **Feedback & Overlays**
    *   **Dialog (`dialog.tsx`)**
    *   **Hover Card (`hover-card.tsx`)**
    *   **Popover (`popover.tsx`)**
    *   **Sheet (`sheet.tsx`)**: Side panel, variants for `top`, `bottom`, `left`, `right`.
    *   **Toast / Toaster (`toast.tsx`, `toaster.tsx`, `sonner.tsx`)**: Notification systems.
    *   **Tooltip (`tooltip.tsx`)**

10. **Data Display**
    *   **Carousel (`carousel.tsx`)**: Based on Embla Carousel.
    *   **Chart (`chart.tsx`)**: Complex charting components based on Recharts.
    *   **Table (`table.tsx`)**: Standard data table structure (`Table`, `TableHeader`, `TableBody`, etc.).
    *   **Progress (`progress.tsx`)**

11. **Custom/Project Specific Components**
    *   **HeroSection (`HeroSection.tsx`)**: Likely the main landing page hero.
    *   **MeshGradientBackground (`MeshGradientBackground.tsx`)**: Custom visual effect.
    *   **background-shader (`background-shader.tsx`)**: Another visual effect component.

## General Observations
*   Heavily relies on Radix UI primitives for accessibility and logic.
*   Styling is done via Tailwind CSS utility classes and `clsx`/`tailwind-merge` (`cn` utility).
*   Follows standard `shadcn/ui` patterns.
