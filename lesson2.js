// Conditional Statements
// You can use conditional statements when you want to perform different actions for different decisions

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false

// Syntax
// if (condition1) {
//     //  block of code to be executed if condition1 is true
// } else if (condition2) {
//     //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//     //  block of code to be executed if the condition1 is false and condition2 is false
// }

// Example
const number = 12;
if (number === 20) {
    console.log('Number is equal to 20')
} else if (number < 20) {
    console.log('Number is less than 20')
} else {
    console.log('Number is greater than 20')
}

// Practice by creating your own if statement

// Use switch to specify many alternative blocks of code to be executed

// Syntax
// switch (expression) {
//     case x:
//         // code block
//         break;
//     case y:
//         // code block
//         break;
//     default:
//     // code block
// }

// Example
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log('Today is ' + day)

// Practice by creating your own switch statement


// Loops. Loops can execute a block of code a number of times.

// Syntax
// for (expression 1; expression 2; expression 3) {
//     code block to be executed
// }

// Example
for (let i = 0; i < 5; i++) {
  console.log("The number is " + i);
}

// Practice by creating your own for loop

