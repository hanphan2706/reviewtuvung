---
name: Scholarly Minimalist
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d9'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1eded'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1c'
  on-surface-variant: '#47464b'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#77767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1e'
  on-primary-container: '#858387'
  inverse-primary: '#c8c5ca'
  secondary: '#5d5e60'
  on-secondary: '#ffffff'
  secondary-container: '#dfdfe1'
  on-secondary-container: '#616365'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b16'
  on-tertiary-container: '#88837c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e6'
  primary-fixed-dim: '#c8c5ca'
  on-primary-fixed: '#1b1b1e'
  on-primary-fixed-variant: '#47464a'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#e8e2d9'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#fdf8f8'
  on-background: '#1c1b1c'
  surface-variant: '#e5e2e1'
  accent-purple: '#4B2876'
  surface-border: '#E4E4E7'
  text-muted: '#71717A'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  card-gap: 12px
---

## Brand & Style

The design system is centered on a **scholarly minimalist** aesthetic, tailored for focused learning and academic discipline. It evokes a sense of intellectual clarity and reliability, functioning as a digital extension of a premium physical notebook. 

The visual direction leans into **Modern Minimalism** with a **Tactile/Card-based** foundation. High-quality whitespace is used to reduce cognitive load, while the interface relies on structural depth rather than decorative elements. The mood is calm, professional, and sophisticated, prioritizing content legibility and intentional user flow over visual noise.

## Colors

This design system utilizes a high-contrast neutral palette to establish its scholarly tone. 

- **Primary:** A deep, near-black grey (`#18181B`) used for headings and critical UI elements to ensure maximum authority and legibility.
- **Secondary:** A soft, cool grey (`#F5F5F7`) used as the primary canvas color to reduce eye strain during long study sessions.
- **Accent:** The legacy purple (`#4B2876`) is strictly reserved for high-value highlights, active states, and subtle brand emphasis. It should be used sparingly, occupying less than 5% of the total screen real estate.
- **Neutral:** Pure white (`#FFFFFF`) is reserved for card surfaces to create clear separation from the background.

## Typography

The typography strategy employs a traditional serif for structure and a clean sans-serif for utility. 

**Noto Serif** is the voice of the system, used for all headlines and content titles to provide a literary and authoritative feel. **Inter** handles the functional requirements, providing exceptional legibility for body text, interactive elements, and metadata. 

On mobile devices, `display-lg` should scale down to `32px` to ensure visual balance without sacrificing the characteristic serif presence.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop (max-width: 1100px) and a **Fluid Grid** on mobile. The rhythm is governed by a 4px baseline, ensuring that all margins and paddings are multiples of four.

Content is organized into distinct card modules. On mobile, these cards occupy the full width of the screen minus the 16px side margins. On desktop, a 12-column system is used, with cards typically spanning 4, 6, or 8 columns depending on the information density required.

## Elevation & Depth

This system avoids aggressive drop shadows in favor of **Tonal Layers** and **Low-contrast Outlines**. 

Depth is achieved by placing white cards on top of the `#F5F5F7` background. To define these surfaces, a subtle 1px border of `#E4E4E7` is applied. When elevation is necessary (e.g., for hovering over a deck), a very soft, highly diffused ambient shadow with 4% opacity is used to create a "lifted" effect without breaking the minimalist aesthetic.

## Shapes

The shape language is sophisticated and approachable. All primary UI containers and cards utilize a **0.5rem (8px)** corner radius. 

Interactive elements like buttons and input fields follow this same logic, creating a consistent visual thread. For small status indicators or tag-style chips, a fully rounded pill shape is permitted to provide visual contrast against the more structured card system.

## Components

- **Cards:** The central component. Always white background, 1px border (`#E4E4E7`), and 8px corner radius. Internal padding should be generous (min 20px).
- **Primary Buttons:** Solid `#18181B` background with white text. No icons unless essential for navigation.
- **Secondary Buttons:** Transparent background with a 1px border of `#18181B`.
- **Accent Elements:** Use the purple color only for active tab indicators, progress bar fills, or "New" notification dots.
- **Input Fields:** Clean white surfaces with 1px border. Focus states should transition the border color to the primary dark grey, never the accent purple, to maintain focus.
- **Flashcards:** A specific card variation with central-aligned Noto Serif text, utilizing slightly larger internal padding (40px) to signify its importance as the core learning unit.