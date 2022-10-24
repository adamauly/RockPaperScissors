let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    if (getRandomInt() == 0) {
        return "rock"
    } else if (getRandomInt() == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function playerSelection() {
    let weapon = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ").toLowerCase;
}

function singleRound(getComputerChoice, playerSelection) {
    if (getComputerChoice() == "rock" && playerSelection == "scissors") {
        ++computerWin
        return "Lose"
    } else if (getComputerChoice() == "rock" && playerSelection == "rock") {
        ++tie
        return "Tied"
    } else if (getComputerChoice() == "rock" && playerSelection == "paper") {
        ++playerWin
        return "Won"
    } else if (getComputerChoice() == "paper" && playerSelection == "rock") {
        ++computerWin
        return "Lose"
    } else if (getComputerChoice() == "paper" && playerSelection == "paper") {
        ++tie
        return "tie"
    } else if (getComputerChoice() == "paper" && playerSelection == "scissors") {
        ++playerWin
        return "Won"
    } else if (getComputerChoice() == "scissors" && playerSelection == "paper") {
        ++computerWin
        return "Lose"
    } else if (getComputerChoice() == "scissors" && playerSelection == "scissors") {
        ++tie
        return "Tied"
    } else if (getComputerChoice() == "scissors" && playerSelection == "rock") {
        ++playerWin
        return "Won"
    }



if (singleRound() != "Tied") {

}  

console.log(getComputerChoice())