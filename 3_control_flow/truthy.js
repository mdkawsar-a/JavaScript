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
    console.log("Object is emty");
}