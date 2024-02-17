const programmingLanguage = ['java', 'ruby', 'swift', 'python', 'JavaScript', 'C++', 'C#', 'C'];

programmingLanguage.forEach((item) => {
    // console.log(item)
})
const values = programmingLanguage.forEach((item) => {
    // console.log(item)
    return item // forEach loop will never return any values 
})


// console.log(values)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = numbers.filter((item) => item > 5)

const number = numbers.filter((num) => {
    return num > 5 // if we start scope then we must write return keyword in order to return the value otherwise it will return empty function
})

// console.log(number)

const myNums = []

numbers.forEach((nums) => {
    if (nums > 5) {
        myNums.push(nums)
    }
})

// console.log(myNums)
const books = [
    {
        title: 'To Kill a Mockingbird',
        genre: 'Fiction',
        publishingDate: 1960,
        edition: 'Third Edition (1999)'
    },
    {
        title: '1984',
        genre: 'Science Fiction',
        publishingDate: 1949,
        edition: 'Second Edition (1950)'
    },
    {
        title: 'The Great Gatsby',
        genre: 'Fiction',
        publishingDate: 1925,
        edition: 'Third Edition (1974)'
    },
    {
        title: 'Pride and Prejudice',
        genre: 'Romance',
        publishingDate: 1813,
        edition: 'Second Edition (1832)'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        genre: 'Fantasy',
        publishingDate: 1997,
        edition: 'Special Edition (2008)'
    },
    {
        title: 'The Catcher in the Rye',
        genre: 'Fiction',
        publishingDate: 1951,
        edition: 'First Edition'
    },
    {
        title: 'The Lord of the Rings',
        genre: 'Fantasy',
        publishingDate: 1954,
        edition: 'Second Edition (1965)'
    },
    {
        title: 'The Hobbit',
        genre: 'Fantasy',
        publishingDate: 1937,
        edition: 'Third Edition (1966)'
    },
    {
        title: 'The Da Vinci Code',
        genre: 'Mystery',
        publishingDate: 2003,
        edition: 'Second Edition (2004)'
    },
    {
        title: 'The Hunger Games',
        genre: 'Science Fiction',
        publishingDate: 2008,
        edition: 'Collector\'s Edition (2011)'
    }
];


let userBooks = books.filter((bk) => (bk.genre === 'Science Fiction'))

userBooks = books.filter((bk) => { bk.publishingDate >= 2000 }) // This will return nothing since we have opend scope
userBooks = books.filter((bk) => { 
    return bk.publishingDate >= 2000 && bk.genre === 'Science Fiction'
})

console.log(userBooks)