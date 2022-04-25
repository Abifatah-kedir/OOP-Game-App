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

     
        
    // checkWin() {
       
    //     const gameStatus = null;

    //     const lettersWithShow = document.querySelectorAll('.show');
    //     const lettersWithLetter = document.querySelectorAll('.letter');
    //     const gameSection = document.querySelectorAll('.section');

       
    //     if (this.missed === 5) 
    //     {
    //         for (let i = 0; gameSection.length; i++)
    //         {
    //             let li = gameSection[i];
        
    //             if ( li.className === 'section' ) 
    //             {
    //                 li.style.display = 'none';
    //                 hideSreenOverley.style.display = "block";
    //                 hideSreenOverley.classList.add('lose');
    //                 hideSreenOverley.removeChild(overleyElement);
    //                 hideSreenOverley.append(loseMessage);
    //             }  
    //         }
    //         //showOverley.textContent =  '<h2> Sorry, you did loose <h2>'
    //         //sdocument.write(showOverley.textContent);
    //     } else if ( lettersWithShow.length === lettersWithLetter.length) {
    //         for (let i = 0; gameSection.length; i++)
    //         {
    //             let li = gameSection[i];
        
    //             if ( li.className === 'section' ) 
    //             {
    //                 li.style.display = 'none';
    //                 hideSreenOverley.style.display = "block";
    //                 hideSreenOverley.classList.add('win');
    //                 hideSreenOverley.removeChild(overleyElement);
    //                 hideSreenOverley.append(winMessage);
    //             }  
    //         }
    //     }

    //     for (let i =0; i < lettersWithLetter.length; i++){
    //         if (lettersWithLetter[i].classList.contains("show") ) {
    //             console.log(lettersWithLetter[i]);
    //         }
    //     }
    // }

    // /**
    //     * Increases the value of the missed property
    //     * Removes a life from the scoreboard
    //     * Checks if player has remaining lives and ends game if player is out
    // */
    // removeLife(){
    //     const loosingTries = document.querySelectorAll(".tries img");
    //     const theHearts = loosingTries[loosingTries.length - 1];
    //     theHearts.src = "images/lostHeart.png";

    //     let missedTimes = this.missed;
    //     missedTimes = missedTimes + 1;

    //     if(missedTimes == 5) {
    //         gameOver(); 
    //     }
    // }
    // /**
    //     * Displays game over message
    //     * @param {boolean} gameWon - Whether or not the user won the game
    // */
    // gameOver(gameWon) {
    //     const loseMessage = document.createElement("h1");
    //     loseMessage.textContent = "Sorry, you lose! "; 
    //     const winMessage = document.createElement('h1');
    //     winMessage.textContent = "Congrats!, you win ";
    // }



    // /**
    //     * Begins game by selecting a random phrase and displaying it to user
    // */
    startGame() {
        document.querySelector('.start').style.display = 'none';
        const randomPhrase = new Phrase(this.activePhrase);
        randomPhrase.addPhraseToDisplay();
    }
}