


// var isFirstGame = true;
var gameStarted = false;
var wins = 0;
var losses = 0;
var livesRemaining = 12;
var filmPoster;

var films = ["Slither", "The Omen", "The Ring", "The Orphanage", "Halloween", "The Exorcist", "Trick r Treat", "Phantasm", "The Evil Dead", "Cube", "Hellraiser", "Candyman", "Scream", "Saw", "Us", "IT", "Pet Sematary", "Audition", "The Others", "The Changeling", "The Conjuring", "Poltergeist", "Hausu", "The Shining", "Let the Right One In", "Suspiria", "Cannibal Holocaust", "The Woman in Black", "The Awakening"];
var film = [];
var alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");
var wrongGuesses = [];

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var livesRemainText = document.getElementById("lives");
var userGuessText = document.getElementById("userGuess");
var holderText = document.getElementById("holder");


document.onkeyup = function(event) {

    if (gameStarted === false) {
        
    // isFirstGame = false;
    gameStarted = true;
    livesRemaining = 12;
    randomFilm = [];
    upperCaseFilm = [];
    currentFilm = [];
    wrongGuesses = [];
    

    var guessFilmText = document.getElementById("guessFilm");
    
    // var userGuess = event.key.toUpperCase();

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
        else {
            var userGuess = event.key.toUpperCase();
            console.log(userGuess);
            userGuess.textContent = userGuess;
        }
}