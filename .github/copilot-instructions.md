# AI Coding Assistant Instructions - Evolve Basics

## Project Overview
**Evolve Basics** is a transport and material supply business website built with Next.js 16.1.1, React 19, TypeScript, and Tailwind CSS. The site serves industrial businesses, ports, and construction companies across India with sand supply, material supply, and transport solutions.

## Architecture & Tech Stack
- **Framework:** Next.js 16 with App Router (no Pages Router)
- **UI:** React 19 + TypeScript with strict mode enabled
- **Styling:** Tailwind CSS with custom glass morphism design system
- **Icons:** Heroicons React (primary) + Lucide React (secondary)
- **Deployment:** GoDaddy hosting for [evolvebasics.in](https://evolvebasics.in)

## Directory Structure & Patterns
```
src/
├── app/                 # App Router pages & layouts
│   ├── layout.tsx       # Root layout with Navigation
│   ├── page.tsx         # Homepage with services/testimonials
│   ├── globals.css      # Tailwind + custom CSS utilities
│   └── {about,services,contact}/page.tsx
└── components/
    └── Navigation.tsx   # Client component with mobile menu
```

## Design System & Custom Classes
The project uses a **glass morphism theme** with custom Tailwind utilities:

- **`.glass-card`** - Main container style with backdrop blur
- **`.glass-button`** - Interactive elements with glass effect  
- **`.gradient-text`** - Blue gradient text for branding
- **`.section-padding`** - Consistent spacing (px-4 sm:px-6 lg:px-8 py-16 lg:py-24)
- **Custom colors:** `primary-{50,100,500,600,700,900}`, `accent-{500,600}`
- **Background:** `bg-gradient-to-br from-slate-50 to-blue-50`

## Component Patterns & Standards

### Navigation Component
- **Client Component** (`'use client'`) with mobile hamburger menu
- Fixed positioning with glass card styling
- Uses TruckIcon for logo, manages `mobileMenuOpen` state
- Desktop/mobile responsive navigation array

### Page Structure Template
```tsx
// All pages follow this pattern:
import { HeroiconsIcon } from '@heroicons/react/24/outline'

const dataArrays = [/* services, features, etc */]

export default function Page() {
  return (
    <div className="section-padding">
      {/* Hero Section */}
      {/* Content Sections with dataArrays.map() */}
      {/* CTA Section */}
    </div>
  )
}
```

## Business Domain Knowledge
- **Core Services:** Sand supply, material supply (coal, limestone, gypsum, iron ore), transport logistics
- **Target Audience:** Industrial businesses, ports, construction companies, B2C customers  
- **Key Partners:** Stone Craft Developers, Trendset Projects, Mahidhara Projects PVT LTD, Geetha Engineering, etc.
- **Brand Voice:** "Reliable transport solutions with trust" - professional, trustworthy, efficient

## Development Workflow
- **Dev server:** `npm run dev` (Next.js development mode)
- **Build:** `npm run build` (static optimization enabled)
- **Linting:** `npm run lint` (Next.js ESLint config)
- **Icons:** Prefer outline variants from Heroicons, use solid for emphasis
- **TypeScript:** Strict mode, path aliases (`@/*` → `./src/*`)

## SEO & Metadata Standards
All pages must include comprehensive metadata following the pattern in `layout.tsx`:
- Business-focused titles and descriptions
- India-specific locale (`en_IN`)
- Transport/logistics keywords
- Open Graph + Twitter cards

## Key Integration Points
- **Image optimization:** Next.js Image component configured for Unsplash domains
- **Font optimization:** Inter font with Latin subset via `next/font/google`
- **Package optimization:** Lucide React configured for bundle optimization
- **Accessibility:** Semantic HTML structure, proper heading hierarchy

## Code Quality Guidelines
- Use TypeScript interfaces for all prop types
- Follow App Router conventions (no Pages Router)
- Implement responsive design with Tailwind mobile-first approach
- Maintain glass morphism visual consistency across components
- Use Server Components by default, Client Components only when needed (interactivity, state, browser APIs)