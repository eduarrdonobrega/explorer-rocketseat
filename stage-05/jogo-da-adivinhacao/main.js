// elements
const home = document.getElementById('home')
const result = document.getElementById('result')
const form = home.querySelector('form')
const button = form.querySelector('button')
const attemptInput = form.querySelector('input')
const buttonNewGame = result.querySelector('button')
let attemptCounter = 0
// Número aleatório entre 0 e 10
let number = Math.floor(Math.random() * 11)

function isValid(n) {
    return !isNaN(n) && Number.isInteger(n) && n >= 0 && n <= 10
}

function toggleScreen() {
    home.classList.toggle('hidden')
    result.classList.toggle('hidden')
}

function handleNewGame() {
    attemptCounter = 0
    number = Math.floor(Math.random() * 11)
    toggleScreen()
    attemptInput.focus()
}

function handleSubmit() {
    if (attemptInput.value == '') {
        return alert('Informe um número')
    }

    const attempt = Number(attemptInput.value)

    if (isValid(attempt)) {
        attemptCounter++

        if (attempt == number) {
            toggleScreen()
            result.querySelector('h1').textContent = `
            Acertou em ${attemptCounter} ${
                attemptCounter > 1 ? 'tentativas' : 'tentativa'
            }!`
        } else {
            document.body.classList.add('changeBG')
            button.disabled = true

            setTimeout(() => {
                document.body.classList.remove('changeBG')
                button.disabled = false
            }, 1000)
        }
        attemptInput.value = ''
        attemptInput.focus()
    } else {
        alert('Valor inválido')
        location.reload()
    }
}

function handleKeyPress(e) {
    if (e.key == 'Enter' && home.classList.contains('hidden')) {
        handleNewGame()
    }
}

buttonNewGame.addEventListener('click', handleNewGame)
document.addEventListener('keypress', handleKeyPress)
form.addEventListener('submit', e => {
    e.preventDefault()
    handleSubmit()
})
