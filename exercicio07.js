// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

// ---------------------------------------------------------------------------------------------------------------

 alert("Digite o valor total da sua compra: ")
 let valorEntrada = prompt("Digite o valor: ")
let total = parseFloat(valorEntrada);

let desconto = 0;
let final = 0;
let percentualDesconto = 0;

if (isNaN(total) || total < 0) {
    console.log("Valor inválido. Por favor, digite um número positivo.");
}


else if (total <= 100.00){
    percentualDesconto = 0;
    desconto = 0;
    console.log("Para compras abaixo de R$100,01 não tem desconto")
}

else if (final <= 200.00 ){
    percentualDesconto = 10; // 10%
    desconto = total * 0.10;
    console.log("Você tem umm desconto de 10% para aplicar na sua compra")
}


else {
    percentualDesconto = 20; // 20%
    desconto = total * 0.20;
    console.log("Você tem umm desconto de 20% para aplicar na sua compra")
}

final = total - desconto
console.log("\n--- Resumo da Compra ---");
console.log(`Valor Original: R$ ${total.toFixed(2)}`);
console.log(`Desconto Aplicado: ${percentualDesconto}% (R$ ${desconto.toFixed(2)})`);
console.log(`**Valor Final a Pagar:** R$ ${final.toFixed(2)}`);
alert(`Valor Final a Pagar: R$ ${final.toFixed(2)}`);

