'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//Get the value of an input element
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = Number(document.querySelector('.score').textContent);

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (num) {
  document.querySelector('.number').textContent = num;
};

//Function to display a score
const displayScore = function (dScore) {
  document.querySelector('.score').textContent = dScore;
};

const reduceScore = function () {
  score--;
  displayScore(score);
};

const resetScore = function () {
  score = 20;
  displayScore(score);
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('No number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayNumber(guess);

    changeBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      reduceScore();
    } else {
      displayMessage('You lost the game!');
      score = 0;
      displayScore(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //Reset score
  resetScore();

  //Reset Guess
  document.querySelector('.guess').value = '';

  //Reset message
  displayMessage('Start guessing...');

  //Update hidden number
  displayNumber('?');

  //Update reset background color
  changeBackgroundColor('#222');
  //Update element width
  document.querySelector('.number').style.width = '15rem';

  //Reset secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
