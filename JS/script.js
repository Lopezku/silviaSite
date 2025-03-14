function changerLangue(langue) {
  localStorage.setItem("langue", langue); // Sauvegarde la langue choisie
  fetch(`assets/languages/${langue}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status} - Fichier introuvable`);
      }
      return response.json();
    })
    .then((data) => {
      const formations = document.querySelectorAll(".cursus-elt-text"); // Récupère tous les blocs formations
      const titreFormation = document.getElementById("titre-formation");
      titreFormation.innerText = data.titreFormation;
      const section1Title = document.getElementById("section1Title"); // Sélectionne toutes les descriptions
      section1Title.innerText = data.section1Titre;

      const sectionTitleElements = document.querySelectorAll(
        ".pres_container .pres_block .pres_elt .pres_title h3"
      ); // Sélectionne tous les titres
      const sectionDescriptionElements = document.querySelectorAll(
        ".pres_container .pres_block .pres_elt .pres_content div"
      ); // Sélectionne toutes les descriptions

      data.portrait.forEach((item, index) => {
        if (sectionTitleElements[index]) {
          sectionTitleElements[index].textContent = item.titre; // Utilisation de "titre" au lieu de "title"
        }
        if (sectionDescriptionElements[index]) {
          sectionDescriptionElements[index].textContent = item.description;
        }
      });

      const navItems = document.querySelectorAll(".navbar-nav .nav-item a"); // Sélectionne tous les <a> dans les <li>
      data.menuEntries.forEach((menu, index) => {
        if (navItems[index]) {
          // Vérifie que l'élément existe
          navItems[index].textContent = menu.entry;
        }
      });
      // Parcours chaque formation dans le JSON et l'affiche dans l'ordre
      data.formations.forEach((formation, index) => {
        if (formations[index]) {
          // Vérifie que l'élément HTML existe
          formations[index].querySelector(".cursus-title").textContent =
            formation.titre;
          formations[index].querySelector(".cursus-spec").textContent =
            formation.description;
          formations[index].querySelector(".cursus-details").textContent =
            formation.date;
        }
      });
    })
    .catch((error) => console.error("Erreur de chargement du JSON :", error));
}

// Charger la langue sauvegardée ou mettre par défaut le français
const langueSauvegardee = localStorage.getItem("langue") || "fr";
changerLangue(langueSauvegardee);
