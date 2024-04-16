let lightMode = true

const toggleButton = document.getElementById('toggle-theme')

toggleButton.addEventListener('click', e => {
    document.documentElement.classList.toggle('dark')

    const mode = lightMode ? 'dark' : 'light'
    e.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`
    lightMode = !lightMode
})
