import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    const running = document.documentElement.classList.toggle('running')
    state.isRunning = running
    el.increase.disabled = running
    el.decrement.disabled = running

    timer.countdown()
    sounds.audios['button-press'].play()
}

export function reset() {
    document.documentElement.classList.remove('running')
    state.isRunning = false
    el.increase.disabled = false
    el.decrement.disabled = false
    timer.updateDisplay()
    sounds.audios['button-press'].play()
}

export function increase() {
    if (state.minutes >= 60) {
        return
    }

    state.minutes += 5
    state.seconds = 0
    timer.updateDisplay()
    sounds.audios['button-press'].play()
}

export function decrement() {
    if (state.minutes <= 0) {
        return
    }

    state.minutes -= 5
    state.seconds = 0
    timer.updateDisplay()
    sounds.audios['button-press'].play()
}
