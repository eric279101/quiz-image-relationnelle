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
    description: `
    Tu vis les relations avec une forte intensité émotionnelle.
    Tu ressens tout très fort : l’attachement, le manque, les tensions.
    Tu as besoin de profondeur, de connexion vraie, et tu supportes mal
    les relations tièdes ou superficielles.

    👉 Ton défi : apprendre à canaliser cette intensité pour ne pas t’épuiser
    ni te sentir incompris(e).
    `
  },

  reserve: {
    title: "Profil Réservé",
    description: `
    Tu avances avec prudence dans les relations.
    Tu observes, tu analyses, tu protèges ton monde intérieur.
    La confiance est essentielle pour toi, mais elle prend du temps.

    👉 Ton défi : exprimer plus clairement tes besoins avant que la distance
    ne s’installe.
    `
  },

  adaptable: {
    title: "Profil Adaptable",
    description: `
    Tu sais t’ajuster aux autres avec une grande souplesse.
    Tu fais souvent passer l’harmonie avant tes propres besoins.
    Cela te rend agréable à vivre, mais parfois invisible.

    👉 Ton défi : ne pas te perdre en voulant trop t’adapter.
    `
  },

  stable: {
    title: "Profil Stable",
    description: `
    Tu recherches avant tout la sécurité émotionnelle.
    Les relations fiables, cohérentes et prévisibles te rassurent.
    Tu es constant(e), engagé(e), et profondément loyal(e).

    👉 Ton défi : accepter que l’émotion et l’imprévu fassent aussi partie
    de toute relation vivante.
    `
  }
};

// Injection du contenu
const profile = profiles[bestProfile];

titleEl.textContent = profile.title;
summaryEl.textContent = profile.summary;
perceptionEl.textContent = profile.perception;
blindspotEl.textContent = profile.blindspot;
