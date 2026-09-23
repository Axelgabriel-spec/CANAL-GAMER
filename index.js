document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const menuContainer = document.getElementById("menuContainer") || document.querySelector(".menu-container");
  const menuLinks = document.querySelectorAll(".menu-links a");

  // Alternar apertura y cierre del menú al hacer clic en el botón hamburguesa
  if (menuToggle && menuContainer) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      menuContainer.classList.toggle("active");
    });
  }

  // Manejar clics en los enlaces del menú
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Cerrar el menú si está abierto
      if (menuContainer && menuContainer.classList.contains("active")) {
        menuToggle.classList.remove("active");
        menuContainer.classList.remove("active");
      }

      // Desplazamiento suave (Smooth Scroll)
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
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
