const languageName = ["java", "javascript", "python", "ruby"]

// const values = languageName.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numReturn = myNumbers.filter( (num) =>  num < 9 )
const numReturn = myNumbers.filter( (num) =>  {
    num < 9
} )

// const newNumbers = []

// myNumbers.forEach( (num) => {
//     if (num < 9) {
//         newNumbers.push(num)
//     }
// } )
console.log(newNumbers);
