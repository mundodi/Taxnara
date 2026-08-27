#!/usr/bin/env python3
"""
Genera import/productos-taxnara.csv para importar en Tiendanube.

USO:
    python3 import/generar_csv.py

PARA CAMBIAR PRECIOS: editá el diccionario PRECIOS de abajo y volvé a correrlo.
Es un solo número por producto; el script se encarga del resto de las filas.

IMPORTANTE: antes de importar, exportá un CSV vacío desde tu propio panel
(Productos -> Importar/Exportar -> Exportar) y comprobá que las columnas
coincidan con COLUMNAS. Tiendanube cambia el formato entre versiones y según
el idioma de la cuenta; si difiere, pegá los datos en el archivo que bajaste vos.
"""

import csv
import os

# ---------------------------------------------------------------------------
# PRECIOS DE REFERENCIA EN ARS — ⟨COMPLETAR⟩
# NO son cotizaciones de Taxnara. Son valores de arranque para que la
# importación no falle. Reemplazalos por los precios reales antes de publicar.
# ---------------------------------------------------------------------------
PRECIOS = {
    # Sincronizado con la tienda el 27/08/2026. Los valores salen del
    # relevamiento de mercado de docs/12-precios-y-mercado.md.
    # int  -> mismo precio para todas las variantes
    # dict -> precio por valor de la PRIMERA propiedad
    # None -> sin precio; la tienda muestra "Consultar"
    "remera-algodon-personalizada":      22900,
    "remera-oversize-personalizada":     29900,
    "buzo-canguro-personalizado":        52900,
    "buzo-cuello-redondo-personalizado": 42900,
    "campera-rompevientos-bordada":      74900,
    "chomba-pique-bordada":              38900,
    "gorra-gabardina-bordada":           16900,
    "taza-ceramica-sublimada":            8900,
    "taza-magica-sublimada":             12900,
    "almohadon-sublimado-40x40":         17900,
    "mouse-pad-personalizado":           {"Estándar 22×18": 7900, "Gamer 70×30": 15900},
    "botella-deportiva-personalizada":   18900,
    "termo-acero-personalizado":         {"750 ml": 28900, "1 litro": 35900},
    "kit-egresados-buzo-bordado":        52900,
    "indumentaria-laboral-bordada":      {"Chomba": 36900, "Camisa": 42900,
                                          "Buzo": 46900, "Campera": 69900},
    "camiseta-club-sublimada":           {"8": 21900, "10": 21900, "12": 23900, "14": 23900,
                                          "S": 24900, "M": 24900, "L": 24900, "XL": 24900},
    "set-regaleria-empresarial":         {"Taza + mouse pad": 15900,
                                          "Termo + botella": 43900,
                                          "Taza + almohadón": 24900},
    "bordado-de-logo":                   {"Hasta 8 cm": 6900, "Hasta 15 cm": 11900,
                                          "Espalda completa": 21900},
    "estampado-dtf":                     {"A5": 5900, "A4": 8900, "A3": 14900},
    "vinilo-textil":                     {"Nombre o número": 4900, "Logo simple": 7900,
                                          "Logo dos colores": 11900},
    "diseno-y-vectorizacion-de-logo":    {"Vectorizar logo existente": 17900,
                                          "Rediseño de logo": 39900,
                                          "Logo desde cero": 69900},
    "sena-pedido-personalizado":         20000,
}

# Columnas del export estándar de Tiendanube en español (Argentina).
COLUMNAS = [
    "Identificador de URL", "Nombre", "Categorías",
    "Nombre de propiedad 1", "Valor de propiedad 1",
    "Nombre de propiedad 2", "Valor de propiedad 2",
    "Nombre de propiedad 3", "Valor de propiedad 3",
    "Precio", "Precio promocional", "Peso", "Alto", "Ancho", "Profundidad",
    "Stock", "SKU", "Código de barras", "Mostrar en tienda", "Envío sin cargo",
    "Descripción", "Tags", "Título para SEO", "Descripción para SEO",
    "Marca", "Producto Físico", "MPN (Número de pieza del fabricante)",
    "Sexo", "Rango de edad", "Costo",
]

TALLES_ADULTO = ["S", "M", "L", "XL", "XXL"]
COLORES_BASE = ["Blanco", "Negro", "Gris melange"]
COLORES_BUZO = ["Negro", "Gris melange", "Beige"]

