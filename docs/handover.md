# LHQ website — handover

Date: 2026-11-08. Read this before you change the site. Motion specs stay in [transitions.md](transitions.md).

## Where the work is

GitHub `main` has this build. A fresh clone has the pages, components, and étude images. The Reckless trial fonts are gitignored, so a clone will not show those faces until you add licensed files at `src/app/fonts/reckless/`.

Remote: https://github.com/tungtraceur-design/lhq-website

Preview: https://tungtraceur-design.github.io/lhq-website/

The preview is a static export from `.github/workflows/deploy.yml`. It does not include the Reckless or Swear files. Those stay on this machine. The preview uses Georgia until the licensed web fonts are in the build.

## Product

Site for pianist Lưu Hồng Quang. Design file: [LHQ-Website](https://www.figma.com/design/AP5V1Ut2BFDmazsXOMzqkF/LHQ-Website) (`fileKey` `AP5V1Ut2BFDmazsXOMzqkF`).

Old site with the real 12 études: http://13.213.195.26/ (WordPress). Titles and YouTube ids in `src/lib/content.ts` come from that page's `lhqData.etudesData`.

## Stack

- Next.js 16.4.3 (Turbopack). This is not the Next.js in older training data. Read `node_modules/next/dist/docs/` before you write Next code. `AGENTS.md` says the same.
- React 19.3. Tailwind CSS v4.
- `cacheComponents` and `partialPrefetching` are on in `next.config.ts`.
- Run: `npm install` then `npm run dev`. Open http://localhost:3000.
- The project is on `F:`. The file watcher goes stale. If a CSS or component change does not show, restart `npm run dev`. Do not keep editing on a stale server.

## Do not change the design without asking

The user has already corrected two unrequested changes. Menu indexes are `01`, not `No. 01`. Menu hover does not turn the label italic. Match Figma, or ask first.

## What is built locally

### Type

Reckless (Displaay), trial files, `next/font/local` in `src/app/layout.tsx`.

| Token | Face | Use |
| --- | --- | --- |
| `--font-reckless-s` | S regular, italic, medium, bold | `--font-display` and `--font-body` |
| `--font-reckless-m` | M regular, italic | `--font-title` |
| `--font-reckless-wide` | Wide XL bold | `--font-name` |
| `--font-swear-banner` | Banner regular, italic | `--font-hero`, the two home headlines only |

The home hero uses Swear Banner. Menu, page titles, and body stay in Reckless. Swear files live in `src/app/fonts/swear/` and are gitignored. The copies in the repo are the OH no demo files. The license is bought. Replace the demo files with the licensed WOFF2s of the same names before deploy.

Reckless files live in `src/app/fonts/reckless/`. That folder is gitignored. **Trial fonts are not licensed for production.** Replace them with licensed WOFF2 files of the same names before deploy. Do not commit the trial files.

`globals.css` utilities: `type-label`, `type-title`, `type-heading`, `warm-mono`. These pages use them: About, Works, Blog, Events, Contact, menu, cards, player.

### Logo

`LogoMark` in `src/components/icons.tsx`. Three staff lines (the user chose 3, not 5). Lines sit on the menu icon strokes when both are centered in the 88px header.

When the menu is open, the logo link fades out in 100ms and keeps its box. It is not clickable, not tabbable, and hidden from assistive tech. The Figma Menu frame has no logo.

### Menu

`src/components/menu-overlay.tsx` and `MenuToggleIcon` in `icons.tsx`.

- Rows below `lg`: height 88px. Desktop rows keep 16px padding and a 64px line (about 97px with the 1px rule).
- The rule under each row is full viewport width. Numbers and names stay in a centered 1440px column.
- Index is `01`–`06` at `text-ink/25`. Hover and focus turn the index to ink.
- Hover rule is 1px, starts at the page name, and runs to the right edge. `left-40` below `lg`, and `left-[calc(max(0px,(100%_-_1440px)/2)_+_304px)]` at `lg`.
- Open: overlay fades (`menu-enter`, 100ms). Rows use `menu-item-in` (400ms, staggered).
- Icon: three bars. Hover shifts the outer bars. Open rotates them into an X (`transition-[translate,rotate,opacity]`).
- Close animation is not built. Spec says play the open motion in reverse.

### Home

`src/components/home-screen.tsx`, `track-card.tsx`, `meet-artist.tsx`, `intro-video.tsx`, `player-overlay.tsx`, `event-widget.tsx`.

- First visit can play the intro, then the home assembles. Skip is stored in `sessionStorage` (`lhq-skip-video`).
- Twelve étude cards scroll sideways on desktop. Data is `songs` in `src/lib/content.ts`.
- Card images are YouTube thumbnails in `public/images/etudes/etude-01.jpg` … `etude-12.jpg`. Eleven of them have the étude name printed on the photo. The user knows. Clean stills would remove the double title.
- `warm-mono` greys the photo. Hover and focus show color. This treatment is not on other pages yet.
- The player grows from the card and shows the still. It does **not** play the YouTube video. `videoId` is stored and unused.
- Desktop hero is at `pl-[35px]`. The page margin elsewhere is 48px. Left as designed. Ask before you "fix" it.

### Étude names

From the old site, with two spellings corrected to the titles on the thumbnails and to Liszt: No. 9 `Ricordanza` (old site said `Ricodanza`), No. 12 `Chasse-neige` (old site said `Chasse Neige`).

Only No. 1 has a description, taken from the old site. The other eleven descriptions are empty. The work detail page hides an empty description. Do not invent descriptions.

## Playback and narration (not built)

Figma frame `471:1241` ([Play view](https://www.figma.com/design/AP5V1Ut2BFDmazsXOMzqkF/LHQ-Website?node-id=471-1241)): a dark panel on the left (title, timed cues, scroll), video on the right (~70% width), chevron closes the panel.

Agreed direction:

- Call it a listening guide, not "what Liszt meant."
- Each piece: a short intro, then 3–6 timed moments. Each moment is one or two sentences.
- Cite a real public-domain source when one exists. Do not draft thoughts and attribute them to Quang. He writes or approves only the performer line.
- Cues are clickable and jump the video. Leave the panel open on the first visit. Remember if the visitor closes it.
- The ChatGPT text in the Figma frame for *Vallée d'Obermann* is not usable. It calls a solo piano an ensemble, says the falling theme rises, and adds a woman who is not in Liszt's sources.

First test piece: **Etude No. 11, Harmonies du soir** (`videoId` `5_JJleHmY1c`). It is long, the title wraps, and it has no plot. That is the largest happy path without a borrowed story. *Mazeppa* is the next test, because it adds a real poem. *Vallée d'Obermann* (not an étude) is the best proof that a printed source can be cited. Nos. 2 and 10 and *Preludio* are too short for six honest cues.

Test copy (times are placeholders for a nine-minute performance; set them from the video):

- Intro: Liszt gave this étude a title and no story. The title means "Evening harmonies." The score prints no poem. Listen for a soft bell-like figure, a broad melody, and one large crest of sound.
- 0:00 — The piece starts quietly in D-flat major. A soft repeating figure carries a slow melody. Pianists often hear that figure as evening bells.
- 1:20 — The melody sings more clearly. The bell figure continues underneath it.
- 3:00 — The music leaves the calm of the opening. The harmony moves, and the sound grows thicker.
- 4:40 — The volume rises in stages. Each stage is fuller than the one before it.
- 6:10 — The opening melody returns at full strength, in large chords. This is the peak of the étude.
- 7:50 — The sound falls back. The last bars are quiet and high.
- Performer line is a sample, not Quang's words: "I keep the opening very still, so the climax can sound like a change of light."
- Repeat the six cues in Vietnamese before you finish the layout. Vietnamese lines are often longer.

## Figma nodes

| Topic | Node |
| --- | --- |
| v3 frames | `2363:2` |
| Logo | `2365:3011` |
| Menu open | `378:863` |
| Menu row hover | `250:1272` |
| Play view | `471:1241` |

## Tailwind v4 notes

`translate`, `rotate`, and `scale` are separate CSS properties. Transition them by name, for example `transition-[translate,rotate,opacity]` or `transition-[scale]`.

Unlayered CSS beats utilities. Put custom classes in `@utility` (see `warm-mono`).

## Known issues (do not treat as new)

- `src/lib/locale.tsx` line 33: `tsc` error TS2322 on the context value. It was already there.
- Lint `set-state-in-effect` in `home-screen.tsx`.
- `useParams` blocking-prerender warning on `works/[slug]`.
- A hydration warning on `<body>` for `cz-shortcut-listen` comes from the ColorZilla extension. A warning for `data-cursor-ref` comes from Cursor's browser tool. Visitors do not see these.
- `--ink-muted` `#6f6857` is about 4.4:1 on 12px labels. Mentioned, not changed.

## Offered, not requested

- Menu close animation.
- `warm-mono` on images outside the home cards.
- YouTube playback inside `PlayerOverlay`.
- Narration panel. Copy for the test piece is above. It is not in `content.ts`.
