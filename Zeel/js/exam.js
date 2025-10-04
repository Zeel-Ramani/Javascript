
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let userGuesses = [];
let gameOver = false;

function checkGuess() {
    // alert("Hello")

    const input = document.getElementById("guesInput");
    let guess = parseInt(input.value);

    console.log(guess);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("feedback").innerHTML = "Enter valid number 1 To 100.";
        return;
    }

    attempts++;
    userGuesses.push(guess);

    document.getElementById("attempts").innerHTML = attempts;
    document.getElementById("prevGuesses").innerHTML = userGuesses.join(", ");

    if (guess === targetNumber) {
        document.getElementById("feedback").innerText = ` Correct  You guess  in ${attempts} attempts.`;
        gameOver = true;
    } else if (guess < targetNumber) {
        document.getElementById("feedback").innerText = " Too low Number";
    } else {
        document.getElementById("feedback").innerText = " Too high Number";
    }

    input.value = "";
}
