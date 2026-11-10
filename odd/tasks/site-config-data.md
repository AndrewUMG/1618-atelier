# Feature: site-config-data

## Objective
Remove hardcoded team members, social links and contact info from the HTML. Single source of truth in `js/site.js`, rendered by `js/main.js`.

## Scope (authorized)
- `js/site.js` (new), `js/main.js`, `index.html`, `proyecto.html`, `README.md`
- Do NOT touch `js/projects.js` (user has uncommitted changes there).

## Constraints
- Follow the existing pattern (`window.PROJECTS` in `js/projects.js` -> `window.SITE`).
- Keep markup/classes identical so CSS is unchanged.
- Empty social URL keeps the existing "Próximamente" behavior.
- Artifacts in English except user-facing site copy (Spanish, existing).

## Tasks
- [x] T1 Create `js/site.js` with team, socials, contact (email, phone, whatsapp, instagram, locations); move `CONFIG.social`/`contactEmail` into it.
- [x] T2 Render team, social rows, contact list, footer location in `main.js`; replace static markup in `index.html` with containers.
- [x] T3 Same for `proyecto.html` (header socials, footer, contact block, WhatsApp float).
- [x] T4 Update README, verify in browser/static checks, no leftover hardcoded values (`rg`).

## Acceptance
- `rg "50255627167|santiagom@|instagram.com/1618|528122584310"` hits only `js/site.js`.
- Team, socials, contact render identically on both pages; no console errors.

## Route
Delegated direct: one writer (2+ non-trivial files; mapping done by parent).

## Test policy
No test runner in repo (static site): exception to RED/GREEN; proportionate structural + browser checks.

## Progress / Evidence
- T1-T4 done (uncommitted). `rg` for 50255627167|santiagom@|instagram.com/1618|528122584310|Martínez|Méndez hits only js/site.js.
- `node --check` passes on js/site.js and js/main.js.
- Headless Chrome dump-dom of index.html and proyecto.html?p=paneto (python http.server): 4 `team__member reveal is-visible`, contact list rendered, social rows/header/mobile email/footer locations/wa-float populated; Facebook/TikTok show title=Próximamente.
- Route: delegated direct (writer).

## Open findings (not in scope until user decides)
- Emilio Ángeles has role "Socio fundadora" (gender mismatch, likely typo).
- Phone is +52 (MX) while WhatsApp is +502 (GT): confirm intended.
- Facebook/TikTok URLs still empty.
