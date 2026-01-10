// Questionnaire – Image relationnelle perçue par les autres (25 questions)

const quizData = [
  {
    question: "Quand tu entres dans une relation (amicale ou amoureuse), les autres ont tendance à te percevoir comme…",
    answers: [
      { text: "Très impliqué(e), parfois intense", profile: "intense" },
      { text: "Discret(e), difficile à cerner", profile: "reserve" },
      { text: "Souple et facile à vivre", profile: "adaptable" },
      { text: "Calme et rassurant(e)", profile: "stable" }
    ]
  },
  {
    question: "Quand un lien commence à se renforcer, tu réagis plutôt en…",
    answers: [
      { text: "Investissant davantage émotionnellement", profile: "intense" },
      { text: "Prenant un peu de recul", profile: "reserve" },
      { text: "T’ajustant au rythme de l’autre", profile: "adaptable" },
      { text: "Gardant une attitude constante", profile: "stable" }
    ]
  },
  {
    question: "Les autres disent souvent de toi que tu es…",
    answers: [
      { text: "Passionné(e) ou entier(ère)", profile: "intense" },
      { text: "Réservé(e) ou pudique", profile: "reserve" },
      { text: "Compréhensif(ve)", profile: "adaptable" },
      { text: "Fiable et posé(e)", profile: "stable" }
    ]
  },
  {
    question: "Quand une relation devient inconfortable, tu as tendance à…",
    answers: [
      { text: "Exprimer rapidement ton ressenti", profile: "intense" },
      { text: "Te refermer provisoirement", profile: "reserve" },
      { text: "Chercher à apaiser la situation", profile: "adaptable" },
      { text: "Prendre du recul avec calme", profile: "stable" }
    ]
  },
  {
    question: "Face aux émotions fortes de l’autre, tu es plutôt perçu(e) comme quelqu’un qui…",
    answers: [
      { text: "Ressent tout très intensément", profile: "intense" },
      { text: "Observe sans trop se dévoiler", profile: "reserve" },
      { text: "S’ajuste à l’état émotionnel", profile: "adaptable" },
      { text: "Reste solide et rassurant", profile: "stable" }
    ]
  },
  {
    question: "Quand tu n’es pas d’accord, tu montres généralement…",
    answers: [
      { text: "Tes émotions sans filtre", profile: "intense" },
      { text: "Peu de choses, tu gardes pour toi", profile: "reserve" },
      { text: "Une volonté de comprendre l’autre", profile: "adaptable" },
      { text: "Une position posée et réfléchie", profile: "stable" }
    ]
  },
  {
    question: "Dans un groupe, ton attitude donne souvent l’image de quelqu’un de…",
    answers: [
      { text: "Très présent(e) et expressif(ve)", profile: "intense" },
      { text: "En retrait mais attentif(ve)", profile: "reserve" },
      { text: "À l’aise avec tout le monde", profile: "adaptable" },
      { text: "Stable et structurant(e)", profile: "stable" }
    ]
  },
  {
    question: "Quand un lien se distend, tu as tendance à…",
    answers: [
      { text: "Ressentir un manque rapidement", profile: "intense" },
      { text: "T’habituer sans trop en parler", profile: "reserve" },
      { text: "T’adapter à la nouvelle distance", profile: "adaptable" },
      { text: "Accepter la situation avec calme", profile: "stable" }
    ]
  },
  {
    question: "Les autres peuvent parfois te reprocher de…",
    answers: [
      { text: "Être trop impliqué(e)", profile: "intense" },
      { text: "Ne pas assez t’exprimer", profile: "reserve" },
      { text: "T’adapter au détriment de toi", profile: "adaptable" },
      { text: "Rester trop constant(e)", profile: "stable" }
    ]
  },
  {
    question: "Quand une relation évolue, tu es perçu(e) comme quelqu’un qui…",
    answers: [
      { text: "Vit les changements intensément", profile: "intense" },
      { text: "Observe avant de réagir", profile: "reserve" },
      { text: "S’ajuste progressivement", profile: "adaptable" },
      { text: "Maintient un cap stable", profile: "stable" }
    ]
  },
  {
    question: "Quand l’autre a besoin d’espace, tu réagis plutôt en…",
    answers: [
      { text: "Le ressentant comme une distance affective", profile: "intense" },
      { text: "Respectant le silence", profile: "reserve" },
      { text: "Cherchant le bon équilibre", profile: "adaptable" },
      { text: "Restant serein(e)", profile: "stable" }
    ]
  },
  {
    question: "Dans une relation durable, les autres te voient surtout comme…",
    answers: [
      { text: "Très investi(e)", profile: "intense" },
      { text: "Discret(e) mais présent(e)", profile: "reserve" },
      { text: "Flexible et conciliant(e)", profile: "adaptable" },
      { text: "Fiable sur la durée", profile: "stable" }
    ]
  },
  {
    question: "Quand tu es blessé(e), tu montres généralement…",
    answers: [
      { text: "Beaucoup d’émotion", profile: "intense" },
      { text: "Peu de choses extérieurement", profile: "reserve" },
      { text: "Une volonté d’arranger les choses", profile: "adaptable" },
      { text: "Une retenue calme", profile: "stable" }
    ]
  },
  {
    question: "Ton rapport aux autres donne souvent l’image de quelqu’un de…",
    answers: [
      { text: "Très engagé(e)", profile: "intense" },
      { text: "Protecteur(trice) de son intimité", profile: "reserve" },
      { text: "Ouvert(e) et modulable", profile: "adaptable" },
      { text: "Structurant(e)", profile: "stable" }
    ]
  },
  {
    question: "Quand une relation te questionne, tu es perçu(e) comme quelqu’un qui…",
    answers: [
      { text: "Réagit avec le cœur", profile: "intense" },
      { text: "Prend du recul intérieur", profile: "reserve" },
      { text: "Cherche l’ajustement", profile: "adaptable" },
      { text: "Analyse avec calme", profile: "stable" }
    ]
  },
  {
    question: "Les autres peuvent parfois se demander si tu es…",
    answers: [
      { text: "Trop impliqué(e)", profile: "intense" },
      { text: "Trop fermé(e)", profile: "reserve" },
      { text: "Trop accommodant(e)", profile: "adaptable" },
      { text: "Trop constant(e)", profile: "stable" }
    ]
  },
  {
    question: "Dans tes relations, tu renvoies surtout l’image de quelqu’un qui…",
    answers: [
      { text: "Vit intensément les liens", profile: "intense" },
      { text: "Protège sa sphère personnelle", profile: "reserve" },
      { text: "S’adapte aux situations", profile: "adaptable" },
      { text: "Offre un cadre sécurisant", profile: "stable" }
    ]
  },
  {
    question: "Quand l’autre doute, tu es perçu(e) comme…",
    answers: [
      { text: "Très impliqué(e) émotionnellement", profile: "intense" },
      { text: "Présent(e) mais discret(e)", profile: "reserve" },
      { text: "À l’écoute et conciliant(e)", profile: "adaptable" },
      { text: "Rassurant(e) et constant(e)", profile: "stable" }
    ]
  },
  {
    question: "Dans la durée, les autres te voient comme quelqu’un qui…",
    answers: [
      { text: "S’investit beaucoup", profile: "intense" },
      { text: "Reste en retrait", profile: "reserve" },
      { text: "Évolue avec la relation", profile: "adaptable" },
      { text: "Apporte de la stabilité", profile: "stable" }
    ]
  },
  {
    question: "Quand une relation se fragilise, tu montres surtout…",
    answers: [
      { text: "Une forte implication émotionnelle", profile: "intense" },
      { text: "Une distance protectrice", profile: "reserve" },
      { text: "Une volonté d’ajustement", profile: "adaptable" },
      { text: "Une attitude posée", profile: "stable" }
    ]
  },
  {
    question: "Ton image relationnelle globale est plutôt celle de quelqu’un de…",
    answers: [
      { text: "Très expressif(ve)", profile: "intense" },
      { text: "Mesuré(e)", profile: "reserve" },
      { text: "Souple", profile: "adaptable" },
      { text: "Structuré(e)", profile: "stable" }
    ]
  },
  {
    question: "Quand tu prends une place importante pour quelqu’un, tu es perçu(e) comme…",
    answers: [
      { text: "Très présent(e)", profile: "intense" },
      { text: "Discret(e)", profile: "reserve" },
      { text: "Ajustable", profile: "adaptable" },
      { text: "Soutenant(e)", profile: "stable" }
    ]
  },
  {
    question: "Dans les moments sensibles, tu donnes l’image de quelqu’un qui…",
    answers: [
      { text: "Ressent profondément", profile: "intense" },
      { text: "Se protège", profile: "reserve" },
      { text: "S’adapte", profile: "adaptable" },
      { text: "Reste solide", profile: "stable" }
    ]
  },
  {
    question: "Globalement, les autres te perçoivent comme quelqu’un qui…",
    answers: [
      { text: "Vit les relations intensément", profile: "intense" },
      { text: "Garde une part de distance", profile: "reserve" },
      { text: "S’ajuste aux personnes", profile: "adaptable" },
      { text: "Offre de la constance", profile: "stable" }
    ]
  }
];
