/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //**
    // * Display phrase on game board
    // */
    addPhraseToDisplay() { 
        let randomPrase = this.phrase;

        for(let i = 0; i < randomPrase.length; i++)
        {
            const parentUl = document.querySelector('#phrase ul');
            const listItem = document.createElement('li');

            listItem.textContent = randomPrase[i];
            parentUl.appendChild(listItem);

            if((/[a-zA-Z]/).test(listItem) )
            {
                listItem.className = 'letter';
                listItem.style.transition = 'all .75s';
            } else {
                listItem.className = "space";
            }
        }
        return randomPrase;
    }

     // /**
    //     * Checks if passed letter is in phrase
    //     * @param (string) playerClickedLetter - playerClickedLetter to checks 
    // */
    checkLetter(playerClickedLetter){
        if (this.phrase.includes(playerClickedLetter)) {
            return true;
        } else {
            return false;
        }
    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(playerClickedLetter) {
        const letterList = document.querySelectorAll('.letter');
        if (this.checkLetter(playerClickedLetter)) {
            for (let i = 0; i < letterList.length; i++) {
                if (letterList[i].textContent === playerClickedLetter) {
                letterList[i].classList.add("show");
                }
            }
        }
    }



}