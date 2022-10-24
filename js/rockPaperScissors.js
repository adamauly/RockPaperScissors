let playerWin = 0;
let computerWin = 0;
let tie = 0;

function getComputerChoice() {
    if (getRandomInt() == 0) {
         "rock"
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
    let weapon = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");
    weapon = weapon.toLowerCase();
    return weapon
}

let computerChoice = getComputerChoice();
let playerChoice = playerSelection();

function singleRound(computerChoice, playerChoice) {
    console.log(computerChoice)
    if (computerChoice == "rock" && playerChoice== "scissors") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "rock" && playerChoice== "rock") {
        ++tie
        return "Tied"
    } else if (computerChoice == "rock" && playerChoice== "paper") {
        ++playerWin
        return "Won"
    } else if (computerChoice == "paper" && playerChoice== "rock") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "paper" && playerChoice== "paper") {
        ++tie
        return "Tied"
    } else if (computerChoice == "paper" && playerChoice== "scissors") {
        ++playerWin
        return "Won"
    } else if (computerChoice == "scissors" && playerChoice== "paper") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "scissors" && playerChoice== "scissors") {
        ++tie
        return "Tied"
    } else if (computerChoice == "scissors" && playerChoice== "rock") {
        ++playerWin
        return "Won"
    }
}

function capitalizeFirstLetter(text) {
    firstLetter = text[0].toUpperCase();
    return (firstLetter + text.slice(1));
}


// if (singleRound() != "Tied") {
//     console.log("You $(singleRound())! ")
// }  
roundResult = singleRound(computerChoice, playerChoice);

if (roundResult != "Tied") {
    console.log("You " + roundResult + "! " + capitalizeFirstLetter(playerChoice) + " beats " + capitalizeFirstLetter(computerChoice) + ".")
} else {
    console.log("You" + roundResult + "! Try again.")
}