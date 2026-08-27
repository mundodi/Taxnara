# 11 · La página web

Sitio propio de Taxnara Diseños, aparte de la tienda. Está en [`sitio/`](../sitio).

- **Fuente:** [`sitio/build.mjs`](../sitio/build.mjs) + [`sitio/datos.mjs`](../sitio/datos.mjs)
- **Salida para publicar:** `sitio/index.html` (usa las imágenes de `img/`)
- **Salida autocontenida:** `sitio/index.artifact.html` (imágenes embebidas, un solo archivo)

---

## Para qué sirve, si ya hay tienda

La tienda vende. **El sitio explica y convierte a WhatsApp**, que es donde Taxnara
realmente cierra los pedidos a medida. Son dos trabajos distintos:

| | Tienda | Sitio |
|---|---|---|
| Público | El que ya sabe qué quiere | El que está averiguando |
| Acción | Comprar | Escribir por WhatsApp |
| Contenido | Fichas y variantes | Técnicas, segmentos, proceso |

Todos los botones del sitio llevan al mismo lugar: **pedir presupuesto**.

---

## Cómo editarlo

**No edites `index.html` a mano** — se regenera y perderías los cambios.
Editá [`sitio/datos.mjs`](../sitio/datos.mjs) y corré:

```bash
node sitio/build.mjs
```

En `datos.mjs` está todo el contenido: contacto, técnicas, segmentos, pasos y catálogo.

### ⟨COMPLETAR⟩ El WhatsApp

Es lo primero. Arriba de `datos.mjs`:

```js
export const CONTACTO = {
  whatsapp: '5493834123456',   // ← código de país, sin + ni espacios ni guiones
  ...
};
```

Apenas lo completes y regeneres, **los seis botones del sitio pasan a abrir el chat
de WhatsApp con un mensaje ya escrito**, distinto según desde dónde se hizo clic
("quiero consultar por egresados", "por empresas", etc.). Mientras esté vacío, los
botones bajan a la sección de contacto.

También quedan marcados en magenta, en la propia página, el teléfono, el mail y el
horario: son los `⟨COMPLETAR⟩` que faltan.

---

## Cómo publicarlo

El sitio es **HTML estático**: no necesita servidor ni base de datos.

**Opción 1 — GitHub Pages (gratis).**
Settings → Pages → Source: la rama, carpeta `/`. Queda en
`https://mundodi.github.io/Taxnara/sitio/`.

**Opción 2 — Netlify o Cloudflare Pages (gratis, con dominio propio).**
Arrastrás la carpeta y listo. Permite apuntar `taxnaradisenos.com.ar`.

**Opción 3 — dentro de Tiendanube.**
Tiendanube ya te da `taxnara.mitiendanube.com`. Si preferís una sola dirección,
no publiques el sitio aparte: pasá su contenido a las páginas de la tienda
(los textos están en los docs 04 y 05).

> Si comprás un dominio, lo más simple es: dominio principal → la tienda,
> y el sitio como landing en un subdominio, o directamente todo en la tienda.

---

## Estructura

| Sección | Qué hace |
|---|---|
| Hero | La frase de marca y el botón de presupuesto |
| Franja de confianza | Producción propia · Envíos · Muestra previa · Retiro |
| Qué hacemos | Las 4 técnicas, explicadas por para qué sirve cada una |
| Catálogo | Los 22 productos, agrupados, **sin precio** |
| Para quién | Empresas · Egresados · Clubes · Regalos |
| Tu logo bordado | El bloque que convierte al cliente empresa |
| Cómo trabajamos | Los 4 pasos |
| Contacto | Datos y botones a WhatsApp |

---

## Detalles técnicos

- **Sin dependencias.** Un archivo HTML con CSS embebido. Nada de frameworks.
- **Tipografías:** Archivo y Work Sans desde Google Fonts, con alternativas del sistema.
- **Se adapta al tema del visitante:** claro y oscuro, con las dos paletas definidas.
- **Responsive** de 390 px para arriba, verificado en celular y escritorio.
- **Imágenes:** las mismas del catálogo. Sobre fondos oscuros usa la variante clara
  de `img/productos-oscuro/`, generada aparte para que el acento cian no se
  distorsione.

### ⟨COMPLETAR⟩ Antes de publicarlo

- [ ] WhatsApp en `datos.mjs`
- [ ] Mail y horario
- [ ] Reemplazar el logotipo tipografiado por el logo real (está en el `<header>` y en el pie)
- [ ] Reemplazar las ilustraciones por fotos del taller
- [ ] Agregar los enlaces a Términos y Política de privacidad en el pie (doc 06)
