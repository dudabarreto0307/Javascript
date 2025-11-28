// function exibirTabuadaEscolhida() {
//     let escolhaTabuada = parseInt(prompt("Digite o numero da tabuada digitada"));


//     console.log(`====TABUADA ${escolhaTabuada}====`);

//     for (let i = 1; i <= 10; i++) {
//         // 2 x 4 = ?
//         console.log(escolhaTabuada + " x " + i + " = " + (escolhaTabuada * i));
//     }

// }

// chama a minha função ==

// exibirTabuadaEscolhida();

//=======================================================================================================================

// function solicitacaoNome() {
//     let nomeSolicitado = prompt("Digite seu nome ");

//     return nomeSolicitado;
// }

// let nome = solicitacaoNome();

// alert(nome);

// function somarDoisNumeros(numer1, numero2) {
//     console.log(numer1+numero2);

// }

// solicitacaoNome(10, 10)


// crie uma funcao para o exercicio 08 de estrutrura condicional

//=======================================================================================================================


function CalcularIMC(peso, altura) {



    let IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        alert("Abaixo do peso");
    }

    else if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Peso normal");
    }

    else if (IMC >= 25.0 && IMC <= 29.9) {
        alert("Sobrepeso");
    }

    else if (IMC >= 30.0 && IMC <= 34.9) {
        alert("Obesidade grau 1")
    }

    else if (IMC >= 35.0 && IMC <= 39.9) {
        alert("Obesidade grau 2")
    }

    else {
        alert("Obesidade grau 3")
    }

}
    let peso = parseFloat(prompt("Digite seu peso em quilograma: "));
    let altura = parseFloat(prompt("Digite sua altura: "));

CalcularIMC(peso, altura)