let mercedes = {
    modelo: "G63", //características - propriedades
    ano: 2025,
    fabricante: "mercedes",
    cor: "Preto fosco",
    acelerar() {  //comportamentos - função - métodos
        console.log("Acelerado...vrum...vrumm");
    },
    freiar() {
        console.log("Freiando");
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());


let tadeu = {
    nome: "Felipe Tadeu",
    NIF: 1347486,
    salario: 10.000,
    idade: 27,
    dataNasc: new Date(1998, 1, 15),
    hobbies: ["Jogar", "Dar aula", "Cozinhar"],
    atribuirNota() {
        console.log("colocando nota do aluno");
    },
    baterPonto() {
        let horarioBatido = new Date(2025, 10, 28, 17, 5);
    }
};

console.log(tadeu.dataNasc)
console.log(tadeu.hobbies)
console.log(tadeu.nome)
console.log(tadeu.salario)


