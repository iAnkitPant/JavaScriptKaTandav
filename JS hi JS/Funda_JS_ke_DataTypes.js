// **************************************
// **************************************
// **********----Data Types-------*******
// **************************************
// **************************************

// There are 8 data types in JavaScript. They are:

// 1. Number: Represents numeric values, including integers and floating-point numbers.
// Example:
function numberExample() {
    let num1 = 10;  // Integer
    let num2 = 3.14; // Float
    console.log("Integer:", num1); // 10
    console.log("Float:",  num2); // 3.14

    let num3 = 1/0; // Infinity represents a value that exceeds the maximum representable number in JavaScript.
    console.log("Infinity:", num3); // Infinity

    let num4 = -1/0; // -Infinity represents a value that is less than the minimum representable number in JavaScript.
    console.log("-Infinity:", num4); // -Infinity

    let num5 = 0/0; // NaN (Not-a-Number) represents an undefined or unrepresentable value, such as the result of dividing zero by zero.
    console.log("NaN:", num5); // NaN
    console.log(num5 + 5); // NaN (any operation with NaN results in NaN except Nan**0 is 1)
    console.log(num5**0); // 1 (any number raised to the power of 0 is 1)

}

// 2. String: Represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
// Example:
function stringExample() {
    let str1 = 'Hello, World!';  // Single quotes
    let str2 = "JavaScript is awesome!";  // Double quotes
    let str3 = `${str1}, Template literals are cool!`;  // Backticks

    console.log("String 1:", str1); // Hello, World!
    console.log("String 2:", str2); // JavaScript is awesome!
    console.log("String 3:", str3); // Hello, World!, Template literals are cool!
}

// 3. Boolean: Represents a logical value that can be either true or false.
// Example:
function booleanExample() {
    let isJavaScriptFun = true;
    let isJavaScriptHard = false;

    console.log("Is JavaScript fun?", isJavaScriptFun); // true
    console.log("Is JavaScript hard?", isJavaScriptHard); // false
}

// 4. Undefined: Represents a variable that has been declared but has not been assigned a value.
// Example:
function undefinedExample() {
    let x;
    console.log("Value of x:", x); // undefined
}

// 5. Null: Represents the intentional absence of any object value. It is often used to indicate that a variable should have no value.
// Example:
function nullExample() {
    let y = null;
    console.log("Value of y:", y); // null
}

// 6. Symbol: Represents a unique and immutable value that can be used as an identifier for object properties.
// Example:
function symbolExample() {
    let sym1 = Symbol('description');
    let sym2 = Symbol('description');
    console.log("Symbol 1:", sym1); // Symbol(description)
    console.log("Symbol 2:", sym2); // Symbol(description)
    console.log("Are they equal?", sym1 === sym2); // false (Symbols are unique)
}



// 7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers.
// Example:
function bigIntExample() {
    let bigInt1 = 1234567890123456789012345678901234567890n; // BigInt literal
    let bigInt2 = BigInt("1234567890123456789012345678901234567890"); // BigInt constructor
    console.log("BigInt 1:", bigInt1); // 1234567890123456789012345678901234567890n
    console.log("BigInt 2:", bigInt2); // 1234567890123456789012345678901234567890n
}



// 8. Object: Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
    // Example:
    function objectExample() {
        let person = {
            name: "John Doe",
            age: 30,
            isStudent: false,
            hobbies: ["reading", "traveling", "coding"],
            address: {
                street: "123 Main St",
                city: "Anytown",
                country: "USA"
            }
        };
        console.log("Person:", person); // { name: 'John Doe', age: 30, isStudent: false, hobbies: [ 'reading', 'traveling', 'coding' ], address: { street: '123 Main St', city: 'Anytown', country: 'USA' } }
        console.log("Person's Name:", person.name); // John Doe
        console.log("Person's Age:", person.age); // 30
    }
    