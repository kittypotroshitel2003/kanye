# CLAUDE.md — Frontend, UI Components, and Motion Design Rules

This file defines how Claude Code should work on this project when building or improving frontend interfaces, animated websites, landing pages, and interactive visual sections.

The goal is to produce production-ready frontend work with:

- premium visual quality
- intentional motion design
- strong responsive behavior
- accessibility
- maintainable code
- no generic template-looking UI
- no unnecessary dependencies
- no performance-heavy animation unless justified

---

## 0. Always Do First

- **Invoke the `frontend-design` skill before writing any frontend code, every session, no exceptions.**
- If the `frontend-design` skill is not available in the current environment, explicitly say that it is unavailable, then continue with a structured frontend design pass before coding.
- Before editing, inspect the current project structure, package manager, framework, styling setup, and existing components.
- Do not assume this is a blank project.
- Do not rebuild the whole project unless explicitly asked.

---

## 1. Project Awareness

Before implementing frontend work, check:

- `package.json`
- existing component folders such as `components/`, `src/components/`, `app/`, `pages/`, `ui/`, `sections/`
- Tailwind configuration if present
- existing design tokens, CSS variables, themes, fonts, colors
- existing animation libraries
- existing shadcn/ui or registry setup
- existing brand assets
- existing routing and layout patterns

Use the current stack. Do not introduce a new frontend architecture unless the user explicitly asks.

If the project is:

- Next.js / React: use the existing app structure and components.
- Vite / React: use the existing Vite structure.
- Static prototype only: a single `index.html` file is acceptable.
- Unknown: inspect files first, then choose the least invasive approach.

---

## 2. Reference Images

If a reference image is provided:

- Match layout, spacing, typography, and color as closely as possible.
- Swap in placeholder content only when real content/assets are unavailable.
- Use placeholder images via `https://placehold.co/` only if no real assets exist.
- Do not improve, reinterpret, or add to the design unless asked.
- Do not add sections, features, or content not visible in the reference.

Screenshot workflow for reference matching:

1. Implement the page/section.
2. Serve from localhost.
3. Take a screenshot.
4. Compare screenshot against the reference.
5. Fix visible mismatches.
6. Re-screenshot.
7. Do at least 2 comparison rounds.
8. Stop only when no visible differences remain or the user says to stop.

When comparing, be specific:

- “Heading is ~32px but reference shows ~24px.”
- “Card gap is 16px but should be 24px.”
- “Primary color is too saturated.”
- “Border radius should be closer to 20px.”
- “Shadow is too flat.”

Check:

- spacing
- padding
- font size
- font weight
- line height
- color values
- alignment
- border radius
- shadows
- image sizing
- responsive behavior

---

## 3. Local Server Rules

- **Always serve on localhost.**
- Never screenshot a `file:///` URL.
- If the project includes `serve.mjs`, use it as the default static server.
- Start the dev server with:

```bash
node serve.mjs
```

- `serve.mjs` serves the project root at:

```text
http://localhost:3000
```

- Start the server in the background before taking screenshots.
- If the server is already running, do not start a second instance.
- For framework projects, use the project’s normal dev command from `package.json`, such as `npm run dev`, `pnpm dev`, or `yarn dev`, unless the project instructions say otherwise.

---

## 4. Screenshot Workflow

- Puppeteer is installed.
- Chrome cache is located at:

```text
~/.cache/puppeteer/
```

- Always screenshot from localhost.
- If `screenshot.mjs` exists in the project root, use it as-is:

```bash
node screenshot.mjs http://localhost:3000
```

- Screenshots are saved automatically to:

```text
./temporary screenshots/screenshot-N.png
```

- Screenshots auto-increment and should not be overwritten.
- Optional label suffix:

```bash
node screenshot.mjs http://localhost:3000 label
```

This saves as:

```text
screenshot-N-label.png
```

- After screenshotting, read the PNG from `temporary screenshots/` and analyze the image directly.
- Do not rely only on code inspection for visual quality.

