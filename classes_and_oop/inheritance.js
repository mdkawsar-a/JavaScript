class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME is: ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const tea = new Teacher("Tea", "tea@titter.com", "234")
const chai = new User("Chai")
tea.addCourse()
chai.logme()


