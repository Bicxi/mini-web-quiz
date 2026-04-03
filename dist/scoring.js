"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDifficulty = getDifficulty;
exports.calculateScore = calculateScore;
exports.calculatePercentage = calculatePercentage;
exports.createPlayer = createPlayer;
exports.storeScore = storeScore;
exports.getLeaderboard = getLeaderboard;
// ScoreManager
const questions_js_1 = require("./questions.js");
function getDifficulty(difficulty) {
    switch (difficulty) {
        case "Easy": return 1;
        case "Medium": return 2;
        case "Hard": return 3;
    }
}
//JEDE FRAGE
function calculateScore(currentScore, question, isCorrect) {
    if (!isCorrect)
        return currentScore; //checken, ob korrekt 
    return currentScore + getDifficulty(question.difficulty);
}
//PROZENT
function calculatePercentage(score) {
    // 2hard + 2medium + 1easy = 10 
    const maxPossible = 10;
    return Math.round((score / maxPossible) * 100);
}
//PLAYER
function createPlayer(name, score, questions) {
    return {
        id: Date.now(),
        name,
        score,
        percentage: calculatePercentage(score)
    };
}
//SPEICHERN
function storeScore(entry) {
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    scores.push(entry);
    localStorage.setItem('scores', JSON.stringify(scores));
}
function getLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    return scores.sort((a, b) => b.score - a.score);
}
//EINGABE PLAYER
const inputEl = document.getElementById("player-name");
const buttonEl = document.getElementById("playBtn");
if (inputEl && buttonEl) {
    buttonEl.addEventListener("click", () => {
        const name = inputEl.value.trim();
        if (!name)
            return;
        //Beispiel (später vom Quiz ersetzen!)
        const questions = (0, questions_js_1.getASetOfQuestionsForPlayer)();
        const score = 0;
        const newPlayer = createPlayer(name, score, questions);
        storeScore(newPlayer);
    });
}
