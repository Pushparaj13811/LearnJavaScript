// Shopping cart situations 

// function calaculateCartPrice(num1){
//     return num1
// }
// console.log(calaculateCartPrice(200,300,400)) // This will only return first value this is the problem 
// To slove this problem we have rest operator ...name. This operator is also spread operator.

// function calaculateCartPrice(...num1){
//     return num1
// }

// console.log(calaculateCartPrice(500,600,700))

function calaculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calaculateCartPrice(100,299,459,599)) // In this case the first two value will be passed in val1 and val2 respectively and rest will pass to num1 as a array