// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

// A função prompt() é usada para solicitar entrada do usuário.
// Em ambientes de navegador, ela abre uma caixa de diálogo.
// Em Node.js puro, você precisaria de um módulo como 'readline-sync'.

// function verificarOrdemCrescente() {

//     // 2. Converte as strings de entrada para números (usando parseFloat ou Number)
//     const num1 = parseFloat(num1Str);
//     const num2 = parseFloat(num2Str);
//     const num3 = parseFloat(num3Str);

//     // 3. Verifica se as entradas são números válidos
//     if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
//         console.log("Erro: Por favor, insira apenas números válidos.");
//         return; // Sai da função se houver um erro
//     }

//     // 4. Lógica de Verificação da Ordem Crescente
//     // A ordem é crescente se o primeiro for menor OU igual ao segundo E o segundo for menor OU igual ao terceiro.
//     // Usamos <= para incluir números iguais (ex: 5, 5, 10 também é considerado ordenado).
//     if (num1 <= num2 && num2 <= num3) {
//         console.log(`Os números ${num1}, ${num2} e ${num3} estão em **ordem crescente**.`);
//     } else {
//         console.log(`Os números ${num1}, ${num2} e ${num3} **NÃO estão em ordem crescente**.`);
//     }
// }

// Chama a função para iniciar o programa
// verificarOrdemCrescente();

let numero01 = prompt("Digite o primeiro numero")
let numero02 = prompt("Digite o segundo numero")
let numero03 = prompt("Digite o terceiro numero")

// const num01 = parseFloat(prompt(numero01))
// const num02 = parseFloat(prompt(numero02))
// const num03 = parseFloat(prompt(numero03))

if (isNaN(numero01) || isNaN(numero02) || isNaN(numero03)) {
         console.log("Erro: Por favor, insira apenas números válidos.");
         return; // Sai da função se houver um erro
   }
