"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questions_js_1 = require("./questions.js");
const ui_js_1 = require("./ui.js");
const scoring_js_1 = require("./scoring.js");
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
    await (0, questions_js_1.loadQuestions)();
    questions = (0, questions_js_1.getASetOfQuestionsForPlayer)();
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
    const player = (0, scoring_js_1.createPlayer)(playerName, score, questions);
    (0, scoring_js_1.storeScore)(player);
    // UI wechseln
    quizContainerDiv.style.display = "none";
    leaderboardDiv.style.display = "block";
    (0, ui_js_1.displayLeaderboard)();
}
