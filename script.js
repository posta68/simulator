const types = {
  Autonomer: {
    title: "Die Autonome unter Postautonomen",
    description:
      "Ohne Autonome auch keine Postautonomen. Denn ohne Widerspruch geht es nicht. Wo immer das Wort ZU+ fällt springst du in die Debatte ein und wo immer die lokale Selbstorganisierung möglich ist, statt Organizing Ansprachen wedelst du ganz weit oben mit. Stay strong, wir brauchen dich!"
  },
  Bündnis: {
    title: "Der Bündnis Ultra",
    description:
      "Egal welche Politik: Hauptsachen breite Bündnisse und einen ordentlichen zivilen Ungerhorsam auf der Straße. Scharnier und Hegemonie sind deine häufigsten Worte im Plenum und du träumst immer noch davon, dass Herbert Grönemeyer endlich mal bei Blockaden spielt."
  },
  Organizerin: {
    title: "Die Organizerin",
    description:
      "Die Organisierung von Menschen liegt dir am Herzen. Dass das nicht früher passiert ist, siehst du als Problem. Umso mehr müssen wir jetzt alles daran setzen, dass wir damit in den aktuellen Zeiten Menschen ansprechen."
  },
  Anarcho: {
    title: "Der Anarcho",
    description:
      "Dir sind Ordnung und Struktur eigentlich egal und weißt auch nicht so richtig, wie du hier eigentlich gelandet bist. Aber die Menschen sind lieb und haben auch nichts dagegen, wenn du hier bisschen Anarchismus in die Debatte streust."
  }
};

const questions = [
  {
    text: "Wie bewertest du die letzte Aktion der Vulkangruppe?",
    answers: [
      {
        text: "Endlich mal eine Aktion die bei schädlichen Unternehmen ordentlichen Schaden angerichtet hat",
        scores: { Autonomer: 2 }
      },
      {
        text: "Grundsätzlich gut, aber hätten die das mal mit den Omas gegen Rechts gemacht",
        scores: { Bündnis: 2 }
      },
      {
        text: "So eine dumme Aktion! Hat uns als Linke total geschadet",
        scores: { Organizerin: 2 }
      },
      {
        text: "Mehr davon!",
        scores: { Anarcho: 2 }
      }
    ]
  },
  {
    text: "Ein Bündnis mit der SPD ist aus deiner Sicht...",
    answers: [
      {
        text: "grundsätzlich nicht auszuschließen",
        scores: { Organizerin: 2 }
      },
      {
        text: "immer abzulehnen!",
        scores: { Autonomer: 2 }
      },
      {
        text: "kann bei allem außer Asylpoltik erwogen werden.",
        scores: { Bündnis: 2 }
      },
      {
        text: "...WER HAT UNS VERRATEN?",
        scores: { Anarcho: 2 }
      }
    ]
  },
  {
    text: "Wenn wir es in die Tagesschau geschafft haben, dann...",
    answers: [
      {
        text: "...ist die Aktion erfolgreich gewesen",
        scores: { Bündnis: 2 }
      },
      {
        text: "...kommt es immer noch darauf an, ob anschlussfähig ist, was gesagt wird.",
        scores: { Organizerin: 2 }
      },
      {
        text: "...ist mir das eigentlich egal",
        scores: { Anarcho: 2 }
      },
      {
        text: "...hoffe ich, dass nicht nur die bunte Demo gezeigt wird.",
        scores: { Autonomer: 2 }
      }
    ]
  }
];

let currentQuestionIndex = 0;
let scores = {};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");

const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const scoreDetails = document.getElementById("score-details");

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  scores = {};

  Object.keys(types).forEach(type => {
    scores[type] = 0;
  });

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionCounter.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
  questionText.textContent = currentQuestion.text;

  const progressPercent = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.classList.add("answer-button");
    button.textContent = answer.text;

    button.addEventListener("click", () => {
      selectAnswer(answer);
    });

    answersContainer.appendChild(button);
  });
}

function selectAnswer(answer) {
  Object.entries(answer.scores).forEach(([type, points]) => {
    scores[type] += points;
  });

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressBar.style.width = "100%";

  const winningType = getWinningType();

  resultTitle.textContent = types[winningType].title;
  resultDescription.textContent = types[winningType].description;

  showScoreDetails();
}

function getWinningType() {
  let highestType = null;
  let highestScore = -1;

  Object.entries(scores).forEach(([type, score]) => {
    if (score > highestScore) {
      highestScore = score;
      highestType = type;
    }
  });

  return highestType;
}

function showScoreDetails() {
  scoreDetails.innerHTML = "<h3>Punkteübersicht</h3>";

  Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, score]) => {
      const row = document.createElement("div");
      row.classList.add("score-row");

      row.innerHTML = `
        <span>${types[type].title}</span>
        <strong>${score}</strong>
      `;

      scoreDetails.appendChild(row);
    });
}
