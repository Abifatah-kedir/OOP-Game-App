/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * */

const phrase = new Phrase();
const game = new Game();

const overleyElement = document.querySelector('#btn__reset');
overleyElement.addEventListener('click', () => {
    game.startGame();
});

const userSelectedKeys = document.getElementById("qwerty");
userSelectedKeys.addEventListener('click', (button)=> {
    if(button.target.tagName === 'BUTTON'){
        game.handleInteraction(button.target);
    }
});