---

## 5. Output Defaults

Use the project’s existing structure first.

Only use these defaults when the user asks for a simple standalone prototype or when no framework/project structure exists:

- single `index.html` file
- all styles inline or in the same file
- Tailwind CSS via CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

- placeholder images:

```text
https://placehold.co/WIDTHxHEIGHT
```

- mobile-first responsive layout

For real React/Next.js projects:

- do not collapse the project into one `index.html`
- do not use Tailwind CDN if Tailwind is already installed
- use existing routes, layouts, and components
- keep implementation idiomatic to the current stack

---

## 6. Brand Assets

Always check the `brand_assets/` folder before designing.

It may contain:

- logos
- color guides
- style guides
- product images
- brand illustrations
- typography references
- screenshots

Rules:

- If assets exist, use them.
- Do not use placeholders where real assets are available.
- If a logo is present, use it.
- If a color palette is defined, use those exact values.
- Do not invent brand colors when brand colors exist.
- If brand assets conflict with a third-party component’s default style, adapt the component to the brand, not the other way around.

---

## 7. Anti-Generic Guardrails

Never produce generic template UI.

### Colors

- Never use default Tailwind blue/indigo as the primary brand color.
- Avoid obvious defaults like `blue-600`, `indigo-500`, `purple-600` as the main identity.
- Pick or derive a custom brand color unless brand colors already exist.
- Use color intentionally for hierarchy, mood, and interaction.

### Shadows

- Never use flat `shadow-md` as the main depth system.
- Use layered, color-tinted shadows with low opacity.
- Create a depth system:
  - base
  - elevated
  - floating
  - modal/overlay

### Typography

- Do not use the same visual treatment for headings and body.
- Prefer a strong heading style and a clean readable body style.
- Large headings should usually use tight tracking such as `-0.03em`.
- Body copy should have generous line-height, around `1.6`–`1.8`.
- Use font pairing where appropriate: display/serif/expressive heading + clean sans body.
- Do not add external fonts without checking project conventions and performance impact.

### Gradients and Texture

- Prefer layered radial gradients over one flat linear gradient.
- Add subtle depth through grain, noise, mesh gradients, glows, or atmospheric layers when appropriate.
- Use SVG noise or CSS texture subtly, not as decoration overload.

### Animation

- Only animate `transform` and `opacity` by default.
- Never use `transition-all`.
- Use spring-style or custom easing.
- Motion should feel intentional, not random.
- Do not animate layout properties unless there is a strong reason and performance is acceptable.

### Interactive States

Every clickable element must have:

- hover state
- focus-visible state
- active state
- accessible label if needed
- keyboard-safe behavior

No exceptions.

### Images

For image-heavy designs:

- use real assets when available
- add gradient overlays where needed for readability
- use treatments like `mix-blend-multiply`, duotone overlays, or masks only when appropriate
- preserve aspect ratios
- avoid layout shift

### Spacing

- Use intentional spacing tokens.
- Do not use random Tailwind spacing steps without a system.
- Keep vertical rhythm consistent.
- Use section padding consistently across the page.

### Depth

- Surfaces should not all sit on the same z-plane.
- Use background, elevated cards, floating objects, overlays, and foreground accents intentionally.

---

## 8. Hard Rules

- Do not add sections, features, or content not in the reference when matching a reference.
- Do not “improve” a reference design unless explicitly asked.
- Do not stop after one screenshot pass when visual matching is required.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as the primary color.
- Do not install large UI kits unless explicitly justified or requested.
- Do not introduce multiple libraries that solve the same problem.
- Do not put important SEO/accessibility text inside canvas/WebGL-only scenes.
- Do not make the whole page depend on a third-party visual embed.
- Do not ignore mobile behavior.
- Do not ignore reduced-motion users.

---

## 9. Component Library Priority

When creating or improving UI, use this priority order:

