const myObject = {
    py: "Python",
    js: "JavaScript",
    java: "Java",
    cpp: "C++"
}

for (const key in myObject) {
    // console.log(key,"= ", myObject[key]);
    // console.log(`${key} = ${myObject[key]}`);
}

const programming = ["R", "GO", "JavaScript", "Python", "Java"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
// map.set('BD', "Bangladesh")
// map.set('FK', "Fakistan")
// map.set('AF', "Afghanistan")

// for (const key in map) {  // Not Iterable
//     console.log(key);
// }