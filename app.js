// used variables.
const qwertyElement = document.querySelector('#qwerty');
//const phrasesInArray = document.getElementById('phrase');
const loosingTries = document.querySelectorAll(".tries");
//counter.
let missed = 0;

//selects  the start button and stores back to the 
// overleyElement variable
const hideSreenOverley = document.querySelector('.start');
const overleyElement = document.querySelector('.btn__reset');


const phrasesInArray = [
    'take the risk',
    'lose the chance',
    'prove them wrong',
    'Dream big pray bigger',
    'if you want it work for it'
];
//triggers the 'click' on start game button to hide the overley.
overleyElement.addEventListener('click', () => 
{
    hideSreenOverley.style.display = 'none';
});

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

        if( arr[i] !== ' ' &&  arr[i].match(/^[a-zA-Z]+$/) )
        {
            listItem.className = 'letter';
            listItem.style.transition = 'all .75s';
        } else {
            listItem.className = "space";
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
        let letterFound =  checkLetter(letterClicked);
        event.target.classList.add("chosen");
        event.target.setAttribute('disabled', true);
       if (letterFound === null)
       {
            loosingTries[missed].style.display = 'none'
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
//const showOverley = document.querySelectorAll('#overlay');

function checkWin() 
{
    const lettersWithShow = document.querySelectorAll('.show');
    const lettersWithLetter = document.querySelectorAll('.letter');
    const gameSection = document.querySelectorAll('.section');
    if (missed === 5) 
    {
        for (let i = 0; gameSection.length; i++)
        {
            let li = gameSection[i];
    
            if ( li.className === 'section' ) 
            {
                li.style.display = 'none';
                hideSreenOverley.style.display = "block";
                hideSreenOverley.className = 'lose';
            }  
        }
       
       
        //showOverley.textContent =  '<h2> Sorry, you did loose <h2>'
        //sdocument.write(showOverley.textContent);
    }
    else if ( lettersWithShow.length === lettersWithLetter.length)
    {
        showOverley.className = 'win';
        showOverley.textContent = 'CongratextContentts!, you win ';
        console.log(showOverley.textContent);
       
    }
   
}