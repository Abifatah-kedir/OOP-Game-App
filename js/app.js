/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * */

const phrase = new Phrase();
const game = new Game();

  
const overleyElement = document.querySelector('#btn__reset');
overleyElement.addEventListener('click', (event) => {
    game.startGame();

    // console.log(game.activePhrase.checkLetter("o"));

});

