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
