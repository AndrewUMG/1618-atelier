# 1618 Atelier — Sitio web

Sitio estático (HTML, CSS y JavaScript) de 1618 Atelier, despacho de arquitectura y consultoría.

## Estructura

- `index.html` — página principal: portada, visión, carrusel de proyectos, nosotros y contacto.
- `proyecto.html` — detalle de proyecto (`proyecto.html?p=<slug>`).
- `css/styles.css` — estilos.
- `js/projects.js` — datos de los proyectos (editar aquí para agregar o cambiar proyectos).
- `js/site.js` — equipo, redes y contacto (`window.SITE`).
- `js/main.js` — interacciones comunes; la configuración está en `CONFIG` al inicio del archivo.
- `js/project.js` — página de detalle.
- `assets/img/` — imágenes optimizadas.

## Ver en local

```bash
python -m http.server 8618
```

Abrir http://localhost:8618

## Pendiente

- URLs de Facebook y TikTok (`SITE.social` en `js/site.js`).
- Endpoint del formulario (`CONFIG.formEndpoint`); sin él, el formulario abre el cliente de correo.
- Datos provisionales de proyectos, historia y equipo.

## Editar equipo, redes y contacto

Todo está en `js/site.js` (`window.SITE`): `team` (nombre y cargo), `social` (URLs; vacío muestra "Próximamente") y `contact` (correo, teléfono, ubicaciones). Se muestra en `index.html` y `proyecto.html` sin tocar el HTML.