1. Existing project components
2. 21st.dev / 21Dev-style components
3. shadcn/ui components for base primitives
4. Magic UI for animated landing-page elements
5. Aceternity UI for high-impact hero sections, animated cards, backgrounds, and premium effects
6. React Bits for unusual interactive or experimental components
7. MotionSites for premium hero prompts, layout ideas, and animation direction
8. Unicorn Studio for embeddable WebGL backgrounds and interactive motion scenes
9. Custom components only when no good existing option fits

Important distinction:

- 21st.dev, shadcn/ui, Magic UI, Aceternity UI, and React Bits can provide component code.
- MotionSites mainly provides prompt/design direction and motion inspiration.
- Unicorn Studio mainly provides embeddable WebGL motion assets.
- Do not confuse inspiration sources, component sources, npm dependencies, and embedded external assets.

---

## 10. Library Roles

### Existing Project Components

Always check existing components first.

Use existing components when possible to preserve:

- visual consistency
- accessibility patterns
- theme tokens
- spacing system
- routing conventions
- maintainability

Do not duplicate an existing button, card, modal, nav, or section component unless there is a clear reason.

---

### 21st.dev / 21Dev

Use 21st.dev / 21Dev-style components as a source for modern React UI patterns and high-quality component bases.

Use for:

- landing sections
- hero blocks
- cards
- AI/chat UI
- prompt boxes
- pricing blocks
- navigation
- marketing UI
- polished component starting points

Rules:

- Treat 21st.dev as a component source, not as a full design system that overrides the project.
- Adapt components to this project’s brand and layout.
- Place imported/adapted components in a clear folder such as:
  - `src/components/21st/`
  - `src/components/ui/`
  - `src/components/sections/`
- Keep copied components readable and editable.
- Remove unused demo content.
- Do not blindly stack multiple 21st components if their styles conflict.

---

### shadcn/ui

Use shadcn/ui for base UI primitives:

- buttons
- cards
- dialogs
- dropdowns
- forms
- inputs
- tabs
- accordions
- tooltips
- navigation primitives

Rules:

- Follow the existing shadcn/ui setup if present.
- Do not create custom primitives when shadcn/ui already provides an accessible one.
- Keep shadcn components close to the project’s design tokens.
- Do not leave default styles unmodified if they look generic.

---

### Magic UI

Use Magic UI for animated landing-page effects and polished marketing components.

Use for:

- animated backgrounds
- marquee effects
- hero accents
- glowing buttons
- animated cards
- decorative motion layers
- landing-page sections

Rules:

- Use Magic UI when the project needs tasteful animated polish quickly.
- Adapt styling to the existing project.
- Avoid adding multiple decorative effects that compete for attention.
- Do not use Magic UI if a simple Motion/CSS animation is enough.

---

### Aceternity UI

Use Aceternity UI for high-impact, premium, visually unusual sections.

Use for:

- premium hero sections
- animated backgrounds
- spotlight effects
- card stacks
- sticky scroll sections
- high-impact landing page moments
- futuristic or editorial sections

Rules:

- Use Aceternity when the user wants a “wow” effect.
- Adapt it carefully; do not let it visually overpower the site.
- Check performance on mobile.
- Avoid using multiple heavy effects in one viewport.

---

### React Bits

Use React Bits for unusual, experimental, or playful interactive components.

Use for:

- text effects
- cursor-reactive components
- hover experiments
- interactive decorative elements
- unusual UI details
- small memorable interactions

Rules:

- Use React Bits sparingly.
- Do not make the whole product feel like a toy unless requested.
- Keep accessibility intact.
- Disable or simplify intense effects on mobile.

---

### MotionSites

MotionSites URL:

```text
https://motionsites.ai/
```

Use MotionSites as a motion-direction and premium hero prompt source.

Use for:

- hero section concepts
- animated landing-page prompts
- motion references
- premium visual direction
- unusual section structure
- animation sequencing ideas
- improving the quality of prompts before coding

Rules:

