const getCountryDtetails = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest()
    countryRequest.addEventListener('readystatechange', (e) => {

        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // console.log(data)
            const country = data.find((element) => element.altSpellings[0] === countryCode)
            resolve(country.name.common)
        } else if (e.target.readyState === 4) {
            reject('Unable to fetch data')
        }
    })
    countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
    countryRequest.send()
})

// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             callback(undefined, data.puzzle)
//         } else if (e.target.readyState === 4) {
//             callback('An error has taken place', undefined)
//         }
//     })
//     request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// }

const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

})