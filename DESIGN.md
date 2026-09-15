---
name: Editorial Monochrome Portfolio
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 54px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-uppercase:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.1em
  label-pill:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-button:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: -0.01em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2.25rem
  space-xl: 4rem
---

## Brand & Style
This design system is tailored for an elite UI/UX design portfolio. It radiates architectural precision, high-fashion editorial confidence, and unyielding clarity. The brand identity positions the designer as a meticulous, senior-level systems thinker who treats screen design like high-end Swiss print curation.

The visual style blends **Minimalism** and **High-Contrast Typography** with delicate tactile accents:
- **Purity over Clutter:** Stark negative space dominates, allowing portfolio case studies, system breakdowns, and project imagery to capture full attention.
- **Architectural Rhythm:** Precise geometry, crisp micro-borders, and disciplined typography grids replace standard SaaS decorations.
- **Controlled Accents:** The canvas is strictly monochrome with a singular utilitarian accent—an emerald pulse indicator confirming active availability for select design contracts.

## Colors
The palette is hyper-reductive, rooted in deep contrast and optical balance:

- **Primary (`#0A0A0A`):** Pure pitch carbon for primary typography, solid key interactive buttons, active tags, and sharp high-impact structural rules.
- **Secondary (`#737373`):** Neutral slate for metadata, captions, secondary specs, and reading tracks.
- **Tertiary / Availability (`#10B981`):** Precision emerald green used strictly for the glowing status pill indicator denoting client availability and real-time activity.
- **Neutral (`#F9F9F9` & `#FFFFFF`):** High-grade gallery canvas. Base backgrounds leverage `#FFFFFF` for primary viewing zones and `#F9F9F9` for secondary card backing or inset modules.
- **Border Neutral (`#E8E8E8`):** Micro-fine structural lines, ghost borders, and tag perimeters that delineate structure without cluttering optical space.

## Typography
The typographic hierarchy balances expressive brutalist precision with buttery editorial legibility:

- **Display & Headlines (Space Grotesk):** Sharp geometric construction delivers commanding presence. Selected large headers may utilize an outlined text-stroke style (`-webkit-text-stroke: 1.5px #0A0A0A; color: transparent;`) when juxtaposed against filled solid black typography for an avant-garde editorial rhythm.
- **Body & Narrative (Plus Jakarta Sans):** Chosen for its humanized neo-grotesque proportion, delivering effortless long-form readability across case study breakdowns and design retrospectives.
- **Micro-labels & Badges (Inter):** Clean, structural, and neutral. Uppercase labels feature generous tracking (`0.1em`) to replicate modern Swiss gallery and architecture index markers.

## Layout & Spacing
The layout adheres to a strict 12-column dynamic grid on desktop, shifting to a 6-column grid on tablet and 4-column on mobile.

- **Margin Architecture:** Wide horizontal gutters (`4rem` desktop) give case study presentations gallery-grade breathing room. Sections scale gracefully with max-widths capped at `1440px` for optimal viewing ergonomics.
- **Rhythm & Cadence:** Generous vertical intervals (`space-xl` and above) establish deliberate pacing between projects, credentials, and testimonials. In-component grouping relies strictly on cohesive pairings of `space-xs` and `space-sm` for dense, confident modular components.

## Elevation & Depth
In alignment with minimal high-contrast monochrome design principles, standard multi-level drop shadows are eliminated. Visual hierarchy is achieved through contrast, framing, and hairline borders:

- **Surface Contrast:** Depth is established by placing `#FFFFFF` surface cards upon `#F9F9F9` canvas plates or alternating subtle section panels.
- **Micro Hairlines:** Structural divisions, containers, and pills use ultra-crisp `1px solid #E8E8E8` borders. On hover or active focus, borders sharpen to `1px solid #0A0A0A`.
- **Tactile Floating Layer (Optional Floating Nav / Modals):** If physical separation from scrolling content is required, utilize an ultra-diffused atmospheric shadow: `0 12px 36px -4px rgba(10, 10, 10, 0.06)`, coupled with high-index frosted glass backdrop blur (`backdrop-filter: blur(12px)` over `rgba(255, 255, 255, 0.85)`).

## Shapes
The shape system revolves around high-contrast duality: **architectural rectilinear frames** for project imagery and major layout containers set against **hyper-curved pill geometries** for micro-interactions, buttons, and status tags:

- **Pill Primitives (`roundedness: 3` / fully-rounded radius `9999px`):** Used universally across primary buttons, interactive tags, badge chips, and category selectors.
- **Display Frame Elements:** Case study preview cards, modal viewports, and imagery containers retain a tight, controlled radius (`0.75rem` / 12px) to preserve clean architectural integrity and avoid visual softness.

## Components

### Buttons
- **Primary Action:** Solid `#0A0A0A` pill, pure white `#FFFFFF` text, `label-button` typography, subtle scale transform (`scale(0.98)`) on active press.
- **Secondary / Ghost:** `#FFFFFF` background, `1px solid #E8E8E8` border, `#0A0A0A` text. On hover, background shifts to `#0A0A0A` and text flips to `#FFFFFF` with seamless `150ms ease` transition.
- **Interactive Icon Button:** Circular `44px` pill container housing minimalist monoline icons.

### Status Indicator (Availability Pulse Pill)
- Fully rounded pill with `#FFFFFF` background and `1px solid #E8E8E8` border.
- Houses a live emerald circle (`#10B981`, 8px) with a concentric pulsing ping animation (`rgba(16, 185, 129, 0.35)`), followed by `label-pill` text: "AVAILABLE FOR SELECT PROJECTS".

### Category & Skill Pills
- Compact badges with `0.375rem 0.875rem` padding.
- Neutral variant: `#F9F9F9` fill with subtle `#E8E8E8` border and `#737373` text.
- Active variant: `#0A0A0A` fill with `#FFFFFF` text.

### Portfolio Cards
- Generous internal padding (`space-lg`), encased in `#FFFFFF` with a `1px solid #E8E8E8` border.
- Media container nested at the top with a consistent `16:10` aspect ratio and `0.5rem` inner radius.
- Lower section features an uppercase sub-headline (`label-uppercase`), project title (`headline-md`), brief summary, and a horizontal wrap of pill skill chips. Hover triggers image scale (`scale(1.02)`) and shifts card border to `#0A0A0A`.

### Input Fields & Contact Module
- Pill-form or smooth rectangular fields with `#F9F9F9` background, `1px solid #E8E8E8` borders, and placeholder text in `#737373`.
- Active focus transitions the border to crisp `#0A0A0A` with no offset outline rings.