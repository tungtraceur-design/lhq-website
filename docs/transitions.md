# LHQ website — interaction specs

Source: Figma file `LHQ-Website`, node cluster around [Menu Transition](https://www.figma.com/design/AP5V1Ut2BFDmazsXOMzqkF/LHQ-Website?node-id=378-863).

This design has no Figma Motion data. Motion lives in jitter.video GIFs (image fills) and in still keyframe frames. Ignore the `jitter.video` mark in the GIFs.

## Shared rules

1. The paper background (`#E7E5DF`) and the three column lines stay still.
2. Do not wipe, slide, or replace the whole page.
3. Content fades in on that paper. Use a short stagger.
4. Close / exit is not in the file. Play the same motion in reverse, with the same duration.
5. Easing is not in the file. Use a short ease-out on opacity (about 200–400 ms per item).

## 1. Open the menu

Source: GIF `378:863`. Overlay open only.

| Item | Value |
| --- | --- |
| Trigger | Click the hamburger |
| Surface | Full-screen opaque overlay `#E7E5DF` |
| Duration | 840 ms in, then hold |
| Close | Reverse, 840 ms (not drawn) |

Steps:

1. Show the overlay and the **X** at once.
2. Keep ENG/VIE if the static Menu has them. The GIF does not show them.
3. Fade in the six rows from top to bottom: 01 Intro, 02, 03 Works, 04 Blog, 05 Events, 06 Contact.
4. Draw a hairline with each row.
5. Use about 140 ms delay between rows so the full list lands at 840 ms.

Copy conflict: the GIF says **Biography**. The static Menu says **About**. Follow the static Menu unless the copy changes.

## 2. First landing: paper, then concert video

Source: keyframes `1888:13371` → `1888:13413`. Not a GIF.

| Item | Start | End |
| --- | --- | --- |
| Header | `top: -90` (off screen) | Still off screen during the video |
| Bottom title | `top: 1049` (off screen) | Still off screen during the video |
| `Images` | Center of the viewport, size `0`, opacity `0` | `1447 × 960`, center, full bleed |
| Chrome | None | **Skip video >** on a 72 px dark gradient at the top |

Steps:

1. Show only the empty paper and the three column lines.
2. Grow a full-bleed video from a point at the center until it covers the viewport.
3. Show **Skip video** at the top right after the video covers the screen.
4. On skip, or when the video ends, go to spec 3.

## 3. Assemble Intro / Home

Source: GIF `388:1010`. Use this after skip, and when the user opens Intro from the menu.

| Item | Value |
| --- | --- |
| Duration | ~1.4 s |
| First hold | ~120 ms of empty paper |

Steps:

1. Keep the paper and the column lines.
2. Fade in the header (LHQ, ENG/VIE, hamburger) with the thumbnails.
3. Reveal the title by word: `Liszt's 12` → `Transcendental` → `Etudes`.
4. Stop on the designed Intro layout.

## 4. Thumbnail → player

Source: keyframes `950:2459` → `950:2492`.

Hover (frame 1):

- The track title becomes **Bold**.
- A 16 px play icon shows on the right of the title.
- The thumbnail uses the color image. Other tracks stay grey (saturation filter).

Click:

| Item | Start | End |
| --- | --- | --- |
| Image | `337 × 190` at `x: 412, y: 378.5` (column 2) | `1447 × 960`, center, covers header |
| Player fill | Color still | Full-screen black / video |

Steps:

1. Move and scale that one image from its cell to the full viewport (shared-element / FLIP).
2. Cover the header. Do not fade the paper first.
3. End on a full-screen player. The second frame is a black surface with the image at opacity 0 (video on top).

Exit is not drawn. Shrink the player back to the same cell.

## 5. Assemble Works (archive)

Source: GIF `393:1014`. Use this when the user opens Works from the menu.

| Item | Value |
| --- | --- |
| Duration | ~1.6 s |
| Start | Paper + column lines + LHQ + hamburger. No ENG/VIE in the GIF. |

Steps:

1. Keep the header.
2. Fade in the title **Works** in the inner two columns.
3. Fade in the two-column album list. The left column starts a little before the right.

## 6. Assemble work detail (list / timeline)

Source: GIF `528:8730`. Use this when the user opens one work from the archive.

| Item | Value |
| --- | --- |
| Duration | ~1.4 s |
| Start | Same empty paper + header as spec 5 |
| View | List selected (filled list icon, outline grid icon) |

Steps:

1. Fade in **Back to Works**, the work title, the short text, and the grid/list toggle.
2. Fade in each image + text pair from top to bottom.

## Route map

```
First visit
  empty paper
    → video grows from center (spec 2)
    → Skip / video end
    → Intro fades in (spec 3)

Hamburger
  → overlay + X
  → rows stagger in (spec 1)
  → Intro     → spec 3
  → Works     → spec 5
  → X         → reverse spec 1

Intro thumbnail
  hover  → bold title + play
  click  → image grows to player (spec 4)

Works album
  click  → spec 6
```
