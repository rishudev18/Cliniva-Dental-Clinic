---
name: workflow
description: Step-by-step process for recreating website designs
type: workflow
---

# Design Recreation Workflow

When the user provides a reference image (screenshot) and optionally some CSS classes or style notes, follow these steps:

## Step 1: Generate
Create a single `index.html` file using Tailwind CSS (via CDN). Include all content inline — no external files unless requested.

## Step 2: Screenshot
Screenshot the rendered page using Puppeteer:
```
npx puppeteer screenshot index.html --fullpage
```
If the page has distinct sections, capture those individually too.

## Step 3: Compare
Compare your screenshot against the reference image. Measure for mismatches in:
- Spacing and padding (measure in px)
- Font sizes, weights, and line heights
- Colors (exact hex values)
- Alignment and positioning
- Border radii, shadows, and effects
- Responsive behavior
- Image/icon sizing and placement

## Step 4: Fix
Edit the HTML/Tailwind code to correct every mismatch found.

## Step 5: Re-screenshot
Screenshot the updated page and compare against the reference again.

## Step 6: Repeat
Repeat steps 3–5 until the result is within ~2–3px of the reference everywhere.
