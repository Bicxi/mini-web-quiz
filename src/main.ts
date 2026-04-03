import { loadQuestions, getASetOfQuestionsForPlayer, Question } from "./questions.js";
import { displayLeaderboard } from "./ui.js";
import { createPlayer, storeScore, calculateScore } from "./scoring.js";

let score = 0;
let questions: Question[] = [];
let playerName = "";

// DOM ELEMENTE (für block und none)
const playerInputDiv = document.getElementById("player-input") as HTMLElement;
const quizContainerDiv = document.getElementById("quiz-container") as HTMLElement;
const leaderboardDiv = document.getElementById("leaderboard") as HTMLElement;

const inputEl = document.getElementById("player-name") as HTMLInputElement;
const buttonEl = document.getElementById("playBtn") as HTMLButtonElement;

// NAME EINGABE
buttonEl.addEventListener("click", async () => {
    playerName = inputEl.value.trim();
    if (!playerName) return;

    await loadQuestions();
    questions = getASetOfQuestionsForPlayer();

    // UI wechseln
    playerInputDiv.style.display = "none";
    //quizContainerDiv.style.display = "block";


    //zum Testen direkt zum Leaderboard
    finishQuiz();
});

/*loadQuestions().then(() => {
    const questions = getASetOfQuestionsForPlayer();
    console.log("Quiz ready!", questions);
    // TODO: start UI here
});*/

//function showQuestion() - questions anzeigen, dann answerQuestion()

//function answerQuestion() - checken, ob korrekt, score updaten, nächste Frage anzeigen oder Quiz beenden

// LEADERBOARD
function finishQuiz() {
    const player = createPlayer(playerName, score, questions);
    storeScore(player);

    // UI wechseln
    quizContainerDiv.style.display = "none";
    leaderboardDiv.style.display = "block";

    displayLeaderboard();
}