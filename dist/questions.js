let questionBank = [];
export function loadQuestions() {
    return fetch("../data/questions.json")
        .then(r => r.json())
        .then(d => { questionBank = d.questions; })
        .catch(() => { questionBank = FALLBACK_QUESTIONS; });
}
export function getASetOfQuestionsForPlayer() {
    // For now: first 5
    // Later: implement 2 Easy, 2 Medium, 1 Hard selection
    return questionBank.slice(0, 5);
}
const FALLBACK_QUESTIONS = [
    { id: 1, text: "What is 2+2?", options: ["3", "4", "5"], correctAnswer: "4", difficulty: "Easy", category: "Math" },
    { id: 2, text: "What color is the sky?", options: ["Green", "Blue", "Red"], correctAnswer: "Blue", difficulty: "Easy", category: "General" },
    { id: 3, text: "Which language runs in a browser?", options: ["C++", "Java", "JavaScript"], correctAnswer: "JavaScript", difficulty: "Medium", category: "Programming" },
    { id: 4, text: "What does HTTP stand for?", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol"], correctAnswer: "HyperText Transfer Protocol", difficulty: "Medium", category: "Web" },
    { id: 5, text: "What is 7 x 8?", options: ["48", "56", "64"], correctAnswer: "56", difficulty: "Hard", category: "Math" }
];
