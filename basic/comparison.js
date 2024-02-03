//Always prefer comparing the value of same datatype 

console.log(null > 0) // It will return false
console.log(null == 0) // It also return false
console.log(null >= 0) // It will return true because the comparison operation and equality check == work differently 
// comparison convert null into number i.e. 0 so the output of thid will true while the == check doesnot do such conversion 
// resulting the output as flase for 2

// strict check i.e. === It will check the value and datatype both 