- MotionSites is not a normal npm dependency.
- Do not treat it like a package to install.
- Use it to improve concept, layout, sequencing, motion timing, and visual direction.
- Convert ideas into maintainable React/Next.js/Tailwind code.
- Do not copy blindly if it conflicts with the existing design system.
- If browser access is available, check MotionSites for relevant animated hero/section ideas before designing a premium landing page section.
- If browser access is not available, ask the user to paste a MotionSites prompt/template/reference.

---

### Unicorn Studio

Unicorn Studio URL:

```text
https://www.unicorn.studio/dashboard
```

Use Unicorn Studio as an external no-code WebGL / interactive motion asset source.

Use for:

- animated WebGL backgrounds
- interactive shader-like effects
- aurora visuals
- gradient motion
- blob/distortion visuals
- premium hero backgrounds
- mouse-reactive visual layers
- embedded motion scenes
- effects that would be too expensive or slow to build manually

Rules:

- Unicorn Studio is not a React component library.
- Unicorn Studio is not a replacement for normal UI components.
- Treat Unicorn Studio scenes as external embedded visual assets.
- Keep text, buttons, forms, navigation, and important UI as normal HTML/React elements above the scene.
- Do not put critical content inside the WebGL scene.
- Add a static fallback for mobile, reduced-motion users, low-power devices, and failed loads.
- Do not make the entire page depend on a Unicorn scene.
- Ask the user for the Unicorn Studio embed code, project link, or exported asset when needed.
- If the dashboard requires login, do not assume access. Ask the user to provide the embed/export.

Recommended pattern:

- Unicorn Studio handles the atmospheric WebGL visual layer.
- React handles layout, content, buttons, navigation, forms, and accessibility.
- Motion handles normal UI animations.
- GSAP handles advanced scroll timelines only when needed.

Recommended wrapper locations:

- `src/components/visuals/UnicornScene.tsx`
- `src/components/sections/HeroWebGLBackground.tsx`
- `src/components/visuals/WebGLBackground.tsx`

---

## 11. Animation Library Priority

Use the right tool for the job.

### CSS / Tailwind

Use CSS/Tailwind for:

- simple hover states
- simple transitions
- static gradients
- responsive layout
- small decorative effects

Rules:

- Never use `transition-all`.
- Specify transitioned properties.
- Prefer `transform`, `opacity`, and CSS variables.

---

### Motion / Framer Motion-style animation

Use Motion for normal React UI animation:

- entrance animations
- hover effects
- staggered text reveal
- card animations
- modal/dialog transitions
- page transitions
- simple scroll reveal
- layout transitions when appropriate
- microinteractions

Rules:

- Use Motion as the default animation engine for React UI.
- Create reusable variants.
- Respect reduced motion.
- Keep timing consistent.
- Do not use GSAP for simple hover/fade/stagger effects.

---

### GSAP

Use GSAP only for advanced animation:

- complex scroll-driven animation
- pinned sections
- scrubbed timelines
- horizontal scroll storytelling
- advanced sequencing
- cinematic landing-page sections
- timeline-heavy animations

Rules:

- Do not use GSAP for simple hover effects.
- Use GSAP only when Motion/CSS is not enough.
- Keep GSAP isolated in specific components/hooks.
- Clean up timelines and ScrollTriggers on unmount.
- Provide mobile and reduced-motion fallbacks.

---

### Three.js / React Three Fiber

Use Three.js / React Three Fiber for:

- 3D hero sections
- WebGL objects
- custom 3D product visuals
- interactive 3D scenes
- particle systems
- shader-like visual effects
- app-integrated 3D logic

Rules:

- Use only when 3D is genuinely needed.
- Lazy-load heavy 3D sections where possible.
- Provide static mobile fallback.
- Provide reduced-motion fallback.
- Keep canvas behind or beside normal semantic content.
- Do not block initial page load with heavy 3D.

---

### Rive / Lottie

Use Rive or Lottie for:

- animated icons
- mascots
- brand illustrations
- character animations
- exported vector animations
- small narrative animations

Rules:

