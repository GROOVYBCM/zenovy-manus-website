# Zenovy Website — AI Handoff Guide

## 1. Project identity

This repository contains the Zenovy public marketing website: an editorial, evidence-led growth systems site for high-ticket residential home-service contractors. The intended brand feeling is **Quiet Performance Luxury**: disciplined, premium, technically precise, and calm rather than hype-driven.

The primary commercial message is:

> Zenovy helps residential contractors build a growth system around the jobs they actually want.

The key positioning anchors are **The Zenovy Growth Architecture** and **The Growth Diagnostic**.

## 2. Stack and runtime

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Wouter client-side routing
- Lucide React icons
- pnpm
- Static frontend scaffold with a minimal Express production server from the template
- No database, auth, server API, or secrets are currently required

Useful commands:

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
```

`pnpm check` runs TypeScript validation. `pnpm build` runs the Vite production build and bundles the template server entrypoint.

## 3. Visual system

Brand colors are intentionally centralized in `client/src/index.css` and should not be casually replaced:

| Token | Hex | Role |
|---|---:|---|
| Obsidian | `#0A0A0A` | Main dark surfaces, hero, navigation, footer |
| Ivory | `#F3F0E8` | Editorial light sections and contrast breaks |
| Champagne Gold | `#B79A5B` | CTA fill, eyebrows, rules, signal nodes, selective emphasis |
| Deep Forest | `#18332B` | CTA transitions, supporting architecture layers, trust panels |
| Graphite | `#292927` / `#141413` | Raised dark cards and data panels |
| Stone | `#A7A198` | Secondary body copy on dark backgrounds |

Typography:

- **Cormorant Garamond** for display headlines, editorial statements, and proof numbers
- **Manrope** for navigation, body copy, labels, buttons, forms, FAQ, and metadata

The website uses fine pathways, signal nodes, controlled linework, diagnostic mapping, and feedback-loop motifs. Avoid generic gradients, SaaS dashboard styling, loud animation, fake urgency, or mascot-like Panther usage.

## 4. Application structure

Top-level route wiring lives in `client/src/App.tsx`.

### Shared components

- `client/src/components/Navigation.tsx` — sticky responsive header, mobile drawer, footer, nav routes, CTA
- `client/src/components/BrandMarks.tsx` — Zenovy wordmark treatment, symbol, and restrained Panther contour
- `client/src/components/SignalCanvas.tsx` — subtle animated hero signal field; pauses when offscreen and respects reduced motion
- `client/src/components/GrowthArchitectureSystem.tsx` — interactive six-stage architecture with selected-stage inspection panel and supporting infrastructure lanes
- `client/src/components/ClientEvidenceSection.tsx` — Marakas Pizza evidence presentation with metric cards, analytics panel, testimonial, and inspection modal
- `client/src/components/FoundersSection.tsx` — Brayan Martinez and Jean Melo ownership profiles
- `client/src/components/FAQAccordion.tsx` — reusable FAQ accordion, search, category-aware filtering, and homepage limit mode
- `client/src/components/GHLBookingWidget.tsx` — current frontend-only booking shell that simulates the GoHighLevel flow and writes temporary booking data to `sessionStorage`

### Pages/routes

| Route | File | Purpose |
|---|---|---|
| `/` | `Home.tsx` | Full homepage journey: hero, leak recognition, architecture, capabilities, evidence, fit, founders, FAQ, CTA |
| `/how-it-works` | `HowItWorks.tsx` | Narrative six-stage methodology plus formal architecture system |
| `/results` | `Results.tsx` | Evidence-first Marakas Pizza account page |
| `/about` | `About.tsx` | Founder ownership, operating principles, Miami/South Florida base |
| `/faq` | `FAQ.tsx` | Public categorized FAQ with search |
| `/diagnostic` | `Diagnostic.tsx` | Growth Diagnostic context and booking interface |
| `/diagnostic/briefing` | `DiagnosticBriefing.tsx` | Post-booking confirmation/preparation page; intended to be `noindex, follow` in production |
| fallback | `NotFound.tsx` | 404 route |

