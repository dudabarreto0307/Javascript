// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


let num01 = parseFloat(prompt("Digite sua nota: "))

let num02 = parseFloat(prompt("Digite sua nota: "))

let num03 = parseFloat(prompt("Digite sua nota: "))

let num04 = parseFloat(prompt("Digite sua nota: "))

let resultado = num01 + num02 + num03 + num04

console.log(resultado)

let divisao = resultado/4

if (resultado >= 7) {
    console.log("APROVADO!")
}

if (resultado >=5<=7) {
    console.log("RECUPERAÇÃO")
}

if (resultado <=5) {
    console.log("REPROVADO!")
}