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
      { src: 'assets/img/paneto/fachada', alt: 'Fachada de Paneto hacia la calle', layout: 'full', caption: 'Fachada — el local se integra a la escala de la calle.' },
      { src: 'assets/img/paneto/fachada-alzado', alt: 'Alzado de la fachada de Paneto en dibujo azul', layout: 'full', caption: 'Alzado de fachada.' },
      { src: 'assets/img/paneto/corte-1', alt: 'Corte 1 de Paneto con la barra y el área de servicio', layout: 'full', caption: 'Corte 1.' },
      { src: 'assets/img/paneto/corte-2', alt: 'Corte 2 de Paneto con la zona de mesas', layout: 'full', caption: 'Corte 2.' },
      { src: 'assets/img/paneto/planta-baja', alt: 'Planta baja de Paneto', layout: 'half', caption: 'Planta baja.' },
      { src: 'assets/img/paneto/iso', alt: 'Isométrico seccionado del interior de Paneto', layout: 'half' },
      { src: 'assets/img/paneto/iso-inferior', alt: 'Isométrico de Paneto visto desde abajo con la estructura suspendida', layout: 'half' },
      { src: 'assets/img/paneto/render-1', alt: 'Barra de pan y cafetería de Paneto frente al muro de azulejo azul', layout: 'half' }
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
      { src: 'assets/img/casa-corten/explotado', alt: 'Axonometría explotada de Casa Corten', layout: 'full' },
      { src: 'assets/img/casa-corten/iso', alt: 'Isométrico sombreado de Casa Corten sobre el terreno', layout: 'half' },
      { src: 'assets/img/casa-corten/explotado-2', alt: 'Axonometría explotada de Casa Corten por niveles', layout: 'half' },
      { src: 'assets/img/casa-corten/volumetria', alt: 'Secuencia de volumetría de Casa Corten sobre el terreno', layout: 'half', caption: 'Secuencia volumétrica.' },
      { src: 'assets/img/casa-corten/escalera-axo', alt: 'Axonometría de la escalera de acero corten', layout: 'half' },
      { src: 'assets/img/casa-corten/plantas', alt: 'Plantas de Casa Corten: nivel 0, planta baja y planta alta', layout: 'full', caption: 'Plantas — nivel 0, baja y alta.' },
      { src: 'assets/img/casa-corten/corte-color', alt: 'Corte longitudinal de Casa Corten en color', layout: 'full' },
      { src: 'assets/img/casa-corten/corte-fachada', alt: 'Corte longitudinal y fachada de Casa Corten', layout: 'full', caption: 'Corte longitudinal y fachada.' }
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
      { src: 'assets/img/casa-sierra/sol', alt: 'Estudio de asoleamiento', layout: 'half', caption: 'Estudio de asoleamiento.' },
      { src: 'assets/img/casa-sierra/axo-base', alt: 'Axonometría en blanco de los módulos de Casa Sierra', layout: 'full' },
      { src: 'assets/img/casa-sierra/corte', alt: 'Corte longitudinal de Casa Sierra en color', layout: 'full', caption: 'Corte longitudinal.' },
      { src: 'assets/img/casa-sierra/corte-bn', alt: 'Corte longitudinal de Casa Sierra en blanco y negro', layout: 'full' },
      { src: 'assets/img/casa-sierra/concepto', alt: 'Modelo conceptual de Casa Sierra con franjas de color', layout: 'half', caption: 'Modelo conceptual.' },
      { src: 'assets/img/casa-sierra/escena-2', alt: 'Escalera de la casa con luz y sombra sobre el pasto', layout: 'half' }
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
      { src: 'assets/img/col-independencia/axo', alt: 'Axonometría general', layout: 'half' },
      { src: 'assets/img/col-independencia/render', alt: 'Vista del conjunto con la cubierta azul y el patio', layout: 'full' },
      { src: 'assets/img/col-independencia/planta-baja', alt: 'Planta baja del equipamiento', layout: 'half', caption: 'Planta baja.' },
      { src: 'assets/img/col-independencia/explotado', alt: 'Axonometría explotada por niveles', layout: 'half' },
      { src: 'assets/img/col-independencia/elevacion', alt: 'Elevación sur', layout: 'full', caption: 'Elevación sur.' },
      { src: 'assets/img/col-independencia/elevacion-este', alt: 'Elevación este', layout: 'full', caption: 'Elevación este.' }
    ]
  },
  {
    slug: 'estacion-madriguera',
    name: 'Estación Madriguera',
    type: 'Equipamiento',
    subtitle: 'Estación de bomberos',
    location: 'Por confirmar',
    shortLocation: 'Por confirmar',
    year: 'Por confirmar',
    area: 'Por confirmar',
    status: 'Por confirmar',
    service: 'Arquitectura',
    cover: 'assets/img/estacion-madriguera/maqueta-1',
    hero: 'assets/img/estacion-madriguera/vista-1',
    lead: 'Una estación de bomberos que se asienta sobre un predio triangular y se abre a la calle con una cubierta inclinada y una estructura ligera.',
    body: [
      'Estación Madriguera se desarrolla sobre un predio triangular entre vialidades y áreas verdes, con un volumen largo que se adapta a la topografía.',
      'La propuesta se estudió mediante diagramas, maquetas de sitio y de estructura, y dibujos de plantas, cortes y elevaciones.',
      'Descripción del programa, los materiales y la estrategia constructiva por confirmar con la agencia.'
    ],
    quote: 'Una estación que cuida a la ciudad y se deja habitar por ella.',
    gallery: [
      { src: 'assets/img/estacion-madriguera/norte', alt: 'Fachada norte de la estación con las bahías de camiones', layout: 'full' },
      { src: 'assets/img/estacion-madriguera/interior-1', alt: 'Interior de la estación con cocina y entrepiso', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/interior-2', alt: 'Interior de la estación visto desde otro ángulo', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/cortes-collage', alt: 'Collage de cortes de la estación', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/estructura-collage', alt: 'Collage de la estructura sobre el terreno', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/axo', alt: 'Axonometría del volumen de la estación', layout: 'full' },
      { src: 'assets/img/estacion-madriguera/planta-conjunto', alt: 'Planta de conjunto', layout: 'full', caption: 'Planta de conjunto.' },
      { src: 'assets/img/estacion-madriguera/planta-baja', alt: 'Planta baja', layout: 'full', caption: 'Planta baja.' },
      { src: 'assets/img/estacion-madriguera/planta-alta', alt: 'Planta alta', layout: 'full', caption: 'Planta alta.' },
      { src: 'assets/img/estacion-madriguera/corte-transversal-1', alt: 'Corte transversal 1', layout: 'full', caption: 'Corte transversal 1.' },
      { src: 'assets/img/estacion-madriguera/corte-transversal-2', alt: 'Corte transversal 2', layout: 'full', caption: 'Corte transversal 2.' },
      { src: 'assets/img/estacion-madriguera/corte-longitudinal', alt: 'Corte longitudinal', layout: 'full', caption: 'Corte longitudinal.' },
      { src: 'assets/img/estacion-madriguera/corte-fachada', alt: 'Corte por fachada con detalle constructivo', layout: 'full', caption: 'Corte por fachada.' },
      { src: 'assets/img/estacion-madriguera/maqueta-3', alt: 'Maqueta con torre y arbolado al fondo', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/maqueta-4', alt: 'Maqueta con rampa y cubierta inclinada', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/maqueta-5', alt: 'Maqueta con la torre y la estructura de la estación', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/maqueta-6', alt: 'Maqueta vista desde el lado de la calle', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/maqueta-7', alt: 'Maqueta con la cubierta y las bahías', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/maqueta-8', alt: 'Maqueta con el edificio vecino', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/maqueta-9', alt: 'Maqueta vista en perfil sobre la base', layout: 'full' },
      { src: 'assets/img/estacion-madriguera/modelo-estructura-1', alt: 'Maqueta de estructura sobre terreno de tierra', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/modelo-estructura-2', alt: 'Detalle de la maqueta de estructura', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/modelo-estructura-4', alt: 'Maqueta de estructura vista en planta', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/modelo-estructura-6', alt: 'Maqueta de estructura con columnas y cubierta', layout: 'half' },
      { src: 'assets/img/estacion-madriguera/modelo-estructura-5', alt: 'Maqueta de estructura con base de madera', layout: 'full' }
    ]
  }
];
