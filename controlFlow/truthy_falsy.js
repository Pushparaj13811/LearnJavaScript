const userEmail = "pushparajmehta002@gmail.com"

if (userEmail) {
    console.log("Got user email")
} else (
    console.log("Don't have user email")
)

/*

falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN

except these every values are truthy values 

truthy values

"0" --> 0 inside string is truty value
'false' --> false inside string is truthy value
' ' --> space inside string is truthy value 
[] --> empty array is also truthy value 
{} --> empty object is also truthy value 
function(){} --> empty function is also truthy value 
*/

// How to check array 

const numbers = []

if (numbers.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator(??) : null undefined
// This operator check the safety of null 
let val1;

// val1 = 5 ?? 10 
// val1 = null ?? 10 
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20 // In this case it will assign the first value which is not null

console.log(val1)

// Ternary operator 

// condition ? true : false

const iceTeaPrice = 60

iceTeaPrice >= 80 ? console.log("Price is not in budget") : console.log("Price is in budget")