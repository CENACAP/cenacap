document.addEventListener('DOMContentLoaded', () => {
    const videoSlides = document.querySelectorAll('.video-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const slideDotsContainer = document.querySelector('.slide-dots');
    let currentSlide = 0;
    let slideInterval;

    // Crear los puntos de navegación
    videoSlides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        slideDotsContainer.appendChild(dot);
    });

    const slideDots = document.querySelectorAll('.dot');

    function showSlide(index) {
        videoSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.querySelector('video').pause();
        });
        slideDots.forEach(dot => dot.classList.remove('active'));

        videoSlides[index].classList.add('active');
        videoSlides[index].querySelector('video').play();
        slideDots[index].classList.add('active');
    }

    function goToSlide(index) {
        currentSlide = (index + videoSlides.length) % videoSlides.length;
        showSlide(currentSlide);
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 10000); // Cambia de video cada 10 segundos
    }

    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Inicializar el carrusel
    showSlide(currentSlide);
    resetInterval();

    // Lógica para el menú de navegación móvil
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
});