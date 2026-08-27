# Tiendanube — Taxnara Diseños

Tienda online de **Taxnara Diseños** en Tiendanube: catálogo cargado,
más identidad, textos, políticas legales, envíos, pagos y SEO listos para pegar.

> ## ✅ El catálogo ya está cargado en la tienda
>
> **21 categorías y 22 productos (148 variantes)** con descripción, SEO, peso,
> medidas y SKU están **cargados en [taxnara.mitiendanube.com](https://taxnara.mitiendanube.com)**.
>
> **Todo está despublicado**: nadie lo ve ni lo puede comprar todavía. Falta
> ponerle los precios reales y las fotos, y recién ahí publicar.
>
> El detalle completo está en [`docs/10-estado-de-la-tienda.md`](docs/10-estado-de-la-tienda.md).

> **Taxnara Diseños** · Sublimación, bordado y estampado personalizado
> Av. Señor del Milagro 645 — Saujil, Catamarca, Argentina
> [@taxnaradisenos](https://www.instagram.com/taxnaradisenos/) · [TikTok @taxnara](https://www.tiktok.com/@taxnara) · [Facebook](https://www.facebook.com/TaxnaraDisenio/)

---

## Cómo usar este repo

Cada archivo de `docs/` es para **copiar y pegar** en el panel de Tiendanube.
No hace falta saber programar: todo se carga desde el administrador.

| Archivo | Qué resuelve |
|---|---|
| [`docs/00-guia-de-implementacion.md`](docs/00-guia-de-implementacion.md) | Paso a paso, en orden, desde cero hasta publicar |
| [`docs/01-identidad-de-marca.md`](docs/01-identidad-de-marca.md) | Paleta, tipografías, logo, medidas exactas de cada imagen |
| [`docs/02-estructura-y-home.md`](docs/02-estructura-y-home.md) | Categorías, menú, secciones del inicio |
| [`docs/03-catalogo.md`](docs/03-catalogo.md) | Productos, variantes, cómo fijar precios |
| [`docs/04-textos-web.md`](docs/04-textos-web.md) | Todo el copy: banners, botones, avisos, mails |
| [`docs/05-paginas-institucionales.md`](docs/05-paginas-institucionales.md) | Nosotros, Cómo comprar, Preguntas frecuentes, Cuidados |
| [`docs/06-politicas-legales.md`](docs/06-politicas-legales.md) | Términos, cambios y devoluciones, privacidad, botón de arrepentimiento |
| [`docs/07-envios-y-pagos.md`](docs/07-envios-y-pagos.md) | Mercado Pago, transferencia, Correo Argentino, retiro en local |
| [`docs/08-seo-y-redes.md`](docs/08-seo-y-redes.md) | Títulos y descripciones SEO, link en bio, plan de contenido |
| [`docs/09-pedidos-personalizados.md`](docs/09-pedidos-personalizados.md) | El flujo del trabajo a medida dentro de una tienda online |
| [`docs/10-estado-de-la-tienda.md`](docs/10-estado-de-la-tienda.md) | **Qué quedó cargado en la tienda y qué falta** |
| [`import/productos-taxnara.csv`](import/productos-taxnara.csv) | El mismo catálogo en CSV, como respaldo |
| [`brand/tokens.css`](brand/tokens.css) | Colores y tipografías en un solo lugar |
| [`preview/index.html`](preview/index.html) | Maqueta visual de cómo queda el inicio |

---

## Lo que hay que completar antes de publicar

Estos datos no los pude sacar de las redes (el proxy de esta sesión bloquea Instagram,
Facebook y TikTok). Están marcados en todos los archivos como `⟨COMPLETAR⟩`:

- **HEX exactos del logo** → `brand/tokens.css`
- **Teléfono / WhatsApp de ventas**
- **CUIT y razón social** (obligatorio para facturar y para los Términos)
- **Mail de contacto** de la tienda
- **Precios reales** → los cargados son de referencia, no son cotizaciones.
  Filtrá por el tag `REVISAR PRECIO` en el panel para verlos todos
- **Fotos de producto** → las mejores ya están en el feed de Instagram

---

## Qué falta hacer a mano

El catálogo se cargó por la API, pero hay cosas que solo se hacen desde el panel
(o para las que hacen falta archivos que no tengo):

- Subir **logo, favicon y banners**, y cargar colores y tipografías
- Subir las **fotos de cada producto**
- Crear las **páginas** (Nosotros, FAQ, legales, contacto)
- Configurar **formas de envío**
- Poner los **precios reales** y publicar

Cada una tiene su documento con el contenido listo para copiar y pegar.
