function IMC(weight, height) {
    return (weight / (height / 100) ** 2).toFixed(2)
}

function validInput(num) {
    return num != '' && Number(num) > 0
}

export { IMC, validInput }
