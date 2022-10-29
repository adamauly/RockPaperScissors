let win = false;
let playerWin = 0;
let computerWin = 0;
let tie = 0;
const buttons = document.querySelectorAll("button")
let playerChoice = 'defaultPlayer';
let computerChoice = 'defaultPC';
let praise = ["TERRIFIC", "FANTASTIC", "AWESOME", "GREAT", "UNBELIEVABLE", 
    "MASTERFUL", "AWE-INSPIRING", "BREATHTAKING", "JAW-DROPPING", "SUBLIME", 
    "STUNNING", "SPECTACULAR", "MARVELOUS", "SUPERB"];
let taunt = ["TERRIBLE", "TRASH", "ABHORRENT", "LAUGHABLE", "SHAMEFUL", "HORRIBLE", 
    "EMBARRASSING", "GHASTLY", "TOILET-WATER", "ATROCIOUS", "RUBBISH", "REVOLTING",
    "GROSS", "USELESS", "HEINOUS", "UNSPEAKABLE", "HORRENDOUS", "DREADFUL"];
let loseFace = ["(凸ಠ益ಠ)凸", "(>_<)", "(・.・;)", "(°_°)", "((+_+))", "(ToT)", "(；一_一)",
    "(?_?)", "(－‸ლ)"];
let winFace = ["ヽ(^。^)ノ", "ᕕ( ᐛ )ᕗ", "(^o^)／", "^m^", "(#^.^#)", "(^o^)"];
let face = document.querySelector(".webFace")

function changeFace(result) {
    if (result == "Win" || result == "Tied") face.textContent = loseFace[getRandomInt(9)];
    if (result == "Lose") face.textContent = winFace[getRandomInt(6)];
};

// function animateFace(result) {
//     if (result == "Win") {
//         num = getRandomInt(3);
//         face.style.transform = scale(-1);
//     } else {
//         face.style.transform = scaleX(-1);
//     };
// };

function getComputerChoice() {
    num = getRandomInt(3);
    if (num == 0) {
        return "rock"
    } else if (num == 1) {
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
    if (computerWin == 5) {
        alert("You were supposed to reload the page you " 
        + taunt[getRandomInt(praise.length-1)].toLowerCase() + " loser!\nNow, REFRESH!");
        forceRefresh();
    };
    console.log("passing")
    if (playerWin == 5) {
        alert("Please!\nGloating is really " + taunt[getRandomInt(praise.length-1)].toLowerCase()
        + " behaviour and it doesn't suit you. You have already proven your " 
        + praise[getRandomInt(praise.length-1)].toLowerCase() 
        + " abilities and won!\nNow, REFRESH!");
        forceRefresh();
    };
    console.log("Passing thru")
    if (computerChoice == "rock" && playerChoice== "scissors") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        ++tie
        return "Tied"
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        ++playerWin
        return "Win"
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        ++tie
        return "Tied"
    } else if (computerChoice == "paper" && playerChoice == "scissors") {
        ++playerWin
        return "Win"
    } else if (computerChoice == "scissors" && playerChoice == "paper") {
        ++computerWin
        return "Lose"
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        ++tie
        return "Tied"
    } else if (computerChoice == "scissors" && playerChoice == "rock") {
        ++playerWin
        return "Win"
    }
    
};

function capitalizeFirstLetter(text) {
    firstLetter = text[0].toUpperCase();
    return (firstLetter + text.slice(1));
}

function roundPrompt(roundResult) {
    if (win) return;

    alert("Computer chose " + capitalizeFirstLetter(computerChoice));
    
    let promptMessage = "\nYou " + roundResult + "! " 
        + capitalizeFirstLetter(playerChoice) + " beats " 
        + capitalizeFirstLetter(computerChoice) + ". \n Your score is " 
        + playerWin + " and the computer's score is " + computerWin + "!";

    if (roundResult == "Tied") {
        alert("YOU ARE BOTH " + taunt[getRandomInt(praise.length-1)] + "!\nYou " + roundResult 
        + "! Try again.\n Your score is " + playerWin + " and the computer's score is " 
        + computerWin + "!");
    }
    if (roundResult == "Win") alert(praise[getRandomInt(praise.length-1)] + "!" 
        + promptMessage);
    if (roundResult == "Lose") alert(taunt[getRandomInt(praise.length-1)] + "!"
        + promptMessage);

    changeFace(roundResult);
    if (playerWin == 5 || computerWin == 5) {
        win = true;
//          animateFace(roundResult);
        if (playerWin == 5) {
            alert("Congratulations you " + praise[getRandomInt(praise.length-1)].toLowerCase() 
                + "ly " + praise[getRandomInt(praise.length-1)].toLocaleLowerCase() 
                + " individual! You Win!\n Reload the page to play again!");
        };
        if (computerWin == 5) {
            alert("You really are " + taunt[getRandomInt(praise.length-1)].toLowerCase() 
                + "! You lost!\n Reload the page and try again!");
        };
    };
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        playerChoice = btn.id;
        let roundResult = singleRound();
        roundPrompt(roundResult);
    });
});

function forceRefresh() {
    window.location.reload();
};
