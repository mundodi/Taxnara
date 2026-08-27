# 10 · Estado de la tienda

Registro de lo que quedó **efectivamente cargado** en la Tiendanube de Taxnara.

- **Tienda:** [taxnara.mitiendanube.com](https://taxnara.mitiendanube.com)
- **Fecha de carga:** 27 de agosto de 2026
- **Modo:** catálogo con imagen y **precio cargado** (ver [doc 12](12-precios-y-mercado.md))
- **Medios de pago detectados:** Pago Nube activo (tarjeta de crédito, débito,
  transferencia y billetera)

---

## ✅ Cargado

### 21 categorías, con jerarquía

```
Indumentaria          Personalizados            Sublimados            Servicios
├ Remeras             ├ Empresas y comercios    ├ Tazas               ├ Bordado
├ Buzos y hoodies     ├ Egresados               ├ Almohadones         ├ Estampado (serigrafía / DTF)
├ Camperas y rompev.  ├ Clubes y equipos        ├ Mouse pads          ├ Vinilo textil
├ Chombas y camisas   └ Eventos y regalería     └ Botellas y termos   └ Diseño gráfico
└ Gorras
```

Todas visibles. La categoría *Ofertas* del plan no se creó: sin promociones
activas, una categoría vacía en el menú resta más de lo que suma. Se crea el día
que haya algo adentro.

### 22 productos, 148 variantes — con imagen y precio

Cada uno con **imagen, descripción, SEO, marca, peso, medidas, SKU y categorías**.
El peso y las medidas están cargados en cada variante para que el cálculo de envío
funcione bien el día que se activen las ventas.

| Producto | Variantes |
|---|---|
| Remera de algodón personalizada | 15 |
| Remera oversize personalizada | 12 |
| Buzo canguro personalizado | 15 |
| Buzo cuello redondo personalizado | 15 |
| Campera rompevientos bordada | 15 |
| Chomba piqué con logo bordado | 15 |
| Gorra de gabardina bordada | 4 |
| Kit egresados — buzo bordado + nombre | 15 |
| Taza de cerámica sublimada | 1 |
| Taza mágica personalizada | 1 |
| Almohadón sublimado 40×40 | 3 |
| Mouse pad personalizado | 2 |
| Botella deportiva personalizada | 3 |
| Termo de acero personalizado | 4 |
| Set de regalería empresarial | 3 |
| Indumentaria laboral bordada | 4 |
| Camiseta de club sublimada | 8 |
| Bordado de logo (sobre tu prenda) | 3 |
| Estampado DTF (sobre tu prenda) | 3 |
| Vinilo textil | 3 |
| Diseño y vectorización de logo | 3 |
| Seña de pedido personalizado | 1 |

**Los precios están en [`12-precios-y-mercado.md`](12-precios-y-mercado.md)**, con la
comparación contra la competencia y el método para validar tu margen.


Cada descripción cierra indicando **qué incluye el precio** y la **escala de descuento
por cantidad** (−5% desde 10 u., −10% desde 25, −15% desde 50).

La **seña** es el único producto que no es un artículo de venta: cada unidad equivale a
$20.000 de anticipo sobre un pedido ya presupuestado. Lleva el tag `REVISAR MONTO`.

### Las imágenes

Los 22 productos tienen imagen: ilustración limpia sobre fondo blanco, 1200×1200, en un
solo estilo, con **el punto de personalización marcado en cian** (dónde iría el logo).

Además hay **27 versiones en los colores reales** de cada prenda en
[`img/productos-color/`](../img/productos-color) — todavía **no están cargadas en la
tienda**: se suben desde el panel arrastrándolas a cada producto.

Las genera [`img/generar_imagenes.mjs`](../img/generar_imagenes.mjs) y quedan en
[`img/productos/`](../img/productos). Tiendanube las descargó y las rehospedó en su
propio CDN, así que la tienda ya no depende del repositorio.

> **Son provisorias.** Sirven para que el catálogo no se vea vacío y para que la
> grilla quede pareja. **Reemplazalas por fotos reales del taller** a medida que las
> tengas: una foto de una prenda terminada vende muchísimo más que una ilustración.

---


## ⚠️ Todo está DESPUBLICADO

Los 22 productos están cargados como **ocultos**. Nadie los ve ni los puede
comprar hasta que vos los publiques desde el panel.

**Es a propósito**, por dos razones:

1. **Falta tu logo y el diseño de la tienda.** Publicar el catálogo antes de cargar
   el logo, los colores y los banners da una primera impresión pobre.
2. **Las imágenes son ilustraciones, no fotos.** Sirven para arrancar, pero conviene
   ir reemplazándolas por fotos reales.
3. **Faltan los datos de contacto** (WhatsApp, mail, CUIT). Sin WhatsApp, un catálogo
   sin precios no tiene por dónde convertir.

Todos los productos llevan el tag **`exhibicion`**: filtrá por ese tag en el panel
para verlos juntos.

### Para publicar

Panel → **Productos** → seleccionar → **Publicar**.
Recomendación: publicá de a tandas, a medida que cada producto tiene precio real
y sus 4 fotos. No hace falta esperar a tenerlos todos.

---

## ❌ Lo que no pude hacer desde acá

| Qué | Por qué | Dónde se hace |
|---|---|---|
| Subir el logo y los banners | No tengo los archivos (Instagram y Facebook están bloqueados en esta sesión) | Diseño → Personalizar |
| Cargar colores y tipografías | Se configuran en el editor visual, no por API | Diseño → Personalizar |
| Crear las páginas (Nosotros, FAQ, legales) | No hay API de páginas en esta conexión | Mi tienda online → Páginas |
| Configurar envíos | El endpoint de envíos devolvió error 405 | Configuración → Formas de envío |
| Cargar **fotos reales** de producto | No tengo los archivos; quedaron ilustraciones provisorias | Productos → cada producto |
| Datos fiscales, CUIT, WhatsApp | No los tengo | Configuración → Datos del negocio |

Todo eso está escrito y listo para pegar en los docs `01` a `09`.

---

## Los IDs, por si hacen falta

Guardalos si alguna vez querés automatizar algo más.

**Categorías raíz:** Indumentaria `40639151` · Personalizados `40639152` ·
Sublimados `40639153` · Servicios `40639154`

**Subcategorías:** Remeras `40639156` · Buzos y hoodies `40639157` ·
Camperas y rompevientos `40639158` · Chombas y camisas `40639159` ·
Gorras `40639161` · Empresas y comercios `40639162` · Egresados `40639164` ·
Clubes y equipos `40639165` · Eventos y regalería `40639166` · Tazas `40639169` ·
Almohadones `40639170` · Mouse pads `40639171` · Botellas y termos `40639172` ·
Bordado `40639174` · Estampado `40639175` · Vinilo textil `40639178` ·
Diseño gráfico `40639179`
