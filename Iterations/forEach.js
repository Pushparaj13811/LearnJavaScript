// Define an array containing various programming languages
const programmingLanguage = ['java', 'ruby', 'swift', 'python', 'JavaScript', 'C++', 'C#', 'C'];

// Iterate through each programming language and print them
programmingLanguage.forEach(
    function (item) {
        // Uncomment the line below to print each programming language
        // console.log(item)
    }
);

// Using arrow function to iterate through each programming language and print them
programmingLanguage.forEach((item) => {
    // Uncomment the line below to print each programming language
    // console.log(item)
});

// Define a function to print each programming language
function printMe(item) {
    console.log(item);
}

// Iterate through each programming language and call the printMe function
// programmingLanguage.forEach(printMe);

// Iterate through each programming language along with their index and the whole array
programmingLanguage.forEach((item, index, arr) => {
    // Uncomment the line below to print each programming language, its index, and the whole array
    // console.log(item, index, arr)
});

// Define an array of objects representing programming languages along with their file names
const language = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    }
];

// Iterate through each language object and print them
language.forEach((item) => {
    console.log(item);
});
