// Singleton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Kawsar",
    "full name": "Md Kawsar Ahmad",
    [mySym]: "myKey1",
    age: 18,
    lacation: "Naogoan",
    email: "kawsar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
}

// console.log(jsUser.email);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// // console.log(jsUser["lastLoginDays"]);

jsUser.name = "Sumi"
// Object.freeze(jsUser)

jsUser.email = "kawsar@google.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
}
jsUser.greetingTwo = function(){
    console.log("Hello JS User");
}

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


// const tinderUser = new Object() // singleton object

const tinderUser = {}        // Non singleton object

tinderUser.name = "Kawsar"
tinderUser.id = "123abc"
tinderUser.email = "Kawsar@google.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser["email"]);

const regulerUser = {
    email: "kawsar@microsoft.com",
    fullname: {
        userfullname: {
            firstname: "kawsar",
            lastname: "Ahmad"
        }
    }
}

// console.log(regulerUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "c", 4: "d",}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
]

// console.log(user[2].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("fristname"));


const course = {
    coursename: "JavaScript",
    price: "9000",
    courseInstructor: "Kawsar"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(instructor);