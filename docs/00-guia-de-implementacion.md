# 00 · Guía de implementación

Orden recomendado. Cada bloque es una sesión corta; podés hacer uno por día.
Al lado de cada paso está el archivo de este repo del que sacás el contenido.

> **Nota sobre el panel:** Tiendanube renombra secciones y temas cada tanto.
> Si un menú no se llama exactamente como acá, buscá el nombre parecido —
> la ubicación general no cambia.

---

## Bloque 1 · Cuenta y datos base (30 min)

1. Crear la cuenta en [tiendanube.com](https://www.tiendanube.com) con el mail de
   la marca (no uno personal). Empezá con el plan más chico: se cambia cuando quieras.
2. **Configuración → Datos del negocio**
   - Nombre de la tienda: `Taxnara Diseños`
   - Razón social y CUIT: `⟨COMPLETAR⟩` — hace falta para facturar y para los Términos.
   - Dirección: Av. Señor del Milagro 645, Saujil, Catamarca, Argentina.
   - Teléfono / WhatsApp: `⟨COMPLETAR⟩`
   - Mail de contacto: `⟨COMPLETAR⟩`
3. **Configuración → Idioma y moneda:** Español (Argentina) · Peso argentino (ARS).
4. **Configuración → Redes sociales:** cargar Instagram, Facebook y TikTok
   (los links están en el README).

---

## Bloque 2 · Identidad visual (1 h) → [`01-identidad-de-marca.md`](01-identidad-de-marca.md)

1. **Mi tienda online → Diseño → Elegir tema.**
   Recomendado: un tema de grilla amplia y foto grande (en el catálogo actual,
   **Idea** o **Base** cumplen). Cualquiera con hero de ancho completo sirve.
2. **Diseño → Personalizar → Colores:** cargar los HEX de `brand/tokens.css`.
3. **Personalizar → Tipografías:** títulos en Poppins, textos en Inter.
4. **Personalizar → Logo:** subir logo horizontal y favicon (medidas en el doc 01).
5. **Personalizar → Banners:** subir los 3 banners del inicio (textos en el doc 04).

---

## Bloque 3 · Catálogo → ✅ **ya está hecho**

Las 21 categorías y los 22 productos (148 variantes) ya están cargados, con
descripción, SEO, peso, medidas y SKU. Ver [`10-estado-de-la-tienda.md`](10-estado-de-la-tienda.md).

Lo que falta en este bloque:

1. **Poner los precios reales.** Filtrá los productos por el tag `REVISAR PRECIO`
   en el panel: son los que todavía tienen valores de referencia.
2. **Subir las fotos**, 4 por producto (las tomas están en el doc 01).
3. **Publicar.** Todo está oculto a propósito. Publicá de a tandas, a medida que
   cada producto queda con precio y fotos: **Productos → seleccionar → Publicar.**

> El CSV de `import/` es el mismo catálogo, como respaldo. No hace falta importarlo:
> ya está todo cargado. Sirve si alguna vez querés rehacer la carga desde cero.

---

## Bloque 4 · Páginas y textos (1–2 h) → [`04`](04-textos-web.md) · [`05`](05-paginas-institucionales.md) · [`06`](06-politicas-legales.md)

1. **Mi tienda online → Páginas → Crear página**, una por cada texto del doc 05.
2. Pegar las políticas del doc 06 en **Configuración → Términos y condiciones**
   y como páginas propias.
3. **Diseño → Menús:** armar el menú principal y el del pie según el doc 02.

---

## Bloque 5 · Pagos y envíos (1 h) → [`07-envios-y-pagos.md`](07-envios-y-pagos.md)

1. **Configuración → Medios de pago:** activar Mercado Pago y transferencia.
2. **Configuración → Formas de envío:** Correo Argentino, retiro en el local,
   y envío propio en la zona (Saujil / Pomán).
3. Hacer **una compra de prueba real** de $100 y después reembolsarla. Es el único
   modo de saber que el circuito completo funciona.

---

## Bloque 6 · Antes de publicar (30 min)

- [ ] Comprar el dominio (**Configuración → Dominios**). Sugerido: `taxnaradisenos.com.ar`
- [ ] Cargar los SEO de cada página → [`08-seo-y-redes.md`](08-seo-y-redes.md)
- [ ] Conectar Google Analytics y el píxel de Meta (**Configuración → Aplicaciones / Códigos externos**)
- [ ] Revisar la tienda **desde el celular**: 8 de cada 10 visitas van a entrar por ahí
- [ ] Poner el link de la tienda en la bio de Instagram y TikTok
- [ ] Publicar y avisar en las redes

---

## Después de abrir

| Cuándo | Qué hacer |
|---|---|
| Cada semana | Subir 2–3 productos nuevos con foto propia |
| Cada semana | Un posteo mostrando un trabajo real terminado + link a la tienda |
| Cada mes | Revisar qué se vio mucho y no se vendió: ahí hay un problema de precio o de foto |
| Temporada | Egresados (marzo–junio), clubes (febrero), Día del Padre/Madre, Navidad |
