
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
    game1.gameStatus()

}

Hangman.prototype.gameStatus = function () {

    // const letterUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)

    // })
    // console.log(letterUnguessed.length)

    // let finished = true
    // this.word.forEach((letter) => {
    //     if (!this.guessedLetters.includes(letter)) {
    //         finished = false
    //     }
    // })

    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
        // console.log(this.guessedLetters.includes(letter))
    })
    console.log(finished)
    const failed = this.remainingGuesses < 0

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

