// ===================================
// NAVEGACIÓN ENTRE SECCIONES
// ===================================

const secciones = ['inicio', 'menu', 'hallazgos', 'estrategia', 'funnel', 'activos', 'automatizacion', 'timeline', 'cierre'];
let seccionActual = 0;

function irSeccion(idSeccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });
    
    // Mostrar la sección seleccionada
    const seccionDestino = document.getElementById(idSeccion);
    if (seccionDestino) {
        seccionDestino.classList.add('activa');
        
        // Actualizar índice de sección actual
        seccionActual = secciones.indexOf(idSeccion);
        
        // Actualizar barra de progreso
        actualizarProgreso();
        
        // Scroll al inicio
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Log analítica
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: idSeccion,
                page_location: window.location.href + '#' + idSeccion
            });
        }
    }
}

function actualizarProgreso() {
    const progreso = (seccionActual / (secciones.length - 1)) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progreso + '%';
    }
}

// ===================================
// TABS TIMELINE
// ===================================

function cambiarTab(meses) {
    // Desactivar todos los tabs
    document.querySelectorAll('.timeline-tab').forEach(tab => {
        tab.classList.remove('activa');
    });
    
    // Desactivar todos los contenidos
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.classList.remove('activa');
    });
    
    // Activar tab clickeado
    event.target.classList.add('activa');
    
    // Activar contenido correspondiente
    const contenido = document.getElementById('tab-' + meses);
    if (contenido) {
        contenido.classList.add('activa');
    }
}

// ===================================
// NAVEGACIÓN CON TECLADO
// ===================================

document.addEventListener('keydown', function(event) {
    // No hacer nada si el usuario está escribiendo en un input
    if (event.target.matches('input, textarea')) {
        return;
    }
    
    switch(event.key) {
        case 'ArrowRight':
        case ' ':
            event.preventDefault();
            if (seccionActual < secciones.length - 1) {
                irSeccion(secciones[seccionActual + 1]);
            }
            break;
            
        case 'ArrowLeft':
            event.preventDefault();
            if (seccionActual > 0) {
                irSeccion(secciones[seccionActual - 1]);
            }
            break;
            
        case 'Escape':
            if (seccionActual !== 0 && seccionActual !== 1) {
                irSeccion('menu');
            }
            break;
            
        case 'h':
        case 'H':
            irSeccion('inicio');
            break;
            
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
});

// ===================================
// FULLSCREEN
// ===================================

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error al entrar en fullscreen:', err);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// ===================================
// ANIMACIONES AL SCROLL
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que queremos animar
function inicializarAnimaciones() {
    const elementos = document.querySelectorAll('.menu-card, .stat-card, .finding-item, .fase-card, .activo-card');
    
    elementos.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(30px)';
        elemento.style.transition = 'all 0.6s ease';
        elemento.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(elemento);
    });
}

// ===================================
// SMOOTH SCROLL PARA ANCLAS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// PREVENIR ZOOM EN MOBILE
// ===================================

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// Prevenir doble tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ===================================
// COMPARTIR PRESENTACIÓN
// ===================================

function compartirPresentacion() {
    if (navigator.share) {
        navigator.share({
            title: 'Estrategia Digital Cantabria 2 | OTG Constructora',
            text: 'Presentación de estrategia digital para proyecto Cantabria 2',
            url: window.location.href
        }).then(() => {
            console.log('Compartido exitosamente');
        }).catch((error) => {
            console.log('Error al compartir:', error);
        });
    } else {
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('¡Link copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar:', err);
        });
    }
}

// ===================================
// DETECCIÓN DE CONEXIÓN
// ===================================

window.addEventListener('online', () => {
    console.log('Conexión restaurada');
});

window.addEventListener('offline', () => {
    console.log('Sin conexión a internet');
});

// ===================================
// PERFORMANCE MONITORING
// ===================================

if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'navigation') {
                    console.log('Tiempo de carga:', entry.loadEventEnd - entry.fetchStart, 'ms');
                }
            });
        });
        perfObserver.observe({ entryTypes: ['navigation'] });
    } catch (e) {
        // Silenciar errores del observer
    }
}

// ===================================
// INICIALIZACIÓN
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 Presentación Cantabria 2 cargada');
    console.log('⌨️ Atajos de teclado:');
    console.log('  → o Espacio: Siguiente');
    console.log('  ←: Anterior');
    console.log('  Esc: Menú');
    console.log('  H: Inicio');
    console.log('  F: Pantalla completa');
    
    // Inicializar animaciones
    inicializarAnimaciones();
    
    // Actualizar progreso inicial
    actualizarProgreso();
    
    // Marcar primera sección como vista
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: 'inicio',
            page_location: window.location.href
        });
    }
});

// ===================================
// SERVICE WORKER (para PWA)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Comentado por ahora, descomentar cuando se suba a producción
        // navigator.serviceWorker.register('/sw.js').then(registration => {
        //     console.log('SW registrado:', registration);
        // }).catch(error => {
        //     console.log('Error al registrar SW:', error);
        // });
    });
}

// ===================================
// EASTER EGG
// ===================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        console.log('🎉 ¡Easter egg encontrado!');
        document.body.style.transition = 'transform 0.5s ease';
        document.body.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)';
        }, 500);
    }
});

// ===================================
// UTILIDADES
// ===================================

// Formatear números
function formatearNumero(numero) {
    return new Intl.NumberFormat('es-CO').format(numero);
}

// Formatear moneda
function formatearMoneda(numero) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(numero);
}

// Debounce para eventos de scroll/resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para eventos frecuentes
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// EXPORTAR FUNCIONES GLOBALES
// ===================================

window.irSeccion = irSeccion;
window.cambiarTab = cambiarTab;
window.compartirPresentacion = compartirPresentacion;
window.toggleFullscreen = toggleFullscreen;
