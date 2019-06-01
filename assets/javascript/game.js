// wins, losses, and guesses left counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// array of potential computer choices (if placed inside the function, numbers will reset each time)
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// references to all the html sections we want to update (making shortcuts)
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var userGuessText = document.getElementById("userGuess");
var computerGuessText = document.getElementById("computerGuess");

// computer thinks of a number
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// create a reset function
function reset() {
    // updating the HTML to reflect the new variable values
    directionsText.textContent = "";
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    userGuessText.textContent = userGuess;
    computerGuessText.textContent = computerGuess;
}

// 1 - User presses key
// 2 - Computer selects a letter
// 3 - If user key is equal to computer letter, wins adds 1 pt
// 4 - If user does not equal to computer letter, losses adds 1 pt 
// 5 - Every round has 9 attempts 
// 6 - If 9 attemps is equal to 0, reset game

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("Computer's guess: " + computerGuess);
    console.log("User's guess:" + userGuess);
    
        if (userGuess) {

            // game reset
            if (guessesLeft === 0 || wins === 9  || losses === 9) {
                reset();
            } else {
                guessesLeft--;
            }
            
            // how you win or lose
            if (userGuess === computerGuess) {
                wins++;
            } else {
                losses++;
            }

        } else {
            alert("Press a key that corresponds with the alphabet!");
        }
    }
