
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

rock.addEventListener('click', rockfunc);
paper.addEventListener('click', paperfunc);
scissor.addEventListener('click', scissorfunc);

function computerPlay() {
    let rps = ["ROCK", "PAPER", "SCISSOR"];
    let num = Math.floor(Math.random() * 3)
    return (rps[num])
}

function rockfunc() {
    round('rock')
}

function paperfunc() {
    round('paper')
}
function scissorfunc() {
    round('scissor')
}

let p = 0;
let c = 0

// console.log(playerSelection.toUpperCase())
function round(playerSelection) {
    computerSelection = computerPlay();

    //console.log(playerSelection.toUpperCase() + " " + computerSelection)
    if ((playerSelection.toUpperCase() === "SCISSOR") && (computerSelection === "SCISSOR")) {
        console.log("DRAW")
    } else if ((playerSelection.toUpperCase() === "SCISSOR") && (computerSelection === "ROCK")) {
        console.log("You lose! Rock beats scissor!")
        c++
    } else if ((playerSelection.toUpperCase() === "SCISSOR") && (computerSelection === "PAPER")) {
        console.log("You win! Scissor beats Paper!")
        p++
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "ROCK")) {
        console.log("DRAW")
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "PAPER")) {
        console.log("You lose! Paper beats Rock!")
        c++
    } else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection === "SCISSOR")) {
        console.log("You win! rock beats scissor!")
        p++
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "PAPER")) {
        console.log("DRAW")
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "SCISSOR")) {
        console.log("You lose! Scissor beats Paper!")
        c++
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection === "ROCK")) {
        console.log("You win! Paper beats Rock!")
        p++
    }
    console.log('p' + p);
    console.log('c' + c);
    if (p === 5 || c === 5) {
        document.getElementsByClassName('result')[0].innerHTML = score();

        rock.removeEventListener('click', rockfunc);
        paper.removeEventListener('click', paperfunc);
        scissor.removeEventListener('click', scissorfunc);


    }
}

function score() {
    if (p === 5) {
        return ("You Win")
    } else {
        return ("You Lose")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        round()

    }
    console.log(score())

}
