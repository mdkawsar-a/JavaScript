  
let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 13)
// let myCreatedDate = new Date(2023, 0, 13, 4, 2)
let myCreatedDate = new Date("01-21-2023 ")
// console.log(myCreatedDate. toLocaleString());

let myTimeStamp = new Date()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000 ) );

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(`Date ${newDate.toLocaleString()}`);