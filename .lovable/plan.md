

## Add Scroll-Triggered & Elegant Animations Across All Pages

### What You'll Get
Sleek, professional animations that reveal content as visitors scroll through each page -- elements gracefully fade in, slide up, and scale into view only when they become visible, creating a polished, modern feel across the entire site.

### Current State
- Animations use simple CSS classes that all fire at once on page load
- No scroll-awareness -- content below the fold animates before anyone sees it
- Limited variety (only fade-in and fade-in-up)

### What Changes

**1. Scroll-Triggered Animation Hook**
A reusable `useScrollAnimation` hook using the browser's Intersection Observer API -- lightweight, no extra libraries needed. Elements animate only when scrolled into view with staggered delays for grid items.

**2. New Animation Keyframes (in Tailwind config)**
- `fade-in-left` / `fade-in-right` -- horizontal slide-ins for alternating sections
- `blur-in` -- subtle blur-to-sharp reveal for hero elements
- `count-up` -- smooth number counter for stats
- `stagger-in` -- cascading entrance for card grids
- `glow-pulse` -- subtle shimmer on gradient elements
- Refined easing curves using `cubic-bezier` for a premium feel

**3. Reusable Animation Component**
A simple `<AnimateOnScroll>` wrapper component that applies scroll-triggered animations to any section or element, keeping code clean and consistent.

**4. Pages Updated**
Every major page gets scroll-triggered animations applied to each section:
- **Home** -- Hero blur-in, testimonials slide-in, story section fade-in-left, stats count-up, country flags stagger, highlights scale-in, form slide-in-right
- **Services** -- Service cards stagger with alternating delays, FAQ fade-in
- **About** -- Values cards cascade, industries grid stagger, team stats count-up
- **Portfolio** -- Project cards stagger with scale effect
- **Blog** -- Article cards cascade in grid
- **Landing pages** (web-design, digital-marketing, SEO, branding) -- sections alternate between fade-in-left and fade-in-right

**5. Smooth Page Transitions**
A subtle page-level fade when navigating between routes for a polished single-page app feel.

### Technical Details

**New files:**
- `src/hooks/use-scroll-animation.ts` -- Intersection Observer hook
- `src/components/AnimateOnScroll.tsx` -- Wrapper component

**Modified files:**
- `tailwind.config.ts` -- New keyframes and animation utilities
- `src/index.css` -- Smooth scroll, page transition styles
- `src/pages/Home.tsx` -- Wrap sections with AnimateOnScroll
- `src/pages/ServicesPage.tsx` -- Wrap sections
- `src/pages/AboutPage.tsx` -- Wrap sections
- `src/pages/PortfolioPage.tsx` -- Wrap sections
- `src/pages/BlogPage.tsx` -- Wrap sections
- `src/pages/ProcessPage.tsx` -- Wrap sections
- `src/pages/WebDesignGhanaPage.tsx` -- Wrap sections
- `src/pages/DigitalMarketingGhanaPage.tsx` -- Wrap sections
- `src/pages/SeoServicesGhanaPage.tsx` -- Wrap sections
- `src/pages/BrandingAgencyGhanaPage.tsx` -- Wrap sections
- `src/components/Hero.tsx` -- Staggered hero element reveals

**Zero new dependencies** -- uses native browser APIs only, keeping the site fast.

