---
name: technical-defaults
description: Default technical stack and setup for website design recreation
type: defaults
---

# Technical Defaults

## CSS Framework
Use Tailwind CSS via CDN:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Images
Use placeholder images from `https://placehold.co/` when source images aren't provided.

Example: `https://placehold.co/400x300`

## Design Approach
Mobile-first responsive design. Build the layout to be responsive across device sizes unless the reference shows a specific fixed design.

## File Structure
Single `index.html` file unless the user requests otherwise. All content should be inline — no external CSS files, JavaScript files, or separate HTML documents unless explicitly requested.