- Do not use Rive/Lottie for normal UI transitions.
- Keep file sizes reasonable.
- Provide accessible labels or decorative hiding as appropriate.
- Do not replace semantic content with animation files.

---

### Unicorn Studio

Use Unicorn Studio when:

- the desired effect is mostly visual/atmospheric
- it can be embedded as a background or scene
- it does not require deep app-state integration
- building it manually would be too slow or expensive

Do not use Unicorn Studio when:

- the effect needs heavy interaction with app state
- the content must be SEO-readable inside the effect
- it is a normal form/button/card/nav interaction
- a simple CSS/Motion effect would be enough

---

## 12. Dependency Rules

Before installing any package:

1. Check `package.json`.
2. Check whether the project already has a suitable dependency.
3. Explain why the new dependency is needed.
4. Prefer small, focused dependencies.
5. Prefer copy-paste component libraries over heavy all-in-one UI kits.
6. Avoid installing multiple libraries that solve the same problem.

If the project already has:

- `motion` or `framer-motion`: use it for UI animations.
- `gsap`: use it only for advanced scroll/timeline animations.
- `three` or `@react-three/fiber`: use it only for 3D/WebGL sections.
- shadcn/ui setup: follow the existing component structure.
- Tailwind CSS: keep styling Tailwind-first.

Do not install large UI kits such as:

- MUI
- Chakra UI
- Mantine
- Ant Design
- Bootstrap-style UI kits

unless the user explicitly asks or the project already uses them.

When adding dependencies, report:

- package name
- why it was added
- where it is used
- whether it replaces or duplicates anything

---

## 13. External Access Rules

When using external component or animation sources:

- Prefer official documentation and official installation instructions.
- If browser/web access is available, check the current official docs before using install commands.
- If browser/web access is not available, do not hallucinate current commands.
- Ask the user to paste the component code, registry command, MotionSites prompt, or Unicorn embed code.
- Do not assume access to private dashboards or paid accounts.

For Unicorn Studio specifically:

- The user should create/export the scene if login is required.
- Ask for the embed code or exported asset.
- Then integrate it safely into the project.

---

## 14. Section Workflow

Work section by section.

For every new section:

1. Inspect existing project structure and styles.
2. Check existing components first.
3. Choose the best source:
   - existing component
   - 21st.dev / 21Dev
   - shadcn/ui
   - Magic UI
   - Aceternity UI
   - React Bits
   - MotionSites inspiration
   - Unicorn Studio embed
   - custom component
4. Add only necessary dependencies.
5. Adapt component styling to the current design system.
6. Add the animation layer.
7. Make it responsive.
8. Add reduced-motion fallback.
9. Check accessibility.
10. Run typecheck/lint/build if available.
11. Screenshot and visually inspect when UI changes are visible.
12. Report changed files, dependencies, and animation decisions.

Do not work on unrelated sections unless asked.

---

## 15. Motion Design Thinking

When the user asks for:

- “cool animations”
- “premium”
- “wow effect”
- “unusual”
- “make it cooler”
- “more expensive-looking”

Do not simply add more effects.

First analyze:

- current visual hierarchy
- focal point
- timing
- sequencing
- interaction points
- scroll behavior
- mobile behavior
- performance risks
- reduced-motion requirements

Then improve with intentional motion:

- better entrance sequence
- more refined easing
- better stagger
- subtle parallax
- cursor-reactive depth
- layered background motion
- more polished hover states
- scroll-based reveal only when useful

Preferred motion styles:

- cinematic
- premium
- editorial
- futuristic
- magnetic
- glassy
- layered
- depth-based
- smooth
- subtle but memorable

Avoid:

- childish bouncing
- chaotic neon overload
- random motion
- basic fade-ins only
- overused SaaS templates
- motion that competes with content

---

## 16. Landing Page Animation Patterns

### Hero Sections

Consider:

- staggered headline reveal
- animated mesh/gradient background
- floating product preview
- cursor-follow glow
- magnetic CTA
- subtle parallax layers
- masked text reveal
- editorial image reveal
- Unicorn Studio WebGL background if justified
- 3D/WebGL only if it adds real value

