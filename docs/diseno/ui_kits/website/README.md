# UI kit — Sitio institucional Envios Dosruedas

Click-through recreation of the marketing site in `dosruedasmdq/BaseEnviosDosruedas`.

| Screen | Built from |
| --- | --- |
| `HomeScreen.jsx` | `src/app/page.tsx`, `src/components/sections/Hero.tsx`, `src/components/sections/Features.tsx` |
| `ServicioScreen.jsx` | `src/components/heros/Hero3.tsx` pattern + `src/app/components-library/page.tsx` service cards |
| `CotizarScreen.jsx` | `src/components/heros/HeroCotizar.tsx` |
| `ContactoScreen.jsx` | `src/components/sections/HeroContact.tsx` |
| `Chrome.jsx` (Navbar/Footer) | `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx` |

Open `index.html`. Nav links move between screens; the Servicios/Nosotros menus open on hover; the cotizador recalculates on route select; the contact form shows a toast on submit.

Content notes: tariffs and the tracking timeline are plausible placeholders — the repo ships no pricing data. Phone, address and WhatsApp number are the real ones in the repo (223 660-2699, Friuli 1972, Mar del Plata).
