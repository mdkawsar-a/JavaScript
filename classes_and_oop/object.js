function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`Score is: ${this.score}`);
    
}
const copee = new createUser("Copee", 35)
const chai = new createUser("Chai", 230)
console.log(chai);

