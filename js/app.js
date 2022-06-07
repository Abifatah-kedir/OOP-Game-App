/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js 
 * */

let game;

const userSelectedKeys =document.querySelector("button#btn__reset");
userSelectedKeys.addEventListener("click", () => {
  game = new Game();
  game.resetGame();
  game.startGame();

  //for testing
  console.log(game.activePhrase.phrase);
});

const keyboard = document.getElementById("qwerty");
keyboard.addEventListener("click", (event)=> {
  const SelectedKey = event.target;
  if (SelectedKey.className === "key") {
    game.handleInteraction(event.target);
  }
});

