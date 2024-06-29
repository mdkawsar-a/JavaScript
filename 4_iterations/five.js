const coding = ["js", "java", "python", "ruby", "c++"]

// coding.forEach( function (value){
//     console.log(value);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printOut(item){
//     console.log(item);
// }
// coding.forEach(printOut)

// coding.forEach( (value, index, arr) => {
//     console.log(value, index, arr);
// } )

const myCoding = [
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
]

myCoding.forEach( (item) => {
    console.log(item["languageName"], item.languageFileName);
} )