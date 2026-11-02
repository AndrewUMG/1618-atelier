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
  const box = document.querySelector('[data-lightbox]');
  const boxImg = box.querySelector('img');
  const closeBtn = box.querySelector('[data-lightbox-close]');
  let opener = null;
  const close = () => { box.hidden = true; document.body.style.overflow = ''; if (opener) opener.focus(); };

  root.querySelectorAll('.gallery img, .detail__cover').forEach(img => {
    img.tabIndex = 0;
    const open = () => {
      opener = img;
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    };
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
  });
  closeBtn.addEventListener('click', close);
  box.addEventListener('click', e => { if (e.target === box) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });
})();
