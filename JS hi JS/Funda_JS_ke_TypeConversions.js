// **************************************
// **************************************
// **********---Type Conversions---******
// **************************************
// **************************************

// Type Conversion is the process of converting a value from one data type to another. 
// In JavaScript, there are two types of type conversions: implicit and explicit.

// 1. Implicit Type Conversion (Type Coercion):
// JavaScript automatically converts one data type to another when performing operations involving different data types. 
// This is known as implicit type conversion or type coercion.

// Example:
function implicitTypeConversionExample() {
    let num = 10; // Number
    let str = "5"; // String
    let result = num + parseInt(str); // Implicit conversion of str to number
    console.log("Result:", result); // 15
}


// 2. Explicit Type Conversion:
// In explicit type conversion, we manually convert a value from one data type to another using built-in functions or methods.

// Example:
function explicitTypeConversionExample() {
    let str = "123"; // String
    let num = Number(str); // Explicit conversion of str to number
    console.log("Converted Number:", num); // 123

    let a = 98; // Number
    let b = "2"; // String
    let res = String(a) + b; // Implicit conversion of a to string
    console.log("Result:", res); // "982"
}