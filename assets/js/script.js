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

// Sélection du bouton et du corps du document
const themeToggleButton = document.getElementById("themeToggle");
const body = document.body;
const navBarSite = document.getElementById("navBarSite");
const navItems = document.getElementById("navItem");

// Ajouter un événement de clic
themeToggleButton.addEventListener("click", () => {
  // Basculer entre les classes 'dark-mode' et 'light-mode'
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  navBarSite.classList.toggle("bg-dark");
  navBarSite.classList.toggle("bg-light");
  let navbar = document.getElementById("navBarSite");

  if (document.body.classList.contains("dark-mode")) {
    navbar.classList.remove("navbar-light", "bg-light");
    navbar.classList.add("navbar-dark", "bg-dark");
  } else {
    navbar.classList.remove("navbar-dark", "bg-dark");
    navbar.classList.add("navbar-light", "bg-light");
  }

  // Mettre à jour le texte du bouton
  themeToggleButton.textContent = body.classList.contains("dark-mode")
    ? "Mode Clair"
    : "Mode Sombre";
});
