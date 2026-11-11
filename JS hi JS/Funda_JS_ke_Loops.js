// **************************************
// **************************************
// **********----Loops-------************
// **************************************
// **************************************

// For Loop
function forLoopExample() {
    for (let i=0; i<5; i++){
        console.log("For Loop Iteration:", i); // Output: 0, 1, 2, 3, 4
    }
}

// For in Loop 
function forInLoopExample(){
    let myobj = {
        name: "Ankit",
        age: 25,
        city: "Dehradun"
    };

    for (let key in myobj){
        console.log(key + ": " + myobj[key]); // Output: name: Ankit, age: 25, city: Dehradun
    }
}

// For of Loop
function forOfLoopExample(){
    let myArray = [10, 20, 30, 40, 50];
    for(let value of myArray){
        console.log("For of Loop Iteration:", value); // Output: 10, 20, 30, 40, 50
    }
}

// While Loop
function whileLoopExample(){
    let num = 0;
    while(num < 5){
        console.log(num); // Output: 0, 1, 2, 3, 4
        num++;
    }
}

// Do While Loop
function doWhileLoopExample(){
    let num = 0;
    do{
        console.log(num); // Output: 0, 1, 2, 3, 4
        num++;
    } while(num < 5);
}

// Break and Continue
function breakContinueExample(){
    for(let i=0; i<10; i++){
        if(i == 9){
            break;  // Exit the loop when i is 9
        }
        if(i % 2 == 0){
            continue;  // Skip the rest of the loop body when i is even
        }
        console.log(i); // Output: 1, 3, 5, 7
    }
}

// Bonus Example: Nested Loops
function nestedLoopExample(){
    for(let i=1; i<5; i++){
        for(let j=1; j<5; j++){
            console.log(`i: ${i}, j: ${j}`); // Output: i: 1, j: 1 ... i: 4, j: 4
        }
    }
}

// switch case
function switchCaseExamples(){
    let month = 4;
    switch(month){
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        default:
            console.log("Invalid month");
    }
    // Output: April
}