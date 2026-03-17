# Anti-Opus Project Context

**Overview:**
This project is a scroll-storytelling landing page named "Hạm Đội Tàu Biển" (Naval Fleet). It visually presents a 3-tier leadership and delegation strategy (SDM → PL → Members) using a nautical metaphor (Admiral → Captain → Sailor). The goal is to solve the problem of an overloaded SDM by delegating operational tasks to PLs.

**Tech Stack:**
- Pure Vanilla HTML5, CSS3, JavaScript (ES6+).
- No frameworks, no build tools, no external libraries (except Google Fonts: Outfit & Playfair Display).
- Premium dark theme UI with scroll-triggered CSS animations.

**File Structure & Details:**

1. **`spec.md`**: 
   - The single source of truth for the content.
   - Outlines the Context/Pain-points, Vision (3-tier model), a detailed 3-Phase Roadmap (Nền tảng, Phát triển, Bền vững), and Risk Management.

2. **`index.html`**:
   - The main HTML structure. 
   - Uses semantic `<section>` tags for each part of the story (Hero, Pain points, Vision, Phases 1-3, Risks, Footer).
   - Contains a side navigation `<nav id="sideNav">` and a scroll progress indicator.

3. **`styles.css`**:
   - Contains the design system (CSS variables for colors, fonts, spacing).
   - Implements the layout (Flexbox/Grid), responsive design (media queries), and the `.reveal` animation classes used by JS.
   - Features complex styling for timeline phases, cards, and a nautical-themed color palette (Deep Navy, Gold, Teal, Storm Red).

4. **`script.js`**:
   - Client-side logic for interactivity.
   - Uses `IntersectionObserver` to add the `.visible` class to elements with `.reveal` when they scroll into view.
   - Updates the width of the `#scrollProgress` bar based on scroll position.
   - Updates the `.active` state of the right-side navigation dots based on the currently viewed section.

5. **`Feedback.csv`**:
   - Tracks review feedback from stakeholders (Hong, Mỹ). 
   - All items are currently `Done` (e.g., wording fixes, enforcing the Admiral/Captain/Sailor naming convention, adding chaos/unity illustrations).

6. **`images/`**:
   - `hero_fleet.png`: Triumphant fleet image (used in Hero & Footer).
   - `top_chaos_fleet.png`: AI-generated illustration of a fleet in chaos (used in Pain section).

**Current State:**
The project is fully developed and has just completed a round of feedback implementation. It is fully responsive and ready for use.
