// NOTE:  I rewatched some videos and attempted to get through the challanges but was ultimately not successful.  If possible, I would like to redo this challenge


// ASSESSMENT 2: Coding practical questions with Jest

// const { test, expect } = require("@jest/globals")
// const { describe } = require("yargs")

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
// Fnction needs a parameter of a number
// Modolo operator
// Is divisible by three or not, string interpolation


describe("divisibleBy3", () => {
    var num1 = 15
    var num2 = 0
    var num3 = -7
// a) Create a test with expect statements for each of the variables provided.
// write out a description of the test
    test ("whether a number is divisible by 3 or not", () => {
        //expect statements to define expected inputs and outputs
        expect(divisbleBy3(num1)).toEqual("15 is divisible by 3")
        
        expect(divisbleBy3(num2)).toEqual("0 is divisible by 3")
        
        expect(divisbleBy3(num3)).toEqual("-7 is not divisible by 3")
    })
 })
//test failed before creation of function to make it pass as expected

// include variable to input and test for the expected output
//use .toEqual as a matcher function
// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
//write out function
const divisbleBy3 = (num) => {
    // write out else if conditional statements to make the test pass
    if(num % 3 === 0){
        return `${num} is divisible by 3`
    }
    
    //block of code below was going to be used, but decided to comment it out.  Left commented out for refernece instead of completely deleting it.
    // else if(num % 3 === 0){
    //     return "0 is divisible by 3"
    // }
    // else if(num % 3 !== 0)
    //     return "-7 is not divisible by 3"
    
    else{
        return `${num} is not divisible by 3`

    }
} 
// test passed 








// --------------------2) Create a function that takes in an array fo works and returns with all the words capitalized.
//create a function called capFirstLetter



// a) Create a test with expect statements for each of the variables provided.
describe("capFirstLetter", () => {
        //describe what the test is doing
        test("take in an array of words and returns an array with all the words capitalized",() =>{
            //declare variables and expect statements
            var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

            expect(capFirstLetter(randomNouns1)).toEqual(["Streetlamp" , "Potato" , "Teeth", "Conclusion" , "Nephew"])

            var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

            expect(capFirstLetter(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
        })
})

// b) Create the function that makes the test pass.
//create function named capFirstLetter
// make Parameter array
// Iterate with a .map()
// Zero index using string interpolation while using .toUpperCase() method
// account for the rest of word concatenation, slice
//Output array of capitalized first letters

const capFirstLetter = (array) => {
    return array.map(value => {
            return `${value[0].toUpperCase()}${value.slice(1)}`
    })
};
//test suite indicates that the test passed after creating the function







// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// expected output : 1

var vowelTester2 = "academy"
// expected output: 0

var vowelTester3 = "challenge"
    //expected output: 2


//create a test describing a function named logFirstVowel
fdescribe("logFirstVowel", () => {
    test("it should take take in a string and log the index of the first vowel", () => {
        expect(logFirstVowel(vowelTester1)).toEqual(1)
        expect(logFirstVowel(vowelTester2)).toEqual(0)
        expect(logFirstVowel(vowelTester3)).toEqual(2)
    }) 
})

//b) Create the function that makes the test pass

// parameter of a string
// iterate through the string
// check for vowel using ||
// return the indexOf or for loop
// return the i of the first vowel

const logFirstVowel = (string) => {
    //create for loop to iterate through strings and return index of the first vowel.
    //set i=0 toi begin iteration at zero index
    for(let i=0; i,string.length; i++){
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            //return index of the first vowel in each string
            return i
        }
    }
}

// console.log(logFirstVowel(vowelTester1));

