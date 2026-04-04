import { Question } from "./questions.js";
import { getLeaderboard, createPlayer, storeScore, getDifficulty } from './scoring.js';

export function startQuiz(questions: Question[], playerName: string) {
    let score = 0;
    let currentIndex = 0;
    const container = document.getElementById("quiz-container");
    
    function showQuestion(index: number) {
        const q = questions[index];
        if (!q) return;
        
        if (container) {
            container.innerHTML = `
                <div class="card-body row g-0 p-0">
                    <div class="card-left col-lg-6">
                        <div class="d-flex mb-5">
                            <div class="circle">1</div>
                            <div class="circle">2</div>
                            <div class="circle">3</div>
                            <div class="circle">4</div>
                            <div class="circle">5</div>
                        </div>
                        <span class="kategorie">${q.category}</span>
                        <p class="question">${q.text}</p>
                    </div>
                    <div class="col-lg-6 bg-secondary d-flex p-5">
                        <div class="d-flex flex-column justify-content-center align-items-center w-100">
                            ${q.options.map(opt => `<p class="answer">${opt}</p>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
        
        const buttons = document.querySelectorAll('.answer');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.textContent === q.correctAnswer) {
                    score += getDifficulty(q.difficulty);
                }
                
                if (index + 1 < questions.length) {
                    showQuestion(index + 1);
                } else {
                    // Quiz finished
                    const player = createPlayer(playerName, score, questions);
                    storeScore(player);
                    
                    // Hide quiz, show leaderboard
                    if (container) container.style.display = "none";
                    const leaderboardEl = document.getElementById("leaderboard");
                    if (leaderboardEl) leaderboardEl.style.display = "block";
                    
                    displayLeaderboard();
                }
            });
        });
    }
    
    showQuestion(0);
}

export function displayLeaderboard(): void {
    const leaderboard = getLeaderboard();
    const leaderboardEl = document.getElementById('leaderboard') as HTMLElement;

    leaderboardEl.innerHTML = `
        <h2>Leaderboard</h2>
        <div class="row d-flex pt-2 mb-5">
            <div class="col-lg-10 d-flex flex-column justify-content-center align-items-center" id="names"></div>
            <div class="col-lg-2 d-flex flex-column justify-content-center align-items-center" id="scores"></div>
        </div>
    `;

    const namesEl = document.getElementById('names')!;
    const scoresEl = document.getElementById('scores')!;

    leaderboard.forEach((entry) => {
        const nameP = document.createElement('p');
        nameP.className = 'person';
        nameP.textContent = entry.name;

        const scoreP = document.createElement('p');
        scoreP.className = 'text-center score';
        scoreP.textContent = `${entry.score} (${entry.percentage}%)`;

        namesEl.appendChild(nameP);
        scoresEl.appendChild(scoreP);
    });
}

