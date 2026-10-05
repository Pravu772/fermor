# Fermor — Design Notes & Visual System

## 1. Design Concept: "Architectural Editorial"
To avoid looking AI-generated (no purple gradients, no glowing neon orbs, no generic SaaS card templates, no glassmorphism, no backdrop blur), Fermor adopts an **Architectural Editorial** aesthetic. It feels like a bespoke financial publication combined with high-precision engineering tools—clean solid surfaces, crisp 1px borders, deep forest tones, and thoughtful Indian typography.

---

## 2. Color Palette & Semantic Tokens
All tokens are defined as CSS variables with strict WCAG AA contrast against `--color-canvas` (`#FAF9F5`):

| Token Name | Hex Code | Contrast on Canvas | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-canvas` | `#FAF9F5` (Warm Ecru) | Base | Page background; eliminates harsh clinical pure white. No blur/glass anywhere. |
| `--color-surface` | `#FFFFFF` | N/A | Card surfaces, inputs, elevated panels |
| `--color-surface-muted` | `#F3EFE6` | 1.1:1 | Subtle section backgrounds, tags, inner pill containers |
| `--color-ink` | `#111A15` | **15.8:1** (AAA) | Primary text; deep forest-charcoal |
| `--color-ink-muted` | `#4A5750` | **5.3:1** (AA) | Secondary copy, captions, footnotes |
| `--color-forest` | `#0E2F22` | **12.4:1** (AAA) | Primary brand tone; deep Indian emerald |
| `--color-forest-light` | `#164332` | **9.1:1** (AAA) | Hover states, pill badges, selected states |
| `--color-amber` | `#D97706` / `#B45309` | Large / Fills | Fills, badges, icons, and large headlines (>= 18pt bold) |
| `--color-amber-text` | `#8F4A00` | **4.9:1** (AA) | Small text amber highlights, ensuring full WCAG AA compliance |
| `--color-gain` | `#15803D` | **4.8:1** (AA) | Compounding returns, positive growth indicators |
| `--color-cost` | `#B91C1C` | **5.4:1** (AA) | Loan interest burden, expense outflows |
| `--color-border` | `#E4E0D6` | N/A | Crisp architectural 1px hairline dividers and card outlines |

*Note: Clean light mode only. No dark mode.*

---

## 3. Typography Hierarchy
* **Display / Headlines (`font-serif`)**: `Newsreader` (via `next/font/google`).
  - H1: `clamp(2.5rem, 5vw, 4.25rem)`, line-height `1.08`, tracking `-0.02em`
  - H2: `clamp(2rem, 3.5vw, 3rem)`, line-height `1.15`, tracking `-0.015em`
  - H3: `1.5rem` to `1.75rem`, line-height `1.25`
* **Body & UI (`font-sans`)**: `Plus Jakarta Sans` (or `Inter`).
  - Body: `1rem` (16px) / `1.125rem` (18px), line-height `1.6`
  - UI / Meta: `0.875rem` (14px) / `0.75rem` (12px), font-weight `500` / `600`
* **Financial Figures & Metrics**:
  - Rendered using the primary sans font with `font-variant-numeric: tabular-nums` (`tabular-nums font-sans`).
  - Formatted strictly using `Intl.NumberFormat('en-IN')` with ₹ symbol and Lakh/Crore labels. No generic monospace font for numbers.

---

## 4. Layout, Rhythm & Architecture
* **Navbar**: Solid `--color-canvas` (`#FAF9F5`) background with a solid `1px` bottom border (`#E4E0D6`). Sticky positioning without any backdrop-filter or blur effects.
* **Grid**: 12-column responsive layout with max-width `1280px` (`max-w-7xl`).
* **Spacing Scale**: Strict 4px/8px modular scale (`gap-4`, `gap-6`, `gap-8`, `gap-12`, `py-16`, `py-24`).
* **Borders & Shadows**:
  - Crisp `1px` borders (`border-[#E4E0D6]`).
  - Minimal subtle elevation (`shadow-sm` or `shadow-[0_4px_20px_rgba(17,26,21,0.04)]`). No glowing orbs or neon shadows.

---

## 5. Micro-Interactions & Motion
* **Calculators**: Smooth drag response on range inputs, numeric spring interpolation, SVG stroke dasharray animated curves.
* **Motion Accessibility**: Respects `@media (prefers-reduced-motion: reduce)`.
* **Focus States**: High-contrast, custom offset focus rings (`focus-visible:ring-2 focus-visible:ring-[#0E2F22] focus-visible:ring-offset-2`).
