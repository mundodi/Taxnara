/**
 * Genera las imágenes de exhibición de los productos de Taxnara.
 *
 * Estilo: fondo blanco, línea tinta (#15171C) y el punto de personalización
 * marcado en cian (#0F7C88) — la "marca de registro" de imprenta, que señala
 * dónde va el logo del cliente.
 *
 * USO:  node img/generar_imagenes.mjs
 * Salida: img/productos/*.png a 1200x1200
 */
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
import path from 'path';

const TINTA = '#16161A';
const CIAN  = '#D1017E';   // fucsia de marca (contraste AA sobre blanco)
const CIAN_CLARO = '#F4C721';   // amarillo de marca: acento sobre fondos oscuros

/** Colores reales de las prendas: [relleno, contorno, acento]. */
const COLORES = {
  'Blanco':        ['#FFFFFF', '#C9BCC4', CIAN],
  'Negro':         ['#24242A', '#141418', CIAN_CLARO],
  'Gris melange':  ['#BFB8BE', '#948C93', '#B00169'],
  'Beige':         ['#DBCDB6', '#B0A084', '#B00169'],
  'Azul marino':   ['#233A5C', '#14243B', CIAN_CLARO],
  'Azul':          ['#1CA2DE', '#12719D', '#16161A'],
  'Rojo':          ['#B3202B', '#7C1219', CIAN_CLARO],
  'Acero':         ['#C8C4CA', '#948E96', '#B00169'],
};

/** Qué producto se ofrece en qué colores. */
const VARIANTES_COLOR = {
  'remera':               ['Blanco', 'Negro', 'Gris melange'],
  'remera-oversize':      ['Blanco', 'Negro', 'Gris melange'],
  'buzo-canguro':         ['Negro', 'Gris melange', 'Beige'],
  'buzo-cuello-redondo':  ['Negro', 'Gris melange', 'Beige'],
  'campera-rompevientos': ['Negro', 'Azul marino', 'Rojo'],
  'chomba-pique':         ['Blanco', 'Negro', 'Azul marino'],
  'gorra':                ['Negro', 'Blanco', 'Beige', 'Azul marino'],
  'botella-deportiva':    ['Blanco', 'Negro', 'Azul'],
  'termo-acero':          ['Acero', 'Negro'],
};
const SALIDA = path.join(path.dirname(new URL(import.meta.url).pathname), 'productos');

/** Marca de registro de imprenta: señala el punto de personalización. */
const reg = (x, y, r) => `
  <circle cx="${x}" cy="${y}" r="${r}"/>
  <path d="M${x} ${y - r - r * 0.55}V${y - r * 0.35}M${x} ${y + r * 0.35}V${y + r + r * 0.55}
           M${x - r - r * 0.55} ${y}H${x - r * 0.35}M${x + r * 0.35} ${y}H${x + r + r * 0.55}"/>`;

