import { getLeaderboard } from './scoring.js';
function displaySomething() {
}
export function displayLeaderboard() {
    const leaderboard = getLeaderboard();
    const leaderboardEl = document.getElementById('leaderboard');
    leaderboardEl.innerHTML = `
        <h2>Leaderboard</h2>
        <div class="row d-flex pt-2 mb-5">
            <div class="col-lg-10 d-flex flex-column justify-content-center align-items-center" id="names"></div>
            <div class="col-lg-2 d-flex flex-column justify-content-center align-items-center" id="scores"></div>
        </div>
    `;
    const namesEl = document.getElementById('names');
    const scoresEl = document.getElementById('scores');
    leaderboard.forEach((entry, index) => {
        // NAME
        const nameP = document.createElement('p');
        nameP.className = 'person';
        nameP.textContent = entry.name;
        // SCORE
        const scoreP = document.createElement('p');
        scoreP.className = 'text-center score';
        scoreP.textContent = `${entry.score} (${entry.percentage}%)`;
        namesEl.appendChild(nameP);
        scoresEl.appendChild(scoreP);
    });
}
