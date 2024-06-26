// Primitive

// 7 types : String, Number, Boolean, null, Undefined, symbol, BigInt

const name = "MdKawsar"

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const temperature = null

let userEmail;     //undefined

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);

const bigNumber = 12123343455546n
// console.log(typeof bigNumber);


// Reference (Non Primitve)

// Array, Object, Functions

const friendName = ["Jonaid", "Kawsar", "Sumi", "Muttaleb"]

let myObj = {
    name: "Kawsar",
    age: 25
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof myFunction);


//++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "kawsar@youtube.com"

let anotherName = myYoutubeName 

anotherName = "chaiaurcode"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    email: "kawsar@gmail.com",
    id: 678166
}
let userTwo = userOne

userTwo.email = "kawsar@google.com"

console.log(userOne.email);
console.log(userTwo.email);