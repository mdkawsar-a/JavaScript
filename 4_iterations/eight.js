const array = [1, 2, 3, 4, 5]

// const addNums = array.reduce( function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0 )

const addNums = array.reduce( (acc, currval) => acc + currval, 0)


const shoppingCard = [
    {
        courseName: "Web Development",
        price: 9999
    },
    {
        courseName: "Data Science",
        price: 12999
    },
    {
        courseName: "Cyber Security",
        price: 10999
    },
    {
        courseName: "Apps Development",
        price: 8999
    },
    {
        courseName: "DevOps",
        price: 9999
    }
]

const totalPrice = shoppingCard.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);