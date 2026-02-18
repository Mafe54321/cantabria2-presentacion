// ========================================
// PRESENTACIÓN INTERACTIVA OTG CANTABRIA 2
// Navegación y animaciones
// ========================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    updateUI();
    showSlide(0);
});

// Crear navegación lateral (dots)
function initializeNavigation() {
    const navDots = document.getElementById('navDots');
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', () => goToSlide(i));
        navDots.appendChild(dot);
    }

    // Actualizar total sections
    document.getElementById('totalSections').textContent = totalSlides;
}

// Navegar a slide específico
function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    
    currentSlide = index;
    showSlide(currentSlide);
    updateUI();
}

// Mostrar slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Navegar al siguiente slide
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

// Navegar al slide anterior
function prevSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

// Actualizar UI (progress, counter, dots, botones)
function updateUI() {
    // Progress bar
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
    document.getElementById('progressBar').style.width = progressPercent + '%';
    
    // Current section counter
    document.getElementById('currentSection').textContent = currentSlide + 1;
    
    // Navigation dots
    const dots = document.querySelectorAll('.nav-dot');
    dots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Botones prev/next
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentSlide === 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentSlide === totalSlides - 1;
        nextBtn.textContent = currentSlide === totalSlides - 1 ? 'Fin' : 'Siguiente →';
    }
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            prevSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides - 1);
            break;
        case 'Escape':
            // Salir de fullscreen si está activo
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            break;
    }
});

// Detectar scroll para actualizar slide activo
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        detectCurrentSlide();
    }, 100);
});

function detectCurrentSlide() {
    const scrollPosition = window.scrollY + (window.innerHeight / 2);
    
    slides.forEach((slide, index) => {
        const slideTop = slide.offsetTop;
        const slideBottom = slideTop + slide.offsetHeight;
        
        if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
            if (currentSlide !== index) {
                currentSlide = index;
                updateUI();
            }
        }
    });
}

// Animaciones al entrar en viewport
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que deben animarse
document.querySelectorAll('.context-card, .phase-card, .team-card, .strategy-block, .feature-item, .timeline-phase').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Función para fullscreen (opcional)
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Error al intentar fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Exponer funciones globales
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.goToSlide = goToSlide;
window.toggleFullscreen = toggleFullscreen;

// Prevenir zoom accidental en mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Log para debug
console.log('Presentación OTG Cantabria cargada');
console.log('Total slides:', totalSlides);
console.log('Controles de teclado:');
console.log('  - Flechas: Navegar');
console.log('  - Home/End: Ir al inicio/final');
console.log('  - Esc: Salir de fullscreen');
