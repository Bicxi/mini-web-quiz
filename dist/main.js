import { loadQuestions, getASetOfQuestionsForPlayer } from "./questions.js";
import { startQuiz } from "./ui.js";
const startButton = document.getElementById("playBtn");
const playerInputDiv = document.getElementById("player-input");
const playerNameInput = document.getElementById("player-name");
const quizContainer = document.getElementById("quiz-container");
startButton?.addEventListener("click", async () => {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Bitte gib deinen Namen ein!");
        return;
    }
    await loadQuestions();
    const questions = getASetOfQuestionsForPlayer();
    if (playerInputDiv)
        playerInputDiv.style.display = "none";
    if (quizContainer)
        quizContainer.style.display = "block";
    startQuiz(questions, playerName);
});
