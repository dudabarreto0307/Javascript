// Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let numeroEscolhido = parseInt(prompt("Digite um numero continuar"));

//condicao
while (numeroEscolhido !== 0) {
    numeroEscolhido = parseInt(prompt("Digite novamente um numero para continuar"))
}