// [ archivo, cuerpo en tinta, detalle en cian ]
const PRODUCTOS = [
  ['remera',
   `<path d="M62 46 88 32a26 15 0 0 0 24 0l26 14 30 22-18 26-14-10v90H62V84L48 94 30 68z"/>`,
   reg(100, 104, 14)],

  ['remera-oversize',
   `<path d="M56 50 86 34a28 15 0 0 0 28 0l30 16 30 22-18 26-16-11v92H58V87L42 98 24 72z"/>`,
   `<rect x="70" y="84" width="60" height="60" rx="2" stroke-dasharray="7 6"/>`],

  ['buzo-canguro',
   `<path d="M62 58 86 46h28l26 12 30 22-18 26-14-10v84H62V96L48 106 30 80z"/>
    <path d="M74 58c0-34 52-34 52 0"/>
    <path d="M86 48a14 10 0 0 0 28 0"/>
    <path d="M74 58q26 12 52 0"/>
    <path d="M68 126h64l-6 28H74z"/>`,
   `<path d="M92 68v14M108 68v14"/>` + reg(78, 104, 9)],

  ['buzo-cuello-redondo',
   `<path d="M62 48 88 34a26 14 0 0 0 24 0l26 14 30 22-18 26-14-10v92H62V86L48 96 30 70z"/>
    <path d="M82 38a20 14 0 0 0 36 0"/>`,
   reg(78, 96, 9)],

  ['campera-rompevientos',
   `<path d="M62 46 88 32h24l26 14 30 22-18 26-14-10v90H62V84L48 94 30 68z"/>
    <path d="M100 46v128"/>
    <path d="M88 32 100 48 112 32"/>
    <path d="M72 122h18M110 122h18"/>`,
   reg(78, 92, 9)],

  ['chomba-pique',
   `<path d="M62 46 88 32a26 14 0 0 0 24 0l26 14 30 22-18 26-14-10v90H62V84L48 94 30 68z"/>
    <path d="M86 34 100 56 114 34"/>
    <path d="M100 56v34"/>`,
   reg(78, 92, 9)],

  ['gorra',
   `<path d="M40 118a60 54 0 0 1 120 0z"/>
    <path d="M40 118h122a20 16 0 0 1-20 16H40z"/>
    <path d="M100 64v-8"/>`,
   reg(100, 96, 13)],

  ['kit-egresados',
   `<path d="M62 58 86 46h28l26 12 30 22-18 26-14-10v84H62V96L48 106 30 80z"/>
    <path d="M74 58c0-34 52-34 52 0"/>
    <path d="M86 48a14 10 0 0 0 28 0"/>
    <path d="M74 58q26 12 52 0"/>`,
   `<rect x="72" y="88" width="56" height="40" rx="2" stroke-dasharray="7 6"/>
    <path d="M78 144h44"/>`],

  ['taza-ceramica',
   `<path d="M44 56h84v88a10 10 0 0 1-10 10H54a10 10 0 0 1-10-10z"/>
    <path d="M128 78h16a20 20 0 0 1 0 40h-16"/>
    <path d="M44 56h84"/>`,
   reg(86, 100, 15)],

  ['taza-magica',
   `<path d="M44 56h84v88a10 10 0 0 1-10 10H54a10 10 0 0 1-10-10z" fill="${TINTA}"/>
    <path d="M128 78h16a20 20 0 0 1 0 40h-16"/>`,
   `<g stroke="#FFFFFF">${reg(86, 100, 15)}</g>`],

  ['mouse-pad',
   `<rect x="26" y="72" width="148" height="66" rx="8"/>
    <path d="M118 88a14 18 0 0 1 28 0v22a14 18 0 0 1-28 0z"/>
    <path d="M132 88v10"/>`,
   reg(70, 105, 15)],

  ['almohadon',
   `<rect x="40" y="46" width="120" height="112" rx="18"/>`,
   `<rect x="60" y="66" width="80" height="72" rx="3" stroke-dasharray="8 6"/>`],

  ['botella-deportiva',
   `<path d="M78 70h44v88a14 14 0 0 1-14 14H92a14 14 0 0 1-14-14z"/>
    <path d="M86 70V54h28v16"/>
    <path d="M96 54V44a8 8 0 0 1 8-8h4"/>`,
   reg(100, 118, 12)],

  ['termo-acero',
   `<path d="M70 72h60v90a12 12 0 0 1-12 12H82a12 12 0 0 1-12-12z"/>
    <path d="M78 72V48a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v24"/>
    <path d="M70 96h60"/>`,
   `<path d="M88 34h24"/>` + reg(100, 132, 14)],

  ['set-regaleria',
   `<path d="M34 88h132v72H34z"/>
    <path d="M34 88 46 62h108l12 26"/>
    <path d="M100 62v98"/>
    <path d="M100 62c-14-18-34-12-30 2 3 10 18 8 30-2zM100 62c14-18 34-12 30 2-3 10-18 8-30-2z"/>`,
   `<path d="M60 118h20M120 118h20"/>`],

  ['indumentaria-laboral',
   `<path d="M100 32a9 9 0 1 1 0 18c-6 0-9 4-9 8"/>
    <path d="M100 58 44 92l14 14 14-9v65h56v-65l14 9 14-14z"/>`,
   reg(80, 116, 10)],

  ['camiseta-club',
   `<path d="M62 46 88 32a26 15 0 0 0 24 0l26 14 30 22-18 26-14-10v90H62V84L48 94 30 68z"/>
    <path d="M76 60v104M124 60v104" stroke-width="2.2" stroke-dasharray="1 7"/>`,
   ``,
   `<text x="100" y="118" font-size="54">10</text>`],

  ['bordado-de-logo',
   `<circle cx="98" cy="106" r="52"/>
    <circle cx="98" cy="106" r="42"/>
    <path d="M92 54h12v-8H92z"/>
    <path d="M150 46 116 84"/>
    <path d="M150 46l6-6"/>`,
   `<path d="M78 116c8-16 16-16 22-6s14 8 20-10"/>` ],

  ['estampado-dtf',
   `<rect x="46" y="98" width="108" height="66" rx="4"/>
    <path d="M40 74h120v14H40z"/>
    <path d="M100 36v38"/>
    <path d="M76 36h48"/>`,
   `<circle cx="78" cy="128" r="11"/><circle cx="100" cy="128" r="11"/><circle cx="122" cy="128" r="11"/>`],

  ['vinilo-textil',
   `<path d="M40 46h120v108H68l-28-26z"/>
    <path d="M40 128h28v26z"/>`,
   `<path d="M150 34l-16 16"/><circle cx="154" cy="30" r="5"/>`,
   `<text x="104" y="98" font-size="52">23</text>`],

  ['diseno-vectorizacion',
   `<path d="M48 152C48 84 92 48 152 48"/>
    <path d="M48 152 34 122l30-14z"/>`,
   `<rect x="40" y="144" width="16" height="16"/>
    <rect x="144" y="40" width="16" height="16"/>
    <rect x="86" y="66" width="12" height="12"/>`],

  ['sena-pedido',
   `<path d="M56 30h88v140l-14-10-15 10-15-10-15 10-15-10-14 10z"/>
    <path d="M76 66h48M76 90h48M76 114h30"/>`,
   reg(126, 128, 14)],
];

