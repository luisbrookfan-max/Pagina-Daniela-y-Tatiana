/* ==========================================================
   SCRIPT PRINCIPAL
   ========================================================== */

// Esperar a que el contenido del documento esté listo.
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar elementos del DOM.
  const progressBar = document.getElementById("progressBar");
  const backToTopButton = document.getElementById("backToTop");
  const fadeElements = document.querySelectorAll(".fade-in");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  // Función para actualizar la barra de progreso.
  const updateProgressBar = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  };

  // Función para mostrar u ocultar el botón volver arriba.
  const toggleBackToTop = () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  };

  // Función para activar la animación de aparición al hacer scroll.
  const revealOnScroll = () => {
    fadeElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const offset = 120;
      if (rect.top < window.innerHeight - offset) {
        element.classList.add("visible");
      }
    });
  };

  // Escuchar eventos de scroll.
  window.addEventListener("scroll", () => {
    updateProgressBar();
    toggleBackToTop();
    revealOnScroll();
  });

  // Ejecutar una vez al cargar la página.
  updateProgressBar();
  toggleBackToTop();
  revealOnScroll();

  // Evento para volver al inicio.
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Menú hamburguesa para pantallas pequeñas.
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
