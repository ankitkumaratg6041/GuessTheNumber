let correctNumber;
let recordedGuess = [];

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
  generateRandomNumber();
};

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;

  saveGuessHistory(numberGuess);   //for saving guess history
  displayHistory();   //for printing the guessed number
  displayResult(numberGuess);   //checking the guessed number against correctNumber
}

function generateRandomNumber() {
  correctNumber = Math.floor(Math.random() * 100 + 1);
}

function displayResult(numberGuess) {
  if (numberGuess < correctNumber) {
      showGuessedBelow();
    } 
    else if (numberGuess > correctNumber) {
        showGuessedAbove();
    }
    else {
        showYouWon();
  }
}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType) {
        case "warning":
            dialog = "<div id='alert-warning'><h3>" + text + "</h3></div>"
            break;
        case "success": 
            dialog = "<div id='alert-success'><h3>" + text + " in " + recordedGuess.length + " attempts!!</h3></div>"
            break;
    }
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, You got it correct";
    let dialog = getDialog('success', text);
    console.log(dialog);
    document.getElementById('result').innerHTML = dialog;
}

function showGuessedAbove() {
    const text = "Your guess is too high :(";
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

function showGuessedBelow() {
    const text = "Your guess is too low :(";
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

function showHistory(numberGuessed) {
    let guessedNumberDialog;
    guessedNumberDialog = '<div id="lastInput"><h3>'+"You guessed "+ numberGuessed+'</h3></div>';
    return guessedNumberDialog;
}

function saveGuessHistory(textForRecording) {
    recordedGuess.push(textForRecording);
}

function displayHistory() {
    let index;
    let list;
    list = "<ul class='lastInputClass'>";
    for(index = (recordedGuess.length)-1; index >= 0; index--) {
        list += '<li class="lastInput"><h3>You guessed '+ recordedGuess[index] + '</h3><li>';
    }
    list += "</ul>";
    document.getElementById("history").innerHTML = list;
}

function initGame() {
    correctNumber = generateRandomNumber();
    document.getElementById('result').innerHTML = "";
    recordedGuess = [];
    document.getElementById("history").innerHTML = "";
}