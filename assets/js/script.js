window.onload = function () {
  const carteRetourners = document.getElementsByClassName("back");
  for (var i = 0; i < carteRetourners.length; i++) {
    carteRetourners[i].addEventListener("mouseover", function () {
      let cibles = document.getElementsByClassName("progress-bar");
      // function arrow avec =()
      var rempliBarre = () => {
        for (let i = 0; i < cibles.length; i++) {
          cibles[i].style.width = cibles[i].getAttribute("aria-valuenow") + "%";
          //object.getAttribute("aria-valuenow")
        }
      };
      //animation par défaut rempliBarre();
      setTimeout(rempliBarre, 500);
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link.menu_anchor");
  let navbarToggler = document.querySelector(".navbar-toggler");
  let navbarCollapse = document.querySelector("#navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Vérifier si le menu est ouvert
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Simule un clic sur le bouton burger pour fermer
      }
    });
  });
});

// Sélection du bouton et du corps du document
const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;
const navBarSite = document.getElementById("navBarSite");
document.querySelectorAll(".menu_anchor").forEach((link) => {
  link.addEventListener("click", function () {
    // Supprime la classe "active" de tous les liens
    document
      .querySelectorAll(".menu_anchor")
      .forEach((el) => el.classList.remove("active"));

    // Ajoute la classe "active" au lien cliqué
    this.classList.add("active");
  });
});

// Ajouter un événement de clic
themeToggleButton.addEventListener("click", () => {
  // Basculer entre les classes 'dark-mode' et 'light-mode'
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  navBarSite.classList.toggle("bg-primary");
  navBarSite.classList.toggle("bg-light");
  let navbar = document.getElementById("navBarSite");
  let navLinks = document.querySelectorAll("#navItem .nav-link");
  if (document.body.classList.contains("dark-mode")) {
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-primary");
    navLinks.forEach((link) => {
      link.classList.remove("navbarLight");
      link.classList.add("navbarDark");
    });
  } else {
    navbar.classList.remove("navbar-dark", "bg-primary");
    navbar.classList.add("navbar-light", "bg-light");
    navLinks.forEach((link) => {
      link.classList.remove("navbarDark");
      link.classList.add("navbarLight");
    });
  }

  // Mettre à jour le texte du bouton
  themeToggleButton.textContent = body.classList.contains("dark-mode")
    ? `🌗 Clair`
    : `🌗 Bleu`;
});
