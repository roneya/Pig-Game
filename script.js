'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let currentScore = 0;
let activePlayer = true;

btnRoll.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${diceNumber}.png`;
  dice.classList.remove('hidden');
  console.log(diceNumber);
  if(diceNumber !== 1) {
    currentScore = currentScore + diceNumber;
    activePlayer ? score0.textContent = currentScore : score1.textContent = currentScore;
  } else {
    currentScore = 0;
    activePlayer ? score0.textContent = currentScore : score1.textContent = currentScore;
    switchPlayer()
    activePlayer = !activePlayer;
  }
});

btnHold.addEventListener('click', function () {
    activePlayer 
    ? current0.textContent = Number(current0.textContent) + Number(currentScore) 
    : current1.textContent = Number(current1.textContent) + Number(currentScore);
    currentScore = 0;
    switchPlayer();
    activePlayer = !activePlayer;
});

btnNew.addEventListener('click', function () {
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    currentScore = 0;
    switchPlayer();
    activePlayer = !activePlayer;
    dice.classList.add('hidden');
    });

function switchPlayer() {
  if(!activePlayer) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  } else {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  }
}