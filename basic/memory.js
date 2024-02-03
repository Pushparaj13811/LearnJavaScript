// Stack and heap memory and threads
// Stack memory is used in all primitive type of datatype 
// Heap memory is used in all the non-primitive type of datatype 
// We will get the copy of the data while stack is being used but the Heap will give refrence (If heap is used then the original value will change when we change the refrence value)

let myName = "Pushparaj"

let mySurname = myName
console.log(mySurname)
mySurname = "Mehta" 
console.log(myName)
console.log(mySurname)

let userOne = {
    userName: "Pushparaj Mehta",
    userEmail: "pushparajmehta002@gmail.com"
}
let userTwo = userOne
console.log(userTwo.userName)
// Now when we change the value of userName of userTwo. The userName of userOne will also change since it will pass the value by referecne.
// As object is store in heap memory and it will give value by reference 
userTwo.userName = "Guddu Mehta"
console.log(userOne.userName)
console.log(userTwo.userName)