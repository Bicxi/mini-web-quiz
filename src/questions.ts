export interface Question {
    id: number;
    text: string;
    options: string[];
    correctAnswer: string;
    difficulty: "Easy" | "Medium" | "Hard";
    category: string;
}

let questionBank: Question[] = [];

export function loadQuestions(): Promise<void> {
    return fetch("/data/questions.json")
        .then(response => response.json())
        .then(data => {
            questionBank = data.questions;
        });
}

export function getASetOfQuestionsForPlayer(): Question[] {
    // For now: first 5
    // Later: implement 2 Easy, 2 Medium, 1 Hard selection
    return questionBank.slice(0, 5);
}