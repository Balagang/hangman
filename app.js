const div = document.querySelector('#main-div')
const puzzleEl = document.querySelector('#puzzle')
const remainingQty = document.querySelector('#guesses')
const p = document.createElement('p')

puzzleEl.textContent = game1.getPuzzle()
remainingQty.textContent = `Remaining Guesses: ${game1.remainingGuesses}`
p.textContent = game1.status
div.appendChild(p)
div.appendChild(puzzleEl)
div.appendChild(remainingQty)

window.addEventListener('keypress', function (e) {
    // console.log(e.charCode)
    // const guess = String.fromCharCode(e.charCode)
    const guess = e.key
    console.log(guess)
    game1.makeGuess(guess)
    // console.log(game1.getPuzzle())
    // console.log(game1.remainingGuesses)
    puzzleEl.textContent = game1.getPuzzle()
    remainingQty.textContent = `Remaining Guesses: ${game1.remainingGuesses}`
    p.textContent = game1.status
})