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

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {

        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})
request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = 'TH'
const country = new XMLHttpRequest()
country.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {

        const data = JSON.parse(e.target.responseText)
        console.log(data)
        data.forEach(element => {
            if (element.altSpellings[0] === countryCode) {
                console.log(element.name.common)
            }
        })
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})
country.open('GET', 'https://restcountries.com/v3.1/all')
country.send()

// console.log(request)