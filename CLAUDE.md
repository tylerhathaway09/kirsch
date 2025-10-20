# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Dr. Jacob Kirsch's shoulder specialist medical practice website. It's a **professional medical website** built with Next.js 15, TypeScript, Tailwind CSS v4, and shadcn/ui components. The design is clean and professional, inspired by michaelfumd.com.

## Development Commands

```bash
# Development server with Turbopack (fast refresh)
npm run dev

# Production build with Turbopack
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

The dev server runs at http://localhost:3000

## Architecture

### Tech Stack Specifics

- **Next.js 15 App Router**: Uses file-based routing in `app/` directory, not Pages Router
- **Tailwind CSS v4**: Important - uses new `@import "tailwindcss"` syntax, NOT `@tailwind` directives
- **shadcn/ui**: Pre-built components in `components/ui/`. DO NOT modify these directly
- **TypeScript**: Strict mode enabled
- **Turbopack**: Used for both dev and build for faster compilation

### Key Architectural Patterns

#### Layout Structure

The site uses a consistent layout pattern across all pages:

```tsx
app/layout.tsx (Root)
├── <Header /> - Persistent navigation with dropdowns
├── <main> - Page content (children)
└── <Footer /> - Four-column footer with links
```

**Important**: Both `<html>` and `<body>` tags have `suppressHydrationWarning` to prevent hydration errors from browser extensions.

#### Container System

The site uses a **custom container class** defined in `app/globals.css` (NOT Tailwind's default):

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  /* Responsive max-widths at 640px, 768px, 1024px, 1280px, 1536px */
}
```

**When creating new pages**: Always wrap content in `<div className="container py-16">` for consistent spacing and centering.

#### Navigation Architecture

The Header (`components/layout/Header.tsx`) uses Radix UI's NavigationMenu with custom positioning:

- **Dropdown alignment fix**: The NavigationMenuViewport uses `left-1/2 -translate-x-1/2` to center dropdowns under the nav bar
- **Mobile menu**: Separate accordion-style menu for mobile (hidden on desktop)
- All navigation items must be present in both desktop and mobile menus

#### Page Patterns

There are three main page patterns in this codebase:

1. **Homepage** (`app/page.tsx`): Complex multi-section layout with Hero, About preview, Quick links cards, Focused Care, Featured Research
2. **Content pages** (e.g., `app/about/dr-jacob-kirsch/page.tsx`): Single-column content with prose styling, max-w-4xl container
3. **Overview pages** (e.g., `app/shoulder-conditions/overview/page.tsx`): Grid of cards linking to individual pages

### Component Organization

```
components/
├── layout/         # Structural components used in layout.tsx
│   ├── Header.tsx  # Main nav with dropdowns (client component)
│   ├── Footer.tsx  # Four-column footer
│   └── Hero.tsx    # Reusable hero section component
└── ui/             # shadcn/ui components - DO NOT EDIT DIRECTLY
    ├── button.tsx
    ├── card.tsx
    ├── navigation-menu.tsx  # Modified for center alignment
    └── ...
```

### Styling System

#### Tailwind CSS v4 Configuration

- All theme configuration is in `app/globals.css` using `@theme inline` and CSS variables
- Uses oklch color space for all colors
- Custom brand colors can be modified in `:root` variables (see comments in globals.css)

#### Color System

The site uses CSS variables for theming:
- `--background`, `--foreground`: Base page colors
- `--primary`, `--primary-foreground`: CTA buttons, links
- `--muted`, `--muted-foreground`: Secondary text, backgrounds
- `--accent`, `--accent-foreground`: Hover states

#### Typography

- **Fonts**: Geist Sans (body), Geist Mono (code)
- **Prose classes**: Use `prose prose-lg max-w-none` for content-heavy pages
- **Text colors**: Use `text-muted-foreground` for secondary text, not gray-600

## Page Creation

### Navigation Structure

The site has a hierarchical navigation structure defined in Header.tsx:

```
About
├── Dr. Jacob Kirsch (actual content)
├── Patient Care Philosophy (actual content)
├── Team
├── New England Baptist Hospital
├── Patient Testimonials
└── Research and Education

Patient Resources
├── Patient Experience
├── First Visit Guide
├── Patient Education Videos
├── Preparing for Surgery
├── What To Expect After Surgery
├── Post-Operative Instructions
├── Physical Therapy Protocols
└── FAQ

Shoulder Conditions
├── Overview
├── Rotator Cuff Tear
├── Shoulder Arthritis
├── Cuff Tear Arthropathy
├── Shoulder Instability
├── Biceps Tendonitis
├── Shoulder Fractures
├── AC Joint Injury
├── Shoulder Bursitis/Impingement
└── Frozen Shoulder

Shoulder Procedures
├── Overview
├── Rotator Cuff Repair
├── Anatomic Total Shoulder Replacement
├── Reverse Shoulder Replacement
├── Revision Shoulder Replacement
├── Tendon Transfer
├── Shoulder Stabilization
├── Biceps Tenodesis
├── Fracture Treatment
├── AC Joint Stabilization
└── Shoulder Bursitis/Impingement

Research
├── Research Philosophy
└── Dr. Kirsch's Research
```

**When adding new pages**:
1. Create page at correct path: `app/[section]/[page-name]/page.tsx`
2. Add link in `components/layout/Header.tsx` (both desktop and mobile menus)
3. Consider adding to `components/layout/Footer.tsx` if it's a key page
4. Use kebab-case for URLs (e.g., `/patient-care-philosophy`)

### SEO Pattern

Every page MUST export metadata:

```tsx
export const metadata = {
  title: "Page Title | Dr. Jacob Kirsch",
  description: "Specific page description for SEO (150-160 chars)",
};
```

## Contact Form Integration

The contact form (`app/contact/page.tsx`) uses react-hook-form + zod validation and is **ready for email integration** with Resend:

1. Install: `npm install resend`
2. Create API route at `app/api/contact/route.ts` (see README.md for template)
3. Uncomment the fetch call in contact page (currently commented out)
4. Add `RESEND_API_KEY` to `.env.local`

The form handles client-side validation but needs the API route for actual sending.

## Important Constraints

### What NOT to Do

- **Don't modify `components/ui/*` files directly** - these are shadcn/ui components. If changes needed, extend them or create new components
- **Don't use `@tailwind` directives** - Tailwind v4 uses `@import "tailwindcss"` instead
- **Don't use default Tailwind container** - we have a custom one defined in globals.css
- **Don't skip mobile menu updates** - when adding nav items, update both desktop NavigationMenu and mobile menu section

### Common Patterns

**Reading/modifying navigation**:
- Desktop dropdown menus: `components/layout/Header.tsx` lines 31-333
- Mobile menu: `components/layout/Header.tsx` lines 395-444

**Adding images**:
- Place in `public/` directory
- Use Next.js `<Image>` component with width/height
- Replace TODO comments in Hero and page components

**Custom colors**:
- Modify CSS variables in `app/globals.css` `:root` block
- Use oklch color format
- See "CUSTOM BRAND COLORS" comment for guidance

## Known Issues/Fixes

1. **Hydration warnings**: Suppressed in layout.tsx because browser extensions add attributes to HTML
2. **Navigation dropdown alignment**: Fixed with custom positioning in `components/ui/navigation-menu.tsx` line 109
3. **Container padding**: Custom container ensures consistent left/right padding on all pages

## Deployment

Designed for Vercel deployment. Registered domains:
- jacobkirschmd.com
- jacobkirsch.com
- bostonshoulderdoc.com
- bostonshouldercenter.com

Auto-deploys from GitHub. Add environment variables in Vercel dashboard.
