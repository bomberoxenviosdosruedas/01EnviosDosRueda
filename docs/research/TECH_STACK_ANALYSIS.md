# Technical Stack Analysis

Based on `package.json` and project files.

## Core Framework
- **Next.js (v16.2.4)**: The React framework being used. It's using the App Router (`src/app/`).
- **React (v19.2.6)**: The underlying UI library.
- **TypeScript**: The primary language, providing static typing.

## Styling & UI
- **Tailwind CSS (v3.4.19)**: The primary styling solution (utility-first CSS).
- **Radix UI**: Used heavily as headless accessible primitives for interactive components (dropdowns, dialogs, etc.).
- **shadcn/ui**: The component library architecture (evident from `components.json` and `/src/components/ui/` structure).
- **Framer Motion**: Used for complex animations and transitions.
- **Lucide React**: The icon library.
- **next-themes**: For handling light/dark mode switching.

## State Management & Forms
- **React Hook Form**: For form state management and validation.
- **Zod**: For schema-based form validation (often paired with React Hook Form via `@hookform/resolvers`).
- No global state manager (like Redux or Zustand) is immediately apparent in `package.json`, suggesting state is managed locally, via Context, or via Next.js Server Actions/URL state.

## Data Fetching & Backend
- **Prisma ORM**: Used for database interactions.
- **PostgreSQL**: The database engine.
- **Next.js Server Actions**: Implied by the App Router and `actions.ts` file for handling mutations.

## Specialized Libraries
- **Leaflet / React Leaflet**: For mapping and GIS functionality.
- **Recharts**: For data visualization/charts.
- **Embla Carousel**: For touch-friendly carousels.
- **Three.js / @paper-design/shaders-react**: For advanced 3D or shader-based visual effects.
- **ZXing**: For barcode/QR code scanning (`@zxing/library`, `react-zxing`).
- **Google Genkit**: For AI integrations.

## Equivalent Stack (Our Proposed Approach)
Since the project is already using a modern, robust stack, we will continue adhering to these choices:
- **Framework**: Next.js App Router.
- **Styling**: Tailwind CSS + shadcn/ui.
- **Icons**: Lucide React.
- **Forms**: React Hook Form + Zod.
- **Maps**: Leaflet (as per the memory constraint requiring OpenStreetMap/Leaflet instead of Google Maps API).
