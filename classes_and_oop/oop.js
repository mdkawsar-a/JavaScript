const user = {
    username: "Kawsar",
    loginCount: 9,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`UserName: ${this.username}`);
        // console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);   

function userDetails(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`welcome! ${this.username}`);
        
    }
    // this.greeting()
    return this
}
const userOne = new userDetails('Kawsar', 20, true);
const userTow = new userDetails('Chai Aur Code', 20, false)
console.log(userOne);
console.log(userTow)

const userLoggedIn = {
    username: "Kawsar",
    isLoggedIn: true,
    
}