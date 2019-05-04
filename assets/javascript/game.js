
var gameStarted = false;
var wins = 0;
var losses = 0;

var films = ["Slither", "The Omen", "The Ring", "The Orphanage", "Halloween", "The Exorcist", "Trick r Treat", "Phantasm", "The Evil Dead", "Cube", "Hellraiser", "Candyman", "Scream", "Saw", "Us", "IT", "Pet Sematary", "Audition", "The Others", "The Changeling", "The Conjuring", "Poltergeist", "Hausu", "The Shining", "Let the Right One In", "Suspiria", "Cannibal Holocaust", "The Woman in Black", "The Awakening", "The Haunting of Hill House", "The Howling", "The Fly", "The Brood", "The Babadook", "It Follows", "An American Werewolf in London", "Sinister", "Insidious", "Psycho", "The Texas Chainsaw Massacre", "The Silence of the Lambs", "The Descent", "Drag Me to Hell", "The Sixth Sense", "Train to Busan", "Get Out", "The Strangers", "The Wicker Man", "Oculus", "Carrie", "The Cabin in the Woods", "Hostel", "The Eye", "Final Destination", "A Quiet Place", "Martyrs", "The Witch", "Invasion of the Body Snatchers", "Night of the Living Dead", "The Thing", "In the Mouth of Madness"];


var alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var userGuessText = document.getElementById("userGuess");
var livesRemainText = document.getElementById("lives");
var guessFilmText = document.getElementById("guessFilm");
var lossesText = document.getElementById("losses");
var winsText = document.getElementById("wins");
var messageText = document.getElementById("message");




document.onkeyup = function(event) {
    
    if (gameStarted === false) {

        startGame();
    } 
};



var startGame = function() {

    gameStarted = true;
    lives = 6;
    losses = losses;
    wins = wins;
    randomFilm = [];
    upperCaseFilm = [];
    currentFilm = [];
    wrongGuesses = [];
    film = [];


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
                livesRemainText.textContent = 6;
                messageText.textContent = " ";

                startGame();
            }
        };

    }
    

    
   
   
        
    