Rules:

- Hero content must remain readable.
- CTA must remain accessible.
- Avoid making the hero depend entirely on canvas/WebGL.
- Use a strong static fallback.

---

### Feature Sections

Consider:

- scroll reveal
- cards appearing with stagger
- hover depth
- animated borders
- icon microinteractions
- spotlight effects
- progressive disclosure

Rules:

- Do not animate every card identically if it feels robotic.
- Keep reading flow clear.
- Avoid scroll jank.

---

### Pricing Sections

Consider:

- magnetic cards
- soft glow on recommended plan
- animated billing toggle
- subtle hover elevation
- premium CTA motion

Rules:

- Do not distract from prices.
- Keep comparison readable.
- Do not use heavy WebGL here.

---

### Testimonials

Consider:

- slow marquee
- hover pause
- layered cards
- progressive reveal
- subtle drag/scroll interaction

Rules:

- Avoid fast or annoying carousels.
- Keep text readable.
- Pause motion when appropriate.

---

### CTA Sections

Consider:

- animated atmospheric background
- spotlight reveal
- premium button motion
- particles only if lightweight
- Unicorn Studio background if it enhances the brand moment

Rules:

- CTA must remain the focus.
- Do not bury the button under visual effects.

---

### Scroll Storytelling

Consider GSAP for:

- pinned section
- scrubbed timeline
- progressive text/image changes
- horizontal scroll sections
- cinematic product explanation

Rules:

- Use only when the story benefits from scroll control.
- Provide a simple mobile fallback.
- Avoid hijacking scroll unnecessarily.

---

## 17. Unicorn Studio Integration Pattern

When integrating a Unicorn Studio scene:

1. Ask for the embed code or exported asset if not already provided.
2. Create a wrapper component.
3. Keep the scene absolutely positioned as a background layer when appropriate.
4. Keep semantic content in React/HTML above the scene.
5. Add `aria-hidden="true"` if the scene is decorative.
6. Add loading fallback.
7. Add mobile fallback.
8. Add reduced-motion fallback.
9. Ensure the page still works if the scene fails to load.

Example structure:

```tsx
<section className="relative overflow-hidden">
  <UnicornScene aria-hidden="true" />
  <div className="relative z-10">
    {/* Real accessible content here */}
  </div>
</section>
```

Do not place important headings, body copy, buttons, or forms inside the WebGL embed.

---

## 18. Accessibility Rules

All UI must be accessible by default.

Check:

- semantic HTML
- correct heading order
- keyboard navigation
- visible focus states
- accessible names for buttons/links
- sufficient color contrast
- reduced-motion support
- no essential information conveyed only by animation
- no canvas-only critical content

For decorative animation:

- use `aria-hidden="true"` where appropriate
- avoid trapping focus
- avoid motion that causes nausea

---

## 19. Responsive and Mobile Rules

All sections must be mobile-first responsive.

On mobile:

- simplify heavy animations
- reduce parallax intensity
- disable cursor-follow effects
- replace 3D/WebGL with static or simpler versions when needed
- preserve readable spacing
- keep CTAs visible and usable
- avoid horizontal overflow

Do not assume desktop behavior works on touch devices.

---

## 20. Reduced Motion Rules

Every major animated component must respect reduced motion.

Use:

- `prefers-reduced-motion`
- Motion reduced-motion utilities when available
- static fallbacks for heavy animation
- simplified transitions for mobile and accessibility

Reduced-motion users should still get:

- readable content
- complete layout
- visible states
- no broken visual layers

They should not get:

- large parallax movement
- continuous motion backgrounds
- intense scroll-linked effects
- WebGL motion that cannot be paused/simplified

---

## 21. Performance Rules

Animations should be performant.

Prefer:

- `transform`
- `opacity`
- CSS variables
- GPU-friendly movement
- lazy loading heavy visuals
- small isolated components

Be careful with:

