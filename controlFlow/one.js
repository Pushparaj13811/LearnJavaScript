// if statement

// conditional operators 
// <, >, <=, >=, ==, !=, ===

// if (2 == '2') {
//     console.log('True')
// }
// if (2 != 4) {
//     console.log('Executed')
// }

// The scope of var is completely global so don't use var keyword

const score = 200

if (score > 100) {
    let power = 'fly'
    // console.log(`Users power : ${power}`)
}


const balance = 1000
// if (balance > 500) console.log(`balance greater than 500`); // This is implicit scope we just assume that it has scope of one line 

// if (balance > 500) console.log(`balance is grater than 500`), console.log(`You are rich`); // It can be executed but this code is not redable so never write this type of code.


if (balance < 500) {
    console.log(`balance is less than 500`)
} else if (balance < 750) {
    console.log(`balance is less than 750`)
} else if (balance < 900) {
    console.log(`balance is less than 900`)
} else {
    console.log(`balance is less than 1200`)
}

// reallife example 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log(`Allowed to buy course`)
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log('User logged In')
}