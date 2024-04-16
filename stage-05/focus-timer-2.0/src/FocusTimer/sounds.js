export const audios = {
    coffeeShop: new Audio('./sounds/coffeeShop.wav'),
    fireplace: new Audio('./sounds/fireplace.wav'),
    forest: new Audio('./sounds/forest.wav'),
    rain: new Audio('./sounds/rain.wav'),
    'kitchen-timer': new Audio('./sounds/kitchen-timer.mp3'),
    'button-press': new Audio('./sounds/button-press.wav'),
}

for (let audio in audios) {
    audios[audio].loop = true
}

audios['kitchen-timer'].loop = false
audios['button-press'].loop = false

export function togglePlay(audio) {
    if (!audios[audio].paused) {
        audios[audio].pause()
        return
    }
    audios[audio].play()
}
