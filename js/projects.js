/*
 * Datos de los proyectos de 1618 Atelier.
 * NOTA: ubicaciones, años, superficies y textos son PROVISIONALES
 * hasta que la agencia entregue la información definitiva.
 *
 * Galería: cada imagen ocupa "full" (ancho completo) o "half" (media columna).
 */
window.PROJECTS = [
  {
    slug: 'paneto',
    name: 'Paneto',
    type: 'Comercial',
    subtitle: 'Cafetería y panadería',
    location: 'Ciudad de Guatemala, Guatemala',
    shortLocation: 'Guatemala',
    year: '2026',
    area: '85 m²',
    status: 'En construcción',
    service: 'Arquitectura interior + Consultoría',
    cover: 'assets/img/paneto/render-1',
    hero: 'assets/img/paneto/render-3',
    lead: 'Un pequeño local de barrio convertido en punto de encuentro: azulejo azul profundo, madera cálida y una barra que pone el oficio del pan al centro.',
    body: [
      'Paneto parte de una fachada sencilla en una calle de escala vecinal. La intervención respeta esa escala y concentra el carácter en el interior, donde el color y la luz construyen la identidad del lugar.',
      'La barra de madera organiza el recorrido: del aparador de pan a la cafetera y de ahí a las mesas. Una estructura metálica suspendida resuelve iluminación y exhibición sin tocar los muros.',
      'Materiales durables y de fácil mantenimiento —azulejo, acero y madera— permiten que el espacio envejezca con honestidad y acompañe la vida diaria del barrio.'
    ],
    quote: 'Un lugar donde habitar sea también disfrutar la vida.',
    gallery: [
      { src: 'assets/img/paneto/render-2', alt: 'Interior de Paneto con barra y repisas de madera', layout: 'half' },
      { src: 'assets/img/paneto/render-3', alt: 'Barra de servicio de Paneto', layout: 'half' },
      { src: 'assets/img/paneto/fachada', alt: 'Fachada de Paneto hacia la calle', layout: 'full', caption: 'Fachada — el local se integra a la escala de la calle.' }
    ]
  },
  {
    slug: 'casa-corten',
    name: 'Casa Corten',
    type: 'Residencial',
    subtitle: 'Vivienda unifamiliar',
    location: 'Monterrey, N.L., México',
    shortLocation: 'Monterrey, N.L.',
    year: '2026',
    area: '320 m²',
    status: 'Proyecto ejecutivo',
    service: 'Arquitectura + Consultoría',
    cover: 'assets/img/casa-corten/escalera',
    hero: 'assets/img/casa-corten/iso',
    lead: 'Una vivienda que se deja envolver por su contexto, articulada por una circulación que rompe la barrera entre el interior y el exterior.',
    body: [
      'La vivienda se implanta sobre el predio, adaptada a la topografía y aumentando los remetimientos, permitiendo que el parque frente a ella envuelva al proyecto. El volumen principal se divide en 3 niveles desfasados, organizando una parte del programa en cada nivel. Generando una secuencia vertical que parte del espacio publico al privado.',
      'Se proyecta una estructura de concreto armado en base a una retícula de 1.22m x 1.22m, la cual genera una planta libre en donde el programa se desenvuelve',
      'El proyecto se articula por medio de una escalera de acero corten que te recibe, generando un zaguán y dando paso a un recorrido que rompe la barrera entre el exterior y el interior. Donde la luz entra y cambia durante el día, con una trasparencia que brinda un recorrido sensorial que evoluciona con el paso del día.'
    ],
    quote: 'Cada obra debe encontrar su propio lenguaje, en respuesta al contexto del que forma parte.',
    gallery: [
      { src: 'assets/img/casa-corten/escalera', alt: 'Escalera con celosía de madera y muro de corten', layout: 'half' },
      { src: 'assets/img/casa-corten/escalera-noche', alt: 'Modelo de la escalera', layout: 'half' },
      { src: 'assets/img/casa-corten/corte', alt: 'Corte longitudinal de Casa Corten', layout: 'full', caption: 'Corte longitudinal — el proyecto se escalona siguiendo la pendiente natural del terreno.' },
      { src: 'assets/img/casa-corten/explotado', alt: 'Axonometría explotada de Casa Corten', layout: 'full' }
    ]
  },
  {
    slug: 'casa-sierra',
    name: 'Casa Sierra',
    type: 'Residencial',
    subtitle: 'Vivienda unifamiliar',
    location: 'Santiago, N.L., México',
    shortLocation: 'Santiago, N.L.',
    year: '2026',
    area: '240 m²',
    status: 'Anteproyecto',
    service: 'Arquitectura',
    cover: 'assets/img/casa-sierra/renders',
    hero: 'assets/img/casa-sierra/corte',
    lead: 'Una secuencia de volúmenes que bajan con la montaña. Cada módulo enmarca una vista distinta de la sierra y abre un patio propio.',
    body: [
      'Casa Sierra se organiza como una serie de módulos que descienden con la pendiente. Entre ellos aparecen patios y pasillos de luz que dan ritmo al recorrido.',
      'El estudio solar definió la orientación y la inclinación de las cubiertas, protegiendo del sol de la tarde y captando la luz de la mañana.',
      'Los materiales y colores dialogan con el paisaje: tierra, piedra y vegetación local integran la casa a su entorno.'
    ],
    quote: 'La arquitectura comienza por escuchar al lugar y a las personas.',
    gallery: [
      { src: 'assets/img/casa-sierra/axo', alt: 'Axonometría de los volúmenes de Casa Sierra', layout: 'full' },
      { src: 'assets/img/casa-sierra/renders', alt: 'Escenas interiores de Casa Sierra', layout: 'half' },
      { src: 'assets/img/casa-sierra/sol', alt: 'Estudio de asoleamiento', layout: 'half', caption: 'Estudio de asoleamiento.' }
    ]
  },
  {
    slug: 'col-independencia',
    name: 'Col. Independencia',
    type: 'Educativo',
    subtitle: 'Equipamiento urbano',
    location: 'Col. Independencia, Monterrey, N.L.',
    shortLocation: 'Monterrey, N.L.',
    year: '2026',
    area: '2,400 m²',
    status: 'Propuesta',
    service: 'Arquitectura + Urbanismo',
    cover: 'assets/img/col-independencia/patio',
    hero: 'assets/img/col-independencia/render',
    lead: 'Un equipamiento educativo y comunitario abierto al barrio: aulas, espacios flexibles y una gran cubierta que protege el patio central.',
    body: [
      'La propuesta para la Colonia Independencia entiende la escuela como un espacio que también pertenece a la comunidad, abierto fuera del horario escolar.',
      'El programa se organiza en torno a un patio cubierto por una estructura ligera que da sombra y permite actividades en cualquier clima.',
      'Aulas, terrazas y espacios flexibles se zonifican para crecer por etapas, con una estructura modular y sencilla de construir.'
    ],
    quote: 'Construir es una oportunidad para contribuir al cambio de nuestra sociedad.',
    gallery: [
      { src: 'assets/img/col-independencia/patio', alt: 'Patio cubierto con niños jugando', layout: 'half' },
      { src: 'assets/img/col-independencia/zonificacion', alt: 'Axonometría de zonificación', layout: 'half' },
      { src: 'assets/img/col-independencia/corte', alt: 'Corte transversal', layout: 'full', caption: 'Corte transversal.' },
      { src: 'assets/img/col-independencia/estructura', alt: 'Axonometría estructural', layout: 'half' },
      { src: 'assets/img/col-independencia/axo', alt: 'Axonometría general', layout: 'half' }
    ]
  }
];
