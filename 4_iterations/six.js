const languageName = ["java", "javascript", "python", "ruby"]

// const values = languageName.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values); // undefined

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numReturn = myNumbers.filter( (num) =>  num < 9 )
const numReturn = myNumbers.filter( (num) =>  {
    return num < 9
} )
// console.log(numReturn);

// const newNumbers = []

// myNumbers.forEach( (num) => {
//     if (num < 9) {
//         newNumbers.push(num)
//     }
// } )
// console.log(newNumbers);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (item) => (item.genre === 'History') )
userBooks = books.filter( (bk) => {
    return bk.publish >= 1999 && bk.genre === "Science"
} )
console.log(userBooks);