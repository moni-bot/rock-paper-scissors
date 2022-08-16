// Options the players can choose from
const plays=["Rock", "Paper", "Scissors"];

// The computer chooses a random option from the list above
function computerPlay() {
     return plays[Math.floor(Math.random() * plays.length)];
 }

// Prompt is displayed to ask the player for their input and is then displayed
function playerPlay() {
    let playerInput = window.prompt("What's your play?");
    return playerInput[0].toUpperCase() + playerInput.toLowerCase().substring(1);
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return greeting = ("It's a tie!");
    } else {
        if (playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Paper") {
            return "You lost... " + computerSelection + " beats " + playerSelection;
        } else {
                return "You won! " + playerSelection + " beats " + computerSelection;
                }
            }
}

// Function to play five rounds
function game() {
    for (let i = 1; i < 6; i++) {
      let computerSelection = computerPlay();
      let playerSelection = playerPlay();
      let result = playRound(computerSelection, playerSelection);
      console.log("Computer chose " + computerSelection + " in round " + i);
      console.log("Player chose " + playerSelection + " in round " + i);
      console.log("Round " + i + ": " + result);
    }
 }

game() 

