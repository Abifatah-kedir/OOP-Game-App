/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
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

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(btn) {
        btn.disabled = true;
        const randomPhrase = this.activePhrase.phrase.toLowerCase();
        const chosenLetter = btn.textContent;
        console.log(randomPhrase);
   
        if(randomPhrase.includes(chosenLetter)) {
            btn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(chosenLetter);
            this.checkWin();
        }else {
            btn.classList.add('wrong');
            this.removeLife();
        }
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkWin() {
        const lettersWithShow = document.querySelectorAll('.show');
        const lettersWithLetter = document.querySelectorAll('.letter');
        const gameSection = document.querySelectorAll('.section');

        // if (this.missed === 5) 
        // {
        //     for (let i = 0; gameSection.length; i++)
        //     {
        //         let li = gameSection[i];
        
        //         if ( li.className === 'section' ) 
        //         {
        //             li.style.display = 'none';
        //             hideSreenOverley.style.display = "block";
        //             hideSreenOverley.classList.add('lose');
        //             hideSreenOverley.removeChild(overleyElement);
        //             hideSreenOverley.append(loseMessage);
        //         }  
        //     }
        //     //showOverley.textContent =  '<h2> Sorry, you did loose <h2>'
        //     //sdocument.write(showOverley.textContent);
        // } else if ( lettersWithShow.length === lettersWithLetter.length) {
        //     for (let i = 0; gameSection.length; i++)
        //     {
        //         let li = gameSection[i];
        
        //         if ( li.className === 'section' ) 
        //         {
        //             li.style.display = 'none';
        //             hideSreenOverley.style.display = "block";
        //             hideSreenOverley.classList.add('win');
        //             hideSreenOverley.removeChild(overleyElement);
        //             hideSreenOverley.append(winMessage);
        //         }  
        //     }
        // }
        if(lettersWithShow.length == lettersWithLetter.length){
            console.log("Game is Over");
        }else {
            console.log("game is not done yet");
        }
    }

    // /**
    //     * Increases the value of the missed property
    //     * Removes a life from the scoreboard
    //     * Checks if player has remaining lives and ends game if player is out
    // */
    removeLife(){
        const loosingTries = document.querySelectorAll(".tries img");
        const theHearts = loosingTries[this.missed];
        theHearts.src = "images/lostHeart.png";
        this.missed +=1;

        if(this.missed == 5) {
            this.gameOver(this.missed); 
            console.log("All hearts are gone")
        }
    }
    
    // /**
    //     * Displays game over message
    //     * @param {boolean} gameWon - Whether or not the user won the game
    // */
    gameOver(gameWon) {
       document.querySelector('.start').style.display = "block";
       const winMessage = document.getElementById("game-over-message");
       console.log();
        if (gameWon) {
            winMessage.parentElement.className = "win";
            winMessage.textContent = "Great job!";
        } else {
            winMessage.parentElement.className = "lose";
            loseMessage.textContent = "Sorry, better luck next time!"; 
        }
    }

    // /**
    //     * Begins game by selecting a random phrase and displaying it to user
    // */
    startGame() {
        document.querySelector('.start').style.display = 'none';
        const randomPhrase = new Phrase(this.activePhrase.phrase);
        randomPhrase.addPhraseToDisplay();
    }

}