const scores = JSON.parse(localStorage.getItem("quizScores"));

const profileTitle = document.getElementById("profile-title");
const profileDescription = document.getElementById("profile-description");

// Trouver le profil dominant
let bestProfile = null;
let bestScore = -1;

for (const profile in scores) {
  if (scores[profile] > bestScore) {
    bestScore = scores[profile];
    bestProfile = profile;
  }
}

// Contenu des profils
const profiles = {
  intense: {
    title: "Profil Intense",
    description: "Tu vis les relations avec passion et engagement émotionnel."
  },
  reserve: {
    title: "Profil Réservé",
    description: "Tu as besoin de temps et de recul pour te sentir en sécurité."
  },
  adaptable: {
    title: "Profil Adaptable",
    description: "Tu sais t’ajuster aux situations et aux personnes avec souplesse."
  },
  stable: {
    title: "Profil Stable",
    description: "Tu recherches avant tout la fiabilité et l’équilibre relationnel."
  }
};

// Affichage
profileTitle.textContent = profiles[bestProfile].title;
profileDescription.textContent = profiles[bestProfile].description;
