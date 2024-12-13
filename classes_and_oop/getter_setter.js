class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return `${this._password}kawsar`
    }

    set password(pass){
        return this._password = pass
    }
}

const kawsar = new User("kawsar@example.com", "123")
console.log(kawsar.password);
