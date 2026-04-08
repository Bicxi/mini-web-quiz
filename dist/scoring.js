export function getDifficulty(difficulty) {
    switch (difficulty) {
        case "Easy": return 1;
        case "Medium": return 2;
        case "Hard": return 3;
    }
}
//JEDE FRAGE
export function calculateScore(currentScore, question, isCorrect) {
    if (!isCorrect)
        return currentScore; //checken, ob korrekt 
    return currentScore + getDifficulty(question.difficulty);
}
//PROZENT
export function calculatePercentage(score) {
    // 1hard + 2medium + 2easy = 9
    const maxPossible = 9;
    return Math.round((score / maxPossible) * 100);
}
//PLAYER
export function createPlayer(name, score, questions) {
    return {
        id: Date.now(),
        name,
        score,
        percentage: calculatePercentage(score)
    };
}
//SPEICHERN
export function storeScore(entry) {
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    scores.push(entry);
    localStorage.setItem('scores', JSON.stringify(scores));
}
export function getLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    return scores.sort((a, b) => b.score - a.score);
}
