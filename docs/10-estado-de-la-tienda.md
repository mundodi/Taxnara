# 10 · Estado de la tienda

Registro de lo que quedó **efectivamente cargado** en la Tiendanube de Taxnara.

- **Tienda:** [taxnara.mitiendanube.com](https://taxnara.mitiendanube.com)
- **Fecha de carga:** 27 de agosto de 2026
- **Modo:** catálogo de exhibición — **con imagen y sin precio**
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

### 22 productos, 148 variantes — todos con imagen y sin precio

Cada uno con **imagen, descripción, SEO, marca, peso, medidas, SKU y categorías**.
El peso y las medidas están cargados en cada variante para que el cálculo de envío
funcione bien el día que se activen las ventas.

| Producto | Variantes | Precio |
|---|---|---|
| Remera de algodón personalizada | 15 | Consultar |
| Remera oversize personalizada | 12 | Consultar |
| Buzo canguro personalizado | 15 | Consultar |
| Buzo cuello redondo personalizado | 15 | Consultar |
| Campera rompevientos bordada | 15 | Consultar |
| Chomba piqué con logo bordado | 15 | Consultar |
| Gorra de gabardina bordada | 4 | Consultar |
| Kit egresados — buzo bordado + nombre | 15 | Consultar |
| Taza de cerámica sublimada | 1 | Consultar |
| Taza mágica personalizada | 1 | Consultar |
| Almohadón sublimado 40×40 | 3 | Consultar |
| Mouse pad personalizado | 2 | Consultar |
| Botella deportiva personalizada | 3 | Consultar |
| Termo de acero personalizado | 4 | Consultar |
| Set de regalería empresarial | 3 | Consultar |
| Indumentaria laboral bordada | 4 | Consultar |
| Camiseta de club sublimada | 8 | Consultar |
| Bordado de logo (sobre tu prenda) | 3 | Consultar |
| Estampado DTF (sobre tu prenda) | 3 | Consultar |
| Vinilo textil | 3 | Consultar |
| Diseño y vectorización de logo | 3 | Consultar |
| **Seña de pedido personalizado** | 1 | **$20.000** ⟨revisar⟩ |

**Por qué sin precio.** Taxnara trabaja a medida: el precio real depende de la
cantidad, la técnica y el diseño. Publicar una lista fija genera reclamos, no ventas.
Como catálogo de exhibición, la tienda se puede mostrar hoy sin inventar números.

Cada descripción termina con la misma línea: *"Precio a consultar. Escribinos por
WhatsApp con la cantidad y el diseño y te pasamos el presupuesto en el día."*

**La única excepción es la seña**, que sí tiene precio porque es un medio de pago,
no un artículo de vitrina: es lo que permite cobrar un anticipo de un pedido ya
presupuestado. Lleva el tag `REVISAR MONTO`.

### Las imágenes

Los 22 productos tienen imagen de exhibición: ilustración limpia sobre fondo blanco,
1200×1200, en un solo estilo, con **el punto de personalización marcado en cian**
(dónde iría el logo del cliente).

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
