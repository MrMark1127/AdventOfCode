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
    //Sets the array to integers, not string. Undefined if they're not a number. Thanks @ItsANoBrainer.
    input = input.map(x => 
        parseInt(x) || undefined
    )

    //Initialize total table and a temp total table, thanks again @ItsANoBrainer.
    let total = []
    let temptotal = []

    //For each number at the input
    input.forEach(num =>{
        if (num != undefined) {             //If the number is not undefined, push it to another array
            temptotal.push(num)
        } else {
            total.push(temptotal)           //When the number is unidentified, push the previous numbers to the total numbers array, reset temp array
            temptotal = []
        }
    })

    //Initialize the largest possible sum
    let largestSums = new Array

    //For each array within the total 2D array
    total.forEach(arr => {
        let curSum = 0
        arr.forEach(value => {      //For each value within the inner array
            curSum += value         //Add the value given to the curSum for the singular embedded array, this will loop
        })
        largestSums.push(curSum)
    })

    largestSums.sort((a,b) => {return b - a})
    console.log(largestSums[0] + largestSums[1] + largestSums[2])
}

DoPuzzle(input)
