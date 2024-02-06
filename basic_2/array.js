// Array 

const myArr = [0, 1, 2, 4, 5]

const myHroes = ['shaktiman', 'naagraj']

const myArr2 = new Array(1, 2, 4, 5)

// console.log(myArr[2])

// Methods or array

// myArr.push(6)
// myArr.push(7) // It will push the given value in last of the array

// myArr.pop() // It will remove the last value of array

// myArr.unshift(9) // It will add the given value in first of the array 

// myArr.shift() 

// console.log(myArr.includes(9)) 
// console.log(myArr.indexOf(9)) // It will give the index of the given value if the value is not present then the it will return -1

// const newArr = myArr.join() // It will bind the array and convert it into string 
// console.log(myArr)
// console.log(newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) // splice manupulate the origional array while slice doesnot.
console.log(myn2)

console.log("C ", myArr)