const svg = (cuerpo, acento, texto = '',
             { fondo = true, trazo = TINTA, marca = CIAN, relleno = 'none' } = {}) =>
`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 200 200">
  ${fondo ? '<rect width="200" height="200" fill="#FFFFFF"/>' : ''}
  <g fill="${relleno}" stroke="${trazo}" stroke-width="3.4" stroke-linejoin="round" stroke-linecap="round">${cuerpo}</g>
  <g fill="none" stroke="${marca}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${acento}</g>
  <g fill="${marca}" font-family="Archivo, Arial Black, sans-serif" font-weight="800"
     text-anchor="middle" dominant-baseline="central">${texto}</g>
</svg>`;

const SALIDA_OSC = SALIDA + '-oscuro';
const SALIDA_TIN = SALIDA + '-tinta';
const SALIDA_COL = SALIDA + '-color';
fs.mkdirSync(SALIDA, { recursive: true });
fs.mkdirSync(SALIDA_OSC, { recursive: true });
fs.mkdirSync(SALIDA_TIN, { recursive: true });
fs.mkdirSync(SALIDA_COL, { recursive: true });
const navegador = await chromium.launch();
const pagina = await navegador.newPage({ viewport: { width: 1200, height: 1200 } });

for (const [nombre, cuerpo, acento, texto] of PRODUCTOS) {
  // 1) fondo blanco: es la que va a la tienda
  await pagina.setContent(
    `<style>html,body{margin:0;padding:0;background:#fff}svg{display:block}</style>${svg(cuerpo, acento, texto)}`);
  await pagina.screenshot({ path: path.join(SALIDA, `${nombre}.png`) });

  // 2) trazo blanco y acento claro, fondo transparente: para fondos oscuros de la web
  await pagina.setContent(
    `<style>html,body{margin:0;padding:0}svg{display:block}</style>` +
    svg(cuerpo, acento, texto, { fondo: false, trazo: '#FFFFFF', marca: CIAN_CLARO }));
  await pagina.screenshot({ path: path.join(SALIDA_OSC, `${nombre}.png`), omitBackground: true });

  // 2b) trazo negro sobre transparente: para los bloques amarillos y celestes
  await pagina.setContent(
    `<style>html,body{margin:0;padding:0}svg{display:block}</style>` +
    svg(cuerpo, acento, texto, { fondo: false, trazo: TINTA, marca: CIAN }));
  await pagina.screenshot({ path: path.join(SALIDA_TIN, `${nombre}.png`), omitBackground: true });

  // 3) una por cada color que se ofrece, con el relleno real de la prenda
  const colores = VARIANTES_COLOR[nombre] || [];
  for (const color of colores) {
    const [relleno, trazo, marca] = COLORES[color];
    await pagina.setContent(
      `<style>html,body{margin:0;padding:0;background:#fff}svg{display:block}</style>` +
      svg(cuerpo, acento, texto, { trazo, marca, relleno }));
    const archivo = `${nombre}-${color.toLowerCase().replace(/ /g, '-')}.png`;
    await pagina.screenshot({ path: path.join(SALIDA_COL, archivo) });
  }

  process.stdout.write(`· ${nombre}${colores.length ? ` (+${colores.length} colores)` : ''}\n`);
}

await navegador.close();
console.log(`\n${PRODUCTOS.length} imágenes en ${SALIDA}`);
console.log(`${PRODUCTOS.length} en versión clara (fondos oscuros) en ${SALIDA_OSC}`);
console.log(`${PRODUCTOS.length} en trazo negro transparente en ${SALIDA_TIN}`);
console.log(`${fs.readdirSync(SALIDA_COL).length} en color real en ${SALIDA_COL}`);
