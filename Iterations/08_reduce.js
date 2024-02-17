let myNums = [1, 2, 3]

let initialValue = 3

const myTotal = myNums.reduce(function (acc, currVal) {
    // console.log(`Accumulator ${acc} CurrentValue ${currVal}`)
    return acc + currVal

}, initialValue)


// const myTotal = myNums.reduce((acc, currVal) => {
//     console.log(`Accumulator ${acc} CurrentValue ${currVal}`)
//     return acc + currVal
// }, initialValue)

// console.log(`The total value is ${myTotal}`)


const shoppingCart = [
    {
        course: "Web dev",
        price: 3999
    },
    {
        course: "Mobile dev",
        price: 6999
    },
    {
        course: "Data Science",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => item.price + acc, 0)

console.log(`The total price of your courses are ${totalPrice}`)