- blur
- large shadows
- filter
- backdrop-filter
- clip-path
- huge animated gradients
- canvas/WebGL
- particle systems
- continuous animation loops

Avoid:

- animating width, height, top, left, margin, padding
- layout-shifting animations
- scroll jank
- blocking initial page load
- running heavy animations offscreen

For heavy effects:

- lazy-load when possible
- disable or simplify on mobile
- provide static fallback
- avoid blocking first paint

---

## 22. Code Style

Use:

- TypeScript when the project uses TypeScript
- React functional components
- clear component names
- reusable animation variants
- clean Tailwind classes
- accessible HTML
- keyboard-friendly interactions
- small focused components
- project-owned wrappers for external embeds

Do not:

- create huge unreadable components
- hardcode messy one-off animation logic everywhere
- ignore accessibility
- break existing layout
- change unrelated files
- leave unused demo code
- leave unused imports
- leave console noise

---

## 23. File Organization

Prefer clear organization:

```text
src/components/ui/          # reusable primitives
src/components/sections/    # page sections
src/components/visuals/     # visual effects, WebGL, Unicorn wrappers
src/components/animation/   # reusable animation helpers/variants
src/lib/                    # utilities
src/styles/                 # global styles/tokens if used
```

For copied/adapted components:

- keep names clear
- remove unused examples
- adapt to project tokens
- document unusual dependencies briefly in comments only when useful

---

## 24. Validation Before Finishing

Before final response after frontend changes:

1. Run typecheck if available.
2. Run lint if available.
3. Run build if appropriate and not too expensive.
4. Start local server if visual work was done.
5. Take screenshot if visible UI changed.
6. Inspect screenshot.
7. Fix obvious visual issues.
8. Re-screenshot when reference matching or high visual fidelity is required.

If a command fails:

- explain the failure clearly
- fix it if related to the task
- do not hide errors

---

## 25. Reporting Format After Changes

After implementation, report:

- changed files
- added dependencies
- removed dependencies, if any
- chosen component source
- chosen animation approach
- mobile behavior
- reduced-motion behavior
- checks run
- any known limitations

Keep the report concise but specific.

---

## 26. When Asking the User for Assets

Ask the user for assets only when necessary.

Ask for:

- Unicorn Studio embed/export when a dashboard login is required
- MotionSites prompt/template if browser access is unavailable
- brand logo if missing
- brand colors if unclear
- reference image if exact matching is required

Do not block progress if a reasonable placeholder/fallback can be used.

---

## 27. Good Task Interpretation Examples

If the user says:

```text
Make the hero cooler.
```

Interpret as:

- inspect current hero
- improve hierarchy
- improve motion sequence
- add tasteful interaction
- avoid random effects
- preserve brand
- check mobile/reduced motion

If the user says:

```text
Use Unicorn Studio here.
```

Interpret as:

- ask for embed/export if not provided
- wrap scene safely
- keep content in React
- add fallback
- ensure accessibility

If the user says:

```text
Use MotionSites as inspiration.
```

Interpret as:

- use it for concept and prompt quality
- translate the idea into project-native code
- do not treat it as an installable package

If the user says:

```text
Use 21Dev.
```

Interpret as:

- use 21st.dev / 21Dev-style components as a base
- adapt to current project design
- add motion layer intentionally
- do not replace the whole design system

---

## 28. Strong Default Stack for Animated Sites

When the project allows choice and no existing stack conflicts, prefer:

- React / Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui for primitives
- 21st.dev / 21Dev for modern component bases
- Magic UI / Aceternity UI for premium animated sections
- Motion for most UI animation
- GSAP only for complex scroll timelines
- Unicorn Studio or React Three Fiber only for justified WebGL/3D

Do not add all of these by default. Choose only what the task needs.

---

## 29. Final Reminder

The best result is not the page with the most animation.

The best result is:

- visually memorable
- easy to use
- fast
- accessible
- responsive
- consistent with the brand
- implemented with the fewest appropriate tools
- polished through screenshot review
