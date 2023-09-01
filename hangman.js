// Prototypal Inheritance

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
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
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (typeof guess === 'string') {
        if (isUnique) {
            this.guessedLetters.push(guess)
        } else if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    }
}

const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Dog Shit', 3)

console.log(game1.makeGuess('a'))
console.log(game1.makeGuess('c'))
console.log(game1.makeGuess('z'))
console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

console.log(game2.getPuzzle('s'))
