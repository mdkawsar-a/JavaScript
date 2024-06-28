
// var z = 300
let x = 300
if(true){
    let x = 10
    const y = 20
    // console.log(x);
}

// console.log(x);
// console.log(y);


function one(){
    const username = "kawsar"

    function two(){
        const website = "google.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "kawsar"

    if(username === "kawsar"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(usernaem);


//+++++++++++++++++++++++++++++++++++

console.log(addOne(4));

function addOne(num){
    return num + 2
}

// addTwo(5) Error
const addTwo = function(num){
    return num + 5
    
}
addTwo(5)