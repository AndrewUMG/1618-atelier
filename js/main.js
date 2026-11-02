/* ==========================================================
   1618 Atelier — interacciones comunes
   ========================================================== */

/* ---------- Configuración ---------- */
const CONFIG = {
  // Enlaces de redes pendientes de confirmar con la agencia.
  // Mientras estén vacíos, los botones muestran "Próximamente".
  social: {
    facebook: '',
    tiktok: ''
  },
  // Endpoint para el formulario (p. ej. Formspree: https://formspree.io/f/xxxxxx).
  // Si queda vacío, el formulario abre el cliente de correo con el mensaje listo.
  formEndpoint: '',
  contactEmail: 'santiagom@1618-atelier.com',
  heroInterval: 6000
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad = n => String(n).padStart(2, '0');

/* ---------- Redes sociales ---------- */
function initSocial() {
  $$('[data-social]').forEach(a => {
    const url = CONFIG.social[a.dataset.social];
    if (url) {
      a.href = url;
    } else {
      a.removeAttribute('target');
      a.title = 'Próximamente';
      a.addEventListener('click', e => e.preventDefault());
    }
  });
}

/* ---------- Año del footer ---------- */
function initYear() {
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
}

/* ---------- Header: se oculta al bajar, aparece al subir ---------- */
function initHeader() {
  const header = $('[data-header]');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const goingDown = y > lastY && y > 400;
      header.classList.toggle('is-hidden', goingDown && !document.body.classList.contains('menu-open'));
      lastY = y;
      ticking = false;
    });
  }, { passive: true });
}

/* ---------- Enlace activo según la sección visible ---------- */
function initActiveNav() {
  const links = $$('.nav__link[href^="#"]');
  if (!links.length) return;
  const sections = links.map(l => $(l.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => io.observe(s));
}

/* ---------- Menú móvil ---------- */
function initMobileMenu() {
  const menu = $('[data-menu]');
  const openBtn = $('[data-menu-open]');
  if (!menu || !openBtn) return;
  const closeBtn = $('[data-menu-close]', menu);

  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  };
  const close = () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => { menu.hidden = true; }, reduceMotion ? 0 : 350);
    openBtn.focus();
  };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  $$('a', menu).forEach(a => a.addEventListener('click', () => { if (!a.hasAttribute('data-social')) close(); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) close(); });
}

/* ---------- Animación de aparición ---------- */
function initReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach(el => io.observe(el));
}

/* ---------- Hero: slider de proyectos ---------- */
function initHero() {
  const wrap = $('[data-hero-slides]');
  if (!wrap || !window.PROJECTS) return;
  const projects = window.PROJECTS;
  const dotsWrap = $('[data-hero-dots]');
  const current = $('[data-hero-current]');
  const caption = $('[data-hero-caption]');
  $('[data-hero-total]').textContent = pad(projects.length);

  const slides = projects.map((p, i) => {
    const img = document.createElement('img');
    img.className = 'hero__slide';
    img.src = p.hero + '.jpg';
    img.alt = '';
    if (i > 0) img.loading = 'lazy';
    wrap.appendChild(img);
    return img;
  });
  const dots = projects.map((p, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'hero__dot';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', p.name);
    b.addEventListener('click', () => { go(i); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });

  let index = 0;
  let timer = null;
  function go(i) {
    index = (i + projects.length) % projects.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === index));
    dots.forEach((d, k) => {
      d.classList.toggle('is-active', k === index);
      d.setAttribute('aria-selected', k === index);
    });
    current.textContent = pad(index + 1);
    caption.textContent = `${projects[index].name} — ${projects[index].subtitle}`;
    caption.href = `proyecto.html?p=${projects[index].slug}`;
  }
  function restart() {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(() => go(index + 1), CONFIG.heroInterval);
  }
  document.addEventListener('visibilitychange', () => document.hidden ? clearInterval(timer) : restart());
  go(0);
  restart();
}

