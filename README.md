# 🏠 Estrategia Digital Cantabria 2 | OTG Constructora

Presentación web interactiva profesional para proyecto Cantabria 2.

## ✨ Características

- **UX/UI Perfecto** - Diseño profesional sin elementos cortados
- **100% Responsive** - Funciona en desktop, tablet y móvil
- **Navegación fluida** - Transiciones suaves y naturales
- **Atajos de teclado** - Navegación rápida para presentaciones
- **Branding OTG** - Colores corporativos (#FB6600)
- **Optimizado** - Carga rápida y rendimiento perfecto

## 🚀 Ver en vivo

**Opciones para publicar:**

### Opción 1: GitHub Pages (RECOMENDADO)

1. **Crear repositorio en GitHub:**
   ```bash
   # En tu computadora
   cd presentacion-cantabria
   git init
   git add .
   git commit -m "Presentación Cantabria 2"
   ```

2. **Subir a GitHub:**
   - Crea un repo nuevo en github.com (nombre: `cantabria2-presentacion`)
   - Ejecuta:
     ```bash
     git remote add origin https://github.com/TU-USUARIO/cantabria2-presentacion.git
     git branch -M main
     git push -u origin main
     ```

3. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: `main` branch, `/` (root)
   - Guarda y espera 1-2 minutos

4. **Tu presentación estará en:**
   ```
   https://TU-USUARIO.github.io/cantabria2-presentacion/
   ```

### Opción 2: Netlify (Alternativa rápida)

1. Arrastra la carpeta completa a [netlify.com/drop](https://app.netlify.com/drop)
2. ¡Listo! Te da un link instantáneo
3. Puedes personalizar el dominio después

### Opción 3: Local (Sin internet)

1. Descarga todos los archivos
2. Abre `index.html` en Chrome/Firefox
3. Funciona offline perfectamente

## 📁 Estructura de archivos

```
presentacion-cantabria/
├── index.html       # Estructura HTML
├── styles.css       # Estilos con branding OTG
├── script.js        # Interactividad y navegación
└── README.md        # Este archivo
```

## ⌨️ Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `→` o `Espacio` | Siguiente sección |
| `←` | Sección anterior |
| `Esc` | Volver al menú |
| `H` | Ir al inicio |
| `F` | Pantalla completa |

## 🎨 Branding OTG

**Colores:**
- Naranja primario: `#FB6600`
- Naranja oscuro: `#E55D00`
- Negro: `#000000`
- Gris oscuro: `#242424`

**Tipografía:**
- Principal: Inter (Google Fonts)
- Pesos: 300, 400, 500, 600, 700, 800, 900

## 📱 Navegación

La presentación tiene 9 secciones:

1. **Inicio** - Statement y objetivos
2. **Menú** - Grid de navegación
3. **Hallazgos** - Qué está mal vs qué está bien
4. **Estrategia** - Enfoque faseado
5. **Funnel** - Ruta de conversión
6. **Activos** - Estrategia por canal
7. **Automatización** - CRM y herramientas
8. **Timeline** - Planes 3/6/12 meses
9. **Cierre** - Resumen ejecutivo

## 🛠️ Personalización

### Cambiar colores

En `styles.css`, edita las variables:

```css
:root {
    --orange-primary: #FB6600;
    --orange-dark: #E55D00;
    /* ... */
}
```

### Editar contenido

En `index.html`, busca por ID de sección:

```html
<section id="hallazgos" class="seccion">
    <!-- Tu contenido aquí -->
</section>
```

### Agregar Google Analytics

Antes del cierre de `</head>` en `index.html`:

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Contenido incluido

✅ Statement de estrategia  
✅ Hallazgos críticos (problema vs oportunidad)  
✅ Estrategia faseada (construir → validar → escalar)  
✅ Funnel visual completo (awareness → conversión)  
✅ 6 activos digitales principales  
✅ Comparación con/sin automatización  
✅ ROI 9,938x del CRM  
✅ Planes 3, 6 y 12 meses con números  
✅ Tabla de inversión por mes  
✅ Resumen ejecutivo con 6 razones  

## 🔧 Solución de problemas

**Los estilos no cargan:**
- Verifica que `styles.css` esté en la misma carpeta que `index.html`
- Abre la consola del navegador (F12) y busca errores

**La navegación no funciona:**
- Verifica que `script.js` esté en la misma carpeta
- Revisa la consola del navegador para errores

**Se ve mal en móvil:**
- Asegúrate de que el navegador esté actualizado
- Prueba en modo incógnito

**GitHub Pages muestra error 404:**
- Espera 2-3 minutos después de activar Pages
- Verifica que el archivo se llame exactamente `index.html`
- Revisa que la rama sea `main` y la carpeta `/` (root)

## 📝 Notas técnicas

- **Sin dependencias externas** - Solo Google Fonts
- **Peso total:** ~50KB (HTML + CSS + JS)
- **Compatible con:** Chrome, Firefox, Safari, Edge (últimas versiones)
- **Optimizado para presentaciones:** Modo pantalla completa, atajos de teclado
- **Accesible:** Navegable con teclado, contraste WCAG AA

## 🎯 Actualizaciones pendientes

- [ ] Cotización Fabián (CRM/Bot) - Actualmente dice "Por cotizar"
- [ ] Logo vectorial OTG real (opcional - actual es SVG básico)
- [ ] Agregar favicon (opcional)

Para actualizar, simplemente edita el HTML y haz push:

```bash
git add .
git commit -m "Actualizar cotización"
git push
```

GitHub Pages actualizará automáticamente en 1-2 minutos.

## 📞 Soporte

**Creado para:**
- Cliente: OTG Constructora
- Proyecto: Cantabria 2  
- Directora: María Fernanda Varón
- Fecha: Febrero 2026

## 📄 Licencia

Uso exclusivo de OTG Constructora y equipo autorizado.

---

## 🎨 Comandos útiles Git

```bash
# Ver cambios
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Descripción del cambio"

# Subir cambios
git push

# Ver historial
git log --oneline

# Crear nueva rama
git checkout -b nueva-rama

# Cambiar de rama
git checkout main
```

---

**¡Presentación lista para impresionar! 🚀**

Made with ❤️ for OTG Constructora
