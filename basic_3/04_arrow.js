const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Pushparaj"
// user.welcomeMessage()

// console.log(this) // It will give empty object in node environment but in browser it will give windows
// The global object in browser is window object.


// =========================== Arrow function ===============================

// function first(){
//     let username = "Pushparaj"
//     console.log(this.username); // we will get undefined since this keyword works only on object not in function 
// }
// first()

// const chai = function() {
//     let username = "Pushparaj"
//     console.log(this.username) // It will also give undefined
// }
// chai()


// const first = () => {
//     let username = "Preeti"
//     console.log(this.username)
// }
// // In arrow function too this keyword will give undefined 
// first()

// =========================== Arrow function (basic syntax) ===============================

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(2,3))

// Implicit return 
// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => (num1 + num2)

// console.log(addTwo(2,3))

// If we use curly braces then we must write return but if we don't use it we must not write return



// ========================= returning object =========================

// If we want to return object then we must wrap it in paranthesis. It is not possible to return object without wrapping it in paranthesis.
// The output will be undefined if we don't wrap object in parnthesis

const object = () => ({username:"Pushparaj"})
console.log(object())