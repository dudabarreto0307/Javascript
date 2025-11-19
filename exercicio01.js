let login = prompt("Digite seu login: ")
switch (login) {
    case "admin":
        console.log("Susesso!")
        break;

    default:
        console.log("Login ou senha incorretos")
        break;
}
let senha = ("Digite sua senha: ")
switch (senha) {
    case "Senha123":
        console.log("Susesso!")
        break;

    default:
        console.log("Login ou senha incorretos")
        break;
}

//-----------------------------------------------------------------//

// exercicio02

let semana = ("Digie um nmero para descobrir o sia da semana!")
switch (semana) {
    case "1":
        console.log("Segunda-feira")
        break;

         case "2":
        console.log("Terça-feira")
        break;

        case "3":
        console.log("Quarta-feira")
        break;

        case "4":
        console.log("Quinta-feira")
        break;

         case "5":
        console.log("Sexta-feira")
        break;

         case "6":
        console.log("Sabado")
        break;

        case "7":
        console.log("Domingo")
        break;

    default:
         console.log("Não existe este numero os dias da semana. Coloque um numero de 1 a 7")
        break;
}