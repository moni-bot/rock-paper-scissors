const plays=["rock", "paper", "scissors"];

function computerPlay() {
    return plays[Math.floor(Math.random() *plays.length)];
}

var computerPlay = computerPlay();

const playerInput = window.prompt("What's your play?");
var playerSelection = playerInput.toLowerCase();

function singlePlay() {
    if (playerSelection === computerPlay) {
        return greeting = ("It's a tie!");
    } else {
        if (playerSelection == "scissors" && computerPlay == "rock" || playerSelection == "paper" && computerPlay == "scissors" || playerSelection == "rock" && computerPlay == "paper") {
            return greeting = ("You lost...");
        } else {
                return greeting = ("You won!");
                }
            }
}

