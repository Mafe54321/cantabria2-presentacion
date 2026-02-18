# Presentación Estrategia Digital 360° - Cantabria 2

Presentación interactiva profesional para OTG Constructora.

## 🚀 Ver presentación en vivo

Una vez publicada en GitHub Pages, estará disponible en:
```
https://tu-usuario.github.io/nombre-repositorio/
```

## 📁 Archivos

- `index.html` - Estructura HTML de la presentación
- `styles.css` - Estilos con branding OTG Cantabria
- `script.js` - Navegación y animaciones
- `README.md` - Este archivo

## 🌐 Cómo publicar en GitHub Pages

### Opción 1: Crear repositorio nuevo

1. Ve a https://github.com y crea un nuevo repositorio
   - Nombre sugerido: `cantabria2-presentacion`
   - Descripción: "Propuesta Estrategia Digital 360° - OTG Cantabria 2"
   - Público o Privado (según tu preferencia)
   - **NO** inicialices con README

2. Sube los archivos:
   ```bash
   git init
   git add .
   git commit -m "Presentación inicial Cantabria 2"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/cantabria2-presentacion.git
   git push -u origin main
   ```

   **O usa la interfaz web de GitHub:**
   - Click en "uploading an existing file"
   - Arrastra los 3 archivos: `index.html`, `styles.css`, `script.js`
   - Click "Commit changes"

3. Activa GitHub Pages:
   - Ve a Settings del repositorio
   - En el menú lateral, click en "Pages"
   - En "Source", selecciona: Branch "main" → carpeta "/ (root)"
   - Click "Save"

4. Espera 1-2 minutos y tu presentación estará en:
   ```
   https://TU-USUARIO.github.io/cantabria2-presentacion/
   ```

### Opción 2: Repositorio ya existente

Si ya tienes un repositorio:

1. Copia estos 3 archivos a una carpeta en tu repositorio
2. Haz commit y push
3. Activa GitHub Pages (paso 3 anterior)

## ⌨️ Controles de navegación

### Teclado:
- `→` `↓` `Espacio` `PageDown` - Siguiente slide
- `←` `↑` `PageUp` - Slide anterior
- `Home` - Ir al inicio
- `End` - Ir al final
- `Esc` - Salir de pantalla completa

### Mouse:
- **Botones** inferior: "Anterior" / "Siguiente"
- **Dots** laterales derechos: Click para ir a slide específico
- **Barra de progreso** superior: Muestra avance

## 🎨 Branding OTG Cantabria

- **Color principal:** #FB6600 (Naranja OTG)
- **Tipografía:** Montserrat (Display) + Work Sans (Body)
- **Diseño:** Moderno, profesional, responsive

## 📱 Responsive

La presentación es 100% responsive y funciona perfectamente en:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## ✨ Características

- ✅ 15 slides interactivos
- ✅ Navegación fluida con animaciones
- ✅ Progress bar en tiempo real
- ✅ Navegación con teclado
- ✅ Dots de navegación lateral
- ✅ Diseño moderno con branding OTG
- ✅ 100% responsive
- ✅ Animaciones al scroll
- ✅ Sin dependencias externas (solo Google Fonts)

## 🔧 Personalización

### Cambiar colores:

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #FB6600;    /* Color principal */
    --color-dark: #000000;       /* Negro */
    --color-gray: #242424;       /* Gris oscuro */
    --color-white: #FFFFFF;      /* Blanco */
}
```

### Editar contenido:

Todo el contenido está en `index.html` dentro de las secciones `<section class="slide">`.

## 📞 Soporte

Esta presentación fue creada específicamente para OTG Constructora - Proyecto Cantabria 2.

---

**© 2026 - Estrategia Digital 360° OTG Cantabria 2**
