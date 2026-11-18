/*
 * Datos del sitio de 1618 Atelier: equipo, redes y contacto.
 * Editar aquí; main.js los renderiza en ambas páginas.
 * Una red con url vacía ('') muestra "Próximamente".
 */

const rol = 'Arquitecto · Socio fundador';

window.SITE = {
  team: [
    { name: 'Santiago Martínez', role: rol },
    { name: 'Angel Méndez', role: rol },
    { name: 'Emilio Ángeles', role: rol },
    { name: 'Adrián Alejandro del Ángel', role: rol }
  ],
  social: {
    instagram: 'https://www.instagram.com/1618.atelier/',
    whatsapp: 'https://wa.me/50255627167',
    facebook: 'https://www.facebook.com/people/Atelier-1618/61596580205236/',
    tiktok: 'https://www.tiktok.com/@1618.atelier/'
  },
  contact: {
    email: 'santiagom@1618-atelier.com',
    phone: { href: 'tel:+528122584310', display: '+52 81 2258 4310' },
    whatsapp: { display: '+502 5562 7167' },
    instagram: { display: '@1618.atelier' },
    locations: ['Monterrey, México', 'Guatemala']
  }
};
