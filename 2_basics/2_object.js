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

console.log(jsUser.email);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
// console.log(jsUser["lastLoginDays"]);

jsUser.name = "Sumi"
// Object.freeze(jsUser)

jsUser.email = "kawsar@google.com"
console.log(jsUser);