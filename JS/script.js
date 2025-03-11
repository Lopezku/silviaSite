function changerLangue(langue) {
  localStorage.setItem("langue", langue); // Sauvegarde la langue choisie
  fetch(`assets/languages/${langue}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP ${response.status} - Fichier introuvable`);
      }
      console.log("::::::::::::::::::::", response);
      return response.json();
    })
    .then((data) => {
      console.log("🚀 ~ .:::: then ~ data:", data);
      const formations = document.querySelectorAll(".cursus-elt-text"); // Récupère tous les blocs formations
      const titreFormation = document.getElementById("titre-formation");
      titreFormation.innerText = data.titreFormation;
      console.log("🚀 ~ :::: .then ~ titreFormation:", titreFormation);

      const navItems = document.querySelectorAll(".navbar-nav .nav-item a"); // Sélectionne tous les <a> dans les <li>

      data.menuEntries.forEach((menu, index) => {
        if (navItems[index]) {
          // Vérifie que l'élément existe
          navItems[index].textContent = menu.entry;
        }
      });
      // Parcours chaque formation dans le JSON et l'affiche dans l'ordre
      data.formations.forEach((formation, index) => {
        console.log(
          "🚀 ~ :::::: data.formations.forEach ~ formation:",
          formation
        );
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
