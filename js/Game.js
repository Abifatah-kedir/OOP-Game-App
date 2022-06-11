/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js 
 * */
class Game {
    constructor() { 
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

     // /**
    //     * Creates phrases for use in game
    //     * @return {array} An array of phrases that could be used in the game
    // */
    createPhrases() {
        let createdPhrase = [
                new Phrase('Day'),
                new Phrase('Night'),
                new Phrase('Lose'),
                new Phrase('Win'),
                new Phrase('Rich'),
                new Phrase('poor')
            ];
        return createdPhrase;
    };


    // /**
    //     * Selects random phrase from phrases property.
    //     * @return {Object} Phrase object chosen to be used.
    // */
    getRandomPhrase() {
        let thePhrases = this.phrases;
        return thePhrases[Math.floor(Math.random()*thePhrases.length)];
    }

    // Resets Game
  resetGame() {
        // removes the radom phrases
        document.querySelector("#phrase ul").innerHTML = "";

        //resets the keyboard clases.
        const keyboardKeys = document.querySelectorAll(".key");
        for (let i = 0; i < keyboardKeys.length; i++) {
            keyboardKeys[i].disabled = false;
            keyboardKeys[i].classList.remove("chosen", "wrong");
        }

        //resets the overlay class 
        const Message = document.getElementById("game-over-message");
        Message.parentElement.className = "start";

        //resets the heats src imgaes.
        const tries = document.querySelectorAll(".tries img");
        for (let i = 0; i < tries.length; i++) {
            if (tries[i].src.indexOf("images/lostHeart.png") != -1) {
                tries[i].src = "images/liveHeart.png";
            }
        }
  }

    // /**
    //    * Begins game by selecting a random phrase and displaying it to user
    // */
    startGame() {
        document.querySelector('.start').style.display = 'none';
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
     checkForWin(){
        const letterLeft = document.querySelectorAll(".show");
        if (letterLeft.length == this.activePhrase.phrase.length) {
          return true;
        } else {
          return false;
        }
    }

    // /**
    //     * Increases the value of the missed property
    //     * Removes a life from the scoreboard
    //     * Checks if player has remaining lives and ends game if player is out
    // */
    removeLife(){
        const tries = document.querySelectorAll(".tries img");
        const theHearts = tries[this.missed];
        theHearts.src = "images/lostHeart.png";
        this.missed +=1;

        if(this.missed === 5 ) {
            this.gameOver(); 
        }
    }

    // /**
    //     * Displays game over message
    //     * @param {boolean} gameWon - Whether or not the user won the game
    // */
    gameOver(gameWon) {
        // document.getElementById("overlay").style.display = "block";
        const overLay = document.getElementById("overlay");
        overLay.style.display = "";
        overLay.style.opacity = 1;

        const Message = document.getElementById("game-over-message");
        if (gameWon) {
            Message.parentElement.classList.add("win");
            Message.textContent = "Great job!";
        } else {
            Message.parentElement.classList.add("lose");
            Message.textContent = "Sorry, better luck next time!"; 
        }

        console.log(Message.parentElement);
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(btn) {
        btn.disabled = true;

        if (!this.activePhrase.checkLetter(btn.textContent)) {
            btn.classList.add("wrong");
            this.removeLife();
        } else {
            btn.classList.add("chosen");
            this.activePhrase.showMatchedLetter(btn.textContent);
            if (this.checkForWin()) {
                 this.gameOver(true);

            }
        }
    };
}