const {readFileSync, promises: fsPromises} = require('fs');
const { start } = require('repl');
let input

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    input = contents.split(/\r?\n/)
    return input
}
syncReadFile("./input.txt")

function DoPuzzle(input) {

    let duplicateCharArray = []


    for (let i = 0; i < input.length; i+=3) {

        firstElf = input[i]
        secondElf = input[i+1]
        thirdElf = input[i+2]

        for (let j = 0; j < firstElf.length; j++) {
            const charTocheck = firstElf[j]                     //Has to be in this set if it is in the other ones.

            if (secondElf.includes(charTocheck)) {              //Checking if it's in the second set.
                if (thirdElf.includes(charTocheck)) {           //Checking if it's in the third.
                    duplicateCharArray.push(charTocheck)
                    break
                }
            }
        }
    }
    
    let valueOfArray = 0
    duplicateCharArray.forEach(entry => {

        const points = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        valueOfArray += points.indexOf(entry) + 1
    })

    console.log(valueOfArray)
}

DoPuzzle(input)