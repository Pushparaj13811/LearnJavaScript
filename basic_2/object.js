// singleton 

Object.create

// object literal
const mySym = Symbol("key1")

const jsUser = {
    name: "Pushparaj",
    "country": "Nepal",
    [mySym]: 'key2', // We can refer symbol by using square bracket in an objects of js
    age: 22,
    location: "Rajkot",
    email: "pushparajmehta@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['sunday', 'monday']
}

console.log(jsUser.name) // Mainly we access the values of objects using this method 
console.log(jsUser["age"]) // We can also access it using this method
console.log(jsUser["country"])
console.log(jsUser[mySym]) // This is the only method to access a symbol
console.log(typeof jsUser[mySym]) // The type is string, not symbol since it convert symbol into string type 
console.log(jsUser[Symbol.keyFor(mySym)]) // undefined
console.log(jsUser[Symbol.keyFor(mySym) || mySym]) // "key2"


// we can get the type of symbol only by printing whole object
console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello")
}

jsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`) // this keyword is use to refer the same object like inside jsUser we are using this then it is being refer by this
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())