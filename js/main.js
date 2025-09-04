document.addEventListener('DOMContentLoaded', () => {
    // Menú de navegación móvil
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Comportamiento del header al hacer scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Carrusel de Videos
    const videoSlides = document.querySelectorAll('.video-slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const slideDotsContainer = document.querySelector('.slide-dots');
    let currentSlide = 0;

    if (videoSlides.length > 0) {
        // Crea los puntos de navegación
        for (let i = 0; i < videoSlides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(i));
            slideDotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            videoSlides.forEach((slide, i) => {
                slide.classList.remove('active');
                const video = slide.querySelector('video');
                if (video) {
                    video.pause(); // Pausa el video al cambiar
                }
            });
            dots.forEach(dot => dot.classList.remove('active'));

            videoSlides[index].classList.add('active');
            const activeVideo = videoSlides[index].querySelector('video');
            if (activeVideo) {
                activeVideo.play(); // Reproduce el video activo
            }
            dots[index].classList.add('active');
        }

        function goToSlide(index) {
            currentSlide = index;
            showSlide(currentSlide);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % videoSlides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + videoSlides.length) % videoSlides.length;
            showSlide(currentSlide);
        }

        if (prevButton) prevButton.addEventListener('click', prevSlide);
        if (nextButton) nextButton.addEventListener('click', nextSlide);

        // Inicializa el carrusel en la primera diapositiva
        showSlide(currentSlide);

        // Cambio de slide automático cada 7 segundos
        setInterval(nextSlide, 7000);
    }
});