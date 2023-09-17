let leaderboard = [];

// Mockup: Replace this with server-side check.
function checkSolution(solution) {
  // This is a mockup.
  return solution.trim() === "a + b";
}

// Mockup: Update leaderboard
function updateLeaderboard(name, score) {
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);

  const table = document.getElementById("leaderboard");
  table.innerHTML = "<tr><th>Rank</th><th>Name</th><th>Score</th></tr>";
  leaderboard.forEach((entry, index) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = index + 1;
    cell2.innerHTML = entry.name;
    cell3.innerHTML = entry.score;
  });
}

function submitSolution() {
  const solution = document.getElementById("solution").value;
  if (checkSolution(solution)) {
    alert("Correct!");
    // Mockup: Replace with real username and real scoring logic.
    updateLeaderboard("You", 100);
  } else {
    alert("Incorrect! Try again.");
  }
}

// Timer logic
let remainingTime = 60 * 60; // 1 hour in seconds
const timerElement = document.getElementById("time");

function updateTimer() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${minutes}:${String(seconds).padStart(2, '0')}`;
  remainingTime--;
  if (remainingTime < 0) {
    alert("Time's up!");
    clearInterval(timerInterval);
  }
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Update the timer once immediately
