let currentQuestionIndex = 0;

const scores = {
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
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.onclick = () => selectAnswer(answer.profile);
    answersEl.appendChild(button);
  });

  updateProgress();
}

function selectAnswer(profile) {
  scores[profile]++;
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function updateProgress() {
  const progress = ((currentQuestionIndex) / quizData.length) * 100;
  progressBar.style.width = progress + "%";
}

function finishQuiz() {
  localStorage.setItem("quizScores", JSON.stringify(scores));
  window.location.href = "result.html";
}

// Lancer la première question
showQuestion();
