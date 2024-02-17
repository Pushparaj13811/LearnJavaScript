const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    py : "Python"
}

// To iterate object we need for in loop 

for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`)
}

const programming = ['js','py','cpp','rb','java']

for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map()
map.set('In',"India")
map.set('Np',"Nepal")
map.set('Fr',"France")
map.set('USA',"United States of America")
map.set('USA',"United States of America")

// map is not iteratable so we can't use for in loop 

for (const key in map) {
    console.log(key)
}