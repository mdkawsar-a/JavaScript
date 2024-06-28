
const user = {
    username: "Kawsar",
    price: 3999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sumi"
// user.welcomeMessage()

// console.log(this);

function tae() {
    let name = "kawsar"
    return name
    // console.log(this.name);
}
// tae()

// const demo = function() {
//     let firstName = "Kawsar"
//     // console.log(this);
// }
// demo()

const arrow = () => {
    let firstName = "Kawsar"
    return firstName
    // console.log(this);
}
// arrow()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "Kawsar"})

console.log(addTwo(5,2));

