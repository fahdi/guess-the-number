let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessField').value);
    guesses += 1;
    
    if (isNaN(userGuess)) {
        alert('Please enter a number');
        return;
    }

    let resultText = '';
    if (userGuess === randomNumber) {
        resultText = 'Congratulations! You got it right in ' + guesses + ' guesses!';
    } else if (guesses >= 10) {
        resultText = 'Game over! The number was ' + randomNumber;
    } else if (userGuess < randomNumber) {
        resultText = 'Your guess is too low!';
    } else if (userGuess > randomNumber) {
        resultText = 'Your guess is too high!';
    }

    document.getElementById('guessField').focus();

    document.getElementById('result').textContent = resultText;
}
