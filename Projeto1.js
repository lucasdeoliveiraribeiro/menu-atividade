import * as readline from 'readline-sync';
console.log("_______________________________________________________________________");
console.log("Curso: Tecnologia em Análise e Desenvolvimento de Sistemas");
console.log("Disciplina: Programação Front-End");
console.log("Professor: José Carlos Flores");
console.log("Turma: ADS3B\n");
console.log("Participantes:");
console.log("Lucas de Oliveira Ribeiro");
console.log("Victor Gabriel da Silva");
console.log("Gustavo Dell Bianco Tomazelli");
console.log("Lucas de Oliveira Ribeiro");
console.log("Lucas de Oliveira Ribeiro");
console.log("Lucas de Oliveira Ribeiro\n");
let saudacao = readline.question("aperte [ENTER] para comecar: ");
console.clear();
console.log("___________Menu de exercicios___________");
console.log("(1) Somar dois valores");
console.log("(2) Verificar par ou impar");
console.log("(3) Calcular a media de tres notas");
console.log("(4) Converter Celsius para Fahrenheit");
console.log("(5) Exibir os numeros pares do 1 ao 20");
console.log("(6) Ler 5 numeros e armazenar em um array");
console.log("(7) Encontrar o maior numero em um array");
console.log("(8) Contar vogais em um string");
console.log("(9) Calculadora simples");
console.log("(10) Ordenar o array em ordem crescente");
console.log("(11) Classe pessoa");
console.log("(12) Classe aluno");
console.log("(13) Classe carro");
console.log("(14) Tabuada");
console.log("(15) Calculadora de IMC");
console.log("(16) Validar senha");
console.log("(17) Jogo de adivinhação");
console.log("(18) contar palavras em um string");
console.log("(0) Sair");
let opcao = readline.questionInt("Escolha uma opcao: ");
console.clear();
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
function atividade3() {
    let Nota1 = readline.questionFloat("Informe a nota do primeiro semestre: ");
    let Nota2 = readline.questionFloat("Informe a nota do segundo semestre: ");
    let Nota3 = readline.questionFloat("Informe a nota do terceiro semestre: ");
    let MediaNota = (Number(Nota1) + Number(Nota2) + Number(Nota3)) / 3;
    console.log("sua media foi: ", MediaNota.toFixed(1)); // Tofixed(1) deixa somente uma casa decimal depois da virgula
}
function atividade4() {
    let valor_Convercao = readline.questionFloat("Informe o valor em Fahrenheit para convercao em Celsiu: ");
    let convercao = (valor_Convercao - 32) * 5 / 9;
    console.log(`A convercao de Fahrenheit ${valor_Convercao}, foi ${convercao.toFixed(1)}`);
}
;
function atividade5() {
    console.log("Sistema mostrarara somente os numeros pares de 1 ao 20");
    const valor_Pares = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            valor_Pares.push(i);
        }
    }
    console.log("Numeros pares encontrado: \n");
    valor_Pares.forEach((numero) => {
        console.log(`${numero}`);
    });
}
;
function atividade6() {
    let valor_usuario = [];
    for (let i = 0; i < 5; i++) {
        let valor = readline.question(`digite o ${i + 1}  nome: `);
        valor_usuario.push(valor);
    }
    console.log(`os nomes armazenados foram: ${valor_usuario}`);
}
;
function atividade7() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros[i] = readline.questionInt(`Digite o ${i + 1}° numero: `);
    }
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    console.log("\nArray:", numeros);
    console.log("Maior numero:", maior);
}
;
function atividade8() {
    let frase = readline.question("Digite uma palavra ou frase: ");
    let contador = 0;
    for (let letra of frase.toLowerCase()) {
        if (letra == "a" ||
            letra == "e" ||
            letra == "i" ||
            letra == "o" ||
            letra == "u") {
            contador++;
        }
    }
    console.log(`Quantidade de vogais: ${contador}`);
}
;
function atividade9() {
    console.log("Bem vindo a calculadora simple");
    let num1 = readline.questionFloat("informe o primeiro numero: ");
    let operacao = readline.question("escolha qual operacao deseja realizar (+ - x /): ");
    let num2 = readline.questionFloat("informe o segundo numero ");
    let resultado;
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            console.log(`o valor foi: ${resultado}`);
            break;
        case "-":
            resultado = num1 - num2;
            console.log(`o valor foi: ${resultado}`);
            break;
        case "x":
            resultado = num1 * num2;
            console.log(`o valor foi: ${resultado}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log("Erro: divisao por zero!");
            }
            else {
                resultado = num1 / num2;
                console.log(`Resultado: ${resultado.toFixed(2)}`);
            }
            break;
        default:
            console.log("a operacao e invalida");
    }
}
;
function atividade10() {
    let numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros[i] = readline.questionInt(`Digite o ${i + 1} numero: `);
    }
    numeros.sort((a, b) => a - b);
    console.log("\nArray em ordem crescente:");
    console.log(numeros);
}
;
function atividade11() {
    class Pessoa {
        nome;
        idade;
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
        exibirDados() {
            console.log("Nome:", this.nome);
            console.log("Idade:", this.idade);
        }
    }
    let pessoa1 = new Pessoa("Lucas", 20);
    pessoa1.exibirDados();
}
;
function atividade12() {
    class Pessoa {
        nome;
        idade;
        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
        }
        exibirDados() {
            console.log("Nome:", this.nome);
            console.log("Idade:", this.idade);
        }
    }
    class aluno extends Pessoa {
        matricula;
        curso;
        constructor(nome, idade, matricula, curso) {
            super(nome, idade);
            this.matricula = matricula;
            this.curso = curso;
        }
        exibirAluno1() {
            this.exibirDados();
            console.log("matricula:", this.matricula);
            console.log("curso: ", this.curso);
        }
    }
    let aluno1 = new aluno("lucas", 20, 218329, "ADS");
    aluno1.exibirAluno1();
}
;
function atividade13() {
    class Carro {
        acelerar() {
            console.log("o carro esta acelerando, vrummm");
        }
        frear() {
            console.log("o carro esta freando, vrum");
        }
    }
    let carro1 = new Carro();
    carro1.acelerar();
    carro1.frear();
}
;
function atividade14() {
    let ValorTabuada = readline.questionInt("Informe um numero para aparecer a tabuada desse numero: ");
    console.log(`\nTabuada do ${ValorTabuada}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${ValorTabuada} x ${i} = ${ValorTabuada * i}`);
    }
}
;
function atividade15() {
    let ValorPeso = readline.questionFloat("Informe o seu peso (KG): ");
    let ValorAltura = readline.questionFloat("Informe sua altura (M): ");
    let ValorImc = ValorPeso / (ValorAltura * ValorAltura);
    console.log(`Seu IMC e: ${ValorImc.toFixed(2)}`);
    if (ValorImc < 18.5) {
        console.log("Classificação: Abaixo do peso");
    }
    else if (ValorImc >= 18.5 && ValorImc < 25) {
        console.log("Classificação: Peso normal");
    }
    else if (ValorImc >= 25 && ValorImc < 30) {
        console.log("Classificação: Sobrepeso");
    }
    else if (ValorImc >= 30 && ValorImc < 35) {
        console.log("Classificação: Obesidade grau 1");
    }
    else if (ValorImc >= 35 && ValorImc < 40) {
        console.log("Classificação: Obesidade grau 2");
    }
    else {
        console.log("Classificação: Obesidade grau 3");
    }
}
;
function atividade16() {
    console.log("Crie sua senha");
    console.log("Sua senha deve conter:");
    console.log("* Pelo menos 8 caracteres");
    console.log("* Pelo menos uma letra maiúscula");
    console.log("* Pelo menos uma letra minúscula");
    console.log("* Pelo menos um numero\n");
    let senha = readline.question("informe sua senha: ");
    let tem8Caracteres = senha.length >= 8;
    let temMaiuscula = /[A-Z]/.test(senha);
    let temMinuscula = /[a-z]/.test(senha);
    let temNumero = /[0-9]/.test(senha);
    if (tem8Caracteres && temMaiuscula && temMinuscula && temNumero) {
        console.log("\nSenha válida!");
    }
    else {
        console.log("\nSenha inválida. A senha deve conter:");
        if (!tem8Caracteres) {
            console.log("- Pelo menos 8 caracteres");
        }
        if (!temMaiuscula) {
            console.log("- Pelo menos uma letra maiúscula");
        }
        if (!temMinuscula) {
            console.log("- Pelo menos uma letra minúscula");
        }
        if (!temNumero) {
            console.log("- Pelo menos um número");
        }
    }
}
;
function atividade17() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa = 0;
    while (tentativa !== numeroSecreto) {
        tentativa = readline.questionInt("Digite um numero entre 1 e 100: ");
        if (tentativa > numeroSecreto) {
            console.log("O numero secreto e MENOR!");
        }
        else if (tentativa < numeroSecreto) {
            console.log("O numero secreto e MAIOR!");
        }
        else {
            console.log("\nPARABENS! Voce acertou!");
            console.log(`Numero secreto: ${numeroSecreto}`);
        }
    }
}
;
function atividade18() {
    let frase = readline.question("informe a frase para contar os as palavras: ");
    let palavras = frase.trim().split(" ");
    let contador = 0;
    for (let palavra of palavras) {
        if (palavra !== "") {
            contador++;
        }
    }
    console.log(`a quantidades de caracter na palavra e ${contador}`);
}
;
switch (opcao) {
    case 1:
        atividade1();
        break;
    case 2:
        atividade2();
        break;
    case 3:
        atividade3();
        break;
    case 4:
        atividade4();
        break;
    case 5:
        atividade5();
        break;
    case 6:
        atividade6();
        break;
    case 7:
        atividade7();
        break;
    case 8:
        atividade8();
        break;
    case 9:
        atividade9();
        break;
    case 10:
        atividade10();
        break;
    case 11:
        atividade11();
        break;
    case 12:
        atividade12();
        break;
    case 13:
        atividade13();
        break;
    case 14:
        atividade14();
        break;
    case 15:
        atividade15();
        break;
    case 16:
        atividade16();
        break;
    case 17:
        atividade17();
        break;
    case 18:
        atividade18();
        break;
    case 0:
        console.log("Saindo do programa...");
        break;
    default:
        console.log("Opcao inválida");
}
