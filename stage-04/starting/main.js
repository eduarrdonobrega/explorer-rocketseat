// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('hello, world')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let a = 5
let b = 4
alert(`A soma entre ${a} e ${b} é ${a + b}`)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//     💡 Para saber o tipo de dado você pode usar o operador `typeof`
let va = '52'
if (typeof va == 'number') {
    console.log('É um número')
} else {
    console.log('Não é um número')
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let va2 = '52'
if (typeof va2 == 'string') {
    console.log('É uma string')
} else {
    console.log('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let va3 = true
if (typeof va2 == 'boolean') {
    console.log('É booleano')
} else {
    console.log('Não é booleano')
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num1 = 9
let num2 = 6
console.log(`${num1} - ${num2} = ${num1 - num2}`)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
console.log(`${num1} x ${num2} = ${num1 * num2}`)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
console.log(`${num1} / ${num2} = ${num1 / num2}`)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let num = 96

num % 2 == 0
    ? console.log('É um número par')
    : console.log('Não é um número par')

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
num % 2 != 0
    ? console.log('É um número ímpar')
    : console.log('Não é um número ímpar')