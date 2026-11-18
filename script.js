const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const choicesElement = document.querySelector(".choices");
const resultsElement = document.querySelector(".results");
const scoresElement = document.querySelector(".scores");

const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");
const resetButton = document.querySelector(".reset-btn");

rockButton.addEventListener("click", () => {
  playGame("Rock");
});

paperButton.addEventListener("click", () => {
  playGame("Paper");
});

scissorsButton.addEventListener("click", () => {
  playGame("Scissors");
});

resetButton.addEventListener("click", resetScore);


function updateScoreElement() {
  scoresElement.textContent = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}


function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getMoveImage(move) {
  if (move === 'Rock') {
    return 'images/rock-emoji.png';
  } else if (move === 'Paper') {
    return 'images/paper-emoji.png';
  } else {
    return 'images/scissors-emoji.png';
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === computerMove) {
    result = "Tie";
    score.ties++;
  } else if (
    (playerMove === "Rock" && computerMove === "Scissors") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissors" && computerMove === "Paper")
  ) {
    result = "You Win";
    score.wins++;
  } else {
    result = "Computer Wins";
    score.losses++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  // choicesElement.textContent = `You picked: ${playerMove}. Computer picked: ${computerMove}.`;

choicesElement.innerHTML = `
  You <img src="${getMoveImage(playerMove)}" class="result-icon"> VS <img src="${getMoveImage(computerMove)}" class="result-icon"> Computer`;

  resultsElement.textContent = `Result: ${result}`;

  updateScoreElement();
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem("score");

  choicesElement.textContent = "";
  resultsElement.textContent = "";

  updateScoreElement();
}

updateScoreElement();
