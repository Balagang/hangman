
const game1 = new Hangman('Cat', 2)
const game2 = new Hangman('Dog Shit', 3)

const div = document.querySelector('#main-div')
const p = document.createElement('p')
const remainingQty = document.createElement('p')

p.textContent = game1.getPuzzle()
remainingQty.textContent = `Remaining Guesses: ${game1.remainingGuesses}`
div.appendChild(remainingQty)
div.appendChild(p)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

console.log(game2.getPuzzle())
console.log(game2.remainingGuesses)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    p.textContent = game1.getPuzzle()
    remainingQty.textContent = `Remaining Guesses: ${game1.remainingGuesses}`
})