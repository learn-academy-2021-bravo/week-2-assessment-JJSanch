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
// use describe and nested functions to create the function
// write out the name of the expected function
 describe("divBy3", () => {
 
// a) Create a test with expect statements for each of the variables provided.
// write out a description of the test
    test ("returns 'number is divisible by 3'", () => {
        //write expected output for variables depending if they are divisible by 3
        expect(divBy3("15", "3")).toEqual("number is divisible by 3")
        expect(divBy3("-7")).toEqual("is not divisible by three")
        })
 })
// include variable to input and test for the expected output
//use .toEqual as a matcher function
var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"






// b) Create the function that makes the test pass.
//write out function
const divBy3 = (string) => {
    // if statement for numbers that can be divided by 3
    if(string === "number is divisible by 3"){
        return "is divisible by 3"
    //  // e;se if statement for numbers that cannot be divided by 3
    } else if(string === "number is not divisble by 3") {
        return "not divisible by 3"
    }
}
// write out the function with the expected output
const divBy3 = () => {
    return "is divisible by 3"
}





// --------------------2)
describe("allCaps", () => {

}

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]





// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2





// b) Create the function that makes the test pass.
