# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8080
npm run build      # Production build
npm run build:dev  # Development build
npm run preview    # Preview production build locally
npm run lint       # ESLint with TypeScript + React Hooks rules
```

No test framework is configured.

## Architecture

This is the **Moon Studios family salon** website — a static marketing/booking site built with React 18 + TypeScript + Vite + shadcn/ui + Tailwind CSS.

### Routing (react-router-dom v6)

Defined in `src/App.tsx`:
- `/` → `src/pages/Index.tsx` — homepage, composes all section components
- `/services` → `src/pages/Services.tsx`
- `*` → `src/pages/NotFound.tsx`

New routes must be added **above** the `*` catch-all route.

### Component layers

- `src/components/ui/` — shadcn/ui primitives (Radix UI-based). Do not edit these manually; they are generated/managed via shadcn CLI conventions.
- `src/components/` — page-section business components (Hero, Header, Footer, BookingForm, Gallery, ClientReviews, Stylists, etc.). The homepage (`Index.tsx`) assembles these in order.
- `src/pages/` — route-level page components that compose section components.

### Key libraries

- **Styling**: Tailwind CSS + `tailwind-merge` + `class-variance-authority`. Use `cn()` from `src/lib/utils.ts` to merge class names.
- **Forms**: `react-hook-form` + `@hookform/resolvers` + `zod` for schema validation.
- **Data fetching**: `@tanstack/react-query` — `QueryClientProvider` is set up at the root in `App.tsx`.
- **Notifications**: `sonner` (Sonner toasts) + shadcn `Toaster` — both providers are in `App.tsx`.
- **Carousels**: `embla-carousel-react` with auto-scroll.
- **Icons**: `lucide-react`.
- **SEO**: `src/components/StructuredData.tsx` injects JSON-LD structured data.

### Path alias

`@` resolves to `./src` (configured in `vite.config.ts` and `tsconfig`). Always use `@/` imports rather than relative paths crossing directory levels.

### Deployment

Deployed on **Vercel** at `moonstudiossalon.in`. Pushing to the main branch triggers automatic deployment — no manual deploy step needed.

### Analytics & tracking

The site uses Google Analytics (`G-YHS0ML3TRK`) and Google Tag Manager (`GTM-W5MQ8DCS`). These tags should be present in `index.html`.
