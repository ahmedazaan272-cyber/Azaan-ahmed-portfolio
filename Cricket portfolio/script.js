const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navList = document.querySelector("nav ul");
const searchInput = document.getElementById("searchInput");
const playerModal = document.getElementById("playerModal");
const closeModal = document.getElementById("closeModal");
const matchList = document.getElementById("matchList");
const scoreboardPanel = document.getElementById("scoreboardPanel");

const matchesData = [
    {
        label: "WORLD CUP • TODAY",
        teamA: "Pakistan",
        teamB: "India",
        venue: "Dubai International Stadium",
        time: "8:00 PM",
        status: "Live",
        battingTeam: "Pakistan",
        runs: 164,
        wickets: 4,
        overs: 18.2,
        target: 185,
        batting: [
            { name: "Babar Azam", runs: 58, balls: 42, fours: 6, sixes: 1, strikeRate: 138.1 },
            { name: "Mohammad Rizwan", runs: 41, balls: 31, fours: 5, sixes: 1, strikeRate: 132.3 },
            { name: "Saim Ayub", runs: 34, balls: 22, fours: 4, sixes: 2, strikeRate: 154.5 }
        ],
        bowling: [
            { name: "Jasprit Bumrah", overs: 4, maidens: 0, runs: 28, wickets: 1 },
            { name: "Kuldeep Yadav", overs: 4, maidens: 0, runs: 27, wickets: 1 },
            { name: "Hardik Pandya", overs: 3, maidens: 0, runs: 22, wickets: 1 }
        ]
    },
    {
        label: "T20 SERIES • TOMORROW",
        teamA: "Pakistan",
        teamB: "Australia",
        venue: "Gaddafi Stadium, Lahore",
        time: "7:30 PM",
        status: "Preview",
        battingTeam: "Pakistan",
        scoreText: "Starts in 23h"
    },
    {
        label: "ODI SERIES • 20 SEP",
        teamA: "Pakistan",
        teamB: "South Africa",
        venue: "National Stadium, Karachi",
        time: "4:00 PM",
        status: "Scheduled",
        battingTeam: "Pakistan",
        scoreText: "Matchday"
    }
];

function getMatchScore(match) {
    if (match.status === "Live") {
        return `${match.battingTeam} ${match.runs}/${match.wickets} (${match.overs.toFixed(1)})`;
    }
    return match.scoreText || "Match not started";
}

function getInningsTable(match) {
    if (match.status !== "Live") {
        return `
            <div class="innings-empty">
                <h3>Innings Summary</h3>
                <p>${match.scoreText || "No live innings available yet."}</p>
            </div>
        `;
    }

    return `
        <div class="innings-box">
            <h3>Innings Summary</h3>
            <div class="score-grid">
                <div>
                    <span>Team</span>
                    <strong>${match.battingTeam}</strong>
                </div>
                <div>
                    <span>Score</span>
                    <strong>${match.runs}/${match.wickets}</strong>
                </div>
                <div>
                    <span>Overs</span>
                    <strong>${match.overs.toFixed(1)}</strong>
                </div>
                <div>
                    <span>Target</span>
                    <strong>${match.target}</strong>
                </div>
            </div>

            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Batter</th>
                            <th>R</th>
                            <th>B</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${match.batting.map(player => `
                            <tr>
                                <td>${player.name}</td>
                                <td>${player.runs}</td>
                                <td>${player.balls}</td>
                                <td>${player.fours}</td>
                                <td>${player.sixes}</td>
                                <td>${player.strikeRate}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>

            <div class="table-wrap bowling-wrap">
                <h4>Bowling</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Bowler</th>
                            <th>O</th>
                            <th>M</th>
                            <th>R</th>
                            <th>W</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${match.bowling.map(player => `
                            <tr>
                                <td>${player.name}</td>
                                <td>${player.overs}</td>
                                <td>${player.maidens}</td>
                                <td>${player.runs}</td>
                                <td>${player.wickets}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function renderMatches() {
    if (!matchList) return;

    matchList.innerHTML = matchesData
        .map(match => `
            <div class="match-card">
                <small>${match.label}</small>
                <h3>${match.teamA} <span>VS</span> ${match.teamB}</h3>
                <p>🏟️ ${match.venue}</p>
                <div class="match-meta">
                    <strong>${match.time}</strong>
                    <span class="match-status ${match.status.toLowerCase().replace(/\s+/g, '-')}">${match.status}</span>
                </div>
                <div class="score-box">${getMatchScore(match)}</div>
            </div>
        `)
        .join("");

    const liveMatch = matchesData.find(match => match.status === "Live");
    if (scoreboardPanel) {
        scoreboardPanel.innerHTML = liveMatch ? getInningsTable(liveMatch) : "";
    }
}

function updateLiveScores() {
    const liveMatch = matchesData.find(match => match.status === "Live");
    if (!liveMatch) return;

    if (liveMatch.runs >= liveMatch.target) {
        liveMatch.status = "Completed";
        liveMatch.scoreText = `${liveMatch.teamA} won by ${10 - liveMatch.wickets} wickets`;
        renderMatches();
        return;
    }

    const wicketChance = Math.random() < 0.18;
    if (wicketChance && liveMatch.wickets < 10) {
        liveMatch.wickets += 1;
    } else {
        const runsScored = Math.floor(Math.random() * 7);
        liveMatch.runs += runsScored;
    }

    const currentBalls = Math.floor(liveMatch.overs * 10);
    const nextBalls = Math.min(currentBalls + 1, 120);
    liveMatch.overs = Number((nextBalls / 10).toFixed(1));

    if (liveMatch.runs >= liveMatch.target) {
        liveMatch.status = "Completed";
        liveMatch.scoreText = `${liveMatch.teamA} won by ${10 - liveMatch.wickets} wickets`;
    }

    renderMatches();
}

setInterval(updateLiveScores, 12000);
renderMatches();

// Dark mode
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent =
        document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Mobile menu
menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show-menu");
});

// Search matches
searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();

    document.querySelectorAll(".match-card").forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(text)
            ? "block"
            : "none";
    });
});

// View Matches
document.querySelector(".hero button").addEventListener("click", () => {
    document.querySelector(".matches-section").scrollIntoView({
        behavior: "smooth"
    });
});

// All players modal
document.querySelectorAll(".player-card").forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById("modalName").textContent = card.dataset.name;
        document.getElementById("modalRole").textContent = card.dataset.role;
        document.getElementById("modalCountry").textContent = card.dataset.country;
        document.getElementById("modalStyle").textContent = card.dataset.style;

        playerModal.classList.add("show");
    });
});

// Close modal
closeModal.addEventListener("click", () => {
    playerModal.classList.remove("show");
});

playerModal.addEventListener("click", event => {
    if (event.target === playerModal) {
        playerModal.classList.remove("show");
    }
});