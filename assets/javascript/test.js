var gameStarted = false;
var wins = 0;
var losses = 0;

var films = ["Slither", "The Omen", "The Ring", "The Orphanage", "Halloween", "The Exorcist", "Trick r Treat", "Phantasm", "The Evil Dead", "Cube", "Hellraiser", "Candyman", "Scream", "Saw", "Us", "IT", "Pet Sematary", "Audition", "The Others", "The Changeling", "The Conjuring", "Poltergeist", "Hausu", "The Shining", "Let the Right One In", "Suspiria", "Cannibal Holocaust", "The Woman in Black", "The Awakening"];

var alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");



document.onkeyup = function(event) {
    
    if (gameStarted === false) {

        startGame();
    } 
};



var startGame = function() {

    gameStarted = true;
    lives = 12;
    losses = losses;
    wins = wins;
    randomFilm = [];
    upperCaseFilm = [];
    currentFilm = [];
    wrongGuesses = [];
    film = [];

    var userGuessText = document.getElementById("userGuess");
    var livesRemainText = document.getElementById("lives");
    var guessFilmText = document.getElementById("guessFilm");
    var lossesText = document.getElementById("losses");
    var winsText = document.getElementById("wins");
    var messageText = document.getElementById("message");

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

    document.onkeyup = function(event) {
        if (gameStarted === true) {

            var userGuess = event.key.toUpperCase();
            
            for (var j = 0; j < currentFilm.length; j++) {
                if (currentFilm[j] === userGuess) {
                        film[j] = userGuess;
                        guessFilmText.textContent = film;

                        var winning = film.join("");

                        if (winning === upperCaseFilm) {
                            wins++;
                            winsText.textContent = wins;
                            messageText.textContent = "You Win!";
                            gameStarted = false;
                        }}
    
                else if (!wrongGuesses.includes(userGuess) && !currentFilm.includes(userGuess) && alphabet.includes(userGuess)) {
                    wrongGuesses.push(userGuess);
                    userGuessText.textContent = wrongGuesses;
                    lives--;
                    livesRemainText.textContent = lives;
                        if (lives < 1) {
                            losses++;
                            lossesText.textContent = losses;
                            messageText.textContent = "You Lose";
                            guessFilmText.textContent = upperCaseFilm;
                            gameStarted = false;
                        }
                     }
                }
            } else {
                lossesText.textContent = losses;
                winsText.textContent = wins;
                randomFilm = [];
                upperCaseFilm = [];
                currentFilm = [];
                film = []
                guessFilmText.textContent = film;
                wrongGuesses = [];
                userGuessText.textContent = wrongGuesses;
                livesRemainText.textContent = 12;
                messageText.textContent = " ";

                startGame();
            }
        };

    }
    

    
   
   
        
    
