let playerWin = 0;
let computerWin = 0;
let tie = 0;
const buttons = document.querySelectorAll("button")
let playerChoice = 'defaultPlayer';
let computerChoice = 'defaultPC';
let praise = ["WOW!", "FANTASTIC!", "AWESOME!", "GREAT!", "UNBELIEVABLE!", 
    "MASTERFUL!"];
let taunt = ["TERRIBLE!", "TRASH!", "LAUGHABLE!", "SHAMEFUL!", "HORRIBLE!", 
    "THE WORST!"];



function getComputerChoice() {
    if (getRandomInt(3) == 0) {
        return "rock"
    } else if (getRandomInt() == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}


function singleRound() {
    computerChoice = getComputerChoice();
    if (computerChoice == "rock" && playerChoice== "scissors") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        ++tie
        return "Tied"
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        ++playerWin
        return "Won"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        ++tie
        return "Tied"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        ++playerWin
        return "Won"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        ++tie
        return "Tied"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        ++playerWin
        return "Won"
    }
}

function capitalizeFirstLetter(text) {
    firstLetter = text[0].toUpperCase();
    return (firstLetter + text.slice(1));
}

function roundPrompt(roundResult) {
    alert("Computer chose " + capitalizeFirstLetter(computerChoice));
    
    let promptMessage = "\nYou " + roundResult + "! " 
        + capitalizeFirstLetter(playerChoice) + " beats " 
        + capitalizeFirstLetter(computerChoice) + ". \n Your score is " 
        + playerWin + " and the computer's score is " + computerWin + "!";

    if (roundResult == "Tied") {
        alert("YOU ARE BOTH " + taunt[getRandomInt(6)] + "\nYou " + roundResult 
        + "! Try again.\n Your score is " + playerWin + " and the computer's score is " 
        + computerWin + "!");
    }
    if (roundResult == "Won") alert(praise[getRandomInt(6)] 
        + promptMessage);
    if (roundResult == "Lose") alert(taunt[getRandomInt(6)] 
        + promptMessage);
};


function game() {
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            playerChoice = btn.id;
            let roundResult = singleRound();
            roundPrompt(roundResult);
        });
    });
    
    if (playerWin == 5) alert("Congratulations! You won!\n Reload the page to play again!")
    if (computerWin == 5) alert("You lost!\n Reload the page and try again!")
    
};

game();
