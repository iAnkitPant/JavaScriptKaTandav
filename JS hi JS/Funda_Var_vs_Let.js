// **************************************
// **************************************
// **********----Var vs Let-------*******
// **************************************
// **************************************

// Variable is a named storage for data. In JavaScript, we can declare variables using var, let, and const keywords. 
// The main difference between var and let is their scope and hoisting behavior.

 
 // 1. Scope:
 //- var: Variables declared with var have function scope. They are accessible within the function they are declared in, 
 //   or globally if declared outside any function.
 //- let: Variables declared with let have block scope. They are only accessible within the block (enclosed by curly braces {}) 
 //   they are declared in. 
 

// Example:
function varExample() {
    if (true) {
        var x = 5;
    }
    console.log(x); // 5 (var is function scoped)
}
console.log(x); // ReferenceError: x is not defined (x is not accessible outside the function)

function letExample() {
    if (true) {
        let y = 5;
    }
    console.log(y); // ReferenceError: y is not defined (let is block scoped)
}

// 2. Hoisting:
// - var: Variables declared with var are hoisted to the top of their scope and initialized with undefined. 
//   This means you can reference them before their declaration, but they will be undefined until the line where they are assigned a value.
// - let: Variables declared with let are also hoisted to the top of their block scope, but they are not initialized. 
//   Accessing them before their declaration will result in a ReferenceError.

// Example:
console.log(a); // undefined (var is hoisted and initialized with undefined)
var a = 10;
console.log(b); // ReferenceError: Cannot access 'b' before initialization (let is hoisted but not initialized)
let b = 20;

// 3. Redeclaration:
// - var: Variables declared with var can be redeclared within the same scope without any error.
// - let: Variables declared with let cannot be redeclared within the same scope. Attempting to do so will result in a SyntaxError.

// Example:
var c = 30;
var c = 40; // No error

let d = 50;
//let d = 60; // SyntaxError: Identifier 'd' has already been declared

// 4. Global Object Property:
// - var: When a variable is declared with var in the global scope, it becomes a property of the global object (window in browsers).
// - let: Variables declared with let in the global scope do not become properties of the global object.

// Example:
var e = 70;
console.log(window.e); // 70 (var is a property of the global object)
let f = 80;
console.log(window.f); // undefined (let is not a property of the global object)

// Conclusion:
// In summary, use let (or const) for block-scoped variables to avoid issues with hoisting and redeclaration. 
// Use var only when you need function-scoped variables, but it's generally recommended to prefer let and const in modern JavaScript development.