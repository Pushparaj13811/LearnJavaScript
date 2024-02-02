//let score = 33
//console.log(typeof score)
//console.log(typeof(score))

//let score = "33"
//let valueInNumber = Number(score)
//console.log(typeof(valueInNumber))

// if we get the value of score other than numeric integer
/*
let score = "33abc"
console.log(score)
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
*/
// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0;
// null => 0;
// undefined => NaN

/*
let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
*/
// 1 => true; 0 => false 
// "" => false; "Pushparaj" => true (The empty string will convert into false while the string which contains any value will convert into true)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof (stringNumber))