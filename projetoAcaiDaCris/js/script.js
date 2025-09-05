 document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    const currentUrl = window.location.pathname;

    links.forEach(link => {
      // pega só o nome do arquivo (index.html, pedidos.html etc.)
      const linkPage = link.getAttribute("href").split("/").pop();

      if (currentUrl.includes(linkPage)) {
        link.classList.add("active");
      }
    });
  });
