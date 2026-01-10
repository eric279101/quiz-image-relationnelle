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

  // Question
  questionEl.textContent = currentQuestion.question;

  // Réponses
  answersEl.innerHTML = "";
  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.addEventListener("click", () => {
      scores[answer.profile]++;
      nextQuestion();
    });

    answersEl.appendChild(btn);
  });

  // Barre de progression
  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  progressBar.style.width = progress + "%";
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    localStorage.setItem("quizScores", JSON.stringify(scores));
    window.location.href = "result.html";
  }
}

// Démarrage
showQuestion();
