// if

const isUserLoggedIn = true
const temperature = 41

// if ( temperature === 40 ) {
//     console.log("Less than 50");
// }else { 
//     console.log(`temperature is greater than 50`);

// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if( score > 100 ){
//     var bird = "fly"
//     console.log(`Bird is ${bird}`);
// }

// console.log(`Bird is: ${bird}`);

// const balence = 400

// if(balence > 300) console.log("test"), console.log("test2"); Unreadable code

// if (balence < 200) {
//     console.log("Less than 200");
    
// }else if (balence < 300) {
//     console.log("Less than 300");
    
// }else if (balence < 400) {
//     console.log("Less than 400");

// }else if (balence < 500) {
//     console.log("Less than 500");
    
// }else{
//     console.log("Greater than 400");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = false
const loggedInFromGoogle = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In");
}