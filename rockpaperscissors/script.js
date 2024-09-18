"use strict";
let userGuess;
let computerGuess;
let result;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const win = document.querySelector("#win");
const lose = document.querySelector("#lose");
const draw = document.querySelector("#draw");

rock.addEventListener("click", rockClicked);
paper.addEventListener("click", paperClicked);
scissors.addEventListener("click", scissorsClicked);

function rockClicked() {
  userGuess = "rock";
  computerGuesses();
}

function paperClicked() {
  userGuess = "paper";
  computerGuesses();
}

function scissorsClicked() {
  userGuess = "scissors";
  computerGuesses();
}

function computerGuesses() {
  computerGuess = "scissors";
  console.log("Computer guesses");
  console.log("user guesses", userGuess);

  player1.classList.add("shake");
  player2.classList.add("shake");

  player1.addEventListener("animationend", determinWinner);
  endGame();
}

function determinWinner() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  if (userGuess === computerGuess) {
    result = "draw";
    draw.classList.remove("hidden");
  }
  if (
    (userGuess === "rock" && computerGuess === "paper") ||
    (userGuess === "paper" && computerGuess === "scissors") ||
    (userGuess === "scissors" && computerGuess === "rock")
  ) {
    result = "lose";
    lose.classList.remove("hidden");
  }
  if (
    (userGuess === "rock" && computerGuess === "scissors") ||
    (userGuess === "paper" && computerGuess === "rock") ||
    (userGuess === "scissors" && computerGuess === "paper")
  ) {
    result = "win";
    win.classList.remove("hidden");
  }

  console.log(result);
}

function endGame() {
  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");
}
