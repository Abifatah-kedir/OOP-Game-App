/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    // /**
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
    checkLetter(UserPickedLetter){
        let thePhrase = this.phrase;
        for (let i = 0; i < thePhrase.length; i += 1) 
        {
            let letterPhrase = thePhrase[i].toLowerCase();
            if (UserPickedLetter === letterPhrase){
                this.showMatchedLetter(i);
            }else {
               
            }
        }
        console.log(this.phrase);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(MatchingLetter) {
        const randomPhrase = document.querySelectorAll(".letter");
        for(let i = 0; i < randomPhrase.length; i++){
           if( randomPhrase[i].textContent.toLowerCase() === MatchingLetter){
               randomPhrase[i].classList.add('show');
            }
        }
    }


}
