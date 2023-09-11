
// Prototype Inheritance
/*
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
    if (!this.status === 'playing') {
        return
    }
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

    const failed = this.remainingGuesses < 0
    const finished = this.word.every((letter) => {
        //.every method only accept all true. one single false results to false
        return this.guessedLetters.includes(letter)
        // console.log(this.guessedLetters.includes(letter))
    })
    // console.log(finished)
    if (failed) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else if (!failed && !finished) {
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
        return `Nice try! The word was "${this.word.join('')}"`
    } else if (this.status === 'finished') {
        return `Great work! You guessed the word`
    }
}
*/

// Different way to define things but still having the same behavior as prototype inheritance
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (!this.status === 'playing') {
            return
        }
        if (typeof guess === 'string') {
        }
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.gameStatus()
    }
    gameStatus() {
        const failed = this.remainingGuesses < 0
        //.every method only accept all true. one single false results to false
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter.includes(' '))
        // console.log(this.guessedLetters.includes(letter))
        // console.log(finished)
        if (failed) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else if (!failed && !finished) {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (this.status === 'finished') {
            return `Great work! You guessed the word`
        }
    }
}
const game1 = new Hangman('Car parts', 2)
const game2 = new Hangman('Dog Shit', 3)

