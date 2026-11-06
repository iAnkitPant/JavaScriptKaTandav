// **************************************
// **************************************
// **********----Var vs Let-------*******
// **************************************
// **************************************

// Variable is a named storage for data. In JavaScript, we can declare variables using var, let, and const keywords. 
// The main difference between var and let is their scope and hoisting behavior.

 /*
 1. Scope:
 //- var: Variables declared with var have function scope. They are accessible within the function they are declared in, 
    or globally if declared outside any function.
 //- let: Variables declared with let have block scope. They are only accessible within the block (enclosed by curly braces {}) 
    they are declared in. 
 */

// Example:
function varExample() {
    if (true) {
        var x = 5;
    }
    console.log(x); // 5 (var is function scoped)
}

function letExample() {
    if (true) {
        let y = 5;
    }
    console.log(y); // ReferenceError: y is not defined (let is block scoped)
}