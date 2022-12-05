const {readFileSync, promises: fsPromises} = require('fs');
const { start } = require('repl');
let input

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8')
    input = contents.split(/\r?\n/)
    return input
}
syncReadFile("./input.txt")

let totalPoints = 0

// A/X = Rock - 1 point
// B/Y = Paper - 2 points
// C/Z = Scissors - 3 points

// Loss - 0 point
// Draw - 3 points
// Win - 6 points

input.forEach(entry => {
    if (entry === "A X") {
        totalPoints += 4
    } else if (entry === "A Y") {
        totalPoints += 8
    } else if (entry === "A Z") {
        totalPoints += 3
    } else if (entry === "B X") {
        totalPoints += 1
    } else if (entry === "B Y") {
        totalPoints += 5
    } else if (entry === "B Z") {
        totalPoints += 9
    } else if (entry === "C X") {
        totalPoints += 7
    } else if (entry === "C Y") {
        totalPoints += 2
    } else if (entry === "C Z") {
        totalPoints += 6
    }
})

console.log(totalPoints)