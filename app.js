const div = document.querySelector('#main-div')
const puzzleEl = document.querySelector('#puzzle')
const remainingQty = document.querySelector('#guesses')
const p = document.createElement('p')

// puzzleEl.textContent = game1.getPuzzle()
puzzleEl.textContent = game1.puzzle
// remainingQty.textContent = `Remaining Guesses: ${game1.remainingGuesses}`
remainingQty.textContent = game1.statusMessage
p.textContent = game1.status
div.appendChild(p)
div.appendChild(puzzleEl)
div.appendChild(remainingQty)

window.addEventListener('keypress', (e) => {
    // console.log(e.charCode)
    // const guess = String.fromCharCode(e.charCode)
    const guess = e.key
    console.log(guess)
    game1.makeGuess(guess)
    // console.log(game1.getPuzzle())
    // console.log(game1.remainingGuesses)
    puzzleEl.textContent = game1.puzzle
    remainingQty.textContent = game1.statusMessage
    p.textContent = game1.status
})

const wordCount = 2
getPuzzle(wordCount, (error, puzzle) => {
    if (error) {
        console.log(error)
    } else if (puzzle) {
        console.log(puzzle)
    }
})

const countryCode = 'TH'
getCountryDtetails(countryCode, (error, countryInfo) => {
    if (error) {
        console.log(error)
    } else if (countryInfo) {
        console.log(countryInfo)
    }
})
console.log('Do something else')