## 5. Important current placeholders and integration boundaries

The master build specification explicitly allows clean placeholders where source assets or external systems are unavailable. The following are intentionally not final production integrations:

1. **Founder imagery:** `FoundersSection.tsx` currently uses editorial initials blocks (`BM`, `JM`) rather than the approved founder portraits. Replace those blocks with approved optimized images when supplied. Do not generate random founder faces.
2. **Panther artwork:** `BrandMarks.tsx` contains a restrained geometric/contour treatment, not the canonical licensed Zenovy Panther asset. Replace only when the approved asset is available.
3. **Marakas evidence:** `ClientEvidenceSection.tsx` presents a clearly labeled evidence-style panel with the supplied August 2026 values. Replace the presentation shell with the actual approved screenshots when provided. Keep all dates, labels, and context accurate. Do not imply Marakas is a home-services client or that Zenovy generated every visitor/order.
4. **GoHighLevel:** `GHLBookingWidget.tsx` is a frontend simulator. It collects the current fields, stores a mock booking in `sessionStorage`, then routes to `/diagnostic/briefing`. Production should replace the form submission with the real GHL calendar/embed or integration while preserving the surrounding Zenovy shell and attribution bridge.
5. **VSL:** No “video coming soon” module is included by design. Integrate the final 16:9 video only when the edited asset, poster, captions, and final URL are ready.
6. **Legal pages:** Footer links currently use FAQ/Diagnostic pathways as available navigation. Add dedicated Privacy and Terms routes before production launch.
7. **SEO:** The HTML shell currently includes a canonical and homepage description. Add route-specific metadata, canonical tags, Organization/WebSite/Person JSON-LD, and `noindex, follow` for `/diagnostic/briefing` before final deployment.

## 6. Content and commercial guardrails

Do not add or imply:

- revenue, booked-job, ROAS, or closed-job guarantees
- fake contractor logos or fabricated contractor case studies
- generic “we serve all businesses” positioning
- restaurants as Zenovy’s niche; Marakas is proof of measurement and execution only
- public pricing/packages
- protected internal qualification thresholds, scoring weights, workflow timing, SLA rules, or proprietary prompts
- fake scarcity, countdowns, or “only X spots left” claims

Zenovy owns the system up to a **sales-ready opportunity**. The client owns pricing, the sales conversation, capacity, job delivery, customer experience, and closing.

Use the CTA wording **Book a Growth Diagnostic** consistently. Do not shorten it to “Get Started,” “Contact Us,” or “Schedule a Call.”

## 7. Safe change workflow for future AI agents

1. Read this file and the relevant page/component before editing.
2. Preserve the visual tokens in `client/src/index.css`.
3. Reuse the existing `site-container`, `eyebrow`, `btn-primary`, and `btn-secondary` primitives.
4. Keep public pages accessible: semantic headings, focus-visible states, keyboard-operable accordions/drawers, alt text for new images, and reduced-motion support.
5. After edits, run `pnpm check` and `pnpm build`.
6. Test the affected route plus `/`, especially after routing or shared-navigation changes.
7. Keep `server/` unchanged unless the task explicitly requires deployment/runtime work.
8. Commit focused changes with a descriptive message. Never commit secrets, local `.env` files, screenshots, or `dist/` output unless deployment explicitly requires them.

## 8. Recommended next production milestones

- Replace founder initials and Panther contour with approved brand assets.
- Swap Marakas mock evidence panel for the approved screenshots and verify image sharpness/full-size inspection.
- Replace the booking simulator with the production GoHighLevel embed/API flow, carrying `utm_*`, `gclid`, and `fbclid` values where possible.
- Add route-specific SEO metadata and dedicated Privacy/Terms pages.
- Add a small automated smoke test covering all public routes and the booking-to-briefing transition.
