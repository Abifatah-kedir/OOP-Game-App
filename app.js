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
    'Variables',
    'Loops',
    'Functions',
    'Operators',
    'Arrays'
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
    for(let i = 0; i < arr.length; i++)
    {
        const parentUl = document.querySelector('ul');
        const listItem = document.createElement('li');
        listItem.innerHTML += arr[i];
        parentUl.appendChild(listItem);
        listItem.className = 'letter';

    }

}
addPhraseToDisplay(phraseArray);