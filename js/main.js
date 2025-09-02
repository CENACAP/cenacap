document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.carousel-video');
    const mainNav = document.querySelector('.main-nav');
    let currentVideoIndex = 0;

    function showVideo(index) {
        videos.forEach((video, i) => {
            if (i === index) {
                video.classList.add('active');
                video.currentTime = 0;
                video.play();
            } else {
                video.classList.remove('active');
                video.pause();
            }
        });
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(currentVideoIndex);
    }

    // Muestra el primer video al cargar
    if (videos.length > 0) {
        showVideo(currentVideoIndex);
    }

    // Cambia al siguiente video después de que el actual termine
    videos.forEach(video => {
        video.addEventListener('ended', nextVideo);
    });

    // Fallback para cambiar videos si no se detecta 'ended'
    setInterval(nextVideo, 10000); // Cambia cada 10 segundos

    // Lógica para que la barra de navegación cambie de color al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });
});