// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // we have to write ; to end the code

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('yash');