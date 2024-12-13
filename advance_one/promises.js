const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyn task 2 is complete");
        resolve()
        
    },1000)
}).then(function(){
    console.log('Asyn 2 resolve');
    
})

const promisesThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai our Code", email: "kawsar@example.com"})
    }, 1000)
})

promisesThree.then(function(user){
    console.log(user);
    
})

const promisesFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Kawsar", password: "123"})
        } else{
            reject("ERROR: Somthing went wrong")
        }
    }, 1000)
})

promisesFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => (console.log("The promise is either resolved or rejected")
))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true 
        if(!error){
            resolve({username: "JavaSript", password: "1234"})
        }else{
            reject('ERROR: Somthing went wrong!')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive 
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E!', error);
        
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))