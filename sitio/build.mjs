/**
 * Genera el sitio de Taxnara Diseños.
 *
 *   node sitio/build.mjs
 *
 * Produce dos archivos:
 *   sitio/index.html           → para publicar (imágenes por ruta, ../img/productos)
 *   sitio/index.artifact.html  → autocontenido (imágenes embebidas), para previsualizar
 */
import fs from 'fs';
import path from 'path';
import { CONTACTO, TECNICAS, SEGMENTOS, PASOS, CATALOGO } from './datos.mjs';

const AQUI = path.dirname(new URL(import.meta.url).pathname);
const IMGS = path.join(AQUI, '..', 'img', 'productos');

const wa = (texto) => CONTACTO.whatsapp
  ? `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(texto)}`
  : '#contacto';

/** Manchas de jirafa, el motivo del logo, como textura de fondo. */
const manchas = (color, opacidad = 1) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260">`
    + `<g fill="${color}" opacity="${opacidad}">`
    + `<path d="M28 18 74 8l22 30-14 34-40 6-20-26z"/>`
    + `<path d="M120 30l44-14 26 26-8 36-42 10-24-24z"/>`
    + `<path d="M206 6l40 12 6 34-30 20-24-22z"/>`
    + `<path d="M12 96l38 8 12 34-22 30-34-6-8-38z"/>`
    + `<path d="M96 106l52 6 16 36-30 28-44-10-8-38z"/>`
    + `<path d="M196 96l46 10 10 32-28 26-36-10-6-36z"/>`
    + `<path d="M40 190l44 4 14 34-26 26-40-8-6-34z"/>`
    + `<path d="M136 194l48 2 14 32-32 26-38-10z"/>`
    + `</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------------------------------------------------------------- secciones

const tecnicas = TECNICAS.map(t => `
      <article class="tecnica">
        <img src="__IMG:${t.img}__" alt="" aria-hidden="true">
        <h3>${esc(t.titulo)}</h3>
        <p>${esc(t.texto)}</p>
      </article>`).join('');

const segmentos = SEGMENTOS.map(s => `
      <article class="segmento" id="${s.ancla}">
        <h3>${esc(s.titulo)}</h3>
        <p>${esc(s.texto)}</p>
        <a class="enlace" href="${wa(`Hola Taxnara, quiero consultar por ${s.titulo.toLowerCase()}.`)}">Consultar por ${esc(s.titulo.toLowerCase())}</a>
      </article>`).join('');

const pasos = PASOS.map(p => `
      <li class="paso">
        <span class="paso-n">${p.n}</span>
        <h3>${esc(p.t)}</h3>
        <p>${esc(p.d)}</p>
      </li>`).join('');

const catalogo = CATALOGO.map(g => `
      <section class="grupo">
        <h3 class="grupo-t">${esc(g.grupo)}</h3>
        <ul class="rejilla">${g.items.map(i => `
          <li class="ficha">
            <div class="ficha-img"><img src="__IMG:${i.img}__" alt="${esc(i.n)}" loading="lazy"></div>
            <div class="ficha-txt">
              <h4>${esc(i.n)}</h4>
              <p class="ficha-v">${esc(i.v)}</p>
              <p class="ficha-p">${esc(i.p)}</p>
            </div>
          </li>`).join('')}
        </ul>
      </section>`).join('');

// ---------------------------------------------------------------- documento

const HTML = `<title>Taxnara Diseños</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Sublimación, bordado y estampado personalizado en Saujil, Catamarca. Remeras, buzos, gorras, tazas y ropa de trabajo con tu logo. Envíos a todo el país.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap">

