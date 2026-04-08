// ScoreManager
import { Question, getASetOfQuestionsForPlayer } from "./questions.js";

export interface scoreEntry {
    id: number;
    name: string;
    score: number;
    percentage: number;
}

export function getDifficulty(difficulty: "Easy" | "Medium" | "Hard"): number {
    switch (difficulty) {
        case "Easy": return 1;
        case "Medium": return 2;
        case "Hard": return 3;
    }
}

//JEDE FRAGE
export function calculateScore(currentScore: number, question: Question, isCorrect: boolean): number {
    if (!isCorrect) return currentScore; //checken, ob korrekt 
    return currentScore + getDifficulty(question.difficulty);
}

//PROZENT
export function calculatePercentage(score: number): number {
    // 1hard + 2medium + 2easy = 9 
    const maxPossible = 9;
    return Math.round((score / maxPossible) * 100);
}

//PLAYER
export function createPlayer(name: string, score: number, questions: Question[]): scoreEntry {
    return {
        id: Date.now(),
        name,
        score,
        percentage: calculatePercentage(score)
    };
}

//SPEICHERN
export function storeScore(entry: scoreEntry): void {
    const scores: scoreEntry[] = JSON.parse(localStorage.getItem('scores') || '[]');
    scores.push(entry);
    localStorage.setItem('scores', JSON.stringify(scores));
}

export function getLeaderboard(): scoreEntry[] {
    const scores: scoreEntry[] = JSON.parse(localStorage.getItem('scores') || '[]');

    return scores.sort((a, b) => b.score - a.score);
}