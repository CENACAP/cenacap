// Obtiene el botón de hamburguesa y la lista de enlaces
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Agrega un "escuchador de eventos" para detectar clics en el botón
menuToggle.addEventListener('click', () => {
    // Alterna la clase 'active' en la lista de enlaces
    navLinks.classList.toggle('active');
});

// Función para la barra de navegación que cambia de color al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});