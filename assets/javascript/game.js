// var game = {

    

//     films : ["Slither", "The Omen", "The Ring", "The Orphanage", "Halloween", "The Exorcist", "Trick r Treat", "Phantasm", "The Evil Dead", "Cube", "Hellraiser", "Candyman", "Scream", "Saw", "Us", "IT", "Pet Sematary", "Audition", "The Others", "The Changeling", "The Conjuring", "Poltergeist", "Hausu", "The Shining", "Let the Right One In", "Suspiria", "Cannibal Holocaust", "The Woman in Black", "The Awakening"],

//     alphabet : Array.from("abcdefghijklmnopqrstuvwxyz"),
//         // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

//     guesses : [],

//     filmNameLength : 0,
//     wins : 0,
//     losses : 0,
//     lives: 12,


// }

 var filmHolder = ["liv", "is", "cold", "and", "tired"];

 var holder = document.getElementById("filmName");

//  var directionsText = document.getElementById("directions");
//  var winsText = document.getElementById("wins");
//  var lossesText = document.getElementById("losses");
//  var livesText = document.getElementById("lives");
//  var userGuess = document.getElementById("userGuess");
//  var filmName = document.getElementById("filmName");
//  var holder = document.getElementById("holder");
//  var guessBox = document.getElementById("guessBox");


// document.onkeyup = function(event) {
    
//     var userGuess = event.key.toLowerCase();

//     var filmName = game.films[Math.floor(Math.random() * game.films.length)];


//     console.log(filmName);
//     filmName.textContent = filmName;


// }

// letters.includes(userGuess);
// guesses.push(userGuess);



// for (var i = 0; i < filmName.length; i++) {
    // holder.push("_");
    // console.log()
// }

for (var i=0; i < filmHolder.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.textContent = filmHolder[i];
    holder.appendChild(newDiv);
}
