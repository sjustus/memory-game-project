/*
 * Create a list that holds all of your cards
 */
const cards = [...document.querySelectorAll('.card')];

//Select deck
const deck = document.getElementById('deck');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
function gameOn() {
  //Call shuffle() function on cards array to shuffle cards
  const isShuffled = shuffle(cards);
  //Add each item in new array to deck
  isShuffled.forEach(function(card) {
    deck.appendChild(card);
  });
}

// Call gameOn function on load
window.addEventListener('load', gameOn());
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

//Add event listener to cards
for (let i = 0; i < cards.length; i++){
  cards[i].addEventListener('click', function(event) {
    displayCard(event);
    //console.log('Clicked');
  });
};

//Function to display card symbol
function displayCard(event) {
  event.target.classList.add('show');
}
