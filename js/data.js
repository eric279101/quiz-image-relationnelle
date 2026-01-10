// Données du quiz (25 questions)

const quizData = [
  {
    question: "Quand une relation devient intense, tu as tendance à...",
    answers: [
      { text: "Te rapprocher encore plus", profile: "intense" },
      { text: "Prendre un peu de distance", profile: "reserve" },
      { text: "T’adapter selon l’autre", profile: "adaptable" },
      { text: "Rester stable quoi qu’il arrive", profile: "stable" }
    ]
  },
  {
    question: "Face à un conflit, tu préfères...",
    answers: [
      { text: "En parler immédiatement", profile: "intense" },
      { text: "Laisser retomber avant d’agir", profile: "reserve" },
      { text: "Chercher un compromis", profile: "adaptable" },
      { text: "Analyser calmement la situation", profile: "stable" }
    ]
  },
  {
    question: "Dans une relation idéale, ce qui compte le plus pour toi est...",
    answers: [
      { text: "La passion", profile: "intense" },
      { text: "La sécurité émotionnelle", profile: "reserve" },
      { text: "L’équilibre", profile: "adaptable" },
      { text: "La fiabilité", profile: "stable" }
    ]
  },
  {
    question: "Quand l’autre prend ses distances, tu...",
    answers: [
      { text: "Ressens un manque fort", profile: "intense" },
      { text: "Te recentres sur toi", profile: "reserve" },
      { text: "Tentes de t’ajuster", profile: "adaptable" },
      { text: "Acceptes sans paniquer", profile: "stable" }
    ]
  },
  {
    question: "Ton rapport à l’engagement est plutôt...",
    answers: [
      { text: "Total et fusionnel", profile: "intense" },
      { text: "Prudent et progressif", profile: "reserve" },
      { text: "Souple et évolutif", profile: "adaptable" },
      { text: "Serein et réfléchi", profile: "stable" }
    ]
  },

  // 6 → 25
  ...Array.from({ length: 20 }, (_, i) => ({
    question: `Question relationnelle ${i + 6}`,
    answers: [
      { text: "Réponse A", profile: "intense" },
      { text: "Réponse B", profile: "reserve" },
      { text: "Réponse C", profile: "adaptable" },
      { text: "Réponse D", profile: "stable" }
    ]
  }))
];
