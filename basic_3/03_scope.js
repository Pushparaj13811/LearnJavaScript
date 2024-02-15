// let num = 10
// const anotherNum = 20
// var thirdNum = 30 

if (true) {
    let num = 10
    const anotherNum = 20
    var thirdNum = 30
}

// console.log(num)
// console.log(anotherNum)
// console.log(thirdNum) // The value of thirdNum will print here which can cause error since its scope is block and shouldn't be accessed globally

// Never use var to declare variable since it can cause error 
// The value written in global scope can be accessed in block scope but the value of block scope can't be accessed globally (var didn't follow this rule)


// scope level and mini hosting 


// +++++++++++++++++ Interesting type of function ++++++++++++++++++++

addOne(5)
function addOne(num) {
    return num + 1;
}


const addTwo = function (num) {
    return num + 2;
}
addTwo(5)

// Basically we can declare function using above method. In first method we can access it before declaration
// But in second case the function cannot be called before declaration. Second method is also called as expression




