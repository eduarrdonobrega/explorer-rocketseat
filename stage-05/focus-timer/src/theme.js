// import Sounds from './sounds.js'

let darkMode = true
const toggleButton = document.getElementById('toggle-mode')

toggleButton.addEventListener('click', e => {
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'
    e.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    darkMode = !darkMode

    // Sounds().pressButton()
})
