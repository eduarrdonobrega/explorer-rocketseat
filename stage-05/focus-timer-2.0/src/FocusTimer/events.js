import { controls, soundButtons } from './elements.js'
import * as actions from './actions.js'
import * as sounds from './sounds.js'

export function registerControls() {
    controls.addEventListener('click', event => {
        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}

export function registerSoundButtons() {
    soundButtons.addEventListener('click', event => {
        const sound = event.target.dataset.sound

        if (!(sound in sounds.audios)) {
            return
        }

        sounds.togglePlay(sound)
        event.target.classList.toggle('playing')
    })
}
