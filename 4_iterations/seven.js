const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const addNums = myNums.map( (num) => num + 20 )

const addNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num <= 61 )

console.log(addNums);