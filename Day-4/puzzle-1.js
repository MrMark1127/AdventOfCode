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
 
    let overlap = 0

    input.forEach(section => {
        rangesAsArray = section.split(",")

        let pairs = []
        rangesAsArray.forEach((minMax) => {
            pairs.push(minMax.split("-"))
        })
        firstSectionMin = Number(pairs[0][0])
        firstSectionMax = Number(pairs[0][1])
        secondSectionMin = Number(pairs[1][0])
        secondSectionMax = Number(pairs[1][1])

        if (secondSectionMin >= firstSectionMin && secondSectionMax <= firstSectionMax) {
            overlap += 1
        } else if (secondSectionMax >= firstSectionMax && secondSectionMin <= firstSectionMin){
            overlap += 1
        }
    })
    console.log(overlap)
}
DoPuzzle(input)