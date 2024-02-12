// Declaration of function 
/**
 * function syntax in javascript
 * 
 * function functionName (){
 * // statements
 * }
 */

// function addTwoNumbers (num1, num2){
//     return num1 + num2
// }

// console.log(addTwoNumbers()) // It will print NaN since we didn't pass any value.
// console.log(addTwoNumbers(4,5))

// function userMessage (username){
//     return `${username} just logged in`
// }
// console.log(userMessage()) // Since datatype of username is string and we didn't pass any 
// //value it will give undefined as a result but in case of number it will give NaN.

// console.log(userMessage("Pushparaj"))

function userMessage(username) {
    if (username === undefined) { // instead of checking username === undefined we can also write !username its value will also be same
        console.log("Please enter the valid username.")
        return // If we remove this return the the code below this will also execute which is not nessary to execute

    }
    return `${username} just logged in`
}

console.log(userMessage())
