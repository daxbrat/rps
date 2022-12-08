function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 ) + 1;
  if (randomNumber === 1) {
    return "Rock";
    
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let computerSelection = getComputerChoice();
computerSelection = computerSelection.toLocaleLowerCase();
console.log(computerSelection);

let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  }
}

console.log(playRound(playerSelection, computerSelection));
