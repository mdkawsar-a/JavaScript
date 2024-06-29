// Array loop

// for of 

// ["", "", "", ""]
// [{}, {}, {}]

const myArry = [1, 2, 3, 4, 5, 6]

for (const num of myArry) {
    // console.log(num);
}

const greetings = "!Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('BD', "Bangladesh")
map.set('FK', "Fakistan")
map.set('AF', "Afghanistan")

// console.log(map.get('BD'));

for (const [i, j] of map) {
    // console.log(i, "= ", j);
}

const myObj = {
    book: "Holly Quran",
    hadishBook: "Bokhari"
}

// for (const [key, value] of myObj) {
//     console.log(key, value);
// }