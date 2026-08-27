# 01 · Identidad de marca

> **Corrección importante (27/08/2026).** La primera versión de este documento proponía
> una paleta inventada —negro y cian sobre papel, "tintas de cuatricromía"— porque el
> proxy de red bloqueaba Instagram y no pude ver el logo. **Era equivocada.**
> Ahora los colores están **medidos sobre el logo real**, píxel a píxel.

---

## La marca

Taxnara no es un taller sobrio. **Es una jirafa hipster con lentes corazón.**

El logo es un dibujo a mano alzada de una jirafa con anteojos rosa en forma de corazón,
lentes amarillos y moño a lunares, con "**Taxnara!**" escrito en marcador fucsia grueso.
Atrás, las manchas de la jirafa en celeste.

Eso define todo: es una marca **alegre, cálida y con humor**, no una imprenta industrial.
La web y la tienda tienen que sonar igual.

**Frase de marca:** *Identidad visual para tus productos.*
**Tono:** de vos, cercano, con energía. El oficio se demuestra en la terminación, no en
la solemnidad.

---

## Paleta

Los valores salen de analizar el logo y la placa de horarios de Instagram, no de elegir
"algo parecido":

| Rol | Nombre | HEX | De dónde sale | Dónde va |
|---|---|---|---|---|
| Marca | **Fucsia** | `#E6028B` | El "Taxnara!" y el fondo de las placas | Hero, títulos grandes, fondos de marca |
| Botones | Fucsia botón | `#D1017E` | Fucsia oscurecido para contraste | Botones y links |
| Hover | Fucsia oscuro | `#B00169` | | Hover de botones |
| Acento | **Amarillo** | `#F4C721` | Los lentes corazón, el moño, la tarjeta | Bloques destacados, CTA sobre fucsia |
| Acento | **Celeste** | `#1CA2DE` | Las manchas de la jirafa | Detalles, motivo de fondo |
| Texto | Tinta | `#16161A` | El trazo del dibujo | Textos y línea |
| Fondo suave | Papel | `#FDF3F8` | Blanco con un susurro de fucsia | Franjas de sección |
| Secundario | Humo | `#6B6470` | | Descripciones |
| Bordes | Línea | `#EBDFE6` | | Separadores |

### ⚠️ Reglas de contraste — están medidas, no son opinión

| Combinación | Ratio | Veredicto |
|---|---|---|
| Tinta sobre **amarillo** | 11.20 | ✅ |
| Blanco sobre **amarillo** | **1.61** | ❌ **Ilegible. Nunca.** |
| Tinta sobre **celeste** | 6.25 | ✅ |
| Blanco sobre **celeste** | **2.89** | ❌ **No usar.** |
| Blanco sobre fucsia `#E6028B` | 4.42 | ⚠️ Solo títulos grandes |
| Blanco sobre fucsia `#D1017E` | 5.23 | ✅ Botones y texto normal |

**En criollo: sobre amarillo y celeste va SIEMPRE texto negro.** Es el error más fácil
de cometer con esta paleta y el que más arruina una placa.

---

## Logo

El archivo está en [`img/marca/logo-taxnara.png`](../img/marca/logo-taxnara.png):
recortado en círculo, con el fondo transparente y **sin el botón de corazón de Instagram**
que traía la captura.

- **Tamaño mínimo: 56 px.** Por debajo, el dibujo de la jirafa se empasta y no se lee.
- Va siempre **sobre fondo claro**. Sobre fucsia o tinta, dejale el círculo blanco.
- Nunca deformado ni recoloreado.

> ⟨COMPLETAR⟩ Si tenés el **archivo original** del logo (AI, PDF o PNG en alta), pasámelo:
> el que está en el repo salió de una captura de pantalla y se nota en los bordes.
> Para imprimir en grande o bordar hace falta el vector.

---

## Tipografías

| Uso | Fuente | Peso |
|---|---|---|
| Títulos y botones | **Poppins** | 700 / 800 |
| Texto | **Nunito Sans** | 400 / 600 |

El "Taxnara!" del logo es un marcador grueso y redondeado. Poppins acompaña esa energía
sin competirle. Los bordes redondeados de 14 px siguen la misma lógica: **la marca es
redonda, no angulosa.**

---

## El motivo de las manchas

Las manchas de jirafa aparecen en el logo y en las placas de Instagram. Están reproducidas
en SVG y se usan como textura de fondo (en el hero y en los bloques destacados).

Es lo que hace que la web se lea como **parte de la misma marca** y no como algo pegado
aparte. Usalas siempre a baja opacidad: son textura, no protagonista.

---

## Medidas de imagen para Tiendanube

| Elemento | Medida | Peso máx. |
|---|---|---|
| Logo header | 400 × 120 px | 100 KB |
| Favicon | 512 × 512 px | 50 KB |
| Banner principal (escritorio) | 1920 × 800 px | 400 KB |
| Banner principal (celular) | 900 × 1200 px | 300 KB |
| Foto de producto | 1200 × 1200 px | 300 KB |
| Compartir en redes (OG) | 1200 × 630 px | 300 KB |

**Fotos de producto — las 4 tomas:** prenda entera · **detalle macro del bordado** ·
puesta sobre una persona · la grilla de colores. El detalle macro es la que justifica
el precio; está explicado en [`12-precios-y-mercado.md`](12-precios-y-mercado.md).
