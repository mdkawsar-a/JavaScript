let myName = "Kawsar    "
let myChannel = "chai    "

// console.log(myName.trim().length);

let favoriteFood = ["Banana", "Guava", "Toamato"]

let heroPower = {
    thore: "hammer",
    spiderMan: "sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderMan}`);
        
    }
}

Object.prototype.kawsar = function(){
    console.log(`kawsar is present in all objects`);
    
}

Array.prototype.heyKawsar = function(){
    console.log(`Kawsar says hello`);
    
}

// heroPower.kawsar()
favoriteFood.heyKawsar()
// heroPower.heyKawsar()

// inheritance
const user = {
    name: "Chai",
    email: "chaiL@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvaiable: false
}

const TQASuppor = {
    makeAssignment: "Js assignment", 
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anOtherUsername = "ChaiAurCode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
}
anOtherUsername.trueLength()
"kawsar".trueLength()