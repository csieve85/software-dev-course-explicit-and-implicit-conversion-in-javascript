/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; /* You have to tell the computer it's a number */
console.log("The result is: " + result);

let isValid = false; /* The orginal code had false as a string. */
if (isValid) {
    console.log("This is valid!");
}

let age = "25"; /* We needed to convert the string to a number in order for the machine to output correctly. */
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

/* Implicit type conversion example */
console.log(8 - undefined); /* This will result in NaN. */

/* Explicit type conversion example */
let strNumber = "10";
let num = Number(strNumber);
console.log(typeof str);
console.log (typeof num);
console.log (num + 10);