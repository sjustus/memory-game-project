/******** CARDS VARIABLES********/
// Array to hold all cards in deck
const cards = [...document.querySelectorAll('.card')];

// Select deck
const deck = document.getElementById('deck');

// List of open cards
let cardsOpen = [];

//Select matched cards
let matched = document.getElementsByClassName('match');

/******** MOVES, STARS, & TIME VARIABLES********/
// Select moves counter
const counter = document.getElementById('moves');

//Store number of moves
let moves = 0;

// Timer
let sec = 0, min = 0;
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
let interval;

// Select star icons
const stars = [...document.querySelectorAll('.fas.fa-star')];

/******** SCORE MODAL VARIABLES********/
// Select Modal
const scoreModal = document.getElementById('winner');

// Select modal close button
const close = document.querySelector('.close');

//Select span for final moves
const modalMoves = document.getElementsByClassName('modalMoves');

//Select span for final stars
const modalStars = document.getElementsByClassName('modalStars');

//Select span for final time
const modalMins =  document.getElementsByClassName('modalMins');
const modalSecs = document.getElementsByClassName('modalSecs');

// Select modal replay button
const replay = document.querySelector('.replay');

/******** START EVENT LISTENERS ********/
// Call gameOn function on load
window.addEventListener('load', gameOn());

// Click on close button to dismiss modal
close.onclick = function() {
    scoreModal.style.display = 'none';
}

// Click on replay dismisses modal
replay.onclick = function() {
  restart();
  scoreModal.style.display = 'none';
}
// Click outside of modal to dismiss it
window.onclick = function(event) {
    if (event.target == scoreModal) {
        scoreModal.style.display = "none";
    }
}

// Track if game has started or not
let gamestart = false

// Add event listener to each card in deck
for (let i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', function(event) {
    // Start timer if game has started
    if(!gamestart) {
      gamestart = true;
      startTimer();
    }
    displayCard(event); // Display card on click
    openCards(event); // Add clicked card to list of open cards
    getScore();
    event.preventDefault();
  }, false);
};



// Fisher-Yates shuffle function from http://stackoverflow.com/a/2450976
// Provided by Udacity via project starter code
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Function to shuffle cards and display on screen
function gameOn() {
  // Stop timer
  stopTimer();

  // Enable deck
  deck.classList.remove('disabled');

  // Shuffle cards, remove all classes, and add to deck
  const isShuffled = shuffle(cards);

  isShuffled.forEach(function(card) {
    card.classList.remove('open', 'show', 'match', 'mismatch');
    deck.appendChild(card);
  });
}

// Restart gameOn
function restart() {
  gameOn();

  // Reset moves
  moves = 0;
  counter.innerHTML = moves;

  gamestart = false

  // Reset stars
  stars.forEach(function(card) {
    card.classList.remove('far');
    card.classList.add('fas');
  });

  // Reset timer
  sec = 0;
  min = 0;
  secs.innerHTML = sec;
  mins.innerHTML = min;
}
// Function to display card symbol
function displayCard(event) {
  event.target.classList.add('open', 'show');
}

//Function to add clicked card to openCards array
function openCards(event) {
  if (cardsOpen.length < 2) {
    cardsOpen.push(event);
  }
  // Disable click once 2 cards selected
  if (cardsOpen.length === 2) {
    countMoves();
    disabled();
    // Check match
    if (cardsOpen[0].target.type === cardsOpen[1].target.type) {
      match();
  } else if (cardsOpen[0].target.type != cardsOpen[1].target.type) {
      mismatch();
    }
  }
}

// Function to disable mouse events
function disabled() {
  deck.classList.add('disabled');
}

// Function to enable mouse events
function enable() {
  deck.classList.remove('disabled');
  deck.classList.add('enable');
}

// Function to lock cards on match
function match() {
  cardsOpen[0].target.classList.add('match');
  cardsOpen[1].target.classList.add('match');
  cardsOpen[0].target.classList.remove('open', 'show',);
  cardsOpen[1].target.classList.remove('open', 'show');
  //remove from cardsOpen
  cardsOpen.splice(0,2);
  enable();
}

// Function for cards mismatch
function mismatch() {
  cardsOpen[0].target.classList.add('mismatch');
  cardsOpen[1].target.classList.add('mismatch');
  // Hide cards after one second
  setTimeout(function hideCards() {
    cardsOpen[0].target.classList.remove('open', 'show', 'mismatch');
    cardsOpen[1].target.classList.remove('open', 'show', 'mismatch');
    cardsOpen.splice(0,2);
    enable();
  }, 1000);
}


// Count moves and add to html
function countMoves () {
  moves++;
  counter.innerHTML = moves;
  setStars();
}

// Set star rating
function setStars() {
  if (moves > 12 && moves < 16) {
    stars[2].classList.remove('fas');
    stars[2].classList.add('far');
  } else if (moves >
    15) {
    stars[1].classList.remove('fas');
    stars[1].classList.add('far');
  }
}

// Modal functionality

// Function to display modal
function getScore() {
  if (matched.length === 16) {
    stopTimer();
    setStats();
    scoreModal.style.display = 'block';
  }

}

// Get game stats and add to score modal
function setStats() {
  modalMoves.innerHTML = moves;
  modalStars.innerHTML = stars.length;
  modalMins.innerHTML = min;
  modalSecs.innerHTML = sec;
}

// Game timer
function startTimer() {
  interval = setInterval(function () {
    secs.innerHTML = sec;
    mins.innerHTML = min;
    sec ++;
    if (sec === 60) {
      min ++;
      sec = 0;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}
