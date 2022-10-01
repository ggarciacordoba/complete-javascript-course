'use strict';

// Selecting elements of the dom
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true; //Variable to disable some button when we finish the game
  
  //Initialize scores
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  currentScore0El.textContent=0;
  currentScore1El.textContent=0;
  
  //Hide the dice
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();


const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //Toggle will add the class if it's not there or remove if it is
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//New Game Handler
/* My proposal
btnNew.addEventListener('click', function (){
  //
  
  //Reset Scores
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  score0El.textContent =
      scores[0];
  score1El.textContent =
      scores[1];

  //Move winner style
  document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
  document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');

  //Reset current and style
  if(activePlayer){
    console.log()
    switchPlayer();
  } else {
    currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  }

  

});*/

//Course proposal
btnNew.addEventListener('click',init);

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display rice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      } else {
      switchPlayer();
    }
  }
});
