# aditk.com

Personal site for Adit Khandelwal. Minimal dark layout over a cursor-reactive
starfield background.

## Stack

- [Next.js](https://nextjs.org) 15 (App Router) + TypeScript
- Tailwind CSS 3
- `next/font` (Schibsted Grotesk, Hanken Grotesk, JetBrains Mono)
- Background is a plain `<canvas>` in `components/Starfield.tsx` — no WebGL, no
   3D library

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

`npm run build` to produce a production build, `npm run lint` to check.

## Where things live

| Path | What |
| --- | --- |
| `lib/content.ts` | All copy and data — edit here, not in components |
| `components/Starfield.tsx` | The animated background (client component) |
| `components/*` | One component per section: `Hero`, `SelectedWork`, `About`, `Experience`, `Contact` |
| `app/page.tsx` | Composes the page |
| `app/fonts.ts` | Font setup |
| `public/` | Static files — put `Adit_Khandelwal_Resume.pdf` here |

## Deploy (Vercel)

1. Push this repo to GitHub (`aditkhandelwal/portfolio`).
2. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
   Framework preset auto-detects as Next.js; no env vars needed. Deploy.
3. You get `portfolio-xxxx.vercel.app`. Confirm it builds and looks right.

## Point aditk.com at Vercel (GoDaddy DNS)

In the Vercel project: **Settings → Domains → Add** `aditk.com` (also add
`www.aditk.com` and set it to redirect to the apex). Vercel shows the exact
records; they will be:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

In GoDaddy → **Domain → DNS → Records**:

1. Delete the existing GitHub Pages `A` records for `@` (185.199.108.153 etc.)
   and any `CNAME` on `www` pointing at `aditkhandelwal.github.io`.
2. Add the two records above.
3. Back in Vercel, wait for the domains to show **Valid Configuration**
   (usually minutes, up to ~48h for full propagation). Vercel issues the TLS
   cert automatically.

## Retire the old site

Once aditk.com serves from Vercel, archive `aditkhandelwal/personal-website`
on GitHub (Settings → Archive this repository) so it's clearly superseded.

## Notes

- Single committed dark theme — there is no light mode by design.
- The background halves its motion under `prefers-reduced-motion` and pauses
  when the tab is hidden.
- The "01 / 02" style index markers were intentionally left off the work list;
  it's a set, not a sequence.