MARCA = "Taxnara Diseños"

# (identificador, nombre, categorías, propiedades, peso, dims, stock, descripción, tags, seo_title, seo_desc)
# propiedades = lista de (nombre, [valores]) — vacía si el producto no tiene variantes
PRODUCTOS = [
    # ---------------------------------------------------------------- Indumentaria
    (
        "remera-algodon-personalizada",
        "Remera de algodón personalizada",
        "Indumentaria > Remeras, Personalizados",
        [("Talle", TALLES_ADULTO), ("Color", COLORES_BASE)],
        0.20, (2, 30, 25), 30,
        "<p>Remera de algodón peinado 24/1, cuello reforzado y costuras dobles. "
        "La base que usamos para la mayoría de los trabajos del taller: aguanta lavados "
        "sin deformarse y toma bien tanto el estampado como el bordado.</p>"
        "<p><strong>Personalizala como quieras:</strong> tu logo, un nombre, el escudo del club "
        "o un diseño propio. Elegí la técnica al finalizar la compra y mandanos el archivo por WhatsApp.</p>"
        "<ul><li>Técnicas disponibles: bordado, DTF, serigrafía o vinilo textil</li>"
        "<li>Talles S al XXL — ver tabla de talles en la ficha</li>"
        "<li>Producción: 5 a 7 días hábiles desde la aprobación del diseño</li>"
        "<li>Desde 10 unidades, precio por cantidad</li></ul>",
        "remera, personalizada, algodon, bordado, estampado, exhibicion",
        "Remeras personalizadas con tu logo | Taxnara Diseños",
        "Remeras de algodón peinado personalizadas con bordado o estampado. Envíos a todo el país desde Catamarca. Pedidos por unidad o por cantidad.",
    ),
    (
        "remera-oversize-personalizada",
        "Remera oversize personalizada",
        "Indumentaria > Remeras, Personalizados",
        [("Talle", ["S", "M", "L", "XL"]), ("Color", COLORES_BASE)],
        0.26, (2, 32, 27), 20,
        "<p>Remera oversize de algodón pesado, hombro caído y caída recta. "
        "Es la que mejor funciona para estampados grandes en el frente o en la espalda.</p>"
        "<p>Ideal para promociones de egresados, marcas de indumentaria y merchandising de bandas o eventos.</p>"
        "<ul><li>Algodón pesado, corte unisex</li><li>Estampado DTF hasta A3</li>"
        "<li>Producción: 5 a 7 días hábiles</li></ul>",
        "remera, oversize, estampado, dtf, exhibicion",
        "Remeras oversize personalizadas | Taxnara Diseños",
        "Remeras oversize de algodón pesado con estampado DTF a todo color. Diseño propio o el tuyo. Envíos a todo el país.",
    ),
    (
        "buzo-canguro-personalizado",
        "Buzo canguro personalizado",
        "Indumentaria > Buzos y hoodies, Personalizados",
        [("Talle", TALLES_ADULTO), ("Color", COLORES_BUZO)],
        0.62, (6, 38, 30), 18,
        "<p>Buzo canguro de frisa perchada, con capucha forrada, bolsillo canguro y puños elastizados. "
        "Es nuestro producto más pedido para egresados y para equipos.</p>"
        "<p>Se puede bordar el logo chico en el pecho y estampar el diseño grande en la espalda: "
        "esa combinación es la que mejor queda y la que más nos piden.</p>"
        "<ul><li>Frisa perchada, interior suave</li><li>Bordado en pecho + estampado en espalda</li>"
        "<li>Nombres individuales sin costo extra desde 15 unidades</li>"
        "<li>Producción: 7 a 10 días hábiles</li></ul>",
        "buzo, canguro, hoodie, egresados, bordado, exhibicion",
        "Buzos canguro personalizados para egresados y equipos | Taxnara",
        "Buzos canguro de frisa con bordado y estampado personalizado. Nombres individuales incluidos por cantidad. Taxnara Diseños, Catamarca.",
    ),
    (
        "buzo-cuello-redondo-personalizado",
        "Buzo cuello redondo personalizado",
        "Indumentaria > Buzos y hoodies, Personalizados",
        [("Talle", TALLES_ADULTO), ("Color", COLORES_BUZO)],
        0.55, (6, 36, 30), 15,
        "<p>Buzo de frisa con cuello redondo, corte clásico y puños elastizados. "
        "Más sobrio que el canguro: es el que eligen las empresas para el equipo de trabajo.</p>"
        "<ul><li>Frisa perchada</li><li>Bordado de logo en pecho izquierdo</li>"
        "<li>Producción: 7 a 10 días hábiles</li></ul>",
        "buzo, cuello redondo, empresas, bordado, exhibicion",
        "Buzos cuello redondo con logo bordado | Taxnara Diseños",
        "Buzos de frisa cuello redondo con bordado del logo de tu empresa o institución. Pedidos por cantidad con presupuesto sin cargo.",
    ),
    (
        "campera-rompevientos-bordada",
        "Campera rompevientos bordada",
        "Indumentaria > Camperas y rompevientos, Personalizados > Clubes y equipos",
        [("Talle", TALLES_ADULTO), ("Color", ["Negro", "Azul marino", "Rojo"])],
        0.48, (6, 36, 28), 12,
        "<p>Rompevientos liviano, resistente al agua, con cierre completo y bolsillos laterales. "
        "La prenda que más se ve en la cancha y en la obra.</p>"
        "<p>Bordamos el logo en el pecho y, si querés, el nombre del club o de la empresa en la espalda.</p>"
        "<ul><li>Tela resistente al agua y al viento</li><li>Bordado en pecho incluido</li>"
        "<li>Producción: 10 a 12 días hábiles</li></ul>",
        "campera, rompevientos, club, empresa, bordado, exhibicion",
        "Camperas rompevientos bordadas para clubes y empresas | Taxnara",
        "Rompevientos personalizados con bordado de logo para clubes, equipos y empresas. Producción propia en Saujil, Catamarca.",
    ),
    (
        "chomba-pique-bordada",
        "Chomba piqué con logo bordado",
        "Indumentaria > Chombas y camisas, Personalizados > Empresas y comercios",
        [("Talle", TALLES_ADULTO), ("Color", ["Blanco", "Negro", "Azul marino"])],
        0.24, (3, 32, 26), 20,
        "<p>Chomba de piqué con cuello y puños tejidos, botones a tono. "
        "Es la prenda de trabajo que mejor imagen da: prolija sin ser un uniforme.</p>"
        "<p>El bordado en pecho izquierdo va incluido en el precio.</p>"
        "<ul><li>Piqué de algodón</li><li>Bordado del logo incluido</li>"
        "<li>Desde 6 unidades para empresas</li><li>Producción: 7 a 10 días hábiles</li></ul>",
        "chomba, pique, uniforme, empresa, bordado, exhibicion",
        "Chombas con logo bordado para empresas | Taxnara Diseños",
        "Chombas de piqué con el logo de tu empresa bordado. Ropa de trabajo prolija y duradera. Presupuesto por cantidad sin cargo.",
    ),
    (
        "gorra-gabardina-bordada",
        "Gorra de gabardina bordada",
        "Indumentaria > Gorras, Personalizados",
        [("Color", ["Negro", "Blanco", "Beige", "Azul marino"])],
        0.10, (12, 20, 20), 40,
        "<p>Gorra de gabardina con visera curva y cierre regulable. Talle único.</p>"
        "<p>El bordado frontal queda impecable: es el producto con mejor relación "
        "entre lo que sale y lo que se luce.</p>"
        "<ul><li>Talle único regulable</li><li>Bordado frontal incluido</li>"
        "<li>Producción: 5 a 7 días hábiles</li></ul>",
        "gorra, bordado, merchandising, exhibicion",
        "Gorras personalizadas con logo bordado | Taxnara Diseños",
        "Gorras de gabardina con bordado de tu logo. Talle único regulable. Ideal para merchandising, equipos y comercios.",
    ),
    # ---------------------------------------------------------------- Sublimados
    (
        "taza-ceramica-sublimada",
        "Taza de cerámica sublimada",
        "Sublimados > Tazas",
        [],
        0.45, (12, 12, 10), 50,
        "<p>Taza de cerámica blanca de 11 oz sublimada a todo color, 360°. "
        "El diseño no se despega ni se descascara: queda dentro del esmalte.</p>"
        "<p>Mandanos la foto, el logo o la frase y te enviamos la muestra digital antes de imprimir.</p>"
        "<ul><li>Cerámica blanca 11 oz</li><li>Impresión 360°, apta lavavajillas</li>"
        "<li>Producción: 3 a 5 días hábiles</li><li>Se entrega en caja</li></ul>",
        "taza, sublimacion, regalo, personalizado, exhibicion",
        "Tazas personalizadas con foto o logo | Taxnara Diseños",
        "Tazas de cerámica sublimadas a todo color con tu foto, logo o frase. Muestra digital antes de imprimir. Envíos a todo el país.",
    ),
    (
        "taza-magica-sublimada",
        "Taza mágica personalizada",
        "Sublimados > Tazas",
        [],
        0.48, (12, 12, 10), 25,
        "<p>Taza negra que revela el diseño al cargarse con líquido caliente. "
        "Es el regalo que siempre gana: nadie se lo espera.</p>"
        "<ul><li>Cerámica térmica 11 oz</li><li>El diseño aparece con el calor</li>"
        "<li>Lavado a mano recomendado</li><li>Producción: 3 a 5 días hábiles</li></ul>",
        "taza magica, sublimacion, regalo, exhibicion",
        "Tazas mágicas personalizadas con tu foto | Taxnara Diseños",
        "Taza mágica sublimada: el diseño aparece con el líquido caliente. Personalizada con tu foto o logo. Envíos a todo el país.",
    ),
    (
        "almohadon-sublimado-40x40",
        "Almohadón sublimado 40×40",
        "Sublimados > Almohadones",
        [("Diseño", ["Con foto", "Con logo", "Con frase"])],
        0.35, (10, 40, 40), 20,
        "<p>Almohadón de 40×40 cm con funda sublimada a todo color y relleno incluido.</p>"
        "<ul><li>Funda con cierre, se puede lavar</li><li>Relleno incluido</li>"
        "<li>Producción: 4 a 6 días hábiles</li></ul>",
        "almohadon, sublimado, deco, regalo, exhibicion",
        "Almohadones personalizados con foto | Taxnara Diseños",
        "Almohadones de 40x40 sublimados con tu foto, logo o frase. Relleno incluido. Hechos en Catamarca, envíos a todo el país.",
    ),
    (
        "mouse-pad-personalizado",
        "Mouse pad personalizado",
        "Sublimados > Mouse pads",
        [("Tamaño", ["Estándar 22×18", "Gamer 70×30"])],
        0.15, (1, 22, 18), 35,
        "<p>Mouse pad con base antideslizante y superficie sublimada a todo color.</p>"
        "<p>Muy pedido por empresas para regalar a clientes: es útil, barato y lleva el logo puesto todo el día.</p>"
        "<ul><li>Base de goma antideslizante</li><li>Bordes termosellados</li>"
        "<li>Producción: 3 a 5 días hábiles</li></ul>",
        "mouse pad, sublimado, merchandising, exhibicion",
        "Mouse pads personalizados con tu logo | Taxnara Diseños",
        "Mouse pads sublimados a todo color con tu diseño o el logo de tu empresa. Tamaño estándar y gamer.",
    ),
    (
        "botella-deportiva-personalizada",
        "Botella deportiva personalizada",
        "Sublimados > Botellas y termos, Personalizados > Clubes y equipos",
        [("Color", ["Blanco", "Negro", "Azul"])],
        0.22, (25, 8, 8), 30,
        "<p>Botella deportiva de 750 ml con pico y tapa a rosca, personalizada con tu diseño.</p>"
        "<p>Se pide mucho por equipo, con el nombre de cada jugador.</p>"
        "<ul><li>750 ml, libre de BPA</li><li>Nombre individual sin cargo por cantidad</li>"
        "<li>Producción: 4 a 6 días hábiles</li></ul>",
        "botella, deportiva, club, equipo, exhibicion",
        "Botellas deportivas personalizadas por equipo | Taxnara",
        "Botellas deportivas de 750 ml personalizadas con el escudo del club y el nombre de cada jugador.",
    ),
    (
        "termo-acero-personalizado",
        "Termo de acero personalizado",
        "Sublimados > Botellas y termos, Personalizados > Eventos y regalería",
        [("Capacidad", ["750 ml", "1 litro"]), ("Color", ["Acero", "Negro"])],
        0.60, (32, 10, 10), 15,
        "<p>Termo de acero inoxidable con grabado o sublimado de tu diseño. "
        "El regalo empresarial que más dura y el que la gente realmente usa.</p>"
        "<ul><li>Acero inoxidable doble pared</li><li>Personalización con logo o nombre</li>"
        "<li>Producción: 5 a 8 días hábiles</li></ul>",
        "termo, acero, mate, regalo empresarial, exhibicion",
        "Termos de acero personalizados con tu logo | Taxnara Diseños",
        "Termos de acero inoxidable personalizados con logo o nombre. Regalo empresarial y para eventos. Envíos a todo el país.",
    ),
    # ---------------------------------------------------------------- Combos
    (
        "kit-egresados-buzo-bordado",
        "Kit egresados — buzo bordado + nombre",
        "Personalizados > Egresados, Indumentaria > Buzos y hoodies",
        [("Talle", TALLES_ADULTO), ("Color", COLORES_BUZO)],
        0.65, (6, 38, 30), 0,
        "<p><strong>El combo completo de egresados, precio por persona.</strong></p>"
        "<p>Incluye el buzo canguro de frisa, el diseño de la promo estampado en la espalda, "
        "el nombre de cada egresado bordado y el logo del colegio en el pecho.</p>"
        "<ul><li>Diseño de la promo sin cargo (hasta 2 revisiones)</li>"
        "<li>Nombre individual bordado incluido</li>"
        "<li>Mínimo 15 unidades</li>"
        "<li>Se trabaja con seña del 50% y saldo contra entrega</li>"
        "<li>Producción: 15 a 20 días hábiles desde la aprobación</li></ul>"
        "<p>Escribinos por WhatsApp con la cantidad y te armamos el presupuesto cerrado.</p>",
        "egresados, promo, buzo, bordado, combo, exhibicion",
        "Buzos de egresados personalizados | Taxnara Diseños",
        "Kit de egresados: buzo de frisa con el diseño de la promo, logo del colegio y nombre de cada egresado bordado. Desde 15 unidades.",
    ),
    (
        "indumentaria-laboral-bordada",
        "Indumentaria laboral bordada — combo empresas",
        "Personalizados > Empresas y comercios",
        [("Prenda", ["Chomba", "Camisa", "Buzo", "Campera"])],
        0.40, (6, 36, 28), 0,
        "<p><strong>Vestí a todo tu equipo con la misma imagen.</strong></p>"
        "<p>Elegís la prenda, nos mandás el logo y nosotros nos ocupamos de todo: "
        "digitalizamos el bordado, te mandamos una muestra física para aprobar y recién ahí producimos.</p>"
        "<ul><li>Digitalización del logo para bordado sin cargo en pedidos de 10+ unidades</li>"
        "<li>Muestra física antes de producir el lote</li>"
        "<li>Reposición con el mismo archivo cuando entra personal nuevo</li>"
        "<li>Facturación A o B</li></ul>"
        "<p>Precio por unidad, según prenda y cantidad. Pedí tu presupuesto.</p>",
        "empresas, uniforme, ropa de trabajo, bordado, exhibicion",
        "Ropa de trabajo con logo bordado para empresas | Taxnara",
        "Indumentaria laboral bordada con el logo de tu empresa. Digitalización y muestra física incluidas. Facturación A o B.",
    ),
    (
        "camiseta-club-sublimada",
        "Camiseta de club sublimada",
        "Personalizados > Clubes y equipos",
        [("Talle", ["8", "10", "12", "14", "S", "M", "L", "XL"])],
        0.18, (2, 30, 25), 0,
        "<p>Camiseta deportiva sublimada a todo color: escudo, sponsors, número y nombre. "
        "Diseño 100% a medida, sin límite de colores.</p>"
        "<ul><li>Tela deportiva con secado rápido</li><li>Sublimación total: el diseño no se despega nunca</li>"
        "<li>Talles de niño y de adulto en el mismo pedido</li>"
        "<li>Mínimo 10 unidades</li><li>Producción: 15 a 20 días hábiles</li></ul>",
        "camiseta, club, deportiva, sublimada, exhibicion",
        "Camisetas de club sublimadas a medida | Taxnara Diseños",
        "Camisetas deportivas sublimadas con escudo, sponsors, número y nombre. Talles de niño y adulto. Desde 10 unidades.",
    ),
    (
        "set-regaleria-empresarial",
        "Set de regalería empresarial",
        "Personalizados > Eventos y regalería",
        [("Set", ["Taza + mouse pad", "Termo + botella", "Taza + almohadón"])],
        0.90, (15, 30, 20), 10,
        "<p>Combos armados para regalar a clientes o al equipo, todos con tu logo.</p>"
        "<p>Se entregan en caja lista para dar. Ideal para fin de año, aniversarios y eventos.</p>"
        "<ul><li>Presentación en caja</li><li>Descuento por cantidad desde 20 sets</li>"
        "<li>Producción: 7 a 10 días hábiles</li></ul>",
        "regaleria, empresarial, combo, fin de año, exhibicion",
        "Regalos empresariales personalizados con tu logo | Taxnara",
        "Sets de regalería empresarial con tu logo, listos para entregar en caja. Descuento por cantidad. Envíos a todo el país.",
    ),
    # ---------------------------------------------------------------- Servicios
    (
        "bordado-de-logo",
        "Bordado de logo (sobre tu prenda)",
        "Servicios > Bordado",
        [("Tamaño", ["Hasta 8 cm", "Hasta 15 cm", "Espalda completa"])],
        0.05, (1, 20, 20), 0,
        "<p><strong>Traé tu prenda, nosotros bordamos.</strong> Precio por prenda.</p>"
        "<p>Si es la primera vez que bordamos tu logo, hay un cargo único de digitalización "
        "(se cobra una sola vez; después el archivo queda guardado y las reposiciones salen el precio normal).</p>"
        "<ul><li>Hilo de alta resistencia, no destiñe</li>"
        "<li>Digitalización del logo: una sola vez por diseño</li>"
        "<li>Entrega: 3 a 5 días hábiles</li></ul>",
        "bordado, servicio, logo, exhibicion",
        "Servicio de bordado de logos sobre prendas | Taxnara",
        "Bordamos tu logo sobre tus propias prendas. Precio por prenda, digitalización única. Saujil, Catamarca.",
    ),
    (
        "estampado-dtf",
        "Estampado DTF (sobre tu prenda)",
        "Servicios > Estampado (serigrafía / DTF)",
        [("Tamaño", ["A5", "A4", "A3"])],
        0.05, (1, 30, 25), 0,
        "<p>Estampado DTF a todo color, sin límite de tintas y sin mínimo de cantidad. "
        "Sirve para algodón, poliéster y mezclas.</p>"
        "<ul><li>Full color, incluye degradés y fotos</li><li>Sin cantidad mínima</li>"
        "<li>Entrega: 2 a 4 días hábiles</li></ul>",
        "dtf, estampado, servicio, exhibicion",
        "Estampado DTF a todo color sobre tus prendas | Taxnara",
        "Estampado DTF full color sin cantidad mínima sobre tus propias prendas. Algodón, poliéster y mezclas.",
    ),
    (
        "vinilo-textil",
        "Vinilo textil (números, nombres y logos)",
        "Servicios > Vinilo textil",
        [("Aplicación", ["Nombre o número", "Logo simple", "Logo dos colores"])],
        0.03, (1, 20, 20), 0,
        "<p>Vinilo de corte termoadhesivo: la mejor opción para nombres, números y logos "
        "de uno o dos colores. Terminación mate o brillante.</p>"
        "<ul><li>Mate, brillante, reflectivo o metalizado</li>"
        "<li>Ideal para camisetas de equipo</li><li>Entrega: 2 a 3 días hábiles</li></ul>",
        "vinilo, textil, numeros, nombres, exhibicion",
        "Vinilo textil: nombres, números y logos | Taxnara Diseños",
        "Aplicación de vinilo textil de corte para nombres, números y logos. Terminación mate, brillante o reflectiva.",
    ),
    (
        "diseno-y-vectorizacion-de-logo",
        "Diseño y vectorización de logo",
        "Servicios > Diseño gráfico",
        [("Servicio", ["Vectorizar logo existente", "Rediseño de logo", "Logo desde cero"])],
        0.0, (0, 0, 0), 0,
        "<p>¿Tenés el logo solo en una foto de WhatsApp? Lo pasamos a vectores para que se pueda "
        "bordar, estampar y ampliar sin que se pixele.</p>"
        "<p>Te entregamos los archivos finales en AI, PDF, PNG con fondo transparente y JPG, "
        "en versión color, blanco y negro.</p>"
        "<ul><li>Hasta 2 rondas de correcciones</li><li>Archivos tuyos, para siempre</li>"
        "<li>Entrega: 3 a 7 días hábiles</li></ul>",
        "diseño, logo, vectorizacion, identidad, exhibicion",
        "Diseño y vectorización de logos | Taxnara Diseños",
        "Vectorizamos o diseñamos tu logo para que se pueda bordar y estampar. Entregamos los archivos finales en todos los formatos.",
    ),
    (
        "sena-pedido-personalizado",
        "Seña de pedido personalizado",
        "Personalizados",
        [],
        0.0, (0, 0, 0), 999,
        "<p><strong>Este producto es solo para pedidos ya presupuestados.</strong></p>"
        "<p>Si arreglamos tu pedido por WhatsApp, acá abonás la seña para que entre a producción. "
        "El saldo se paga contra entrega o antes del despacho.</p>"
        "<p>Podés cargar más de una unidad si tu seña es un múltiplo de este monto. "
        "Anotá el número de presupuesto en las notas del pedido.</p>"
        "<p>La seña se descuenta del total. Si el trabajo no se puede hacer por un motivo nuestro, "
        "se reintegra completa.</p>",
        "seña, pedido, presupuesto, exhibicion",
        "Seña de pedido personalizado | Taxnara Diseños",
        "Abonás acá la seña de tu pedido personalizado ya presupuestado para que entre a producción.",
    ),
]


