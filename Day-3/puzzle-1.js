const {readFileSync, promises: fsPromises} = require('fs');
const { start } = require('repl');
let input

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    input = contents.split(/\r?\n/)
    return input
}
syncReadFile("./input.txt")

//vJrwpWtwJgWrhcsFMMfFFhFp
//Each string contains two compartments, they are split in half evenly
//Each item is one character of this string

let firstHalf = []
let secondHalf = []
let duplicateChar
let duplicateCharArray = []


function DoPuzzle(input) {
    //console.log(input)
    for (let i = 0; i < input.length; i++) {
        //Split the string into it's separate "compartments"
        firstHalf = input[i].slice(0,(input[i].length / 2))
        secondHalf = input[i].slice((input[i].length / 2))
        //Check for letters that appear in both arrays
        for (let j = 0; j < firstHalf.length; j++) {        //Looping through the first "compartment"
            const charToCheck = firstHalf[j]                //Saving the current character to check based on current iteration of the string
    
            if (secondHalf.includes(charToCheck)) {         //If the second half of the OG string contains the character
                duplicateChar = charToCheck                 //Assign it to another variable and save it
                duplicateCharArray.push(duplicateChar)
                break
            }
        }
    }

    let valueOfArray = 0
    duplicateCharArray.forEach(entry => {

        const points = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        valueOfArray += points.indexOf(entry) + 1
    })
    console.log(valueOfArray)
    console.log(duplicateCharArray)

}
DoPuzzle(input)