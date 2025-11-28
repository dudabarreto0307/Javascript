// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

alert("Digite o numero da tabuada desejada: ")
let escolhaTabuada = parseInt(prompt ("Digite um numero"));


// 1 numero dentro da condicao do for - inicialixacao - variavel
// 2 numero dentro da condicao do for - condicao - verifica a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas
// 1++ = i = i+1

console.log(`====TABUADA ${escolhaTabuada}====`);

for(let i = 1; i <= 10; i++){
// 2 x 4 = ?
console.log(escolhaTabuada + " x " + i + " = " + (escolhaTabuada * i));
}
