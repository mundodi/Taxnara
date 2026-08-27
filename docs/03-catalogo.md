# 03 · Catálogo

**Estos 22 productos y sus 148 variantes ya están cargados en la tienda.**
Ver [`10-estado-de-la-tienda.md`](10-estado-de-la-tienda.md).

Este documento explica cómo está pensado el catálogo y cómo fijar los precios.
El CSV de [`import/`](../import/productos-taxnara.csv) es el mismo contenido como
respaldo: **no hace falta importarlo**, sirve si alguna vez querés rehacer la
carga desde cero o llevártela a otra plataforma.

---

## ⚠️ Si alguna vez importás el CSV — leé esto

Tiendanube cambia el formato del CSV entre versiones y según el idioma de la
cuenta. **Hacé esto primero, siempre:**

1. Panel → **Productos → Importar/Exportar → Exportar**. Bajás el CSV de tu tienda
   (aunque esté vacía, viene con los encabezados correctos para tu cuenta).
2. Abrí ese archivo y el nuestro, y compará la fila 1.
3. Si las columnas coinciden → importá el nuestro directo.
4. Si no coinciden → pegá nuestros datos dentro del archivo que bajaste vos,
   columna por columna. Cinco minutos de trabajo que te ahorran una importación fallida.

**Abrilo siempre con Google Sheets o LibreOffice, en UTF-8.** Excel en Windows
suele romper los acentos y la ñ.

---

## Cómo está armado el CSV

- **Una fila por variante.** Una remera con 5 talles × 3 colores son 15 filas
  que comparten el mismo *Identificador de URL* — así Tiendanube las agrupa
  en un solo producto.
- **La descripción y el SEO van solo en la primera fila** de cada producto.
  Es el comportamiento que espera el importador; no los repitas.
- **Todo entra con `Mostrar en tienda = NO`**, o sea como borrador.
  Publicás cada producto cuando le cargaste las fotos. Un producto sin foto
  publicado hace más daño que un producto que todavía no existe.
- Los SKU siguen el formato `TX-PRODUCTO-TALLE-COLOR`.

## Cambiar los precios

En la tienda, los precios se editan producto por producto en el panel:
filtrá por el tag **`REVISAR PRECIO`** y vas a ver exactamente cuáles faltan.

Para mantener el CSV de respaldo al día, no lo edites a mano: abrí
[`import/generar_csv.py`](../import/generar_csv.py), cambiá los números del
diccionario `PRECIOS` y corré:

```bash
python3 import/generar_csv.py
```

El archivo se regenera con todas las variantes actualizadas.

> ⟨COMPLETAR⟩ **Los precios cargados son de relleno, no son cotizaciones de Taxnara.**
> Están ahí para que el catálogo no quedara vacío. Los 22 productos llevan el tag
> `REVISAR PRECIO`; los dos que se venden siempre por cantidad
> (*indumentaria laboral* y *camiseta de club*) quedaron **sin precio**, mostrando
> "Consultar", y llevan el tag `A PRESUPUESTAR`.
> Borrá el tag a medida que cargues los precios reales.

---

## Los 22 productos

### Indumentaria — la base del negocio
| Producto | Variantes | Nota |
|---|---|---|
| Remera de algodón personalizada | 5 talles × 3 colores | El producto de entrada |
| Remera oversize personalizada | 4 talles × 3 colores | Para estampados grandes |
| Buzo canguro personalizado | 5 talles × 3 colores | **El más pedido** |
| Buzo cuello redondo personalizado | 5 talles × 3 colores | El de empresas |
| Campera rompevientos bordada | 5 talles × 3 colores | Ticket alto |
| Chomba piqué con logo bordado | 5 talles × 3 colores | Ropa de trabajo |
| Gorra de gabardina bordada | 4 colores | Mejor margen del catálogo |

### Sublimados — ticket bajo, compra impulsiva
| Producto | Variantes |
|---|---|
| Taza de cerámica sublimada | — |
| Taza mágica personalizada | — |
| Almohadón sublimado 40×40 | 3 tipos de diseño |
| Mouse pad personalizado | 2 tamaños |
| Botella deportiva personalizada | 3 colores |
| Termo de acero personalizado | 2 capacidades × 2 colores |

### Combos — donde está la plata
| Producto | Variantes | Nota |
|---|---|---|
| Kit egresados (buzo + bordado + nombre) | 5 talles × 3 colores | Mínimo 15 u. |
| Indumentaria laboral bordada | 4 prendas | Sin precio → "Consultar" |
| Camiseta de club sublimada | 8 talles | Sin precio → "Consultar". Mínimo 10 u. |
| Set de regalería empresarial | 3 combos | Fin de año |

### Servicios — "traé tu prenda"
| Producto | Variantes |
|---|---|
| Bordado de logo | 3 tamaños |
| Estampado DTF | 3 tamaños |
| Vinilo textil | 3 aplicaciones |
| Diseño y vectorización de logo | 3 servicios |
| **Seña de pedido personalizado** | — |

---

## Cómo poner los precios (si no tenés una lista armada)

Fórmula de taller, por unidad:

```
Precio = (costo de la prenda + costo de la personalización + tiempo de máquina)
         × 2,2   ← cubre desperdicio, fallas, envío del insumo y tu ganancia
```

Después redondeá para arriba, a un número que termine en 900.

Tres reglas que valen más que la fórmula:

1. **El diseño no es gratis, ni cuando lo regalás.** Si no lo cobrás por separado,
   metelo en el precio de la prenda. El "te lo diseño sin cargo" tiene que estar pago.
2. **La escala baja el precio unitario, no el trabajo.** De 1 a 10 unidades el
   precio unitario cae poco; recién de 50 en adelante cambia de verdad.
3. **Un pedido con muchos colores de hilo o muchos cambios de bastidor cuesta más.**
   Si el logo tiene 7 colores, no puede salir lo mismo que uno de 2.

## Escalas de descuento sugeridas

Se cargan en **Marketing → Descuentos** o se muestran como tabla en la descripción.

| Cantidad | Descuento |
|---|---|
| 10 – 24 u. | 5 % |
| 25 – 49 u. | 10 % |
| 50 – 99 u. | 15 % |
| 100 u. o más | A presupuestar |

## Tabla de talles (pegala en cada producto de indumentaria)

Medidas en cm, prenda apoyada plana.

| Talle | Ancho (axila a axila) | Largo (hombro a base) |
|---|---|---|
| S | 48 | 68 |
| M | 51 | 71 |
| L | 54 | 74 |
| XL | 57 | 76 |
| XXL | 60 | 78 |

> ⟨COMPLETAR⟩ Verificá estas medidas contra tus prendas reales antes de publicarlas.
> Los talles cambian según el proveedor, y una tabla equivocada es la primera
> causa de cambios y devoluciones.