def filas():
    for (ident, nombre, cats, props, peso, dims, stock,
         desc, tags, seo_t, seo_d) in PRODUCTOS:
        tarifa = PRECIOS[ident]
        alto, ancho, prof = dims

        # Producto sin variantes -> una sola combinación vacía
        combos = [[]]
        for pnombre, pvalores in props:
            combos = [c + [(pnombre, v)] for c in combos for v in pvalores]

        for i, combo in enumerate(combos):
            fila = {c: "" for c in COLUMNAS}
            fila["Identificador de URL"] = ident
            fila["Nombre"] = nombre
            fila["Categorías"] = cats
            for n, (pnombre, pvalor) in enumerate(combo, start=1):
                fila[f"Nombre de propiedad {n}"] = pnombre
                fila[f"Valor de propiedad {n}"] = pvalor
            if tarifa is None:
                fila["Precio"] = ""            # la tienda muestra "Consultar"
            elif isinstance(tarifa, dict):
                fila["Precio"] = tarifa[combo[0][1]]
            else:
                fila["Precio"] = tarifa
            fila["Peso"] = peso
            fila["Alto"] = alto
            fila["Ancho"] = ancho
            fila["Profundidad"] = prof
            fila["Stock"] = stock
            sufijo = "-".join(v.replace(" ", "")[:6].upper() for _, v in combo)
            fila["SKU"] = f"TX-{ident[:12].upper().replace('-', '')}" + (f"-{sufijo}" if sufijo else "")
            fila["Mostrar en tienda"] = "NO"   # entran como borrador: publicá al cargar las fotos
            fila["Envío sin cargo"] = "NO"
            fila["Marca"] = MARCA
            fila["Producto Físico"] = "NO" if ident == "diseno-y-vectorizacion-de-logo" else "SI"
            # Descripción y SEO van solo en la primera fila del producto
            if i == 0:
                fila["Descripción"] = desc
                fila["Tags"] = tags
                fila["Título para SEO"] = seo_t
                fila["Descripción para SEO"] = seo_d
            yield fila


def main():
    destino = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "productos-taxnara.csv")
    with open(destino, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=COLUMNAS)
        w.writeheader()
        n = 0
        for fila in filas():
            w.writerow(fila)
            n += 1
    print(f"{destino}: {len(PRODUCTOS)} productos, {n} filas (una por variante).")


if __name__ == "__main__":
    main()
