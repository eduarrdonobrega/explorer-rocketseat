const home = document.querySelector('#home')
const result = document.querySelector('#result')
const cookie = home.querySelector('img')

async function getData() {
    try {
        const phrases = await fetch('./dev/phrases.txt')
            .then(res => res.text())
            .then(txt => txt.split('\n'))
        const random = Math.round(Math.random() * phrases.length)

        return phrases[random]
    } catch (error) {
        console.error(error)
    }
}

function toggleScreen() {
    home.classList.toggle('hidden')
    result.classList.toggle('hidden')
}

async function handleOpenCookie() {
    const phrase = await getData()

    result.querySelector('p').textContent = phrase
    toggleScreen()
}

cookie.addEventListener('click', handleOpenCookie)
result.querySelector('button').addEventListener('click', toggleScreen)
