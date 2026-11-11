# Feature: project-gallery-images

## Objective
Add more images (including PDF pages rasterized to images) to every project gallery from `..\1618-atelier-recursos`, plus a gallery/entry for the new project found there (folder `OUTBOX`, "Estación Madriguera").

## Scope (authorized)
- `assets/img/<slug>/*` (new files only; existing files untouched)
- `js/projects.js` (gallery entries; new project entry with PROVISIONAL text)
- `odd/tasks/project-gallery-images.md`
- Source folder `..\1618-atelier-recursos` is read-only (never modify/delete).

## Constraints
- Output format identical to existing: `name.jpg` max 1800px wide + `name-sm.jpg` 900px wide (PIL, optimize, same quality as existing).
- Skip `.psd`, exact duplicates (hash) and near-duplicate "(1)" copies when identical.
- PDFs -> PNG/JPG via PyMuPDF (`pip install pymupdf`), rendered at a size that yields 1800px wide.
- Gallery `layout`: `full` for wide drawings (sections, elevations, plans), `half` for pairs; spanish `alt` text, short captions only where meaningful.
- Existing pattern in `js/projects.js` (`gallery: [{ src, alt, layout, caption? }]`, src without extension).

## Tasks
- [x] T1 Paneto: add remaining renders + PDF plans (PB, isos, fachada, cortes 1/2) and `4.png`.
- [x] T2 Casa Corten: add plans, elevations, explosions, iso, etc.
- [x] T3 Casa Sierra: add scenes, cortes, axos, conceptual model.
- [x] T4 Colonia Independencia: add axos, elevations, plan, sections, render segundo.
- [x] T5 New project (OUTBOX / Estación Madriguera, slug `estacion-madriguera`): new entry with provisional text, cover/hero, gallery (collages, diagramas, maqueta photos, estructura, `madriguerafinal.pdf` pages).
- [x] T6 Verify: every referenced `src` + `-sm` exists, `node --check`, headless render of each project page, size budget reasonable.

## Acceptance
- Every `src` in `js/projects.js` resolves to `.jpg` and `-sm.jpg`.
- Each project page renders its full gallery with no broken images; index lists the new project.
- Total added weight reported.

## Route
Delegated direct: one writer (large read-for-write + image processing).

## Test policy
No test runner (static site): exception to RED/GREEN; structural checks (file existence script) + headless browser render.

## Progress / Evidence
- Assets: 106 new JPGs (53 images x full + -sm, q80 progressive) = ~12.0 MB added; assets/img now ~21 MB (was ~9 MB). Existing files untouched.
- Galleries: paneto 3->10, casa-corten 4->11, casa-sierra 3->8, col-independencia 5->10, estacion-madriguera new (36; cover maqueta-1, hero vista-1).
- Estacion Madriguera PDF pages used: 38-45 (planta conjunto/baja/alta, cortes transv. 1/2, long., elevacion principal, corte por fachada).
- Skipped: Paneto `4.png` (already the existing `fachada`), Casa Corten `Mesa 1@issuu` (redundant with `Mesa 4` volumetria), Casa Sierra escena-1/3 (already inside `renders`), Col. Indep `Elevacion Este.png` grey (variant of D112 blue), OUTBOX `VISTA1sombra` (shadow-only variant), `maqueta 14.42.55 (3)` (near-duplicate of (2)), `.psd`, PDF pages 52/53/56 (same views as collages), analysis pages. No exact hash duplicates found.
- Verified: `node --check js/projects.js` OK; script asserts all 85 cover/hero/gallery refs have .jpg and -sm.jpg (0 missing, no duplicate names); headless Chrome via http.server: proyecto.html renders 10/11/8/10/36 figures matching data; index shows hero total 05 and 5 cards incl. Estacion Madriguera. Server stopped.

## Open findings
- New project "Estación Madriguera" text is provisional: type Equipamiento / Estación de bomberos inferred from images; location, year, area, status, body and quote are placeholders ("Por confirmar"): user to confirm.
- Casa Sierra `escena-2` added alongside `concepto` to keep half-width pairs even; remove if redundant with `renders`.
- Not visually reviewed in a real browser (only DOM counts); half-layout crops images to 4:5 via CSS.
