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
    console.log(programming[key]);
}
