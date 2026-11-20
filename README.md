# Sora — promo site

Static promo site for the Sora iPhone app (AI video creator). React 18 + TypeScript + Vite + Tailwind 4 + React Router 7. Deployed to GitHub Pages through GitHub Actions.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:5173/
pnpm build      # outputs dist/
```

## Where things live

- `src/app/content/site.ts` — every app and brand fact (App Store ID, contact email, FAQ, feature copy). Pages read from here only.
- `src/app/content/legal.ts` — Terms of Use and Privacy Policy, verbatim from the owner's `.docx`. Only the markup changed (`## ` headings, `- ` bullets). Do not edit the wording; send changes back to the owner.
- `src/app/pages/` — Home, App, Support, Contact, Terms, Privacy.
- `public/images/` — app screens and icon. Always reference images through `img()` in `src/app/utils/img.ts`.
- `src/styles/index.css` — design tokens on `:root`, taken from the app's Figma file.

## Placeholders still open

Marked `PLACEHOLDER` in the code: the operator's legal name (footer, ©), the document effective date, the iOS minimum, the category. Fill them in before the first public deploy.

## Deployment

- Live URL: `https://soraai.best/` (custom domain via `public/CNAME`, `base: "/"` in `vite.config.ts`).
- Pages default URL `https://norin-web.github.io/sorav1rf/` only works with `base: "/sorav1rf/"`; do not mix the two.
- Source in Pages settings must be **GitHub Actions**.
- `base: "/"` and `public/CNAME` must stay in the same commit. Removing the domain means `base: "/sorav1rf/"` and deleting `public/CNAME`.
- The workflow copies `index.html` to `404.html` so deep links work on Pages.

## Rules

- No smooth-scroll library and no hide-on-scroll header.
- Reveal animations are CSS transitions gated on the element's geometry (`src/app/utils/useReveal.ts`). Content must never stay hidden.
