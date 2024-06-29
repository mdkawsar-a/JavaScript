const userEmail = []

if (userEmail) {
    // console.log("Got user email");
}else{
    // console.log("Dont have user email");
}

// falsy values 
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){},

// if (userEmail.length === 0) {
//     console.log("Array is emty");
// }

const emtyObj = {}

if (Object.keys(emtyObj).length === 0) {
    // console.log("Object is emty");
}

// Nullish Coalescing Operator (??) null undefined

let val1;
// val1 = 4 ?? 30
// val1 = null ?? 20
// val1 = undefined ?? 10
val1 = null ?? 15 ?? 25

// console.log(val1);


// Terniary Operator 
// condition ? true : false

const bookPrice = 200

bookPrice >= 100 ? console.log("More than 100") : console.log("Less than 100"); 