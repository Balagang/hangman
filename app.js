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
getPuzzle(wordCount).then((puzzle) => {
    console.log(puzzle)
}, (err) => {
    console.log(err)
})

// const countryCode = 'TH'
// getCountry(countryCode).then((country) => {
//     console.log(country)
// }).catch((err) => {
//     console.log(err)
// }
// )

// currying function using closure (Closure is the combination of a function and the lexical scope in which its was defined)
const createTipper = (baseTip) => {
    return (amount) => {
        return `$${amount} bill, Tip ${baseTip * 100}% is $${amount * baseTip}`
    }
}

const tip15Percent = createTipper(.15)
const tip20Percent = createTipper(.20)
console.log(tip15Percent(100))
console.log(tip20Percent(350))

const myPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided!')
    }, 2000);
})

//Promise chaining
myPromise(3).then((returnData) => {
    console.log(returnData), (err) => console.log(err)
})

myPromise(10).then((data) => {
    console.log(data)
    return myPromise(data)
}).then((data) => {
    console.log(data)
    return myPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => [
    console.log(err)
])

fetch(`https://puzzle.mead.io/puzzle`, {}).then((response) => {
    if (response.status === 200) {
        // console.log(response)
        return response.json()
    } else {
        throw new Error('Unable to fetch')
    }
}
).then((data) => {
    console.log(`Data from Fetch(${data.puzzle})`)
}).catch((err) => {
    console.log(err)
})
getLocation().then((location) => {
    // console.log(getCountry(location))
    return getCountry(location)
}).then((country) => {
    console.log(country)
}).catch((err) => {
    console.log(err)
})