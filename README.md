# Assessment for Week 2

- Assessment should be accessed through GitHub Classroom
- Clone the assessment to your local machine
- **Create a new branch**
- Complete ALL files
- Create a Pull Request when complete
- DO NOT merge until your assessment is reviewed
- Step by step instructions are available [here](https://github.com/LEARNAcademy/Syllabus/blob/master/tools_and_resources/assessments.md)
- Assessments are due before class on the following Monday

// NOTE:  I rewatched some videos and attempted to get through the challanges but was ultimately not successful.  If possible, I would like to redo this challenge


// ASSESSMENT 2: Coding practical questions with Jest

const { test, expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// Create a function to decide if a number is divisible by 3
// Create a function called divisiblby3
// FUnction needs a parameter of a number
// Modolo operator
// Is divisible by three or not, string interpolation
var num1 = 15
var num2 = 0
var num3 = -7

describe("divisibleBy3", () => {
 
// a) Create a test with expect statements for each of the variables provided.
// write out a description of the test
    test("whether a number is divisible by 3 or not", () => {

        expect(divisbleBy3(num1)).toEqual("15 is divisible by 3")
        
        expect(divisbleBy3(num2)).toEqual("0 is divisible by 3")
        
        expect(divisbleBy3(num2)).toEqual("0 is divisible by 3")
    })
 })

// include variable to input and test for the expected output
//use .toEqual as a matcher function
// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
//write out function
// const divisbleBy3 = (num) => {
//     if(num1 % 3 === 0){
//         return "15 is divisible by 3"
//     }
//     else if(num2 % 3)
// } 

    








// --------------------2) Create a function that takes in an array fo works and returns with all the words capitalized.
//create a function called capFirstLetter
// make Parameter array
// Iterate with a .map()
// Zero index using charAt of the word, use .toUpperCase()
// account for the rest of word concatenation, slice
//Output array of capitalized first letters


// a) Create a test with expect statements for each of the variables provided.
describe("capitalizeFirstLetter", () => {
        test"take in an array of wordws and returns an array with all the words capitalized",() =>{
            var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
            expect(capitalizeFirstLetter(randomNouns1)).toEqual([streetlamp", "potato", "teeth", "conclusion", "nephew"])
            var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
            expect(capitalizeFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
        })
}
const capitalizeFirstLetter = (array) => {
    array.map(value => {
            return '${value[0].toUppercase()){$value.slice(1)}'
    })
}

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]


// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]





// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// create a function called firstVowel
// parameter of a string
// iterate through the string
// check for vowel using ||
// return the indexOf or for loop
// return the i of the first vowel 

// a) Create a test with expect statements for each of the variables provided.
descrive("firstVowel", () => {
    var vowelTester1 = "learn"
    // expected output : 1
    expect(firstVowel(vowelTester1)).toEqual(1)
    var vowelTester2 = "academy"
    // expected output: 0
    expect(firstVowel(vowelTester2).toEqual(0))
    var vowelTester3 = "challenge"
    expect(firstVowel(vowelTester3).toEqual(2))
 })
})
const firstVowel = (string) => {
    for(let i=0; i,string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            return i
        }
    }
}
// const firstVowel = (string) => {
//     string.split("").filter(value =>)
// }
// can also use .includes, .filter, .search
// Expected output: 1
// var vowelTester2 = "academy"
// Expected output: 0
// var vowelTester3 = "challenge"
// Expected output: 2





// b) Create the function that makes the test pass.
