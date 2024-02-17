const programmingLanguage = ['java', 'ruby', 'swift', 'python', 'JavaScript', 'C++', 'C#', 'C']

programmingLanguage.forEach(
    function (item) {
        // console.log(item)
    }
)

programmingLanguage.forEach((item) => {
    // console.log(item)
})
// since we use callback function inside forEach loop we don't need to write the function name 

function printMe(item) {
    console.log(item)
}

// programmingLanguage.forEach(printMe)

programmingLanguage.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

const language = [
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName : 'Java',
        languageFileName : 'ja'
    },
    {
        languageName : 'JavaScript',
        languageFileName : 'js'
    }
]