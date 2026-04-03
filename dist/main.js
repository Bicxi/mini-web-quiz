import { displayLeaderboard } from "./ui.js";
import { createPlayer, storeScore } from "./scoring.js";
let score = 0;
let questions = [];
let playerName = "";
// DOM ELEMENTE (für block und none)
const playerInputDiv = document.getElementById("player-input");
const quizContainerDiv = document.getElementById("quiz-container");
const leaderboardDiv = document.getElementById("leaderboard");
const inputEl = document.getElementById("player-name");
const buttonEl = document.getElementById("playBtn");
// NAME EINGABE
buttonEl.addEventListener("click", async () => {
    playerName = inputEl.value.trim();
    if (!playerName)
        return;
    //zum Testen direkt zum Leaderboard, später: Fragen laden und Quiz starten
    //await loadQuestions();
    //questions = getASetOfQuestionsForPlayer();
    // UI wechseln
    //playerInputDiv.style.display = "none";
    //quizContainerDiv.style.display = "block";
    //showQuestions();
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
    playerInputDiv.style.display = "none"; //für jetzt mal hier
    //quizContainerDiv.style.display = "none";
    leaderboardDiv.style.display = "block";
    displayLeaderboard();
}
