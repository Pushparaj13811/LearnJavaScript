/*
const val = 10
for (let i = 0; i < val; i++) {
    console.log(i)
}
*/


// lets print table 

// for (let i = 1; i < 10; i++) {
//     console.log(`Outer loop ${i}`)
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }

// }

// let array = ['Pushparaj', 'Guddu', 'Pritee']

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)

// }


// break and contineu 

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('Detected 5')
        continue
    }
    console.log(`Value is ${i}`)
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('Detected 5')
        break
    }
    console.log(`Value is ${i}`)
}