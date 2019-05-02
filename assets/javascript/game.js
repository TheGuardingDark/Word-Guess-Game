
// var wins = 0;
// var losses = 0;
// var livesRemain = 12;
// var filmPoster;
// var film;
// var isFirstGame = true;
// var gameStarted = false;


// var filmPoster = document.getElementById("filmPoster")[0];
// var winsDiv = document.getElementById("wins")[0];
// var lossesDiv = document.getElementById("losses")[0];
// var livesRemainDiv = document.getElementById("livesRemain")[0];
// var messageDiv = document.getElementById("message")[0];
// var userGuessesDiv = document.getElementById("userGuesses")[0];
// var userInterface = document.getElementById("userInterface")[0];
// var gameWrapper = document.getElementById("gameWrapper")[0];


var  films = ["Slither", "The Omen", "The Ring", "The Orphanage", "Halloween", "The Exorcist", "Trick r Treat", "Phantasm", "The Evil Dead", "Cube", "Hellraiser", "Candyman", "Scream", "Saw", "Us", "IT", "Pet Sematary", "Audition", "The Others", "The Changeling", "The Conjuring", "Poltergeist", "Hausu", "The Shining", "Let the Right One In", "Suspiria", "Cannibal Holocaust", "The Woman in Black", "The Awakening"];
var film = [];
var alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
var wrongGuesses = [];


document.onkeyup = function(event) {

    var guessFilmText = document.getElementById("guessFilm");
    
    var userGuess = event.key.toUpperCase();

    var randomFilm = films[Math.floor(Math.random() * films.length)];

    var upperCaseFilm = randomFilm.toUpperCase();

    var currentFilm = Array.from(upperCaseFilm);

   for (i = 0; i < currentFilm.length; i++) {
    

   if (currentFilm[i] === " ") {
        film.push(" "); 

    } else {
        film.push("_"); 
           

}};

    guessFilmText.textContent = film;

    // alert(currentFilm);
    // currentFilm.textContent = currentFilm;

    // console.log(film);
    // film.textContent = film;
}