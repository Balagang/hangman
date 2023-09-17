

/* 
const getCountryOld= (countryCode) => new Promise((resolve, reject) => {
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
*/
/* 
const getCountryOld = (countryCode) => {
    return fetch('https://restcountries.com/v3.1/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else { throw new Error('Unable to fetch country') }
    }).then((data) => {
        const country = data.find((element) => element.altSpellings[0] === countryCode)
        return country.name.common
    })
}
*/
const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.com/v3.1/all')

    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((element) => element.altSpellings[0] === countryCode)
        return country.name.common
    } else {
        throw new Error('Unable to fetch country')
    }
}

/* 
const getPuzzle = (wordCount, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}
*/

/*
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
*/
/*
const getPuzzleOld = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => data.puzzle).catch((err) => `Error ${err}`)
}
*/

const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=1a11bd55cc8f9c`)

    if (response.status === 200) {
        const data = await response.json()
        return data.country
    } else {
        throw new Error('Unable to fetch data')
    }
}