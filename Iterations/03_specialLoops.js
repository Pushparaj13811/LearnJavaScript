// Array specific loops 

// for of loop 

const countries = ['Nepal','India','Bhutan','Srilanka','Japan','China']

for(const country of countries){
    // console.log(country)
}

const greeting = 'Hello world!'

for(const greet of greeting){
    // console.log(`Each charater of greeting is ${greet}`)
}


// Map : It is and object that holds key value pair 
const map = new Map()
map.set('In',"India")
map.set('Np',"Nepal")
map.set('Fr',"France")
map.set('USA',"United States of America")
map.set('USA',"United States of America")

//console.log(map)

for(const [key, value] of map){
    //console.log(`${key} :- ${value}`)
}

const games = {
    game1 : 'Spiderman',
    game2 : 'Clash of Clans',
    game3 : 'Call of Duty'
}

// The output of this will be TypeError : game is not iterable sine we can't iterate the objet using this method
for(const [key, value] of games) {
    //console.log(`${key} :- ${value}`)
}

