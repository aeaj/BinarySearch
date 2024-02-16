"use strict"

window.addEventListener("load", start);

let num; 

function start() {
    console.log("JavaScript is Running");
    num = generateRandomNumber(); 
    document.querySelector("#guess-form") 
        .addEventListener("submit", receiveGuess); 
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 99) + 1;
}

function receiveGuess(event) { 
    event.preventDefault();

    const form = event.target;
    const guess = form.guess.value; 

    console.log("Received Guess:", guess); 
    checkGuess(guess); 
}

function checkGuess(guess) { 
    guess = Number(guess); 
    if(guess === num) {
        console.log("Correct");
        displayResult("correct", guess); 
    } else if(guess < num) {
        console.log("Too low");
        displayResult("too low", guess);
    } else if(guess > num) {
        console.log("Too high");
        displayResult("too high", guess);
    }
}

function displayResult(result, guess) { 
    const list = document.querySelector("#guess-list");
    const html = `<li>You guessed ${guess} - that was ${result}! Try again</li>`;
    list.insertAdjacentHTML("beforeend", html);
}
