// Prototypal Inheritance

const Hangman = function (word, remainingGuesses) {
    // let characters = []
    // console.log(word.length)
    // for (let i = 0; i < word.length; i++) {
    //     characters.push(word[i].toLowerCase())
    // }
    // console.log(characters)
    // this.word = characters
    this.word = word.toLowerCase().split('')
    console.log(word.length)
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['s', 'c', 'a', 'h']
}

Hangman.prototype.getPuzzle = function (guessedLetters) {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Dog Shit', 3)

console.log(game1)
console.log(game1.getPuzzle('b'))
console.log(game2)
console.log(game2.getPuzzle())
