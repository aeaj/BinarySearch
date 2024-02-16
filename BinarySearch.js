"use strict";

let min = 1;
let max = 100;
let computerNumber; 
let computerGuess; 

window.onload = () => {
    document.getElementById("user-guesses").onclick = startUserGuesses;
    document.getElementById("computer-guesses").onclick = startComputerGuesses;
    console.log("Game loaded. Choose who will guess the number.");
};

function startUserGuesses() {
    computerNumber = Math.floor(Math.random() * 100) + 1; //Hvorfor * 100 + 1?
    console.log("User will guess the number. Think of a number between 1 and 100.");
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("user-guess-section").style.display = "block";
    document.getElementById("user-guess-form").onsubmit = handleUserGuess;
}

function handleUserGuess(event) {
    event.preventDefault();
    const userGuess = parseInt(event.target.elements.guess.value);
    console.log(`User guessed: ${userGuess}`);

    let feedback = "";

    if (userGuess === computerNumber) {
        console.log("User guessed correctly!");
        feedback = (`Correct. The number was ${computerNumber}!`)
    } else if (userGuess < computerNumber) {
        console.log("User's guess is too low.");
        feedback = (`You guessed ${userGuess}. The guess was too low.`)
    } else {
        console.log("User's guess is too high.");
        feedback = (`You guessed ${userGuess}. The guess was too high.`)
    }
    const feedbackElement = document.getElementById('feedback'); 
    feedbackElement.textContent = feedback;
}

function startComputerGuesses() {
    console.log("Computer will guess the number. Please think of a number between 1 and 100 and provide feedback.");
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("computer-guess-section").style.display = "block";
    min = 1;
    max = 100;
    makeComputerGuess();
}

//hello
//hello world

function makeComputerGuess() {
    computerGuess = Math.floor((min + max) / 2);
    console.log(`Computer guesses: ${computerGuess}. Is your number higher, lower, or correct?`);
    document.getElementById("computer-guess-prompt").textContent = `Is your number ${computerGuess}?`;
}

function provideFeedback(feedback) {
    console.log(`Feedback provided: ${feedback}`);

    let computerFeedback = "";
    
    if (feedback === 'correct') {
        console.log(`The computer guessed your number correctly: ${computerGuess}!`);
        computerFeedback = (`The computer guessed your number: ${computerGuess}!`);
    } else if (feedback === 'too low') {
        min = computerGuess + 1;
        console.log(`Adjusting guess range. New range: ${min} to ${max}`);
    } else if (feedback === 'too high') {
        max = computerGuess - 1;
        console.log(`Adjusting guess range. New range: ${min} to ${max}`);
    }
    if (min > max) {
        console.log("No valid numbers left. Please restart the game.");
        computerFeedback = ("No valid numbers left.");
    } else if (feedback !== 'correct') {
        makeComputerGuess();
    }
    const computerFeedbackElement = document.getElementById('computerFeedback'); 
    computerFeedbackElement.textContent = computerFeedback;
}
