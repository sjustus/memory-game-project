// Create a list that holds all of your cards
const cards = [...document.querySelectorAll('.card')];

// Select deck
const deck = document.getElementById('deck');

// Create list of open cards
let cardsOpen = [];

// Call gameOn function on load
window.addEventListener('load', gameOn());

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
    openCards(); // Add clicked card to list of open cards

  });
};


//TODO: note where I got shuffle function
// Shuffle function from http://stackoverflow.com/a/2450976
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
  //Call shuffle() function on cards array to shuffle cards
  const isShuffled = shuffle(cards);
  //Add each item in new array to deck
  isShuffled.forEach(function(card) {
    deck.appendChild(card);
  });
}

// Function to display card symbol
function displayCard(event) {
  event.target.classList.add('show');
}

//Function to add clicked card to openCards array
function openCards() {
  cardsOpen.push(event);
  if (cardsOpen.length === 2) {
    disabled();
  } else if (cardsOpen.length === 2 && cardsOpen[0].type === cardsOpen[1].type) {
    console.log('match');
  } else if (cardsOpen.length === 2 && cardsOpen[0].type !== cardsOpen[1].type) {
    console.log('mismatch');
  }

}

// Function to disable mouse events
function disabled() {
  deck.classList.add('disabled');
}
