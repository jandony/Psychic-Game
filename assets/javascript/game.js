// wins, losses, and guesses left counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

// array of potential computer choices (if placed inside the function, numbers will reset each time)
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// references to all the html sections we want to update (making shortcuts)
var directionsText = document.getElementById("directions");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var userGuessText = document.getElementById("userGuess");

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("Computer Guess: " + computerGuess)

alert("Click ok to start!");

// create a reset function
function reset() {
    // updating the HTML to reflect the new variable values
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("Computer Guess: " + computerGuess)
    guessesLeft = 9;
    guessedLetters = [];
}

document.onkeyup = function (event) {
    var userGuess = event.key;

    // how you win or lose
    if (userGuess === computerGuess) {
        wins++;
        reset();
    } else {
        guessesLeft--;
        guessedLetters.push(userGuess);
        userGuessText.textContent =guessedLetters.join(", ");
        
        console.log("User Guess: " + guessedLetters)
    }

    if (guessesLeft == 0) {
        losses++;
        reset();
    }

    directionsText.textContent = "";
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    
}