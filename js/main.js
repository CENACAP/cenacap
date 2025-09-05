document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');

    // Toggle para el menú de navegación móvil
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Opcional: Cerrar menú si se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Opcional: Cambiar el estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Cambia 50 por la altura deseada
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Lógica para el carrusel de videos
    const videoSlides = document.querySelectorAll('.video-slide');
    const prevSlideBtn = document.querySelector('.prev-slide');
    const nextSlideBtn = document.querySelector('.next-slide');
    const dotsContainer = document.querySelector('.slide-dots');
    let currentSlideIndex = 0;
    let autoSlideInterval; // Variable para el auto-play de videos

    function createDots() {
        videoSlides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
                stopAutoSlide(); // Detiene el auto-play al interactuar
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        const dots = document.querySelectorAll('.slide-dots .dot');
        dots.forEach((dot, index) => {
            if (index === currentSlideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function showSlide(index) {
        videoSlides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        updateDots();
    }

    function goToSlide(index) {
        if (index >= 0 && index < videoSlides.length) {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        }
    }

    // Nueva función para iniciar el auto-play de videos
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide((currentSlideIndex + 1) % videoSlides.length);
        }, 8000); // Cambia cada 8 segundos (puedes ajustar este valor)
    }

    // Nueva función para detener y reiniciar el auto-play de videos
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        setTimeout(startAutoSlide, 10000); // Reinicia después de 10 segundos
    }

    if (prevSlideBtn && nextSlideBtn && videoSlides.length > 0) {
        createDots();
        showSlide(currentSlideIndex);
        startAutoSlide(); // Inicia el auto-play al cargar la página

        nextSlideBtn.addEventListener('click', () => {
            goToSlide((currentSlideIndex + 1) % videoSlides.length);
            stopAutoSlide(); // Detiene y reinicia
        });

        prevSlideBtn.addEventListener('click', () => {
            goToSlide((currentSlideIndex - 1 + videoSlides.length) % videoSlides.length);
            stopAutoSlide(); // Detiene y reinicia
        });
    }

    // Lógica para el carrusel de imágenes
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevImgBtn = document.querySelector('.prev-img-btn');
    const nextImgBtn = document.querySelector('.next-img-btn');
    const carouselDotsContainer = document.querySelector('.carousel-dots');
    let currentImageIndex = 0;
    let autoImageInterval;

    function createImgDots() {
        carouselItems.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToImageSlide(index);
                stopAutoImageSlide();
            });
            carouselDotsContainer.appendChild(dot);
        });
    }

    function updateImgDots() {
        const dots = document.querySelectorAll('.carousel-dots .dot');
        dots.forEach((dot, index) => {
            if (index === currentImageIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function showImageSlide(index) {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        updateImgDots();
    }

    function goToImageSlide(index) {
        if (index >= 0 && index < carouselItems.length) {
            currentImageIndex = index;
            showImageSlide(currentImageIndex);
        }
    }

    function startAutoImageSlide() {
        autoImageInterval = setInterval(() => {
            goToImageSlide((currentImageIndex + 1) % carouselItems.length);
        }, 5000);
    }

    function stopAutoImageSlide() {
        clearInterval(autoImageInterval);
        setTimeout(startAutoImageSlide, 10000);
    }

    if (carouselItems.length > 0 && prevImgBtn && nextImgBtn && carouselDotsContainer) {
        createImgDots();
        showImageSlide(currentImageIndex);
        startAutoImageSlide();

        nextImgBtn.addEventListener('click', () => {
            goToImageSlide((currentImageIndex + 1) % carouselItems.length);
            stopAutoImageSlide();
        });

        prevImgBtn.addEventListener('click', () => {
            goToImageSlide((currentImageIndex - 1 + carouselItems.length) % carouselItems.length);
            stopAutoImageSlide();
        });
    }
});