let currentQuestionIndex = 0;
let scores = {
  intense: 0,
  reserve: 0,
  adaptable: 0,
  stable: 0
};

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];

  // Affiche la question
  questionEl.textContent = currentQuestion.question;

  // Vide les réponses précédentes
  answersEl.innerHTML = "";

  // Met à jour la barre de progression
  const progressPercent =
    ((currentQuestionIndex) / quizData.length) * 100;
  progressBar.style.width = progressPercent + "%";

  // Affiche les réponses
  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.onclick = () => {
      scores[answer.profile]++;
      currentQuestionIndex++;

      if (currentQuestionIndex < quizData.length) {
        showQuestion();
      } else {
        // Fin du quiz → sauvegarde + redirection
        localStorage.setItem("quizScores", JSON.stringify(scores));
        window.location.href = "result.html";
      }
    };

    answersEl.appendChild(btn);
  });
}

// Lancement du quiz
showQuestion();
