import { loadQuestions, getASetOfQuestionsForPlayer } from "./questions.js";

loadQuestions().then(() => {
    const questions = getASetOfQuestionsForPlayer();
    console.log("Quiz ready!", questions);
    // TODO: start UI here
});