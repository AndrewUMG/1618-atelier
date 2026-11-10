/* ==========================================================
   1618 Atelier — página de detalle de proyecto
   Lee ?p=<slug> y pinta el proyecto desde window.PROJECTS.
   Se carga antes de main.js para que las animaciones .reveal
   se registren sobre el contenido ya generado.
   ========================================================== */
(function () {
  const root = document.querySelector('[data-project]');
  if (!root || !window.PROJECTS) return;

  const projects = window.PROJECTS;
  const slug = new URLSearchParams(window.location.search).get('p');
  const i = projects.findIndex(p => p.slug === slug);
  const pad = n => String(n).padStart(2, '0');

  if (i === -1) {
    root.insertAdjacentHTML('beforeend', `
      <div class="not-found">
        <p class="eyebrow muted">Proyecto no encontrado</p>
        <h1 class="h1">Este proyecto no existe o fue movido.</h1>
        <a class="btn btn--outline" href="index.html#proyectos">Ver todos los proyectos <svg class="icon icon--sm"><use href="#i-arrow-right"/></svg></a>
      </div>`);
    return;
  }

  const p = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  document.title = `${p.name} · 1618 Atelier`;
  document.querySelector('[data-project-index]').textContent = `Proyecto ${pad(i + 1)} / ${pad(projects.length)}`;

  const spec = [
    ['Ubicación', p.location],
    ['Año', p.year],
    ['Superficie', p.area],
    ['Tipología', p.subtitle],
    ['Estado', p.status],
    ['Servicio', p.service]
  ];

  const gallery = p.gallery.map(g => `
    <figure class="reveal${g.layout === 'full' ? ' is-full' : ''}">
      <img src="${g.src}.jpg" alt="${g.alt}" loading="lazy">
      ${g.caption ? `<figcaption class="small">${g.caption}</figcaption>` : ''}
    </figure>`).join('');

  root.insertAdjacentHTML('beforeend', `
    <header class="detail__title">
      <div class="detail__title-text">
        <p class="eyebrow muted reveal">${p.type} &nbsp;·&nbsp; ${p.subtitle}</p>
        <h1 class="display reveal">${p.name}</h1>
        <p class="body-l detail__lead reveal">${p.lead}</p>
      </div>
      <dl class="spec reveal">
        ${spec.map(([k, v]) => `<div><dt class="eyebrow">${k}</dt><dd class="small">${v}</dd></div>`).join('')}
      </dl>
    </header>

    <img class="detail__cover reveal" src="${p.hero}.jpg" alt="${p.name}">

    <section class="detail__concept">
      <div class="detail__concept-head">
        <span class="eyebrow muted reveal">01</span>
        <h2 class="h2 reveal">El concepto</h2>
      </div>
      <div class="detail__concept-body">
        ${p.body.map(t => `<p class="body-l reveal">${t}</p>`).join('')}
      </div>
    </section>

    <section class="gallery" aria-label="Galería">${gallery}</section>

    <blockquote class="quote detail__quote reveal">“${p.quote}”</blockquote>

    <nav class="next" aria-label="Más proyectos">
      <a class="next__prev nav-text" href="proyecto.html?p=${prev.slug}"><svg class="icon icon--sm"><use href="#i-arrow-left"/></svg>${prev.name}</a>
      <a class="next__link" href="proyecto.html?p=${next.slug}">
        <span class="next__text"><span class="eyebrow muted">Siguiente proyecto</span><span class="h1">${next.name}</span></span>
        <img class="next__thumb" src="${next.cover}-sm.jpg" alt="" loading="lazy">
        <svg class="icon"><use href="#i-arrow-right"/></svg>
      </a>
    </nav>`);

  /* ---------- Lightbox de la galería ---------- */
  const MAX_ZOOM = 6;          // relative to the fit size
  const DOUBLE_TAP_ZOOM = 2.5; // zoom applied by double click / double tap
  const BUTTON_STEP = 1.5;     // factor applied by the + / - buttons and keys
  const FRAME_X = 24;          // free space kept around the fitted image
  const FRAME_Y = 64;          // (top/bottom hold the close button and toolbar)

  const box = document.querySelector('[data-lightbox]');
  const boxImg = box.querySelector('img');
  const closeBtn = box.querySelector('[data-lightbox-close]');
  const pointers = new Map(); // active pointers: id -> { x, y }
  let opener = null;

  /* The image is laid out at its fit size; zoom (k) and position (x, y) are
     applied with a transform whose origin is the image's top-left corner. */
  const view = { k: 1, x: 0, y: 0, baseW: 0, baseH: 0 };

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  // Keeps the image centered if it is smaller than the box, otherwise inside it.
  const clampAxis = (pos, size, boxSize) =>
    size <= boxSize ? (boxSize - size) / 2 : clamp(pos, boxSize - size, 0);

  const setView = (k, x, y, animate) => {
    k = clamp(k, 1, MAX_ZOOM);
    view.k = k;
    view.x = clampAxis(x, view.baseW * k, box.clientWidth);
    view.y = clampAxis(y, view.baseH * k, box.clientHeight);
    boxImg.classList.toggle('is-animating', Boolean(animate));
    boxImg.style.transform = `translate(${view.x}px, ${view.y}px) scale(${k})`;
    box.classList.toggle('is-zoomed', k > 1.001);
  };

  // Fits the whole image in the window (never upscaling it) and centers it.
  const resetView = animate => {
    const nw = boxImg.naturalWidth;
    const nh = boxImg.naturalHeight;
    if (!nw || !nh) return;
    const availW = Math.max(1, box.clientWidth - FRAME_X * 2);
    const availH = Math.max(1, box.clientHeight - FRAME_Y * 2);
    const scale = Math.min(1, availW / nw, availH / nh);
    view.baseW = nw * scale;
    view.baseH = nh * scale;
    boxImg.style.width = `${view.baseW}px`;
    boxImg.style.height = `${view.baseH}px`;
    setView(1, 0, 0, animate);
  };

  // Zooms to k keeping the point (px, py) of the screen fixed.
  const zoomAt = (k, px, py, animate) => {
    const next = clamp(k, 1, MAX_ZOOM);
    const ratio = next / view.k;
    setView(next, px - (px - view.x) * ratio, py - (py - view.y) * ratio, animate);
  };

  const zoomFromCenter = factor =>
    zoomAt(view.k * factor, box.clientWidth / 2, box.clientHeight / 2, true);

  const toggleZoom = (px, py) => {
    if (view.k > 1.001) resetView(true);
    else zoomAt(DOUBLE_TAP_ZOOM, px, py, true);
  };

  const showFitted = () => { resetView(false); boxImg.style.visibility = ''; };

  const open = img => {
    opener = img;
    boxImg.style.visibility = 'hidden';
    boxImg.src = img.src;
    boxImg.alt = img.alt;
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    if (boxImg.complete) showFitted();
  };

  const close = () => {
    box.hidden = true;
    pointers.clear();
    box.classList.remove('is-dragging');
    document.body.style.overflow = '';
    if (opener) opener.focus();
  };

  root.querySelectorAll('.gallery img, .detail__cover').forEach(img => {
    img.tabIndex = 0;
    img.addEventListener('click', () => open(img));
    img.addEventListener('keydown', e => { if (e.key === 'Enter') open(img); });
  });

  boxImg.addEventListener('load', showFitted);
  window.addEventListener('resize', () => { if (!box.hidden) resetView(false); });

  /* ---------- Lightbox: wheel, drag, pinch and double tap ---------- */
  let pinch = null; // last distance and midpoint while two fingers are down
  let dragMoved = false;
  let dragStart = null;
  let lastTap = null;

  const pinchState = () => {
    const [a, b] = [...pointers.values()];
    return { dist: Math.hypot(a.x - b.x, a.y - b.y) || 1, x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  };

  box.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY * (e.deltaMode === 1 ? 16 : 1);
    const speed = e.ctrlKey ? 0.01 : 0.002; // trackpad pinch sends ctrl + small deltas
    zoomAt(view.k * Math.exp(-delta * speed), e.clientX, e.clientY, false);
  }, { passive: false });

  boxImg.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    boxImg.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    boxImg.classList.remove('is-animating');
    if (pointers.size === 1) { dragMoved = false; dragStart = { x: e.clientX, y: e.clientY }; }
    if (pointers.size === 2) { pinch = pinchState(); dragMoved = true; }
    box.classList.toggle('is-dragging', view.k > 1.001);
  });

  boxImg.addEventListener('pointermove', e => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) {
      const now = pinchState();
      zoomAt(view.k * now.dist / pinch.dist, now.x, now.y, false);
      setView(view.k, view.x + now.x - pinch.x, view.y + now.y - pinch.y, false);
      pinch = now;
    } else if (pointers.size === 1) {
      if (Math.hypot(e.clientX - dragStart.x, e.clientY - dragStart.y) > 5) dragMoved = true;
      if (view.k > 1.001) setView(view.k, view.x + e.clientX - prev.x, view.y + e.clientY - prev.y, false);
    }
  });

  const endPointer = e => {
    if (!pointers.delete(e.pointerId)) return;
    box.classList.remove('is-dragging');
    if (e.type !== 'pointerup' || dragMoved || pointers.size > 0) return;
    // A still tap: two close in time and space count as a double click / double tap.
    const tap = { t: e.timeStamp, x: e.clientX, y: e.clientY };
    if (lastTap && tap.t - lastTap.t < 300 && Math.hypot(tap.x - lastTap.x, tap.y - lastTap.y) < 30) {
      lastTap = null;
      toggleZoom(tap.x, tap.y);
    } else {
      lastTap = tap;
    }
  };
  boxImg.addEventListener('pointerup', endPointer);
  boxImg.addEventListener('pointercancel', endPointer);
  boxImg.addEventListener('dragstart', e => e.preventDefault());

  /* ---------- Lightbox: buttons, backdrop and keyboard ---------- */
  closeBtn.addEventListener('click', close);
  box.querySelector('[data-lightbox-tools]').addEventListener('click', e => {
    const action = e.target.closest('[data-zoom]')?.dataset.zoom;
    if (action === 'in') zoomFromCenter(BUTTON_STEP);
    if (action === 'out') zoomFromCenter(1 / BUTTON_STEP);
    if (action === 'fit') resetView(true);
  });
  box.addEventListener('click', e => { if (e.target === box) close(); });

  document.addEventListener('keydown', e => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === '+' || e.key === '=') zoomFromCenter(BUTTON_STEP);
    else if (e.key === '-' || e.key === '_') zoomFromCenter(1 / BUTTON_STEP);
    else if (e.key === '0') resetView(true);
  });
})();
