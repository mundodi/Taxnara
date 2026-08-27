/**
 * Datos del sitio de Taxnara Diseños.
 * Editá este archivo y corré `node sitio/build.mjs` para regenerar la web.
 */

// ⟨COMPLETAR⟩ Cargá el WhatsApp con código de país y sin signos: 5493834XXXXXX
// Apenas lo completes, todos los botones del sitio pasan a abrir el chat solos.
export const CONTACTO = {
  whatsapp: '',                                  // ej: '5493834123456'
  telefonoVisible: '⟨COMPLETAR: teléfono⟩',
  mail: '⟨COMPLETAR: mail⟩',
  direccion: 'Av. Señor del Milagro 645, Saujil, Catamarca',
  horario: '⟨COMPLETAR: horario⟩',
  tienda: 'https://taxnara.mitiendanube.com',
  instagram: 'https://www.instagram.com/taxnaradisenos/',
  tiktok: 'https://www.tiktok.com/@taxnara',
  facebook: 'https://www.facebook.com/TaxnaraDisenio/',
};

export const TECNICAS = [
  { img: 'bordado-de-logo', titulo: 'Bordado',
    texto: 'Hilo sobre tela. Es la terminación que más dura y la que mejor imagen da en ropa de trabajo. Digitalizamos tu logo una sola vez y queda guardado para siempre.' },
  { img: 'estampado-dtf', titulo: 'Estampado DTF',
    texto: 'Todo color, sin límite de tintas y sin cantidad mínima. Sirve para algodón, poliéster y mezclas: si el diseño tiene degradés o es una foto, va por acá.' },
  { img: 'taza-ceramica', titulo: 'Sublimación',
    texto: 'El diseño entra en el material, no se pega encima. Por eso no se despega ni se descascara. Tazas, almohadones, termos y prendas deportivas.' },
  { img: 'vinilo-textil', titulo: 'Vinilo textil',
    texto: 'Corte termoadhesivo para nombres, números y logos de uno o dos colores. Es lo que se usa en las camisetas de equipo.' },
];

export const SEGMENTOS = [
  { titulo: 'Empresas y comercios', ancla: 'empresas',
    texto: 'Vestí a todo tu equipo con la misma imagen. Digitalización sin cargo desde 10 unidades, muestra física antes de producir el lote y reposición idéntica cuando entra gente nueva. Facturación A o B.' },
  { titulo: 'Egresados', ancla: 'egresados',
    texto: 'El diseño de la promo lo hacemos nosotros, sin cargo. Buzos con el logo del colegio bordado y el nombre de cada egresado. Desde 15 unidades, con seña y saldo contra entrega.' },
  { titulo: 'Clubes y equipos', ancla: 'clubes',
    texto: 'Camisetas sublimadas con escudo, sponsors, número y nombre. Camperas, rompevientos y botellas para toda la delegación. Talles de niño y de adulto en el mismo pedido.' },
  { titulo: 'Regalos y eventos', ancla: 'regalos',
    texto: 'Tazas, almohadones, termos y sets en caja, listos para entregar. Para fin de año, aniversarios, casamientos y cumpleaños.' },
];

export const PASOS = [
  { n: '1', t: 'Nos contás qué necesitás', d: 'Por WhatsApp: qué producto, cuántas unidades y para cuándo.' },
  { n: '2', t: 'Te pasamos el presupuesto', d: 'Cerrado y por escrito, con plazo y forma de pago. Sin sorpresas después.' },
  { n: '3', t: 'Aprobás la muestra', d: 'Te mostramos cómo va a quedar. No tocamos una prenda hasta que digas que sí.' },
  { n: '4', t: 'Producimos y entregamos', d: 'Retirás en el taller o te lo enviamos con seguimiento a todo el país.' },
];

/** El catálogo de exhibición: los mismos 22 productos que están en la tienda. */
export const CATALOGO = [
  { grupo: 'Indumentaria', items: [
    { img: 'remera',               n: 'Remera de algodón personalizada', v: 'Talles S a XXL · 3 colores' },
    { img: 'remera-oversize',      n: 'Remera oversize personalizada',   v: 'Talles S a XL · 3 colores' },
    { img: 'buzo-canguro',         n: 'Buzo canguro personalizado',      v: 'Talles S a XXL · 3 colores' },
    { img: 'buzo-cuello-redondo',  n: 'Buzo cuello redondo',             v: 'Talles S a XXL · 3 colores' },
    { img: 'campera-rompevientos', n: 'Campera rompevientos bordada',    v: 'Talles S a XXL · 3 colores' },
    { img: 'chomba-pique',         n: 'Chomba piqué con logo bordado',   v: 'Talles S a XXL · 3 colores' },
    { img: 'gorra',                n: 'Gorra de gabardina bordada',      v: 'Talle único · 4 colores' },
  ]},
  { grupo: 'Personalizados por encargo', items: [
    { img: 'kit-egresados',        n: 'Kit egresados — buzo + nombre',   v: 'Desde 15 unidades' },
    { img: 'indumentaria-laboral', n: 'Indumentaria laboral bordada',    v: 'Chomba, camisa, buzo o campera' },
    { img: 'camiseta-club',        n: 'Camiseta de club sublimada',      v: 'Talles de niño y adulto · desde 10 u.' },
    { img: 'set-regaleria',        n: 'Set de regalería empresarial',    v: '3 combos, en caja' },
  ]},
  { grupo: 'Sublimados', items: [
    { img: 'taza-ceramica',        n: 'Taza de cerámica sublimada',      v: '11 oz · impresión 360°' },
    { img: 'taza-magica',          n: 'Taza mágica personalizada',       v: 'Revela el diseño con el calor' },
    { img: 'almohadon',            n: 'Almohadón sublimado 40×40',       v: 'Con foto, logo o frase' },
    { img: 'mouse-pad',            n: 'Mouse pad personalizado',         v: 'Estándar y gamer' },
    { img: 'botella-deportiva',    n: 'Botella deportiva personalizada', v: '750 ml · 3 colores' },
    { img: 'termo-acero',          n: 'Termo de acero personalizado',    v: '750 ml y 1 litro' },
  ]},
  { grupo: 'Servicios sobre tu prenda', items: [
    { img: 'bordado-de-logo',      n: 'Bordado de logo',                 v: 'Hasta 8 cm, 15 cm o espalda completa' },
    { img: 'estampado-dtf',        n: 'Estampado DTF',                   v: 'A5, A4 o A3' },
    { img: 'vinilo-textil',        n: 'Vinilo textil',                   v: 'Nombres, números y logos' },
    { img: 'diseno-vectorizacion', n: 'Diseño y vectorización de logo',  v: 'Vectorizar, rediseñar o crear' },
    { img: 'sena-pedido',          n: 'Seña de pedido',                  v: 'Para pedidos ya presupuestados' },
  ]},
];
