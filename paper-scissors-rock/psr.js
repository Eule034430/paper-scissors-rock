console.log("Connected");

// Shortcut variables
const choices = ["paper", "scissors", "rock"];
const imgSrc = ["images/paper.png", "images/scissors.png", "images/rock.png"];
const playerDisplay = document.getElementById("player-image");
const computerDisplay = document.getElementById("computer-image");
const resultDisplay = document.getElementById("result-display");
const userPlay = document.getElementById("user-play");
const cpuPlay = document.getElementById("computer-play");
const userScore = document.getElementById("user-score");
const cpuScore = document.getElementById("cpu-score");
let playerScoreDisplay = 0;
let cpuScoreDisplay = 0;

//The game
function playGame(playerChoiceIndex) {
  const computerChoiceIndex = Math.floor(Math.random() * 3); //index from 0-2

  const computerChoice = choices[computerChoiceIndex]; //Computer's play using index
  computerDisplay.src = imgSrc[computerChoiceIndex]; //change image to computer's play
  playerChoice = choices[playerChoiceIndex]; //get player's play
  playerDisplay.src = imgSrc[playerChoiceIndex]; //change image to player's play
  userPlay.textContent = choices[playerChoiceIndex]; //change text to player's play
  cpuPlay.textContent = computerChoice; //change text to cpu's play

  let result = ""; //create result variable

  if (playerChoice === computerChoice) {
    result = "DRAW!"; // if both plays match DRAW
  } else {
    switch (playerChoice) {
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  resultDisplay.textContent = result; //change result display text to assigned result

  switch (result) {
    case "YOU WIN!":
      playerScoreDisplay++;
      userScore.textContent = playerScoreDisplay;
      break;
    case "YOU LOSE!":
      cpuScoreDisplay++;
      cpuScore.textContent = cpuScoreDisplay;
      break;
  }
}
