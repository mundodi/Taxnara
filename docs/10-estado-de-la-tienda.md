# 10 · Estado de la tienda

Registro de lo que quedó **efectivamente cargado** en la Tiendanube de Taxnara.

- **Tienda:** [taxnara.mitiendanube.com](https://taxnara.mitiendanube.com)
- **Fecha de carga:** 27 de agosto de 2026
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

### 22 productos, 148 variantes

Cada uno con **descripción, SEO, marca, peso, medidas, SKU y categorías**.
El peso y las medidas están cargados en cada variante para que el cálculo de
envío de Correo Argentino funcione bien desde el primer pedido.

| Producto | Variantes | Precio |
|---|---|---|
| Remera de algodón personalizada | 15 | $24.900 |
| Remera oversize personalizada | 12 | $32.900 |
| Buzo canguro personalizado | 15 | $58.900 |
| Buzo cuello redondo personalizado | 15 | $54.900 |
| Campera rompevientos bordada | 15 | $79.900 |
| Chomba piqué con logo bordado | 15 | $44.900 |
| Gorra de gabardina bordada | 4 | $21.900 |
| Kit egresados — buzo bordado + nombre | 15 | $69.900 |
| Taza de cerámica sublimada | 1 | $9.900 |
| Taza mágica personalizada | 1 | $13.900 |
| Almohadón sublimado 40×40 | 3 | $18.900 |
| Mouse pad personalizado | 2 | $8.900 – $16.900 |
| Botella deportiva personalizada | 3 | $19.900 |
| Termo de acero personalizado | 4 | $38.900 – $46.900 |
| Set de regalería empresarial | 3 | $34.900 – $58.900 |
| Indumentaria laboral bordada | 4 | **Consultar** |
| Camiseta de club sublimada | 8 | **Consultar** |
| Bordado de logo (sobre tu prenda) | 3 | $7.900 – $24.900 |
| Estampado DTF (sobre tu prenda) | 3 | $6.900 – $17.900 |
| Vinilo textil | 3 | $5.900 – $12.900 |
| Diseño y vectorización de logo | 3 | $19.900 – $79.900 |
| Seña de pedido personalizado | 1 | $20.000 |

Los dos productos que se venden siempre por cantidad (**indumentaria laboral** y
**camiseta de club**) quedaron **sin precio a propósito**: la tienda los muestra
como *"Consultar"*. Poner un número ahí donde el precio real depende de la
cantidad y del diseño genera más reclamos que ventas.

---

## ⚠️ Todo está DESPUBLICADO

Los 22 productos están cargados como **ocultos**. Nadie los ve ni los puede
comprar hasta que vos los publiques desde el panel.

**Es a propósito**, por dos razones:

1. **Los precios son de referencia, no son tuyos.** Los puse para que la carga no
   quedara vacía. Todos los productos tienen el tag **`REVISAR PRECIO`**: filtrá
   por ese tag en Productos y vas a ver exactamente cuáles te falta actualizar.
   Borrá el tag a medida que los cargues.
2. **Ningún producto tiene foto todavía.** Un producto publicado sin foto vende
   menos que un producto que no existe.

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
| Cargar las fotos de producto | No tengo los archivos | Productos → cada producto |
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
