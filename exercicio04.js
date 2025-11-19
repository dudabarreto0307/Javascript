// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


alert("Informe as notas de 0 a 10")
let nota01 = parseFloat(prompt("Digite sua primeira nota: "))

let nota02 = parseFloat(prompt("Digite sua segunda nota: "))

let nota03 = parseFloat(prompt("Digite sua terceira nota: "))

let nota04 = parseFloat(prompt("Digite sua quarta nota: "))

let media = (nota01 + nota02 + nota03 + nota04)/4

console.log(media)

// let divisao = media/4

if (media >= 7) {
    console.log("APROVADO!")
}

 else if (media <7 && media>= 5) {
    console.log("RECUPERAÇÃO")
}

// if (media <5) {
//     console.log("REPROVADO!")
// }

else{
    console.log("REPROVADO")
}

console.log("A media do aluno é: "+ media)

