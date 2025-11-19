// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

alert("Digite 3 núneros aleatorios ")
let numero01 = prompt("Digite o primeiro numero")
let numero02 = prompt("Digite o segundo numero")
let numero03 = prompt("Digite o terceiro numero")

if (numero01 < numero02 && numero02 < numero03)
    console.log("Esta sequencia esta em ordem crescente")

else {
    console.log("Esta sequencia não esta em ordem crescente")
}
