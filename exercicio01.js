// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

//------------------------------------------------------------------------------------------------------------------------------------------------//

// let login = prompt("Digite seu usuario: ")


// switch (login) {
//     case "admin":
//         console.log("Susesso!")
//         break;

        

//     default:
//         console.log("Login ou senha incorretos")
//         break;
// }
// let senha = prompt("Digite sua senha: ")
// switch (senha) {
//     case "Senha123":
//         console.log("Susesso!")
//         break;

//     default:
//         console.log("Login ou senha incorretos")
//         break;
// } 

let login = prompt("Digite seu usuario: ")
let senha = prompt("Digite sua senha: ")

if(login == "admin" && senha == "Senha123"){
  console.log("Login bem-sucedido!")
}
else{
    console.log("Login incorreto!")
}