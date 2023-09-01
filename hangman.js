// Prototypal Inheritance

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function (guessedLetters) {
    let puzzle = ''
    if (typeof guessedLetters === 'string') {
        if (this.guessedLetters.includes(guessedLetters.toLowerCase())) {

            this.word.forEach((letter) => {
                if (this.guessedLetters.includes(letter) || letter === ' ') {
                    puzzle += letter
                } else {
                    puzzle += '*'
                }
            })


        } else {
            this.guessedLetters.push(guessedLetters.toLowerCase())
            this.word.includes(guessedLetters.toLowerCase()) ? {} : this.remainingGuesses = this.remainingGuesses - 1
            this.word.forEach((letter) => {
                if (this.guessedLetters.includes(letter) || letter === ' ') {
                    puzzle += letter
                } else {
                    puzzle += '*'
                }
            })
        }


        return puzzle
    }
}


const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Dog Shit', 3)

console.log(game1.getPuzzle('a'))
console.log(game2.getPuzzle('s'))
