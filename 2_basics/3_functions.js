
function sayMyname(){
    console.log("k");
    console.log("a");
    console.log("w");
    console.log("s");
    console.log("a");
    console.log("r");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 7)

// console.log(`Result: ${result}`);

function loginUserMessage(username = "Sumi"){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} Just logged In`
}

// console.log(loginUserMessage("Kawsar"))
// console.log(loginUserMessage( "Kawsar"))

function culculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(culculateCartPrice(900, 200, 200, 300))