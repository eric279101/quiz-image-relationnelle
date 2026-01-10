const scores = JSON.parse(localStorage.getItem("quizScores"));

const titleEl = document.getElementById("profile-title");
const summaryEl = document.getElementById("profile-summary");
const perceptionEl = document.getElementById("profile-perception");
const blindspotEl = document.getElementById("profile-blindspot");

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
    summary:
      "Tu vis les relations avec beaucoup d’engagement émotionnel. Les liens prennent rapidement une place importante dans ta vie.",
    perception:
      "Les autres te perçoivent comme quelqu’un de très investi, présent et profondément impliqué. Ta capacité à ressentir fort crée souvent des liens puissants.",
    blindspot:
      "Sans t’en rendre compte, ton intensité peut parfois être perçue comme une pression émotionnelle ou une attente implicite."
  },

  reserve: {
    title: "Profil Réservé",
    summary:
      "Tu avances avec prudence dans les relations et accordes une grande importance à ton espace intérieur.",
    perception:
      "Les autres te perçoivent comme quelqu’un de discret, calme et réfléchi. Ton recul inspire souvent le respect et la confiance.",
    blindspot:
      "Sans t’en rendre compte, cette réserve peut être interprétée comme une distance émotionnelle ou un manque d’implication."
  },

  adaptable: {
    title: "Profil Adaptable",
    summary:
      "Tu sais t’ajuster aux personnes et aux situations avec souplesse, ce qui te rend facile à vivre.",
    perception:
      "Les autres te perçoivent comme quelqu’un de compréhensif, conciliant et agréable dans les relations.",
    blindspot:
      "Sans t’en rendre compte, cette capacité d’adaptation peut parfois masquer tes propres besoins."
  },

  stable: {
    title: "Profil Stable",
    summary:
      "Tu recherches la constance et l’équilibre dans les relations, et tu inspires naturellement la sécurité.",
    perception:
      "Les autres te perçoivent comme quelqu’un de fiable, posé et rassurant, sur qui l’on peut compter.",
    blindspot:
      "Sans t’en rendre compte, cette stabilité peut parfois être perçue comme une certaine rigidité émotionnelle."
  }
};

// Injection du contenu
const profile = profiles[bestProfile];

titleEl.textContent = profile.title;
summaryEl.textContent = profile.summary;
perceptionEl.textContent = profile.perception;
blindspotEl.textContent = profile.blindspot;
