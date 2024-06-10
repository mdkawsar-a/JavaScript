// Primitive

// 7 types : String, Number, Boolean, null, Undefined, symbol, BigInt

const name = "MdKawsar"

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const temperature = null

let userEmail;

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

console.log(typeof myFunction);