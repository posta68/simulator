const types = {
  pragmatiker: {
    title: "Der Pragmatiker",
    description:
      "Du setzt auf machbare Lösungen, Kompromisse und Stabilität. Ideale sind dir wichtig, aber am Ende zählt für dich, was realistisch umsetzbar ist."
  },
  idealistin: {
    title: "Die Idealistin",
    description:
      "Du orientierst dich stark an Werten, Gerechtigkeit und gesellschaftlicher Veränderung. Politik soll für dich nicht nur verwalten, sondern verbessern."
  },
  freiheitsmensch: {
    title: "Der Freiheitsmensch",
    description:
      "Dir sind individuelle Freiheit, Eigenverantwortung und möglichst wenig Bevormundung besonders wichtig."
  },
  sicherheitsmensch: {
    title: "Der Sicherheitsmensch",
    description:
      "Du legst großen Wert auf Ordnung, Verlässlichkeit und Schutz vor Risiken. Veränderung sollte aus deiner Sicht kontrolliert und vorsichtig passieren."
  }
};

const questions = [
  {
    text: "Was ist dir in der Politik am wichtigsten?",
    answers: [
      {
        text: "Dass konkrete Probleme pragmatisch gelöst werden.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Dass die Gesellschaft gerechter wird.",
        scores: { idealistin: 2 }
      },
      {
        text: "Dass Menschen möglichst frei entscheiden können.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Dass Sicherheit und Ordnung gewährleistet bleiben.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Wie sollte der Staat mit wirtschaftlicher Ungleichheit umgehen?",
    answers: [
      {
        text: "Gezielt eingreifen, aber ohne die Wirtschaft zu überfordern.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Stark umverteilen, damit Chancen fairer verteilt sind.",
        scores: { idealistin: 2 }
      },
      {
        text: "Sich möglichst zurückhalten und Eigeninitiative fördern.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Vor allem soziale Stabilität sichern und Extreme vermeiden.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Was ist deine Haltung zu gesellschaftlichem Wandel?",
    answers: [
      {
        text: "Wandel ist gut, solange er realistisch gestaltet wird.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Wandel ist dringend nötig und sollte mutig vorangetrieben werden.",
        scores: { idealistin: 2 }
      },
      {
        text: "Wandel sollte aus der Gesellschaft selbst kommen, nicht vom Staat.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Wandel sollte langsam und kontrolliert passieren.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Wie sollte Klimapolitik aussehen?",
    answers: [
      {
        text: "Wirksam, aber wirtschaftlich und sozial gut abgefedert.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Sehr ambitioniert, auch wenn es kurzfristig unbequem wird.",
        scores: { idealistin: 2 }
      },
      {
        text: "Über Innovation, Marktmechanismen und persönliche Verantwortung.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Planbar und sicher, ohne abrupte Belastungen für Bürger.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Welche Aussage passt am ehesten zu dir?",
    answers: [
      {
        text: "Gute Politik braucht Kompromisse.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Gute Politik braucht Haltung.",
        scores: { idealistin: 2 }
      },
      {
        text: "Gute Politik lässt Menschen in Ruhe.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Gute Politik schützt vor Chaos.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Wie siehst du staatliche Regeln im Alltag?",
    answers: [
      {
        text: "Sinnvoll, wenn sie ein konkretes Problem lösen.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Notwendig, wenn sie Schwächere schützen.",
        scores: { idealistin: 2 }
      },
      {
        text: "Oft übertrieben; Menschen sollten selbst entscheiden.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Wichtig, damit Zusammenleben funktioniert.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Was überzeugt dich in einer politischen Debatte am meisten?",
    answers: [
      {
        text: "Ein realistischer Plan.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Ein klares moralisches Ziel.",
        scores: { idealistin: 2 }
      },
      {
        text: "Ein Argument für mehr Freiheit.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Ein Versprechen von Stabilität.",
        scores: { sicherheitsmensch: 2 }
      }
    ]
  },
  {
    text: "Wie sollte Politik mit Krisen umgehen?",
    answers: [
      {
        text: "Schnell handeln, aber laufend nachjustieren.",
        scores: { pragmatiker: 2 }
      },
      {
        text: "Die Krise nutzen, um grundlegende Probleme zu lösen.",
        scores: { idealistin: 2 }
      },
      {
        text: "Nicht unnötig in die Freiheit der Menschen eingreifen.",
        scores: { freiheitsmensch: 2 }
      },
      {
        text: "Klare Regeln und starke Institutionen schaffen.",
        scores: { sicherheitsmensch: 2 }
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
