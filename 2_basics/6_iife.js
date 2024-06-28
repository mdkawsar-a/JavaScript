// Immediately Invoked Function Expressions (IIFE)

(function coffe(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
})("Kawsar")