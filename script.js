let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;
let playerSelection = "";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLocaleLowerCase();
    console.log("Computer:", computerSelection);

    playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    console.log("You:", playerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log("Computer Score:", computerScore);
    console.log("Player Score:", playerScore);
  }
  if (computerScore > playerScore) {
    console.log("Computer Won!!!");
  } else if (playerScore > computerScore) {
    console.log("You Won!!!");
  } else {
    console.log("The Game is a Tie!!!");
  }
}

game();
