import { loadQuestions, getASetOfQuestionsForPlayer } from "./questions.js";
import { startQuiz, displayLeaderboard } from "./ui.js";
const startButton = document.getElementById("playBtn");
const playerInputDiv = document.getElementById("player-input");
const playerNameInput = document.getElementById("player-name");
const quizContainer = document.getElementById("quiz-container");
const leaderboardEl = document.getElementById("leaderboard");
//WECHSELN DER MODULE:
function showStart() {
    if (leaderboardEl)
        leaderboardEl.style.display = "none";
    if (quizContainer)
        quizContainer.style.display = "none";
    if (playerInputDiv)
        playerInputDiv.style.display = "block";
}
function showQuiz() {
    if (playerInputDiv)
        playerInputDiv.style.display = "none";
    if (quizContainer)
        quizContainer.style.display = "block";
}
function showLeaderboard() {
    if (quizContainer)
        quizContainer.style.display = "none";
    if (leaderboardEl)
        leaderboardEl.style.display = "block";
    displayLeaderboard(() => {
        showStart(); //neuer Versuch
    });
}
startButton?.addEventListener("click", async () => {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Bitte gib deinen Namen ein!");
        return;
    }
    await loadQuestions();
    const questions = getASetOfQuestionsForPlayer();
    showQuiz();
    startQuiz(questions, playerName, () => {
        showLeaderboard();
    });
});
