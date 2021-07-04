window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

let correctNum = randomNumber();


function randomNumber () {
    let random = Math.random();
    let number = Math.floor(random * 100) + 1;
    return number;
}

let guesses = [];

function playGame () {
    let guessNumber = document.getElementById("number-guess").value;
    displayResult(guessNumber);
    guessHistory(guessNumber);
    displayHistory();
}

function resetResultContent(){
    document.getElementById("result").innerHTML = "";
  }

function displayResult (guessNumber) {
    if (guessNumber > correctNum) {
        tooHigh();
    }if (guessNumber < correctNum) {
        tooLow();
    } 
    if (guessNumber == correctNum) {
        showWon();
    } 
}

function getDialog (dialogType, text) {
    let dialog;
    switch(dialogType){
        case 'warning':
            dialog = "<div class='alert alert-warning' role='alert'>";
            break;
        case 'won' :
            dialog = "<div class='alert alert-success' role='alert'>";
            break; 
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showWon () {
    const text = "Awesome!, you guess is correctly"
    let dialog = getDialog('won', text);

    document.getElementById("result").innerHTML = dialog;
}

function tooLow () {
    const text = "Your guess is too low"
    let dialog = getDialog('warning', text);

    document.getElementById("result").innerHTML = dialog;
}

function tooHigh () {
    const text = "Your guess is too High"
    let dialog = getDialog('warning', text);

    document.getElementById("result").innerHTML = dialog;
}

function guessHistory (guess) {
  guesses.push(guess)
}

function displayHistory () {
   let index = guesses.length - 1;
   let list = "<ul class='list-group'>"
   
   while (index >= 0) {
       list += "<li class='list-group-item'>" + 
       "You guessed " + guesses[index] + "</li>";
       
       index-=1;
   } 
   list += '</ul>';
   document.getElementById("history").innerHTML = list;
}

function initGame () {
    correctNum = randomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}