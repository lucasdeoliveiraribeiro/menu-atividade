import * as readline from 'readline-sync';
let saudacao = "___________________ATIVIDADE PROJETO1___________________\n";
console.log(saudacao);
console.log("___________Menu de exercicios___________");
console.log("(1) Somar dois valores");
console.log("(2) Verificar par ou impar");
console.log("(0) Sair");
// 👇 usuário escolhe aqui
let opcao = readline.questionInt("Escolha uma opcao: ");
function atividade1() {
    let a = readline.questionInt("Digite o primeiro numero: ");
    let b = readline.questionInt("Digite o segundo numero: ");
    console.log("Soma:", a + b);
}
function atividade2() {
    let numero = readline.questionInt("Digite um numero: ");
    if (numero % 2 === 0) {
        console.log("O numero e Par");
    }
    else {
        console.log("o numero e impar");
    }
}
switch (opcao) {
    case 1:
        atividade1();
        break;
    case 2:
        atividade2();
        break;
    case 0:
        console.log("Saindo do programa...");
        break;
    default:
        console.log("Opcao inválida");
}
