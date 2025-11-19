// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

//------------------------------------------------------------------------------------------------------------------//

// let numero = prompt("Digie um numereo de 1 a 20")

// switch (numero) {
//     case "1":
//          console.log("Impar")
    
//         break;

//          case "3":
//          console.log("Impar")
//         break;
//          case "5":

//          console.log("Impar")
//         break;

//     default:
//         break;
// }

let numero = parseInt(prompt("Digite um numero"))

if(numero % 2 == 0){
    console.log("0 número " = numero + "é par")
}else{
    console.log("o número " + numero + "é par")
}