/* ---------- Carrusel de proyectos ---------- */
function initCarousel() {
  const track = $('[data-carousel]');
  if (!track || !window.PROJECTS) return;
  const projects = window.PROJECTS;
  const prev = $('[data-carousel-prev]');
  const next = $('[data-carousel-next]');
  const counter = $('[data-carousel-counter]');
  const bar = $('[data-carousel-progress]');

  track.innerHTML = projects.map((p, i) => `
    <a class="card" href="proyecto.html?p=${p.slug}" aria-label="Ver proyecto ${p.name}">
      <div class="card__media"><img src="${p.cover}-sm.jpg" alt="${p.name}" loading="lazy"></div>
      <div class="card__info">
        <div class="card__num"><span class="eyebrow">${pad(i + 1)}</span><span class="eyebrow">${p.type}</span></div>
        <h3 class="h3">${p.name}</h3>
        <p class="small card__meta">${p.subtitle} · ${p.shortLocation} · ${p.year}</p>
        <span class="card__link nav-text">Ver proyecto <svg class="icon icon--sm"><use href="#i-arrow-up-right"/></svg></span>
      </div>
    </a>`).join('');

  const cards = $$('.card', track);
  const step = () => cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);

  function update() {
    const max = track.scrollWidth - track.clientWidth;
    const ratio = max > 0 ? track.scrollLeft / max : 0;
    const visible = track.clientWidth / track.scrollWidth;
    bar.style.width = (visible * 100) + '%';
    bar.style.left = (ratio * (1 - visible) * 100) + '%';
    const i = Math.min(projects.length - 1, Math.round(track.scrollLeft / step()));
    counter.textContent = `${pad(i + 1)} — ${pad(projects.length)}`;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max - 2;
  }

  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next.click(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev.click(); }
  });
  track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ---------- Formulario de contacto ---------- */
function initForm() {
  const form = $('[data-contact-form]');
  if (!form) return;
  const status = $('[data-form-status]', form);
  const submit = $('button[type="submit"]', form);
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const rules = {
    nombre: v => v.trim().length >= 2 || 'Escribe tu nombre.',
    email: v => emailRe.test(v.trim()) || 'Escribe un correo electrónico válido.',
    mensaje: v => v.trim().length >= 10 || 'Cuéntanos un poco más (mínimo 10 caracteres).'
  };

  function validate(input) {
    const result = rules[input.name](input.value);
    const field = input.closest('.field');
    const error = $('.field__error', field);
    const ok = result === true;
    field.classList.toggle('is-invalid', !ok);
    input.setAttribute('aria-invalid', String(!ok));
    error.textContent = ok ? '' : result;
    return ok;
  }

  const inputs = Object.keys(rules).map(name => form.elements[name]);
  inputs.forEach(input => {
    input.addEventListener('blur', () => { if (input.value) validate(input); });
    input.addEventListener('input', () => { if (input.closest('.field').classList.contains('is-invalid')) validate(input); });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.textContent = '';
    const valid = inputs.map(validate).every(Boolean);
    if (!valid) {
      inputs.find(i => i.getAttribute('aria-invalid') === 'true').focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form));

    if (!CONFIG.formEndpoint) {
      const subject = encodeURIComponent(`Contacto web — ${data.nombre}`);
      const body = encodeURIComponent(`${data.mensaje}\n\n${data.nombre}\n${data.email}`);
      window.location.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;
      status.textContent = 'Abrimos tu aplicación de correo con el mensaje listo para enviar. ¡Gracias por escribirnos!';
      form.reset();
      return;
    }

    submit.disabled = true;
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(res.status);
      status.textContent = 'Gracias por escribirnos. Te responderemos en menos de 48 horas.';
      form.reset();
    } catch {
      status.textContent = `No pudimos enviar tu mensaje. Escríbenos directamente a ${CONFIG.contactEmail}.`;
    } finally {
      submit.disabled = false;
    }
  });
}

document.documentElement.classList.remove('no-js');
initSocial();
initYear();
initHeader();
initActiveNav();
initMobileMenu();
initHero();
initCarousel();
initForm();
initReveal();
