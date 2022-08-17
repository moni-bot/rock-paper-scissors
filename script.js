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

// Variables storing the scores
var playerScore = 0;
var computerScore = 0;
var ties = 0;

// Function to play one round
function playRound(playerSelection, computerSelection) {
    let computerWinsRound = "You lost... "+playerSelection+" beats "+computerSelection.toLowerCase();
    let playerWinsRound = "You won! "+computerSelection+" beats "+playerSelection.toLowerCase();
    let tie = "It's a tie!";
    if (playerSelection === computerSelection) {
        ties++;
        return tie;
    } else {
        if (playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Rock" && computerSelection === "Paper") {
            playerScore++;
            return playerWinsRound;
        } else {
            if (computerSelection === "Scissors" && playerSelection === "Rock" || computerSelection === "Paper" && playerSelection === "Scissors" || computerSelection === "Rock" && playerSelection === "Paper") {
                computerScore++;
                return computerWinsRound;
             } else {
                return "Hmm, something went wrong here";
            }
        }
    }
}

// Function to play five rounds
function game() {
    for (let i = 1; i < 6; i++) {
      let computerSelection = computerPlay();
      let playerSelection = playerPlay();
      let result = playRound(computerSelection, playerSelection);
      console.log("Computer chose " + computerSelection.toLowerCase() + " in round " + i);
      console.log("Player chose " + playerSelection.toLowerCase() + " in round " + i);
      console.log("Round " + i + ": " + result);
      console.log("Player score: "+playerScore);
      console.log("Computer score: "+computerScore);
      console.log("Ties: "+ties);
    }
 }

game() 

// Announces the final winner
function determineWinner() {
    if (computerScore > playerScore){
        return "Computer wins this one. Better luck next time!";
    } else {
        if (playerScore > computerScore) {
            return "Congrats! You beat the machine."
        } else {
            return "Game's over. It's a tie!"
        }
    }
}

console.log(determineWinner())