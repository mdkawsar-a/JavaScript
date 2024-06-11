// Array 

const myArray = [0, 1, 2, 3, 4, 5]
const myFriend = ["Sohel", "Sumi", "Jonaid"]

const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray2[0]);

// Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myFriend.includes("Sumi"));
// console.log(myFriend.indexOf("Sumi"))

// const newArr = myArray.join()
// // console.log(myArray);
// console.log(typeof newArr); // String

// slice splice

// console.log("A ", myArray);

// const myn1 = myArray.slice(1, 4)
// console.log(myn1);

// console.log("B ", myArray);
 
// const myn2 = myArray.splice(1, 4)
// console.log("C ", myArray);
// console.log(myn2);

///++++++++++++++++++++++

const myFavouriteGame = ["Cricket", "Football", "Free fire", "Hockey",]
const myFavouritePlayers = ["Sakib", "Musfik", "Mehedi", "Mustafizur"]

// myFavouriteGame.push(myFavouritePlayers)

// console.log(myFavouriteGame[4][3]);

const gamesAndPlayers = myFavouriteGame.concat(myFavouritePlayers)

// console.log(gamesAndPlayers);

const allGameAndPlayers =  [...myFavouriteGame, ...myFavouritePlayers] // Spread 

//  console.log(allGameAndPlayers);


const newArray = [1, 2, 3, 4, [5, 6, 7, ], 8, [4, 5, 6, 7, [7, 4, 3, 2]] ]

const anotherArray = newArray.flat(Infinity)
// console.log(anotherArray);


// console.log(Array.isArray("newArray"))
// console.log(Array.from("kawsar"))
// console.log(Array.from({name: "kawsar"})) // Return Emty Array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));