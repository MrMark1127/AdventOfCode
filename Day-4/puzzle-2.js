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

        if (secondSectionMin.inRange(firstSectionMin, firstSectionMax) || secondSectionMax.inRange(firstSectionMin, firstSectionMax)) {
            overlap += 1
        } else if (firstSectionMin.inRange(secondSectionMin, secondSectionMax) || firstSectionMax.inRange(secondSectionMin, secondSectionMax)) {
            overlap += 1
        }
    })
    console.log(overlap)
}

Number.prototype.inRange = function (a, b) {
    return this >= a && this <= b;
};

DoPuzzle(input)