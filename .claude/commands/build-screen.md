---
description: Build a screen from a Figma design using project components and design tokens
---

# Build Screen

Build a screen from a Figma design, adapting the output to this project's stack (React, plain CSS with BEM naming, OTDS design tokens).

## Input

`$ARGUMENTS` should be a Figma URL. If not provided, ask for one.

## Step 1: Get the design

Call `get_design_context` with the fileKey and nodeId extracted from the URL.

## Step 2: Ignore system UI chrome

Strip these components from the Figma output entirely — they represent the iPhone system UI and are not part of the screen:

- **Status Bar** (node name: "Status Bar - iPhone" or similar)
- **Home Indicator** (node name: "Home Indicator" or similar)

Do not render them, reference their assets, or include their layout wrappers.

## Step 3: Resolve design tokens — do not trust fallback values

The Figma code output uses a pattern like `var(--otds-token-name, #fallback)`. The fallback value is **not authoritative** — it is a snapshot from one color scheme and will break in the other.

**Always do this:**

1. Extract the token name (e.g. `--otds-bg-brand-primary`)
2. Look up the token in `src/index.css` to confirm it exists and check its light/dark values
3. Use only the token — never hardcode the fallback

**Common traps:**
- A dark-mode fallback like `#10071b` used as a static value will not flip in light mode
- `white` as a fallback for `--otds-color-primary` is only correct in dark mode — the token resolves to `#2c3039` in light mode
- If a color in the design genuinely needs to be static (e.g. always white text over an image), use the appropriate palette token (`--otds-white-100`) rather than a raw color literal

## Step 4: Use existing components

Before writing any new markup, check whether the design references components that already exist in `src/components/`. The Figma output will include `CodeConnectSnippet` wrappers — these map directly to project components. Use them with the props indicated.

## Step 5: Build with project conventions

- **CSS:** Plain CSS files with BEM-style class naming (e.g. `.landing__hero`, `.landing__buttons`). No Tailwind.
- **Tokens:** Use `var(--otds-*)` tokens from `src/index.css` for all spacing, colors, radii, and typography.
- **Images:** Download Figma asset URLs and save them locally to `src/assets/images/`. Figma asset URLs expire after 7 days.
- **Structure:** Prefer updating existing files over creating new ones. If a new component is needed, follow the pattern in `src/components/` (Component.jsx + Component.css).

## Step 6: Verify

Run a build (`npx vite build`) to confirm there are no errors.
