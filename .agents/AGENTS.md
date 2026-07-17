# Dentist Website - Customization Rules

When starting a conversation or task in this workspace, follow these guidelines:

1. **Read Project Context First**:
   Immediately read the [GEMINI.md](file:///d:/Dentist%20Website/GEMINI.md) file in the project root. It outlines the current tech stack, folder structure, custom setups, and active work tasks.

2. **Strict TypeScript & Build Constraints**:
   - Always write modular imports. Since `verbatimModuleSyntax` is enabled in `tsconfig.app.json`, you must import types using `import type { TypeName } ...` or `import { type TypeName } ...`.
   - Never import unused packages or declare unused local variables, as `noUnusedLocals` is enabled.

3. **Tailwind CSS v4 & Styling**:
   - All styling overrides (fonts, custom HSL/OKLCH colors, gradients) must be configured in [src/index.css](file:///d:/Dentist%20Website/src/index.css) inside the `@theme inline` or `:root` blocks. Do not add a `tailwind.config.js` file since Tailwind v4 is CSS-based.
   - Use Google Fonts `Sora` (for display/headings) and `Manrope` (for sans-serif/body).

4. **Peer Dependency Workaround**:
   - A `.npmrc` file is configured with `legacy-peer-deps=true`. Keep this active to resolve peer conflicts with React 19 dependencies during `npm i` or `npx shadcn add` commands.
