// Syntax of switch case 

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June')
        break;

    default:
        console.log('default matched')
        break;
}

// If we don't write break then it we execute all the code below the matched statement except default
