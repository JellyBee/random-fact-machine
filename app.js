var index, fact;
var factsOctopus = [
    'An octopus has three hearts.',
    'The plural of octopus is octopuses, not "octopi".',
    'Octopuses have no teeth, but a beak.',
    'When an Octopus loses an arm, it regrows.',
    'Octopuses have blue blood.',
    'An octopus has no bones, so he can squeeze through the tiniest of cracks.',
    'Octopuses can change their skin color and pattern to camouflage perfectly.',
    'The arms of an octopus have a mind of their own, because two-thirds of all neurons reside in them.',
    'Octopuses are said to have a unique character.',
    'Octopuses are the most intelligent of all invertebrates: they learn from experieces and use tools.'
];

var factsSloth = [
    'A sloth is very slow on land, but a great swimmer.',
    'Sloths poo once a week a third of their body weight.',
    'Sloths have the lowest metabolic rate of any mammal: It takes up to a month to fully digest a leaf.',
    'Sloths often have green camouflage, because of algaes on their fur.',
    'Sloths are nocturnal.',
    'Three-toed sloths can turn their head almost 360 degrees.',
    'A sloth can live up to 40 years.',
    'Sloth can hang upside down from a tree for a long time, without wasting any energy.',
    'A newborn sloth can lift its entire body weight with just one arm.',
    'Sloths are color-blind, can only see poorly in dim light and are blind in daylight.'
];

var factsPenguin = [
    'Penguins exclusively live in the Southern Hemisphere.',
    'Penguins are loyal.',
    'Some penguin species mate for life.',
    'Penguins jump into the air before diving to swim faster.',
    'Gentoo penguins can swim up to 20 miles per hour.',
    'Penguins lose all their feathers once a year, and can\'t swim or fish until it grows back.',
    'Emperor penguins incubate their eggs on their feet, staying that way until the eggs hatch.',
    'The largest penguin colonies include hundreds of thousands of birds.',
    'Penguins are highly social. They even swim and feed in groups.',
    'Penguins can drink salt water because of special gland, that filters salt from the bloodstream.'
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

document.querySelector('.wrapper-inner').addEventListener('click', function() {
    console.log('This is not an animal.');
});