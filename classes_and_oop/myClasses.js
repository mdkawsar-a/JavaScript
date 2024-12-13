// ES6 

// // class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("Chai", "chai@gmail.com", "1234")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.trim()}`
}

const methodOne = new User("Kawsar  ", "tea@google.com", "123")
console.log(methodOne.encryptPassword());
console.log(methodOne.changeUsername());
