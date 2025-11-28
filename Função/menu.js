//====================================================================================================
//1
function exibirTabuadaEscolhida() {
    let escolhaTabuada = parseInt(prompt("Digite o numero da tabuada digitada"));


    console.log(`====TABUADA ${escolhaTabuada}====`);

    for (let i = 1; i <= 10; i++) {
        // 2 x 4 = ?
        console.log(escolhaTabuada + " x " + i + " = " + (escolhaTabuada * i));
    }

}

// chama a minha função 

exibirTabuadaEscolhida();

//===================================================================================================
//2
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

//===================================================================================================
//3

function conferirSequencia(numero01, numero02, numero03) {
    // alert("Digite 3 núneros aleatorios ")
    // let numero01 = parseInt(prompt("Digite o primeiro numero"))
    // let numero02 = parseInt(prompt("Digite o segundo numero"))
    // let numero03 = parseInt(prompt("Digite o terceiro numero"))

    if (numero01 < numero02 && numero02 < numero03) {
        alert("Esta sequencia esta em ordem crescente")
    }

    if (numero01 > numero02 && numero02 > numero03) {
        alert("Esta sequencia esta em ordem decrescente")
    }

    else {
        (numero01 <= numero02 && numero02 >= numero03)
        alert("Esta sequencia esta em ordem aleatoria")
    }

}

    let numero01 = parseInt(prompt("Digite o primeiro numero"))
    let numero02 = parseInt(prompt("Digite o segundo numero"))
    let numero03 = parseInt(prompt("Digite o terceiro numero"))

conferirSequencia(numero01, numero02, numero03)

//===================================================================================================
//4

function conferirImparPar() {
    let numero = parseInt(prompt("Digite um numero"))

    if (numero % 2 == 0) {
        console.log("0 número " = numero + "é par")
    } else {
        console.log("o número " + numero + "é par")
    }
}

//===================================================================================================
//5

function conferirLoginSenha() {
    let login = prompt("Digite seu usuario: ")
    let senha = prompt("Digite sua senha: ")

    if (login == "admin" && senha == "Senha123") {
        console.log("Login bem-sucedido!")
    }
    else {
        console.log("Login incorreto!")
    }

}