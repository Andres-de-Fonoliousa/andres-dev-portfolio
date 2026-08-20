# Portfolio

Personal portfolio and landing page for a senior full-stack developer, rebuilt on Stripe-grade design: exact Stripe design tokens, aurora hero, animated wave background, staggered entrance animations, bilingual EN/AR with RTL support.

Live: **[andres-dev-portfolio.vercel.app](https://andres-dev-portfolio.vercel.app)**

## Stack

- Vue 3 (`<script setup>`), Vite
- Tailwind CSS with custom design tokens (navy `#0A2540`, indigo `#635BFF`, lime accent)
- `lucide-vue-next` icons
- Custom lightweight i18n (English / Arabic, RTL-ready) — no i18n library
- IntersectionObserver-based scroll animations, CSS-only hero wave with image fallbacks

## Sections

- Hero (aurora gradient, animated wave)
- About — who I am and what I build
- Work — flagship projects with real screenshots
- Stack — tools and technologies
- Why — working style and guarantees
- Contact — GitHub, Telegram, WhatsApp, email
- FAQ

## Run locally

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build
npm run preview  # preview the build
```

## Deploy

Vercel — auto-deploy on push to `main`.

## Design notes

The design language follows Stripe's public design system: spacing scale (4px base), radius scale, glow/shadow tokens, and a `fade-up` entrance system with 0.1s stagger. Design tokens are centralized in `src/style.css` so the whole theme can be retuned from one file.