// Funcionalidad para el menú de hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // También puedes añadir una clase para cambiar el icono de la hamburguesa
        menuToggle.classList.toggle('active'); 
    });
}

// Funcionalidad para la barra de navegación que cambia de color al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (nav) { // Asegurarse de que nav existe
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});