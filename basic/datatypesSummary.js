//Primitive datatype 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.42
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// The value of id and anotherId is different since symbol is used to make them unique

const bigNumber = 28978165018901060617691364901n // This is the BigInt. We can declare it by putting n in the last of any number which is big in size or doesnot fit in the capacity of integer i.e. int

// Refrence (Non primitive)
//Array, Object, Functions

// Array in javaScript 

const gods = ['Indra', 'Vishnu', 'Shiva', "Rama"];

// Object in javascript 
let accountInformation = {
    accountName: "Pushparaj ",
    accountId: 123,
    accountPassword: "varchar"
}

let myDetails = {
    name: "Pushparaj",
        age: 22
}

console.log(typeof (myDetails))
// console.log(accountInformation.accountName)
// console.table([accountInformation.accountId, accountInformation.accountName, accountInformation.accountPassword])


// function in javaScript 

const myFunction = function(){
    console.log("Hello, This is pushparaj")
}

// The return type of function is function only but it is called as object function.
// The return type of null is object
// The return type of array is object 
// The return type of symbol is symbol 
// The return type of bigInt is bigint 


console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof gods)
console.log(typeof id)
console.log(typeof bigNumber)

