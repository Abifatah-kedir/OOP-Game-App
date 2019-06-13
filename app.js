// used variables.
const qwertyElement = document.getElementById('qwerty');
const phraseElement = document.getElementById('phrase');

//counter.
let missed = 0;

//selects  the start button and stores back to the 
// overleyElement variable
const overleyElement = document.querySelector('.btn__reset');


//triggers the 'click' on start game button to hide the overley.
overleyElement.addEventListener('click', () => 
{
    const hideSreenOverley = document.querySelector('.start');
    hideSreenOverley.style.display = 'none';
});


// varia
const phrasesInArray = [
    'variables',
    'loops',
    'functions',
    'operators',
    'Arrays'
];

// reusable function that randomly picks phrase from passed variable container.
function getRandomPhraseAsArray(arr){
    let  getRandomPhrase= arr[Math.floor(Math.random()* arr.length)];
    let  phraseSplit = getRandomPhrase.split('');
    return phraseSplit;
}
getRandomPhraseAsArray(phrasesInArray);// calls the function by passing variable constainer.