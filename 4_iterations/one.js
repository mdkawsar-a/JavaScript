// for 

for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value: ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
        
//         // console.log(`Inner Loop value: ${j} and Outer Loop: ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
    
// }

let myArray = ["Mango", "JackFruit", "Banana", "WaterMelon"]

// console.log(myArray.length);

for (let a = 0; a < myArray.length; a++) {
    const element = myArray[a];
    // console.log(element);
    
}

// break and continue

// for (let x = 1; x <= 20; x++) {
//     if (x==5) {
//         console.log("5 is Detected");
//         break
//     }
//     console.log(`Value of i is ${x}`);
    
// }
for (let x = 1; x <= 20; x++) {
    if (x==5) {
        console.log("5 is Detected");
        continue
    }
    console.log(`Value of i is ${x}`);
    
}