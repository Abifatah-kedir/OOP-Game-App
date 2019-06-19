// used variables.
const qwertyElement = document.querySelector('#qwerty');
const phraseElement = document.getElementById('phrase');
const container = document.getElementsByClassName('main-container');

const loosingTries = document.querySelectorAll(".tries");
//counter.
let missed = 0;

//selects  the start button and stores back to the 
// overleyElement variable
const overleyElement = document.querySelector('.btn__reset');
const hideSreenOverley = document.querySelector('.start');

//triggers the 'click' on start game button to hide the overley.
overleyElement.addEventListener('click', () => 
{
    hideSreenOverley.style.display = 'none';
});

function retry() {
    
}

const phrasesInArray = [
    'take the risk',
    'lose the chance',
    'prove them wrong',
    'Dream big pray bigger',
    'if you want it work for it'
];

// reusable function that randomly picks phrase from passed variable container.
function getRandomPhraseAsArray(arr)
{
    //do stuff to any arr that is passed in
    let  getRandomPhrase= arr[Math.floor(Math.random()* arr.length)];
    let  phraseSplit = getRandomPhrase.split('');
    return phraseSplit;
}
// calls the function by passing variable constainer.
const phraseArray = getRandomPhraseAsArray(phrasesInArray);
  
function addPhraseToDisplay(arr)
{
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for(let i = 0; i < arr.length; i += 1)
    {
        const parentUl = document.querySelector('#phrase ul');
        const listItem = document.createElement('li');
        listItem.innerHTML += arr[i];
        parentUl.appendChild(listItem);

        if( /*arr[i] !== ' ' &&*/  arr[i].match(/^[a-zA-Z]+$/) )
        {
            listItem.className = 'letter';
            listItem.style.transition = 'all .75s';
        }
    }
    return arr;
}

addPhraseToDisplay(phraseArray);

let matchFoud = false;

function checkLetter(playerClickedButton)
{
    let  matchFoud = null;
    const letterList = document.querySelectorAll('.letter');

    for (let i = 0; i < letterList.length; i += 1) 
    {
        const letter = letterList[i].textContent.toLowerCase();
        if (playerClickedButton === letter)
        {
            matchFoud = true;
            letterList[i].classList.add('show');
        }
    }
    return matchFoud;  
}


qwertyElement.addEventListener('click', (event) =>
{
    if (event.target.tagName === 'BUTTON')
    {
        const letterClicked = event.target.textContent;

        event.target.classList.add("chosen");
        event.target.setAttribute('disabled', true);
        let letterFound =  checkLetter(letterClicked);

       if (letterFound === null)
       {
            //loosingTries[missed].style.display = 'none';
            let trialChances = document.querySelectorAll('.tries')[0];
            trialChances.remove();
            missed += 1;
       }
    }
    checkWin();
     
});

/*
      ===================================
        checks if the player wins or loses, 
        and declares win or lose decisions 
       ===================================
*/

//const title = document.querySelectorAll('.title');
const showOverley = document.querySelectorAll('.overlay');

function checkWin() 
{
    const lettersWithShow = document.querySelectorAll('.show');
    const lettersWithLetter = document.querySelectorAll('.letter');

    if (missed >= 5) 
    {

        showOverley.className = 'lose';
        showOverley.textContent =  'Sorry, you did loose'
        console.log(showOverley.textContent);
        //+ '<button class=btn__reset onclick=location=URL>Try again</button>'
       //console.log(showOverley.textContent);
       // container.appendChild(showOverley);
    }
    else if ( lettersWithShow.length === lettersWithLetter.length)
    {
        showOverley.className = 'win';
        showOverley.textContent = '<h1> Congrats!, you win </h1>';
        container.appendChild(showOverley);
    }
}
  
 


