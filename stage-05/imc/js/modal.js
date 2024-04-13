import { heightInput, weightInput } from './main.js'

const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-card h2'),
    closeButton: document.querySelector('.modal-card button'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
        weightInput.value = ''
        heightInput.value = ''
        weightInput.focus()
    },
}

function handleKeydown(e) {
    if (e.key === 'Escape') {
        Modal.close()
    }
}

Modal.closeButton.addEventListener('click', Modal.close)
window.addEventListener('keydown', handleKeydown)

export { Modal }
