// Javascript Date objects represent a single moment in time in a platform independent format.

let myDate = new Date()
console.log(myDate)

// Lets try to convert date into string 

console.log(myDate.toString()) // Output : Tue Feb 06 2024 02:58:18 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Output : Tue Feb 06 2024
console.log(myDate.toLocaleDateString()) // Output : 2/6/2024
console.log(myDate.toLocaleString()) // Output :2/6/2024, 2:59:56 AM

// let myCreatedDate = new Date(2024, 0, 7)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2024, 0, 7)
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date(2024, 0, 7)

// let myTimeStamp = Date.now()
// console.log(myTimeStamp) // We will get millisecond value 
// console.log(myCreatedDate.getTime())


// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getMonth())

newDate.toLocaleDateString('default', {
    weekday: "long",
})