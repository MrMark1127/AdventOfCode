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

// X = Lose - 0
// Y = Draw - 3
// Z = Win - 6

input.forEach(entry => {
    if (entry === "A X") {              //Lose(+0) against ROCK by choosing scissors
        totalPoints += 3 //4
    } else if (entry === "A Y") {       //Draw(+3) against ROCK by choosing ROCK(+1)
        totalPoints += 4 //8
    } else if (entry === "A Z") {       //Win(+6) against ROCK by choosing PAPER(+2)
        totalPoints += 8 //3
    } else if (entry === "B X") {       //Lose(+0) against PAPER by choosing ROCK(+1)
        totalPoints += 1
    } else if (entry === "B Y") {       //Draw(+3) against PAPER by choosing PAPER(+2)
        totalPoints += 5
    } else if (entry === "B Z") {       //Win(+6) against PAPER by choosing SCISSORS(+3)
        totalPoints += 9
    } else if (entry === "C X") {       //Lose(+0) against SCISSORS by choosing PAPER(+2)
        totalPoints += 2 //7
    } else if (entry === "C Y") {       //Draw(+3) against SCISSORS by choosing SCISSORS(+3)
        totalPoints += 6 //2
    } else if (entry === "C Z") {       //Win(+6) against SCISSORS by choosing 11 ROCK(+1)
        totalPoints += 7 //6
    }
})

console.log(totalPoints)