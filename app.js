var index, fact;
var factsOctopus = [
    'An Octopus has 8 arms.',
    'An Octopus has no teeth, but a beak.',
    'When an Octopus loses an arm, it regrows.'
];

var factsSloth = [
    'A sloth is very slow.',
    'A sloth must not each much.',
    'It takes up to a month to fully digest their food. That is why sloths are so slow.'
];

var factsPenguin = [
    'Penguins are black and white.',
    'Penguins live at the South Pole.',
    'Penguins are loyal.'
];

var buttons = document.getElementsByClassName('btn');
var factText = document.querySelector('#fact');


init();
setFunFact();

// Init function
function init() {
    // Reset
    index = 0;
    lastIndex = 0;
    fact = 'Select an animal to get a fun fact!';
    factText.textContent = fact;
}


// Add click listener to buttons and set fact to text field
function setFunFact() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            fact = generateFact(this.value);
            factText.textContent = fact;
        });
    }
}


// Generate fact based on clicked button and return
function generateFact(animal) {

    if (animal === 'octopus') {
        index = Math.floor(Math.random() * factsOctopus.length);
        fact = factsOctopus[index];
        return fact;

    } else if (animal === 'sloth') {
        index = Math.floor(Math.random() * factsSloth.length);
        fact = factsSloth[index];
        return fact;

    } else if (animal === 'penguin') {
        index = Math.floor(Math.random() * factsPenguin.length);
        fact = factsPenguin[index];
        return fact;

    } else {
        console.log('This is not an animal.');
    }
}