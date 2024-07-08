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