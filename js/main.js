document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el menú de navegación móvil ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- Lógica para el carrusel de video (solo si existe en la página) ---
    const videoSlides = document.querySelectorAll('.video-slide');
    if (videoSlides.length > 0) {
        const prevButton = document.querySelector('.prev-slide');
        const nextButton = document.querySelector('.next-slide');
        const slideDotsContainer = document.querySelector('.slide-dots');
        let currentVideoSlide = 0; // Cambiado para evitar conflicto de nombres
        let videoSlideInterval;

        // Crear los puntos de navegación para el video
        videoSlides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                goToVideoSlide(index);
                resetVideoInterval();
            });
            slideDotsContainer.appendChild(dot);
        });

        const videoSlideDots = document.querySelectorAll('.slide-dots .dot'); // Específico para video

        function showVideoSlide(index) {
            videoSlides.forEach((slide, i) => {
                slide.classList.remove('active');
                slide.querySelector('video').pause();
                slide.querySelector('video').currentTime = 0; // Reiniciar video al cambiar
            });
            videoSlideDots.forEach(dot => dot.classList.remove('active'));

            videoSlides[index].classList.add('active');
            videoSlides[index].querySelector('video').play();
            videoSlideDots[index].classList.add('active');
        }

        function goToVideoSlide(index) {
            currentVideoSlide = (index + videoSlides.length) % videoSlides.length;
            showVideoSlide(currentVideoSlide);
        }

        function nextVideoSlide() {
            goToVideoSlide(currentVideoSlide + 1);
        }

        function prevVideoSlide() {
            goToVideoSlide(currentVideoSlide - 1);
        }

        function resetVideoInterval() {
            clearInterval(videoSlideInterval);
            videoSlideInterval = setInterval(nextVideoSlide, 10000); // Cambia de video cada 10 segundos
        }

        if (nextButton && prevButton) { // Asegurarse de que los botones existan
            nextButton.addEventListener('click', () => {
                nextVideoSlide();
                resetVideoInterval();
            });

            prevButton.addEventListener('click', () => {
                prevVideoSlide();
                resetVideoInterval();
            });
        }

        // Inicializar el carrusel de video
        showVideoSlide(currentVideoSlide);
        resetVideoInterval();
    }


    // --- Lógica para el carrusel de imágenes (solo si existe en la página) ---
    const imageCarouselItems = document.querySelectorAll('.image-carousel .carousel-item');
    if (imageCarouselItems.length > 0) {
        const prevImageButton = document.querySelector('.prev-img-btn');
        const nextImageButton = document.querySelector('.next-img-btn');
        const imageCarouselDotsContainer = document.querySelector('.image-carousel .carousel-dots');
        let currentImageSlide = 0;
        let imageSlideInterval;

        // Crear los puntos de navegación para la imagen
        imageCarouselItems.forEach((item, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                goToImageSlide(index);
                resetImageInterval();
            });
            imageCarouselDotsContainer.appendChild(dot);
        });

        const imageSlideDots = document.querySelectorAll('.image-carousel .carousel-dots .dot');

        function showImageSlide(index) {
            imageCarouselItems.forEach(item => {
                item.classList.remove('active');
            });
            imageSlideDots.forEach(dot => dot.classList.remove('active'));

            imageCarouselItems[index].classList.add('active');
            imageSlideDots[index].classList.add('active');
        }

        function goToImageSlide(index) {
            currentImageSlide = (index + imageCarouselItems.length) % imageCarouselItems.length;
            showImageSlide(currentImageSlide);
        }

        function nextImageSlide() {
            goToImageSlide(currentImageSlide + 1);
        }

        function prevImageSlide() {
            goToImageSlide(currentImageSlide - 1);
        }

        function resetImageInterval() {
            clearInterval(imageSlideInterval);
            imageSlideInterval = setInterval(nextImageSlide, 5000); // Cambia de imagen cada 5 segundos
        }

        if (nextImageButton && prevImageButton) { // Asegurarse de que los botones existan
            nextImageButton.addEventListener('click', () => {
                nextImageSlide();
                resetImageInterval();
            });

            prevImageButton.addEventListener('click', () => {
                prevImageSlide();
                resetImageInterval();
            });
        }

        // Inicializar el carrusel de imágenes
        showImageSlide(currentImageSlide);
        resetImageInterval();
    }

    // --- Lógica para el header "scrolled" (si existe) ---
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

});