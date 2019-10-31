# Guess That Horror Movie!
## A Word Guess Game 
### Homework - Javascript


Game Functionality
==================

### Deployed Link: https://theguardingdark.github.io/Word-Guess-Game/

Upon loading, players are presented with a simple graveyard featuring two headstones. One headstone declares the game title and a skull image while the other displays the instructions "Press Any Key to Get Started". Once a key is pressed the game will begin.

A random Horror film title is generated and replaces the headstone instructions with the line "The film title is:" and a series of underscores separated by commas to indicate each letter of the title and spaces to indicate each space within the film name. Under this is the line "Wrong Guesses:". The content on the first headstone is replaced with lines indicating Guesses Left: 6, Wins: 0, and Losses: 0.

When the player chooses a letter it will appear either in the Wrong Guesses list and deduct a point from Guesses Left, or it will replace an underscore to indicate where in the film title it occurs.

If the player correctly guesses all letters of the film before the Guesses Left counter reaches zero, the film title will display and the number of wins will increase by one, ending the game.

If the player does not guess all of the letters correctly before the Guesses Left counter reaches zero, the film title will auto fill and the number of losses will increase by one, ending the game.

Once the game has ended, any key that the player presses will start a new game, resetting the Guesses Left counter, but keeping the player's current wins and losses. The game may be played as many times as the player desires.




