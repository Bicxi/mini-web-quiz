let questionBank = [];
export function loadQuestions() {
    return fetch("../data/questions.json")
        .then(r => r.json())
        .then(d => { questionBank = d.questions; })
        .catch(() => { questionBank = FALLBACK_QUESTIONS; });
}
export function getASetOfQuestionsForPlayer() {
    const easy = questionBank.filter(q => q.difficulty === "Easy");
    const medium = questionBank.filter(q => q.difficulty === "Medium");
    const hard = questionBank.filter(q => q.difficulty === "Hard");
    const getRandom = (arr) => {
        return arr[Math.floor(Math.random() * arr.length)];
    };
    return [
        getRandom(easy), getRandom(easy),
        getRandom(medium), getRandom(medium),
        getRandom(hard)
    ];
}
const FALLBACK_QUESTIONS = [
    { id: 1, text: "What do you call a sleeping bull?", options: ["A bulldozer", "A bullnap", "A snore", "A beef cake"], correctAnswer: "A bulldozer", difficulty: "Easy", category: "Jokes" },
    { id: 2, text: "Why did the scarecrow win an award?", options: ["Because he was outstanding in his field", "Because he was full of straw", "Because he scared everyone", "Because he was very brave"], correctAnswer: "Because he was outstanding in his field", difficulty: "Easy", category: "Jokes" },
    { id: 3, text: "What has keys but no locks?", options: ["A piano", "A map", "A keyboard", "A treasure chest"], correctAnswer: "A piano", difficulty: "Easy", category: "Riddles" },
    { id: 4, text: "What has a face and two hands but no arms or legs?", options: ["A clock", "A watch", "A mirror", "A doll"], correctAnswer: "A clock", difficulty: "Easy", category: "Riddles" },
    { id: 5, text: "What comes once in a minute, twice in a moment, but never in a thousand years?", options: ["The letter M", "The number 1", "A heartbeat", "A blink"], correctAnswer: "The letter M", difficulty: "Medium", category: "Riddles" },
    { id: 6, text: "What can you catch but not throw?", options: ["A cold", "A ball", "A fish", "A bus"], correctAnswer: "A cold", difficulty: "Medium", category: "Riddles" },
    { id: 7, text: "What has a head, a tail, but no body?", options: ["A coin", "A snake", "A letter", "A comet"], correctAnswer: "A coin", difficulty: "Medium", category: "Riddles" },
    { id: 8, text: "What gets wetter as it dries?", options: ["A towel", "A sponge", "A raincoat", "The sun"], correctAnswer: "A towel", difficulty: "Medium", category: "Riddles" },
    { id: 9, text: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", options: ["An echo", "A whisper", "The wind itself", "A rumor"], correctAnswer: "An echo", difficulty: "Hard", category: "Riddles" },
    { id: 10, text: "The more you take, the more you leave behind. What are they?", options: ["Footsteps", "Memories", "Breaths", "Photographs"], correctAnswer: "Footsteps", difficulty: "Hard", category: "Riddles" }
];
