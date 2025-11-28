// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let informeIdade = parseInt(prompt("Qual é sua idade?"))

while (informeIdade < 18) {

    informeIdade = parseInt(prompt("Qual é sua idade?"))
}

if (informeIdade >= 18) {
    alert("você tem mais de 18 anos!!!")
}