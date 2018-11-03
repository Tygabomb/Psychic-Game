
// instructions alerts
var instructions = 'start';
if (instructions === 'start') {
    alert('Welcome to the Letter Guess Game! (don\'t worry, you\'ll lose)');
    alert('Guess any letter. if your letters macth you WIN! (but no 1 ever ever does) You have 10 Guesses');
} else {
    alert('well you are no fun...');

};

// Letter bank or possible guesses 
var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Wins or correct letters  
var wins = 0;
// hints for what letter to chose
var losses = 0;
//   stored guesses or letters 
var guessesLeft = 10;
// how many guesses or trys left
var wrongLetter = [];
// 
var eachofLetters = null;


// generates a random letter
var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];


// tracks the guesses or lives left 
function countGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}


// collect wrong letters or guesses
function farUserGuesses() {
    document.querySelector("#wrong").innerHTML = "Your Guesses so far: " + wrongLetter.join(' ');
}

countGuessesLeft();

// resarts the game upon met requiremets
var restart = function () {
    guessesLeft = 10;
    wrongLetter = [];
    var compputerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length)];

}


// it will run the following function..on key up 
document.onkeyup = function (event) {
    guessesLeft--;

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    // pushes guess to the end of the list 
    wrongLetter.push(userGuess);
    countGuessesLeft();
    farUserGuesses();

    // 
    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();

    }
    // displays hint in new DIV

    hint.onclick("#hints").innerHTML = function () {

        // example given to me BUT it can't get it to work either.inner html will not display to the DOM
        //     var possible = [{ name: 'example', clue: 'example clue' }, { name: 'example2', clue: 'example 2 clue' }]
        //     var showClue = document.getElementById('bubble-text'),
        //     var answer = possible[Math.floor(Math.random() * possible.length)];
        //     showClue.textContent = answer.clue;

        var hints = [
            ["well its not that letter", "try again", 'dont do drugs', 'dont eat yellow snow']
        ];
        var hintDiv = document.getElementById("hints");

        hints.forEach(function (hint) {

            var hintClue = document.createElement("p");
            newHintP.textContent = hint;

            var wrongLetter = userGuess.indexOf(alphabet);
            showClue.innerHTML = "Clue: - " + hints;
        });
    }
}  