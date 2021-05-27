/*What do I need:
- cards
- images
- random order
- turn around cards
- matching function

MUST HAVE FEATURES
- clicking cards to turn around ---------- addEventlistener
- flip the cards
- checking match or no ------------------- boolean
-
- randomly position the cards ------------ Math.random + positioning?
- Readme
- Explanation on the page itself

NICE TO HAVE FEATURES
- Make it playable by keyboard
- Let a user define custom image urls
- Make it pleasing to look at
- Multiplayer (local)
 */

// creating an array with cards from html code
let cards = Array.from(document.getElementsByClassName("memory-card"));

// adding click event
cards.forEach(card => card.addEventListener("click", flipCard));

// function for flipping the cards
let card1, card2;
let

    // need explanation here!
function flipCard() {
    function flipCard() {
        if (isLocked || this === cardOne) return;

        this.classList.add('flip');

        if (!isFlipped) {
            isFlipped = true;
            cardOne = this;
            return;
        }

        cardTwo = this;

        checkForMatch();
    }
}



