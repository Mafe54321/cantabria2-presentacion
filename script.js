// Estado de la presentación
let currentSlide = 1;
const totalSlides = 8;

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    updateSlideCounter();
    updateProgressBar();
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            changeSlide(1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            changeSlide(-1);
        }
    });
});

// Cambiar de slide
function changeSlide(direction) {
    const newSlide = currentSlide + direction;
    
    // Validar límites
    if (newSlide < 1 || newSlide > totalSlides) {
        return;
    }
    
    // Remover clase active del slide actual
    const currentSlideElement = document.getElementById(`slide${currentSlide}`);
    currentSlideElement.classList.remove('active');
    
    // Actualizar slide actual
    currentSlide = newSlide;
    
    // Agregar clase active al nuevo slide
    const newSlideElement = document.getElementById(`slide${currentSlide}`);
    newSlideElement.classList.add('active');
    
    // Actualizar UI
    updateSlideCounter();
    updateProgressBar();
}

// Actualizar contador de slides
function updateSlideCounter() {
    document.getElementById('currentSlide').textContent = currentSlide;
    document.getElementById('totalSlides').textContent = totalSlides;
}

// Actualizar barra de progreso
function updateProgressBar() {
    const progress = (currentSlide / totalSlides) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Ir a slide específico
function goToSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > totalSlides) {
        return;
    }
    
    const currentSlideElement = document.getElementById(`slide${currentSlide}`);
    currentSlideElement.classList.remove('active');
    
    currentSlide = slideNumber;
    
    const newSlideElement = document.getElementById(`slide${currentSlide}`);
    newSlideElement.classList.add('active');
    
    updateSlideCounter();
    updateProgressBar();
}

// Touch/swipe support para móviles
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // Swipe left - siguiente slide
        changeSlide(1);
    }
    if (touchEndX > touchStartX + 50) {
        // Swipe right - slide anterior
        changeSlide(-1);
    }
}
