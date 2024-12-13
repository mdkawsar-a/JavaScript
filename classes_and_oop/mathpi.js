const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// Math.PI = 4
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 200,
    isAvaiable: true,

    orderChai(){
        console.log(`Chai nhi bni`);
        
    }
}

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false 
} )
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(key, value);
    }
    
}
