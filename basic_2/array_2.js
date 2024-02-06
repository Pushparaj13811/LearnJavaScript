const marvel_heroes = ["Ironman", "spiderman", "Thor"]
const dc_heros = ['supermn', 'flash', 'batman']
// marvel_heroes.push(dc_heros)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeros = marvel_heroes.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heroes, ...dc_heros] // We can add as much array to a array using this method. It is known as spread method. It is more useful than concatinate becuse in concatinae use can only merge 2 array.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // This will convert all the depth of array into single array.
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "hitesh" })) // It will return empty array since it is not mention that whether it will make array of keys or value 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
