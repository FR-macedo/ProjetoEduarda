// Função de scroll suave ao clicar nos links do menu
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scroll({
        top: targetElement.offsetTop - 20,
        behavior: "smooth",
      });
    }
  });
});


// Função para mudar o cabeçalho ao rolar a página
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#005f8a";
  } else {
    header.style.backgroundColor = "#0077b6";
  }
});
