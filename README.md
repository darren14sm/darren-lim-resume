# Darren Lim · Digital Resume 2026

The resume as a responsive Next.js site, with a downloadable ATS-friendly PDF.
No database, no APIs, no environment variables.

## Deploy
1. Push this folder to a GitHub repo (or run `npx vercel` inside it).
2. On vercel.com, import the repo. Vercel detects Next.js automatically. Nothing to configure.
3. After the first deploy, put your real URL in `data/cv.ts` → `site.url` and redeploy (used for link previews and search).

Run locally: `npm install`, then `npm run dev`, then open http://localhost:3000

## Where things live
| To change | Edit |
|---|---|
| Any wording, dates, roles, bullets, metrics, competencies, frameworks, links | `data/cv.ts` (the only file you normally need) |
| Portrait | replace `public/portrait.jpg` (keep the name) |
| Downloadable resume | `data/cv.ts` → `contact.resume.href`. It currently points at your Google Drive file. A copy also ships at `public/Darren-Lim-Resume-2026.pdf`, so you can set `href` to `"/Darren-Lim-Resume-2026.pdf"` to serve it from this site instead |
| Colours, type sizes, spacing | `app/globals.css` (tokens at the top) |
| Fonts | `app/layout.tsx` (Newsreader + Instrument Sans, self-hosted by Next at build) |
| Link preview (Facebook, WhatsApp, X) | picture: replace `public/og-image.png`, keeping it exactly 1200 x 630. Title, description and alt text: `data/cv.ts` → `site.social`. Production URL: `site.url` |
| Section order | `app/page.tsx` |

The resume download appears in two places, both reading from the same value:
the top navigation ("Resume ↓") and the contact card ("Download resume").

## Components
- `DocNav` slim document navigation with the resume download
- `Header` masthead, portrait, contact bar
- `MetricStrip` / `MetricBlock` evidence markers
- `Progression` career through-line
- `ExperienceSection` / `ExperienceEntry` / `Timeline` experience, earlier experience, chronology
- `SidePanel` / `CapabilityGroup` / `SystemFlow` competencies, systems, platforms, education, languages, credentials
- `Frameworks` the Commercial Methodology and the Commercial System
- `CaseStudies` / `CaseStudyCard` approach, execution and outcome, linked to the full case studies
- `ContactSection` working together, contact details, resume download
- `SectionHeader`, `Flow`, `ExternalLink` shared building blocks
