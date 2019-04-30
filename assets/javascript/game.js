

var choiceOptions = ["Slither", "The Omen", "The Ring", "The Orphanage", "Halloween", "The Exorcist", "Trick r Treat", "Phantasm", "The Evil Dead", "Cube", "Hellraiser", "Candyman", "Scream", "Saw", "Us", "IT", "Pet Sematary", "Audition", "The Others", "The Changeling", "The Conjuring", "Poltergeist", "Hausu", "The Shining", "Let the Right One In", "Suspiria", "Cannibal Holocaust", "Saw", "The Woman in Black", "The Awakening"];

var wins = 0;
var losses = 0;
var guessesLeft = 12;



var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuess = document.getElementById("userGuess");
var guessesLeftText = document.getElementById("guessesLeft");
var computerChoice = document.getElementById("computerChoice");

document.onkeydown = function(event) {
    

    var computerChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];


    // object.onkeyup = function(){
        // var userGuess = event.key.toLowerCase();

    // };
    console.log(computerChoice);
    computerChoice.textContent = computerChoice;
}