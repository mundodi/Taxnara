# 01 · Identidad de marca

## Idea rectora

En Instagram, Taxnara no vende remeras: vende **el logo de otro, bien puesto**.
Clubes, egresados, empresas y emprendimientos de la zona le confían su identidad al
taller. La tienda tiene que transmitir eso mismo: **oficio, terminación y confianza**,
no saldo.

De ahí salen tres decisiones:

1. **La foto manda.** Cada producto se muestra terminado, sobre alguien, en uso.
   Nada de renders vacíos.
2. **La paleta sale del oficio.** No es una paleta "linda" elegida al azar: son las
   **tintas de cuatricromía** con las que se estampa y se sublima —negro, cian,
   magenta— sobre papel. Es el sistema de color con el que Taxnara ya trabaja
   todos los días.
3. **Un solo acento.** El cian se usa para *botones y links*, nada más. El magenta
   se reserva **exclusivamente** para ofertas. Si el color está en todos lados, deja
   de significar "acá se hace clic".

**Frase de marca:** *Identidad visual para tus productos.*
**Tono:** cercano, de taller, de vos. Ni corporativo ni informal de más.

---

## Paleta

| Rol | Nombre | HEX | Dónde va |
|---|---|---|---|
| Principal | Tinta | `#15171C` | Header, footer, títulos, precios |
| Acento | Cian | `#0F7C88` | Botones, links, íconos |
| Acento oscuro | Cian oscuro | `#0A5C66` | Hover de botones |
| Promo | Magenta | `#C8246B` | **Solo** etiquetas de oferta |
| Fondo suave | Papel | `#EEF1F1` | Franjas de sección |
| Fondo base | Blanco | `#FFFFFF` | Página y fichas de producto |
| Texto secundario | Humo | `#5F686A` | Descripciones, ayudas |
| Bordes | Línea | `#D7DEDE` | Separadores |
| Positivo | Verde | `#2E6F4E` | "Envío gratis", stock |

**El gris no es un gris neutro.** Tiene un sesgo hacia el cian. Es un detalle que
casi nadie nota conscientemente, pero hace que toda la paleta se lea como un sistema
y no como colores sueltos.

> ⟨COMPLETAR⟩ **Estos son los colores propuestos, no los del logo real.**
> No pude descargar el logo (Instagram, Facebook y TikTok están bloqueados en esta
> sesión). Abrí el logo, sacá los 2 colores dominantes y reemplazá **Tinta** y
> **Cian** en [`brand/tokens.css`](../brand/tokens.css). El resto de la paleta sigue
> funcionando alrededor de esos dos.

**Contraste:** cian sobre blanco y blanco sobre tinta pasan AA para texto normal.
Si cambiás el acento por algo más claro (amarillo, celeste pastel), el texto del
botón tiene que pasar a Tinta, no quedar blanco.

---

## Tipografías

| Uso | Fuente | Peso | Tamaño de referencia |
|---|---|---|---|
| Títulos y botones | **Archivo** | 700 / 800 | Hero 48px · Sección 30px · Ficha 18px |
| Texto y descripciones | **Work Sans** | 400 | 16px, interlineado 1.65 |
| Precio | Archivo | 700 | 20px |

**Archivo** es una grotesca industrial: tiene la contundencia de un cartel impreso.
Le da a la tienda la voz de un taller, no la de un catálogo genérico.

Alternativas equivalentes si no aparecen en tu panel: **Oswald** (títulos) y
**Barlow** (texto).

Regla simple: **dos fuentes, tres tamaños por pantalla.** Nada más.

---

## Logo

| Versión | Para qué | Formato |
|---|---|---|
| Horizontal, fondo claro | Header de la tienda | PNG transparente, alto 120px |
| Horizontal en blanco | Footer y fondos oscuros | PNG transparente |
| Isotipo cuadrado | Favicon, redes, WhatsApp | PNG 512×512 |

- Aire mínimo alrededor del logo: la altura de la letra "T".
- Nunca sobre una foto con detalle: si va sobre foto, poné una capa oscura al 40 %.
- Nunca deformado, rotado ni con sombra.

---

## Medidas de imagen para Tiendanube

| Elemento | Medida | Peso máx. | Notas |
|---|---|---|---|
| Logo header | 400 × 120 px | 100 KB | PNG transparente |
| Favicon | 512 × 512 px | 50 KB | Isotipo solo |
| Banner principal (escritorio) | 1920 × 800 px | 400 KB | Dejá el tercio izquierdo despejado para el texto |
| Banner principal (celular) | 900 × 1200 px | 300 KB | Vertical, texto centrado |
| Banner secundario | 1200 × 600 px | 250 KB | |
| Foto de producto | 1200 × 1200 px | 300 KB | **Cuadrada, siempre.** Es lo que más ordena la grilla |
| Imagen de categoría | 800 × 800 px | 200 KB | |
| Compartir en redes (OG) | 1200 × 630 px | 300 KB | Logo + frase de marca |

**Fotos de producto — las 4 tomas de cada artículo:**

1. La prenda entera, plana o sobre percha, fondo claro parejo.
2. **Detalle macro del bordado o del estampado.** Esta es la que vende: se ve el hilo.
3. La prenda puesta por una persona, en contexto real.
4. Una variante de color, para que se entienda que hay opciones.

Truco de taller: sacá todas las fotos en el mismo lugar y a la misma hora del día.
Una grilla pareja parece más cara que las fotos sueltas, aunque el producto sea el mismo.
