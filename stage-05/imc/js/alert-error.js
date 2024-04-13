let warningInterval = null

export const AlertError = {
    element: document.querySelector('.warning'),
    show() {
        element.classList.add('popOut')
        if (!warningInterval) {
            warningInterval = setInterval(() => {
                element.classList.remove('popOut')

                clearInterval(warningInterval)

                warningInterval = null
            }, 1500)
        }
    },
}
