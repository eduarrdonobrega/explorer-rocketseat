import { Modal } from './modal.js'
import { validInput, IMC } from './utils.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const weightInput = document.querySelector('#weight')
const heightInput = document.querySelector('#height')

function handleSubmit() {
    if (validInput(weightInput.value) && validInput(heightInput.value)) {
        const weight = Number(weightInput.value)
        const height = Number(heightInput.value)

        Modal.open()
        Modal.message.textContent = `Seu IMC é de ${IMC(weight, height)}`
    } else {
        AlertError.show()
    }
}

function handleInput(e) {
    if (e.target.value != '' && !e.target.validity.valid) {
        AlertError.show()
    }
}

weightInput.addEventListener('input', handleInput)
heightInput.addEventListener('input', handleInput)

form.addEventListener('submit', e => {
    e.preventDefault()
    handleSubmit()
})

export { weightInput, heightInput }
