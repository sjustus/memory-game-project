// Array to hold all cards in deck
const cards = [...document.querySelectorAll('.card')];

// Select deck
const deck = document.getElementById('deck');

// List of open cards
let cardsOpen = [];

let matched = document.getElementsByClassName('match');

// Select moves counter
const counter = document.getElementById('moves');
let moves = 0;

// Select star icons
const stars = [...document.querySelectorAll('.fas.fa-star')];

// Select Modal
const scoreModal = document.getElementById('winner');

// Select modal close button
const close = document.querySelector('.close');

// Call gameOn function on load
window.addEventListener('load', gameOn());


// Click on close button to dismiss modal
close.onclick = function() {
    scoreModal.style.display = "none";
}

// Click outside of modal closes it
window.onclick = function(event) {
    if (event.target == scoreModal) {
        scoreModal.style.display = "none";
    }
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Add event listener to each card in deck
for (let i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', function(event) {
    displayCard(event); // Display card on click
    openCards(event); // Add clicked card to list of open cards
    if (matched.length === 16) {
      console.log('winner');
      getScore();
    }
    event.preventDefault();
  }, false);
};



// Fisher-Yates shuffle function from http://stackoverflow.com/a/2450976
// Provided by Udacity via starter code for project
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
  moves = 0;
  //Call shuffle() function on cards array to shuffle cards
  const isShuffled = shuffle(cards);
  //Add each item in new array to deck
  isShuffled.forEach(function(card) {
    deck.appendChild(card);
  });
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
  scoreModal.style.display = 'block';

}
