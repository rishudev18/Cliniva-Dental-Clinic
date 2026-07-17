# Absolute Dental Clinic - Project Context & Memory

This file serves as a persistent context bank for Gemini/Antigravity and other AI coding assistants. When resuming development on this project, please read this file first to align on the technical stack, folder architecture, custom configuration workarounds, and progress.

---

## 1. Project Overview & Tech Stack
*   **Project Goal:** A premium, modern healthcare website recreated for **Absolute Dental Clinic** (Gurugram).
*   **Core Framework:** React 19 + Vite (TypeScript enabled).
*   **Styling System:** Tailwind CSS v4.0 (using Vite plugin `@tailwindcss/vite`).
*   **Global Styling:** Configured in `src/index.css` using URL Google Fonts imports (`Sora` for display, `Manrope` for sans/body) and OKLCH color palettes mapped via Tailwind `@theme inline`.
*   **UI Components:** shadcn/ui (Base library using Nova preset and Radix primitives).
*   **Animations:**
    *   **GSAP:** Hero text reveals and floating card animations.
    *   **Framer Motion:** Micro-interactions (hover transformations, active states, page triggers).
    *   **Lenis:** Smooth scrolling provider.
*   **Forms:** React Hook Form + Zod Schema Validation.
*   **Routing:** React Router DOM v6.
*   **SEO:** React Helmet Async (injecting dynamic metadata and JSON-LD Dentist/LocalBusiness/FAQ/Service schemas).

---

## 2. Crucial Build & Setup Details (Gotchas)
*   **Peer Dependency Resolution (.npmrc):** 
    React 19 creates peer dependency conflicts with libraries like `react-helmet-async` (which expects React 18). We created a `.npmrc` file in the root with:
    ```ini
    legacy-peer-deps=true
    ```
    This ensures `npm install` and `shadcn add` commands resolve successfully without ERESOLVE errors.
*   **Path Aliases:**
    *   Vite and TypeScript alias `@/` resolves to `src/`.
    *   Configured in `tsconfig.app.json` (`paths` and `baseUrl`) and `vite.config.ts` (`resolve.alias`).
*   **verbatimModuleSyntax Warning:**
    TypeScript compiler checks are strict. If you import types from `constants` or other files, you **must** use type-only imports, e.g.:
    ```typescript
    import type { Service } from "@/constants";
    ```

---

## 3. Directory Map
```
src/
├── assets/         # Static images and visual assets
├── components/     # Reusable UI sections
│   ├── ui/         # shadcn UI components (button, input, accordion, etc.)
│   ├── navbar/     # Sticky navigation with mobile side-drawer
│   ├── hero/       # GSAP-animated entry reveal sections
│   ├── services/   # Teaser cards
│   ├── doctors/    # Profiles cards
│   ├── testimonials/ # Testimonial cards
│   ├── gallery/    # masonry layout and Before/After comparison sliders
│   ├── faq/        # Searchable FAQ accordion
│   ├── contact/    # Book Appointment forms
│   └── footer/     # Embedded maps, opening hours, contact lists
├── pages/          # Full-page routing components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── TreatmentDetail.tsx (dynamic route: /services/:slug)
│   ├── Doctors.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Blog.tsx (incorporates search filter and full article reader)
│   ├── Contact.tsx
│   └── BookAppointment.tsx
├── constants/      # Static records (CLINIC_INFO, SERVICES data, FAQ items, blogs)
├── utils/          # Analytics logs (GA4 / Clarity) & JSON-LD schema builders
├── App.tsx         # Routing structures, Lenis, and Helmet providers
└── main.tsx        # React mount target
```

---

## 4. Current State & Remaining Tasks
*   **Status:** Active, building, and compiling successfully (`npm run build` compiles with zero errors).
*   **Local Server URL:** `http://localhost:5173/` (start via `npm run dev`).
*   **Appointment Booking Form Destination:** Currently mock-configured to print submissions to console and trigger successful hot-toast banners.
*   **Planned/Future Tasks:**
    *   [ ] Configure real email destination using **EmailJS** (client-side) or **Resend API** (serverless).
    *   [ ] Optimize visual assets (convert images in constants list to optimized web assets).
    *   [ ] Implement specific design tweaks requested by the owner.