<style>
:root{
  /* Paleta medida sobre el logo real y la placa de horarios de Instagram */
  --fucsia:#E6028B; --fucsia-btn:#D1017E; --fucsia-osc:#B00169;
  --amarillo:#F4C721; --celeste:#1CA2DE; --tinta:#16161A;
  --papel:#FDF3F8; --sup:#FFFFFF; --humo:#6B6470; --linea:#EBDFE6;
  --fondo:#FFFFFF; --texto:#16161A;
  --sobre-fucsia:#FFFFFF;   /* sobre el fucsia de botón */
  --hero-bg:#E6028B; --hero-fg:#FFFFFF;   /* el hero no invierte con el tema */
  --sobre-calido:#16161A;   /* sobre amarillo y celeste va SIEMPRE negro */
  --prenda:#16161A;
  --sombra:0 2px 4px rgba(22,22,26,.05),0 12px 32px rgba(230,2,139,.07);
  --ft:"Poppins","Nunito Sans",system-ui,sans-serif;
  --fb:"Nunito Sans","Work Sans",system-ui,sans-serif;
  --r:14px; --max:1160px;
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --fucsia:#FF3DA5; --fucsia-btn:#FF3DA5; --fucsia-osc:#FF69B8;
    --amarillo:#F4C721; --celeste:#45BEF2; --tinta:#0C0A10;
    --papel:#1C1822; --sup:#171320; --humo:#A79FAE; --linea:#332B3B;
    --fondo:#121016; --texto:#F3EDF2;
    --sobre-fucsia:#12040C; --sobre-calido:#16161A; --prenda:#EFE7ED;
    --sombra:0 2px 4px rgba(0,0,0,.4),0 12px 32px rgba(0,0,0,.4);
  }
}
:root[data-theme="dark"]{
  --fucsia:#FF3DA5; --fucsia-btn:#FF3DA5; --fucsia-osc:#FF69B8;
  --amarillo:#F4C721; --celeste:#45BEF2; --tinta:#0C0A10;
  --papel:#1C1822; --sup:#171320; --humo:#A79FAE; --linea:#332B3B;
  --fondo:#121016; --texto:#F3EDF2;
  --sobre-fucsia:#12040C; --sobre-calido:#16161A; --prenda:#EFE7ED;
  --sombra:0 2px 4px rgba(0,0,0,.4),0 12px 32px rgba(0,0,0,.4);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--fondo);color:var(--texto);
  font-family:var(--fb);font-size:16px;line-height:1.65;-webkit-font-smoothing:antialiased}
h1,h2,h3,h4{font-family:var(--ft);margin:0;line-height:1.12;text-wrap:balance}
p{margin:0}
img{max-width:100%;display:block}
a{color:inherit}
:focus-visible{outline:2px solid var(--fucsia-btn);outline-offset:3px}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
.wrap{max-width:var(--max);margin:0 auto;padding:0 24px}

/* --- avisos --- */
.aviso{background:var(--hero-bg);color:var(--hero-fg);text-align:center;font-size:13.5px;padding:10px 16px;letter-spacing:.01em}
.aviso b{color:var(--amarillo);font-weight:700}

/* --- header --- */
.head{position:sticky;top:0;z-index:20;background:var(--sup);border-bottom:1px solid var(--linea)}
.head-in{display:flex;align-items:center;gap:28px;height:82px}
.marca{display:flex;align-items:center;gap:10px;text-decoration:none;flex:none}
.marca img{width:64px;height:64px;border-radius:50%;flex:none;background:#fff;
  box-shadow:0 0 0 2px var(--linea)}
.marca strong{font-family:var(--ft);font-weight:800;font-size:23px;letter-spacing:-.02em;display:block;
  line-height:1;color:var(--fucsia-btn)}
.marca em{font-style:normal;font-family:var(--ft);font-size:9px;font-weight:600;
  letter-spacing:.34em;color:var(--humo);display:block;margin-top:3px}
.nav{display:flex;gap:22px;margin-left:auto;font-size:14.5px;font-weight:500}
.nav a{text-decoration:none;padding:5px 0;border-bottom:2px solid transparent;white-space:nowrap}
.nav a:hover{border-bottom-color:var(--fucsia-btn);color:var(--fucsia-btn)}
@media (max-width:940px){.nav{display:none}}

.btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--ft);font-weight:700;
  font-size:15px;padding:14px 26px;border-radius:var(--r);text-decoration:none;border:2px solid transparent}
.btn-fucsia{background:var(--fucsia-btn);color:#FFFFFF}
.btn-amarillo{background:var(--amarillo);color:var(--sobre-calido)}
.btn-amarillo:hover{background:#FFD84D}
.btn-fucsia:hover{background:var(--fucsia-osc)}
.btn-linea{border-color:var(--linea);color:var(--texto)}
.btn-linea:hover{border-color:var(--fucsia-btn);color:var(--fucsia-btn)}
.btn-claro{border-color:rgba(255,255,255,.55);color:var(--hero-fg)}
.btn-sm{padding:10px 18px;font-size:13.5px}
.head .btn{margin-left:auto}
@media (max-width:940px){.head .btn{margin-left:auto}}

/* --- hero --- */
.hero{position:relative;background:var(--hero-bg);color:var(--hero-fg);overflow:hidden}
.hero::before{content:"";position:absolute;inset:0;
  background-image:__MANCHAS_HERO__;background-size:290px 290px;opacity:.13}
.hero::after{content:"";position:absolute;right:-140px;bottom:-190px;width:520px;height:520px;
  border-radius:50%;background:var(--amarillo);opacity:.2}
.hero-in{position:relative;z-index:1;display:grid;grid-template-columns:1.08fr .92fr;gap:48px;
  align-items:center;padding:84px 24px 92px}
.volanta{font-family:var(--ft);font-size:11.5px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
  color:var(--amarillo);display:flex;align-items:center;gap:12px;margin-bottom:22px}
.volanta::before{content:"";width:34px;height:3px;border-radius:2px;background:var(--amarillo);flex:none}
.hero h1{font-size:clamp(36px,5.4vw,60px);font-weight:800;letter-spacing:-.03em}
.hero-sub{margin-top:20px;font-size:17.5px;color:var(--hero-fg);opacity:.94;max-width:46ch}
.hero-cta{margin-top:34px;display:flex;flex-wrap:wrap;gap:12px}
.hero-art{display:flex;justify-content:center}
.hero-art img{width:min(380px,84%);filter:drop-shadow(0 24px 44px rgba(0,0,0,.5))}
@media (max-width:880px){.hero-in{grid-template-columns:1fr;padding:56px 24px 64px;gap:36px}.hero-art{order:-1}}

/* --- franja --- */
.franja{background:var(--amarillo);color:var(--sobre-calido)}
.franja ul{list-style:none;margin:0 auto;padding:24px;max-width:var(--max);
  display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.franja li{display:flex;gap:11px;align-items:flex-start}
.franja svg{flex:none;color:var(--sobre-calido);margin-top:2px}
.franja strong{display:block;font-family:var(--ft);font-size:13.5px;font-weight:700}
.franja span span{font-size:12.5px;color:var(--sobre-calido);opacity:.78;line-height:1.45}
@media (max-width:820px){.franja ul{grid-template-columns:repeat(2,1fr)}}

/* --- secciones --- */
.sec{padding:74px 0}
.sec-papel{background:var(--papel)}
.sec-cab{max-width:56ch;margin-bottom:38px}
.eyebrow{font-family:var(--ft);font-size:11.5px;font-weight:700;letter-spacing:.2em;
  text-transform:uppercase;color:var(--fucsia-btn);margin-bottom:12px}
.sec-cab h2{font-size:clamp(26px,3.4vw,36px);font-weight:800;letter-spacing:-.02em}
.sec-cab p{color:var(--humo);margin-top:14px;font-size:16.5px}

/* --- técnicas --- */
.tecnicas{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.tecnica{background:var(--sup);border:1px solid var(--linea);border-radius:var(--r);padding:24px}
.tecnica img{width:76px;height:76px;margin-bottom:14px}
.tecnica h3{font-size:19px;font-weight:700;margin-bottom:9px}
.tecnica p{font-size:14.5px;color:var(--humo)}
@media (max-width:900px){.tecnicas{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.tecnicas{grid-template-columns:1fr}}

/* --- catálogo --- */
.grupo + .grupo{margin-top:48px}
.grupo-t{font-size:14px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
  color:var(--humo);padding-bottom:12px;border-bottom:1px solid var(--linea);margin-bottom:22px}
.rejilla{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ficha{background:var(--sup);border:1px solid var(--linea);border-radius:var(--r);overflow:hidden;
  display:flex;flex-direction:column;transition:border-color .18s ease,transform .18s ease}
.ficha:hover{border-color:var(--fucsia-btn);transform:translateY(-3px)}
.ficha-img{aspect-ratio:1;background:var(--papel);display:grid;place-items:center;padding:12%}
.ficha-txt{padding:15px 16px 18px;display:flex;flex-direction:column;gap:5px;flex:1}
.ficha h4{font-size:15.5px;font-weight:600;line-height:1.3}
.ficha-v{font-size:12.5px;color:var(--humo)}
.ficha-p{margin-top:auto;padding-top:9px;font-family:var(--ft);font-weight:700;font-size:17px;
  color:var(--texto);font-variant-numeric:tabular-nums}
@media (max-width:900px){.rejilla{grid-template-columns:repeat(2,1fr)}}

/* --- segmentos --- */
.segmentos{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.segmento{background:var(--sup);border:1px solid var(--linea);border-radius:var(--r);padding:28px}
.segmento h3{font-size:21px;font-weight:700;margin-bottom:10px}
.segmento p{font-size:15px;color:var(--humo)}
.enlace{display:inline-block;margin-top:16px;font-family:var(--ft);font-weight:600;font-size:14px;
  color:var(--fucsia-btn);text-decoration:none;border-bottom:2px solid var(--fucsia-btn);padding-bottom:2px}
@media (max-width:820px){.segmentos{grid-template-columns:1fr}}

/* --- pasos --- */
.pasos{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:26px}
.paso-n{font-family:var(--ft);font-weight:800;font-size:13px;color:var(--fucsia-btn);
  display:flex;align-items:center;gap:10px;margin-bottom:10px}
.paso-n::after{content:"";height:1px;background:var(--linea);flex:1}
.paso h3{font-size:17.5px;font-weight:700;margin-bottom:7px}
.paso p{font-size:14.5px;color:var(--humo)}
@media (max-width:860px){.pasos{grid-template-columns:repeat(2,1fr)}}

/* --- taller --- */
.taller{display:grid;grid-template-columns:1fr 1fr;align-items:stretch}
.taller-txt{background:var(--tinta);color:#fff;padding:64px 52px;display:flex;flex-direction:column;
  justify-content:center;gap:18px}
.taller-txt h2{font-size:clamp(26px,3.2vw,34px);font-weight:800;letter-spacing:-.02em}
.taller-txt p{color:#DCD3DA;font-size:15.5px}
.taller-txt .btn{align-self:flex-start;margin-top:10px}
.taller-img{background:var(--amarillo);display:grid;place-items:center;padding:48px;position:relative;overflow:hidden}
.taller-img::before{content:"";position:absolute;inset:0;
  background-image:__MANCHAS_BLOQUE__;background-size:230px 230px;opacity:.55}
.taller-img img{width:min(300px,78%);position:relative;z-index:1}
@media (max-width:880px){.taller{grid-template-columns:1fr}.taller-txt{padding:48px 24px}}

/* --- contacto --- */
.contacto{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:start}
.datos{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:18px}
.datos li{display:flex;gap:13px;align-items:flex-start}
.datos svg{flex:none;color:var(--fucsia-btn);margin-top:3px}
.datos strong{display:block;font-family:var(--ft);font-size:12px;font-weight:700;
  letter-spacing:.14em;text-transform:uppercase;color:var(--humo);margin-bottom:2px}
.datos a{text-decoration:none}
.datos a:hover{color:var(--fucsia-btn)}
.pendiente{color:var(--magenta);font-weight:600}
@media (max-width:820px){.contacto{grid-template-columns:1fr;gap:32px}}

/* --- pie --- */
.pie{background:var(--tinta);color:#CFC6CE;padding:54px 0 24px;font-size:14px}
.pie-cols{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:36px}
.pie h4{font-family:var(--ft);color:#fff;font-size:12px;font-weight:700;letter-spacing:.16em;
  text-transform:uppercase;margin-bottom:14px}
.pie ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px}
.pie a{text-decoration:none}
.pie a:hover{color:var(--amarillo)}
.pie-marca img{width:72px;height:72px;border-radius:50%;background:#fff;margin-bottom:14px}
.pie-marca strong{font-family:var(--ft);font-weight:800;font-size:22px;color:#fff;letter-spacing:-.02em;display:block}
.pie-marca p{margin-top:12px;line-height:1.6;max-width:34ch}
.redes{display:flex;gap:10px;margin-top:18px}
.redes a{width:36px;height:36px;border:1px solid rgba(255,255,255,.2);border-radius:var(--r);
  display:grid;place-items:center;color:#C3CDCE}
.redes a:hover{border-color:var(--amarillo);color:var(--amarillo)}
.pie-bajo{border-top:1px solid rgba(255,255,255,.13);margin-top:38px;padding-top:20px;
  display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;font-size:12.5px;color:#8B9698}
@media (max-width:820px){.pie-cols{grid-template-columns:1fr 1fr}}
</style>

<div class="aviso">Producción propia en Saujil, Catamarca · Envíos a todo el país · <b>Presupuestos sin cargo</b></div>

<header class="head">
  <div class="wrap head-in">
    <a class="marca" href="#inicio">
      <img src="__LOGO__" alt="Taxnara Diseños" width="64" height="64">
      <span><strong>Taxnara</strong><em>DISEÑOS</em></span>
    </a>
    <nav class="nav" aria-label="Menú principal">
      <a href="#tecnicas">Qué hacemos</a>
      <a href="#catalogo">Catálogo</a>
      <a href="#para-quien">Para quién</a>
      <a href="#como">Cómo trabajamos</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <a class="btn btn-fucsia btn-sm" href="${wa('Hola Taxnara, quiero pedir un presupuesto.')}">Pedir presupuesto</a>
  </div>
</header>

<main>
  <section class="hero" id="inicio">
    <div class="wrap hero-in">
      <div>
        <p class="volanta">Sublimación · Bordado · Estampado</p>
        <h1>Identidad visual para tus productos</h1>
        <p class="hero-sub">Lo que en tu logo es un archivo, acá se vuelve una prenda que alguien usa
          todos los días. Taller propio en Saujil, Catamarca, con envíos a todo el país.</p>
        <div class="hero-cta">
          <a class="btn btn-amarillo" href="${wa('Hola Taxnara, quiero pedir un presupuesto.')}">Pedir presupuesto</a>
          <a class="btn btn-claro" href="#catalogo">Ver el catálogo</a>
        </div>
      </div>
      <div class="hero-art"><img src="__OSC:buzo-canguro__" alt="Buzo canguro personalizado"></div>
    </div>
  </section>

  <div class="franja">
    <ul>
      <li><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path d="M4 20V9l8-5 8 5v11" stroke-linejoin="round"/><path d="M9 20v-6h6v6"/></svg>
        <span><strong>Producción propia</strong><span>Bordamos, sublimamos y estampamos nosotros</span></span></li>
      <li><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="2" y="7" width="13" height="10" rx="1.5"/><path d="M15 10h4l3 3v4h-7z" stroke-linejoin="round"/><circle cx="7" cy="18" r="1.6"/><circle cx="18" cy="18" r="1.6"/></svg>
        <span><strong>Envíos a todo el país</strong><span>Correo y transporte, con seguimiento</span></span></li>
      <li><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span><strong>Muestra antes de producir</strong><span>No arrancamos hasta que la apruebes</span></span></li>
      <li><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4"/></svg>
        <span><strong>Retiro sin cargo</strong><span>Av. Señor del Milagro 645, Saujil</span></span></li>
    </ul>
  </div>

  <section class="sec" id="tecnicas">
    <div class="wrap">
      <div class="sec-cab">
        <p class="eyebrow">Qué hacemos</p>
        <h2>Cuatro maneras de poner tu marca sobre algo</h2>
        <p>No todas sirven para lo mismo. Si no sabés cuál te conviene, contanos qué necesitás
          y te lo decimos nosotros — incluso si la respuesta es que no conviene hacerlo.</p>
      </div>
      <div class="tecnicas">${tecnicas}
      </div>
    </div>
  </section>

  <section class="sec sec-papel" id="catalogo">
    <div class="wrap">
      <div class="sec-cab">
        <p class="eyebrow">Catálogo</p>
        <h2>Todo lo que sale del taller</h2>
        <p>Los precios son por unidad y ya incluyen la personalización. Desde 10 unidades hay
          descuento por cantidad: <strong>−5%</strong> de 10 a 24, <strong>−10%</strong> de 25 a 49
          y <strong>−15%</strong> de 50 en adelante.</p>
      </div>${catalogo}
    </div>
  </section>

  <section class="sec" id="para-quien">
    <div class="wrap">
      <div class="sec-cab">
        <p class="eyebrow">Para quién</p>
        <h2>Cada pedido se trabaja distinto</h2>
      </div>
      <div class="segmentos">${segmentos}
      </div>
    </div>
  </section>

  <section class="taller">
    <div class="taller-txt">
      <h2>Tu logo, bordado como corresponde</h2>
      <p>Digitalizamos tu logo una sola vez y queda guardado para siempre. Cuando entra alguien
        nuevo al equipo, pedís la reposición y sale idéntica a la del primer día.</p>
      <p>Si el archivo que tenés no sirve para bordar, te lo decimos antes y lo vectorizamos.
        Preferimos perder una venta a entregar algo que no nos gusta.</p>
      <a class="btn btn-fucsia" href="${wa('Hola Taxnara, quiero consultar por indumentaria para mi empresa.')}">Consultar para mi empresa</a>
    </div>
    <div class="taller-img"><img src="__TINTA:bordado-de-logo__" alt="Bastidor de bordado"></div>
  </section>

  <section class="sec sec-papel" id="como">
    <div class="wrap">
      <div class="sec-cab">
        <p class="eyebrow">Cómo trabajamos</p>
        <h2>Cuatro pasos, sin sorpresas</h2>
        <p>El miedo de quien encarga algo personalizado es que salga mal. Por eso el tercer paso
          existe: nada entra a producción sin tu aprobación por escrito.</p>
      </div>
      <ol class="pasos">${pasos}
      </ol>
    </div>
  </section>

  <section class="sec" id="contacto">
    <div class="wrap contacto">
      <div>
        <p class="eyebrow">Contacto</p>
        <h2 style="font-family:var(--ft);font-size:clamp(26px,3.4vw,36px);font-weight:800;letter-spacing:-.02em">
          Contanos qué necesitás</h2>
        <p style="color:var(--humo);margin-top:14px;font-size:16.5px">
          Escribinos con <strong>qué producto</strong>, <strong>cuántas unidades</strong> y
          <strong>para cuándo</strong> lo necesitás. Con eso te contestamos con el presupuesto
          en el primer mensaje.</p>
        <div style="margin-top:26px;display:flex;gap:12px;flex-wrap:wrap">
          <a class="btn btn-fucsia" href="${wa('Hola Taxnara, quiero pedir un presupuesto.')}">Escribir por WhatsApp</a>
          <a class="btn btn-linea" href="${CONTACTO.tienda}">Ver la tienda online</a>
        </div>
      </div>
      <ul class="datos">
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path d="M3.5 20.5 5 16a8 8 0 1 1 3 3z" stroke-linejoin="round"/></svg>
          <span><strong>WhatsApp</strong><span class="pendiente">${esc(CONTACTO.telefonoVisible)}</span></span></li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          <span><strong>Mail</strong><span class="pendiente">${esc(CONTACTO.mail)}</span></span></li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4"/></svg>
          <span><strong>Taller</strong><span>${esc(CONTACTO.direccion)}</span></span></li>
        <li><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2" stroke-linecap="round"/></svg>
          <span><strong>Horario</strong><span class="pendiente">${esc(CONTACTO.horario)}</span></span></li>
      </ul>
    </div>
  </section>
</main>

<footer class="pie">
  <div class="wrap">
    <div class="pie-cols">
      <div class="pie-marca">
        <img src="__LOGO__" alt="Taxnara Diseños" width="72" height="72">
        <strong>Taxnara</strong>
        <p>Sublimación, bordado y estampado personalizado.<br>${esc(CONTACTO.direccion)}.</p>
        <div class="redes">
          <a href="${CONTACTO.instagram}" aria-label="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="${CONTACTO.facebook}" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1z" stroke-linejoin="round"/></svg></a>
          <a href="${CONTACTO.tiktok}" aria-label="TikTok"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M15 4v9.5a4.5 4.5 0 1 1-4-4.47" stroke-linecap="round"/><path d="M15 4c.6 2.6 2.2 4 5 4.2" stroke-linecap="round"/></svg></a>
        </div>
      </div>
      <div>
        <h4>La tienda</h4>
        <ul>
          <li><a href="${CONTACTO.tienda}">Tienda online</a></li>
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#como">Cómo trabajamos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h4>Para</h4>
        <ul>
          <li><a href="#empresas">Empresas</a></li>
          <li><a href="#egresados">Egresados</a></li>
          <li><a href="#clubes">Clubes y equipos</a></li>
          <li><a href="#regalos">Regalos y eventos</a></li>
        </ul>
      </div>
    </div>
    <div class="pie-bajo">
      <span>© ${new Date().getFullYear()} Taxnara Diseños · Saujil, Catamarca, Argentina</span>
      <span>Las imágenes del catálogo son ilustrativas.</span>
    </div>
  </div>
</footer>
`;

// ---------------------------------------------------------------- salida

function escribir(destino, resolverImagen) {
  const salida = HTML
    .replace(/__MANCHAS_HERO__/g,   manchas('#FFFFFF'))
    .replace(/__MANCHAS_BLOQUE__/g, manchas('#16161A', 0.14))
    .replace(/__LOGO__/g,           resolverImagen('logo-taxnara', 'marca'))
    .replace(/__TINTA:([a-z0-9-]+)__/g, (_, n) => resolverImagen(n, 'productos-tinta'))
    .replace(/__IMG:([a-z0-9-]+)__/g,  (_, n) => resolverImagen(n, 'productos'))
    .replace(/__OSC:([a-z0-9-]+)__/g, (_, n) => resolverImagen(n, 'productos-oscuro'));
  fs.writeFileSync(path.join(AQUI, destino), salida);
  const kb = (fs.statSync(path.join(AQUI, destino)).size / 1024).toFixed(0);
  console.log(`· sitio/${destino}  (${kb} KB)`);
}

// versión desplegable: rutas relativas
escribir('index.html', (n, dir) => `../img/${dir}/${n}.png`);

// versión autocontenida: imágenes embebidas
const cache = new Map();
escribir('index.artifact.html', (n, dir) => {
  const clave = `${dir}/${n}`;
  if (!cache.has(clave)) {
    const b64 = fs.readFileSync(path.join(AQUI, '..', 'img', dir, `${n}.png`)).toString('base64');
    cache.set(clave, `data:image/png;base64,${b64}`);
  }
  return cache.get(clave);
});

console.log(`\nWhatsApp: ${CONTACTO.whatsapp || '⟨sin completar — los botones llevan a #contacto⟩'}`);
