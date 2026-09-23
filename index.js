document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menuContainer = document.querySelector(".menu-container");
  const menuLinks = document.querySelectorAll(".menu-links a");

  // Función para abrir/cerrar el menú al hacer clic en el botón hamburguesa
  if (menuToggle && menuContainer) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      menuContainer.classList.toggle("active");
    });
  }

  // Cerrar el menú automáticamente al hacer clic en cualquier enlace del menú
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (menuContainer.classList.contains("active")) {
        menuToggle.classList.remove("active");
        menuContainer.classList.remove("active");
      }

      // Desplazamiento suave (Smooth Scroll)
      const targetId = link.getAttribute("href");
      if (targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
