const myNumber = 984301484;
var myName = "Pushparaj";
let mySurname = "Mehta"
myPetName = "Pluto";
console.log(myNumber);
console.log(myName);
console.log(mySurname);
console.log(myPetName);
/*
 * Prefer not to use var keyword while declaring variable because it has issue with 
 * block scope and functional scope. Also prefer not to declare variable directly without 
 * using any keyword since it is not the standard way of declaring it.
 */
// We can print all the variable at a time using console.table([]);
console.table([myName,myNumber,mySurname,myPetName]);