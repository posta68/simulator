const types = {
  Autonomer: {
    title: "Die Autonome unter Postautonomen",
    description:
      "Ohne Autonome auch keine Postautonomen. Denn ohne Widerspruch geht es nicht. Wo immer das Wort ZU+ fällt springst du in die Debatte ein und im Antiautoritären Block bei der 1. Mai Demo denkst du wehmütig an die Zeiten im schwarzen Block zurück. Stay strong, wir brauchen dich!"
  },
  Bündnis: {
    title: "Bündnis Ultra",
    description:
      "Egal welches Projekt: Hauptsachen breite Bündnisse. Eigentlich machst du einfach NGO Arbeit, weil das freiwillige politische Jahr aber noch nicht eingeführt wurde, machst du das leider unbezahlt. Scharnier und Hegemonie sind deine häufigsten Worte im Plenum und du träumst immer noch davon, dass Herbert Grönemeyer endlich mal bei Blockaden spielt."
  },
  Strategie: {
    title: "Die Strategie Maus",
    description:
      "Entscheidungen bevor nicht mindestens vier diskussionsreiche Plena vergangenen sind in denen diskutiert wurde und ohne, dass ein Strategiepapier geschrieben wurde? Undenkbar für dich! Du willst bloß nichts überstürzen, um dann nicht wieder ein Jahr mit einem Projekt zu verbringen, dass sowieso nicht fliegen wird. Zum Glück haben wir dich, denn wenn du einen VV Slot vorbereitest werden die Diskussionsfragen schon eine Woche vorher an alle verschickt."
  },
  Anarcho: {
    title: "Anarcho auf lieb",
    description:
      "Dir sind Ordnung und Struktur nicht immer so wichtig und weißt auch nicht so richtig, wie du hier eigentlich gelandet bist. Aber die Menschen sind lieb und haben auch nichts dagegen, wenn du hier bisschen Anarchismus in die Debatte streust. Und spätenstens bei Aktionen bist du immer direkt am Start."
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
        scores: { Strategie: 2 }
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
        scores: { Strategie: 2 }
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
        scores: { Strategie: 2 }
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
  }, 
  {
    text: "Auf einer Demo trage ich Klamotten...",
    answers: [
      {
        text: "in der Farbe, die vorher abgesprochen wurde.",
        scores: { Strategie: 2 }
      },
      {
        text: "in schwarz, lila, leo.",
        scores: { Anarcho: 2 }
      },
      {
        text: "in bunt.",
        scores: { Bündnis: 2 }
      },
      {
        text: "natürlich Wechselklamotten",
        scores: { Autonomer: 2 }
      }
    ]
  },
  {
    text: "Wenn jemand bei einem Plenum sagt >>Keine Namen, keine Strukturen<<, ist deine Reaktion...",
    answers: [
      {
        text: "Hallo, ich bin _Klarname_ aus der iL Berlin",
        scores: { Bündnis: 2 }
      },
      {
        text: "Finde ich angebracht und sag beim Bier danach trotzdem meinen Klarnamen",
        scores: { Autonomer: 2 }
      },
      {
        text: "Klarnamen? fragte sich Dachs",
        scores: { Anarcho: 2 }
      },
      {
        text: "Wie soll ich die Leute nach dem Plenum jetzt zur Signal Gruppe hinzufügen?",
        scores: { Strategie: 2 }
      }
    ]
  },
  {
    text: "Wenn ich den schwarzen Block sehe, dann...",
    answers: [
      {
        text: "kriege ich nostalgische Gefühle",
        scores: { Autonomer: 2 }
      },
      {
        text: "finde ich das nicht zielführend.",
        scores: { Strategie: 2 }
      },
      {
        text: "finde ich schade, dass die nicht unser Banner tragen.",
        scores: { Bündnis: 2 }
      },
      {
        text: "denke ich: mausiger FLINTA-only Block",
        scores: { Anarcho: 2 }
      }
    ]
  },
  {
    text: "Mit Klarnamen und Gesicht für die IL/bzw. gemeinsame Bündnisse Pressearbeit machen...",
    answers: [
      {
        text: "ist heutzutage zu gefährlich.",
        scores: { Autonomer: 2 }
      },
      {
        text: "ist heutzutage besonders notwendig.",
        scores: { Bündnis: 2 }
      },
      {
        text: "hat noch nie Sinn ergeben.",
        scores: { Bündnis: 2 }
      },
      {
        text: "kann erst nach dem dritten Workshop bei Emily Laquer gelingen (ehemalige IL Genossin und Pressesprecherin)",
        scores: { Strategie: 2 }
      }
    ]
  },
  {
    text: "In meinem Umfeld wissen alle dass ich in der IL bin?",
    answers: [
      {
        text: "Meine Friends schon, aber die Menschen bei der Arbeit nicht",
        scores: { Strategie: 2 }
      },
      {
        text: "Meine Friends nicht, aber die Menschen bei der Arbeit schon, denn Arbeitsumfeld = Bündnisumfeld",
        scores: { Bündnis: 2 }
      },
      {
        text: "Ja, und dafür werde ich von meinen autonomen Friends auch ganz schön kritisiert.",
        scores: { Autonomer: 2 }
      },
      {
        text: "Keine Namen, keine Strukturen.",
        scores: { Anarcho: 2 }
      }
    ]
  }, 
  {
    text: "Nach einer Aktion trinke ich am liebsten...",
    answers: [
      {
        text: "Sterni",
        scores: { Autonomer: 2 }
      },
      {
        text: "Apfelsaft vom Kollektivbetrieb",
        scores: { Anarcho: 2 }
      },
      {
        text: "Sekt",
        scores: { Strategie: 2 }
      },
      {
        text: "Bayrisches Helles",
        scores: { Bündnis: 2 }
      }
    ]
  }, 
  {
    text: "Eine Kleinengruppenaktion macht mir Spaß,...",
    answers: [
      {
        text: "wenn sie Teil einer Gesamtchoreografie zusammen mit einer großen Demo und Sitzblockaden ist.",
        scores: { Bündnis: 2, Strategie: 1 }
      },
      {
        text: "wenn wir uns als Gruppe ermächtig gefühlt und alle gut aufeinander geachtet haben ",
        scores: { Anarcho: 2 }
      },
      {
        text: "wenn wir eine neue Aktionsform ausprobiert haben",
        scores: { Autonomer: 1, Strategie: 1 }
      },
      {
        text: "wenn was brennt",
        scores: { Anarcho: 1, Autonomer: 1 }
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
