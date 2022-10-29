let playerWin = 0;
let computerWin = 0;
let tie = 0;
const buttons = document.querySelectorAll("button")
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert(btn.id);
    });
});

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
    let weapon = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");
    weapon = weapon.toLowerCase();
    return weapon
}

function singleRound(computerChoice, playerChoice) {
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

// function game() {
//     while ((playerWin || computerWin) < 5) {
//         let computerChoice = getComputerChoice();
//         let playerChoice = playerSelection();
    
//         roundResult = singleRound(computerChoice, playerChoice);
    
//         if (roundResult != "Tied") {
//             alert("You " + roundResult + "! " + capitalizeFirstLetter(playerChoice) + " beats " + capitalizeFirstLetter(computerChoice) + ".")
//         } else {
//             alert("You " + roundResult + "! Try again.")
//         }
    
//         console.log("Computer wins: " + computerWin)
//         console.log("Player wins: " + playerWin)
//     }
    
//     if (playerWin == 5) {
//         alert("Congratulations! You won!\n Reload the page to play again!")
//     } else {
//         alert("You lost!\n Reload the page and try again!")
//     }
// }

// function game() {
//     let computerChoice = getComputerChoice();
//     let playerChoice = playerSelection();

//     roundResult = singleRound(computerChoice, playerChoice);

//     if (roundResult != "Tied") {
//         alert("You " + roundResult + "! " + capitalizeFirstLetter(playerChoice) + " beats " + capitalizeFirstLetter(computerChoice) + ".")
//     } else {
//         alert("You " + roundResult + "! Try again.")
//     }

//     console.log("Computer wins: " + computerWin)
//     console.log("Player wins: " + playerWin)
// }

// if (playerWin == 5) {
//     alert("Congratulations! You won!\n Reload the page to play again!")
// } else {
//     alert("You lost!\n Reload the page and try again!")
// }


game();