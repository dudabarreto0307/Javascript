//DOM é a arvore/fluxo do meu documento - da parte visual do meu site 
//Ele serve para que o javaScript consiga manipular (visualizar, editar, criar e excluir)
//O DOM torna os elementos HTML em objetos para que o js consiga acessar de fato

// let elementoBody = document.getElementsByTagName("body");

// console.log(elementoBody);

//================================================================================================

// let elementoH1 = document.getElementsByTagName("H1")

//Acessando o elemento ela sua posição
// console.log(elementoH1[0].textContent = "ola");
// elementoH1[0].textContent = "ola"
 
//================================================================================================

let Leandra = document.getElementById("tecnica")
console.log(Leandra);

//================================================================================================

let jogadores = document.getElementsByClassName("Jogador")
console.log(jogadores);

//================================================================================================

console.log(jogadores[3]);

//================================================================================================
 jogadores[3].textContent = "Jogador";

 //===============================================================================================
 
 //Mudar a estilização de um elemento

 Leandra.style.color = "red";
 Leandra.style.fontSize = "25px";

 jogadores[3].style.color = "blue";

