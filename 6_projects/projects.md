# JavaScript projects related to dom

# project link
## [Click here](https://stackblitz.com/edit/stackblitz-starters-tfhgrm?file=index.html)

# solution code

# project 1

```Javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (ev) => {
    // console.log(ev.target.id)
    if(ev.target.id == 'gray'){
      body.style.backgroundColor = ev.target.id
    }
    if(ev.target.id == 'blue'){
      body.style.backgroundColor = "cadetblue"
    }
    if(ev.target.id == 'yellow'){
      body.style.backgroundColor = ev.target.id
    }
    if(ev.target.id == 'green'){
      body.style.backgroundColor = ev.target.id
    }
    if(ev.target.id == 'orange'){
      body.style.backgroundColor = ev.target.id
    }
  });
});

```

## project 2

```javascript
const form = document.querySelector('form');
// height`s value is empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    // Show the result
    // if (bmi < 18.6) {
    //   result.innerHTML = `<span>Under Weight = ${bmi}</span>`;
    // } else if (bmi >= 18.6 && bmi <= 24.9) {
    //   result.innerHTML = `<span>Normal Range = ${bmi}</span>`;
    // } else if (bmi > 24.9) {
    //   result.innerHTML = `<span>Over Weight = ${bmi}</span>`;
    // }
    switch (true) {
      case bmi < 18.6:
        result.innerHTML = `Under Weight = ${bmi}`;
        break;
      case bmi >= 18.6 && bmi <= 24.9:
        result.innerHTML = `Normal Range = ${bmi}`;
        break;
      case bmi > 24.9:
        result.innerHTML = `Over Weight = ${bmi}`;
        break;
    }
  }
});

```

## Project 3

```javascript
const clock = document.querySelector('#clock');

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('#prevGuesses');
const remaining = document.querySelector('#remaining');
const lowOrHigh = document.querySelector('#message');
const startOver = document.querySelector('.guessParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessValue = parseInt(userInput.value);
    validateGuess(guessValue);
  });
}

function validateGuess(valid) {
  if (isNaN(valid)) {
    alert(`Please enter a valid number`);
  } else if (valid < 1) {
    alert(`Please enter a number more than 1`);
  } else if (valid > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(valid);
    if (numGuess === 10) {
      displayGuess(valid);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(valid);
      checkGuess(valid);
    }
  }
}

function checkGuess(check) {
  if (check === randomNumber) {
    displayMessage(`YOU guessed it right`);
    endGame();
  } else if (check < randomNumber) {
    displayMessage(`Number is TOOO Low`);
  } else if (check > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  if (guessSlot !== '') {
    guessSlot.style.backgroundColor = '#6c6d6d';
  }
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  playGame = false;
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const startNewGame = document.querySelector('#newGame');
  startNewGame.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = '';
    guessSlot.style.backgroundColor = '';
    lowOrHigh.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```
