class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    // static
    
     createId(){
        return '123'
    }
}

const kawsar = new User('Kawsar')
// console.log(kawsar.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher("Samsung", "samsung@google.com")
console.log(samsung.email);
