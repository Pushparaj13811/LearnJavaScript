const name = "Pushparaj" // The return type of this is string
const age = 22

console.log("My name is "+ name + " and my age is "+ age) // Do not prefer this way of string concatination
console.log(`My name is ${name} and my age is ${age}`) // Prefer it for string contatination. It is known as string interpolation
// The output of both are same but the second one is more preferabe since its readbility is high and it is the modern way of writing string concatination

// There are other way of declaring string too 
const gameName = new String("Clash of clans")  // The return type of this is object
console.log(typeof gameName)
console.log(typeof name)
console.log(name.length)
console.log(name.__proto__)
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf("p"))

// Slicing of the string

const newString = gameName.substring(0,3)
console.log(newString)

// .slice

const anotherString = gameName.slice(5,-1)
console.log(anotherString)