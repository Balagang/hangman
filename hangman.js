
// Prototypal Inheritance

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
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
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
    }
}

Hangman.prototype.gameStatus = function () {
    const failed = this.remainingGuesses < 0
    let finished = true
    this.word.forEach((letter) => {
        if (!this.guessedLetters.includes(letter)) {
            finished = false
        }
    })

    if (failed) {
        this.status = 'failed'
    }
    if (finished) {
        this.status = 'finished'
    }
    if (!failed && !finished) {
        this.status = 'playing'
    }
}


const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Dog Shit', 3)

