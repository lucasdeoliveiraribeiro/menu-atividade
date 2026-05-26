import * as readline from 'readline-sync';

//codigo para executar o arquivo
//"CD" + NOME DA PASTA = SELECIONA A PASTA 
//EXECUTA DIRETO O ARQUIVO 'npx ts-node src/Projeto1.ts'/Projeto1.ts ou npm start



console.log("__________________________ Projeto __________________________");
console.log("Curso: Tecnologia em Análise e Desenvolvimento de Sistemas");
console.log("Disciplina: Programação Front-End");
console.log("Professor: José Carlos Flores");
console.log("Turma: ADS3B\n");

console.log("Participantes:");
console.log("RA: 25362588-2     Nome: Lucas de Oliveira Ribeiro");
console.log("RA: 25361575-2     Nome: Victor Gabriel da Silva");
console.log("RA: 25361837-2     Nome: Gustavo Dell Bianco Tomazelli");
console.log("RA: 25357943-2     Nome: Emanoel Aparecido Ferreira da Cruz");
console.log("RA: 25178071-2     Nome: Enzo Gabriel Poersch");
console.log("RA: 25177930-3     Nome: Gabriel Pereira Simões");
console.log("RA: 25362298-2     Nome: Leonardo Mozart\n");

readline.question("Aperte [ENTER] para comecar: ");

function exibirMenu(): void {
    console.clear();
    console.log("__________________________Menu de exercicios __________________________");
    console.log("(1)  Somar dois valores");
    console.log("(2)  Verificar par ou impar");
    console.log("(3)  Calcular a media de tres notas");
    console.log("(4)  Converter Celsius para Fahrenheit");
    console.log("(5)  Exibir os numeros pares do 1 ao 20");
    console.log("(6)  Ler 5 numeros e armazenar em um array");
    console.log("(7)  Encontrar o maior numero em um array");
    console.log("(8)  Contar vogais em um string");
    console.log("(9)  Calculadora simples");
    console.log("(10) Ordenar o array em ordem crescente");
    console.log("(11) Classe pessoa");
    console.log("(12) Classe aluno");
    console.log("(13) Classe carro");
    console.log("(14) Tabuada");
    console.log("(15) Calculadora de IMC");
    console.log("(16) Validar senha");
    console.log("(17) Jogo de adivinhacao");
    console.log("(18) Contar palavras em um string");
    console.log("(0)  Sair\n");
}

// ============================================================
// MENU PRINCIPAL
// Exibe as 18 opcoes disponiveis e a opcao 0 para sair.
// Chamado no inicio de cada iteracao do loop principal.
// ============================================================

function atividade1(): void {
    const a: number = readline.questionInt("Digite o primeiro numero: ");
    const b: number = readline.questionInt("Digite o segundo numero: ");
    console.log(`Soma: ${a + b}`);
}

// ============================================================
// EXERCICIO 2 — Verificar par ou impar
// Solucao: usa o operador modulo (%) para verificar o resto
// da divisao por 2. Se o resto for 0, o numero e par;
// caso contrario, e impar.
// ============================================================
function atividade2(): void {
    const numero: number = readline.questionInt("Digite um numero: ");
    if (numero % 2 === 0) {
        console.log("O numero e Par");
    } else {
        console.log("O numero e Impar");
    }
}

// ============================================================
// EXERCICIO 3 — Media de tres notas
// Solucao: le tres notas como float, soma todas e divide por 3.
// toFixed(1) limita o resultado a uma casa decimal.
// ============================================================
function atividade3(): void {
    const nota1: number = readline.questionFloat("Informe a nota do primeiro semestre: ");
    const nota2: number = readline.questionFloat("Informe a nota do segundo semestre: ");
    const nota3: number = readline.questionFloat("Informe a nota do terceiro semestre: ");
    const media: number = (nota1 + nota2 + nota3) / 3;
    console.log(`Sua media foi: ${media.toFixed(1)}`);
}

// ============================================================
// EXERCICIO 4 — Converter Celsius para Fahrenheit
// Solucao: aplica a formula oficial F = (C x 9/5) + 32.
// O resultado e exibido com uma casa decimal via toFixed(1).
// ============================================================
function atividade4(): void {    
    const celsius: number = readline.questionFloat("Informe o valor em Celsius: ");
    const fahrenheit: number = (celsius * 9 / 5) + 32;
    console.log(`${celsius}C equivale a ${fahrenheit.toFixed(1)}F`);
}

// ============================================================
// EXERCICIO 5 — Numeros pares de 1 a 20
// Solucao: percorre os numeros de 1 a 20 com um for.
// A cada iteracao, verifica se o numero e par (i % 2 === 0)
// e o armazena num array. Ao final, exibe todos com forEach.
// ============================================================
function atividade5(): void {
    console.log("Numeros pares de 1 ao 20:\n");
    const pares: number[] = [];

    for (let i: number = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    pares.forEach((numero: number) => {
        console.log(`  ${numero}`);
    });
}

// ============================================================
// EXERCICIO 6 — Ler 5 numeros e armazenar em array
// Solucao: usa um loop for para solicitar 5 numeros ao usuario,
// adicionando cada um ao array com push().
// Ao final, exibe todos os elementos com join().
// ============================================================
function atividade6(): void {
    const numeros: number[] = [];

    for (let i = 0; i < 5; i++) {
        const valor: number = readline.questionFloat(`Digite o ${i + 1} numero: `);
        numeros.push(valor);
    }

    console.log(`Os numeros armazenados foram: ${numeros.join(", ")}`);
}

// ============================================================
// EXERCICIO 7 — Encontrar o maior numero em um array
// Solucao: le 5 numeros e armazena em array. Assume o primeiro
// como maior inicial, depois percorre o restante comparando
// cada elemento. Se o atual for maior, atualiza a variavel.
// ============================================================
function atividade7(): void {
    const numeros: number[] = [];

    for (let i = 0; i < 5; i++) {
        numeros[i] = readline.questionInt(`Digite o ${i + 1} numero: `);
    }

   
    let maior: number = numeros[0] ?? 0;

    for (let i = 1; i < numeros.length; i++) {
        const atual: number = numeros[i] ?? 0;
        if (atual > maior) {
            maior = atual;
        }
    }

    console.log("\nArray:", numeros);
    console.log("Maior numero:", maior);
}

// ============================================================
// EXERCICIO 8 — Contar vogais em uma string
// Solucao: converte a string para minusculas com toLowerCase()
// e percorre cada caractere com for...of. Incrementa o
// contador sempre que encontrar uma das 5 vogais (a,e,i,o,u).
// ============================================================
function atividade8(): void {
    const frase: string = readline.question("Digite uma palavra ou frase: ");
    let contador: number = 0;

    for (const letra of frase.toLowerCase()) {
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            contador++;
        }
    }

    console.log(`Quantidade de vogais: ${contador}`);
}

// ============================================================
// EXERCICIO 9 — Calculadora simples (4 operacoes)
// Solucao: le dois numeros e o operador desejado. Um switch
// executa a operacao correspondente. A divisao tem tratamento
// especial para evitar divisao por zero.
// ============================================================
function atividade9(): void {
    console.log("Bem vindo a calculadora simples");
    const num1: number = readline.questionFloat("Informe o primeiro numero: ");
    const operacao: string = readline.question("Escolha a operacao (+ - x /): ");
    const num2: number = readline.questionFloat("Informe o segundo numero: ");
    let resultado: number = 0;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            console.log(`Resultado: ${resultado}`);
            break;
        case "-":
            resultado = num1 - num2;
            console.log(`Resultado: ${resultado}`);
            break;
        case "x":
            resultado = num1 * num2;
            console.log(`Resultado: ${resultado}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log("Erro: divisao por zero!");
            } else {
                resultado = num1 / num2;
                console.log(`Resultado: ${resultado.toFixed(2)}`);
            }
            break;
        default:
            console.log("Operacao invalida");
    }
}

// ============================================================
// EXERCICIO 10 — Ordenar array em ordem crescente
// Solucao: le 5 numeros e usa o metodo sort() nativo do array.
// A funcao comparadora (a, b) => a - b garante ordenacao
// numerica correta (sem sort, JS ordena como string).
// ============================================================
function atividade10(): void {
    const numeros: number[] = [];

    for (let i = 0; i < 5; i++) {
        numeros[i] = readline.questionInt(`Digite o ${i + 1} numero: `);
    }

    numeros.sort((a, b) => a - b);
    console.log("\nArray em ordem crescente:");
    console.log(numeros);
}

// ============================================================
// EXERCICIO 11 — Classe Pessoa
// Solucao: define a classe Pessoa com atributos nome e idade,
// um constructor para inicializar os valores e um metodo
// exibirDados() para imprimir as informacoes no console.
// ============================================================
function atividade11(): void {
    class Pessoa {
        nome: string;
        idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }

        exibirDados(): void {
            console.log("Nome:", this.nome);
            console.log("Idade:", this.idade);
        }
    }

    const pessoa1 = new Pessoa("Lucas", 20);
    pessoa1.exibirDados();
}

// ============================================================
// EXERCICIO 12 — Classe Aluno (heranca)
// Solucao: a classe Aluno estende Pessoa usando extends,
// adicionando os atributos matricula e curso. O constructor
// chama super() para inicializar os atributos herdados.
// exibirDados() e sobrescrito chamando super.exibirDados()
// para reaproveitar a logica da classe pai.
// ============================================================
function atividade12(): void {
    class Pessoa {
        nome: string;
        idade: number;

        constructor(nome: string, idade: number) {
            this.nome = nome;
            this.idade = idade;
        }

        exibirDados(): void {
            console.log("Nome:", this.nome);
            console.log("Idade:", this.idade);
        }
    }

    class Aluno extends Pessoa {
        matricula: number;
        curso: string;

        constructor(nome: string, idade: number, matricula: number, curso: string) {
            super(nome, idade);
            this.matricula = matricula;
            this.curso = curso;
        }

        
        exibirDados(): void {
            super.exibirDados();
            console.log("Matricula:", this.matricula);
            console.log("Curso:", this.curso);
        }
    }

    const aluno1 = new Aluno("Lucas", 20, 218329, "ADS");
    aluno1.exibirDados();
}

// ============================================================
// EXERCICIO 13 — Interface Veiculo e Classe Carro
// Solucao: define a interface Veiculo com os metodos acelerar()
// e frear(). A classe Carro implementa a interface com
// "implements Veiculo", sendo obrigada a definir ambos os
// metodos — principio de contrato em OOP.
// ============================================================
function atividade13(): void {
    interface Veiculo {
        acelerar(): void;
        frear(): void;
    }

    class Carro implements Veiculo {
        acelerar(): void {
            console.log("O carro esta acelerando, vrummm!");
        }
        frear(): void {
            console.log("O carro esta freando, vrum!");
        }
    }

    const carro1 = new Carro();
    carro1.acelerar();
    carro1.frear();
}

// ============================================================
// EXERCICIO 14 — Tabuada
// Solucao: le um numero inteiro e usa um for de 1 a 10 para
// calcular e exibir cada linha da tabuada multiplicando o
// numero informado pelo contador do loop.
// ============================================================
function atividade14(): void {
    const valorTabuada: number = readline.questionInt("Informe um numero para a tabuada: ");
    console.log(`\nTabuada do ${valorTabuada}:\n`);

    for (let i = 1; i <= 10; i++) {
        console.log(`  ${valorTabuada} x ${i} = ${valorTabuada * i}`);
    }
}

// ============================================================
// EXERCICIO 15 — Calculadora de IMC
// Solucao: aplica a formula IMC = peso / (altura^2).
// Uma cadeia de if/else if compara o resultado com os
// intervalos oficiais da OMS para exibir a classificacao.
// ============================================================
function atividade15(): void {
    const peso: number = readline.questionFloat("Informe o seu peso (KG): ");
    const altura: number = readline.questionFloat("Informe sua altura (M): ");
    const imc: number = peso / (altura * altura);

    console.log(`\nSeu IMC e: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Classificacao: Abaixo do peso");
    } else if (imc < 25) {
        console.log("Classificacao: Peso normal");
    } else if (imc < 30) {
        console.log("Classificacao: Sobrepeso");
    } else if (imc < 35) {
        console.log("Classificacao: Obesidade grau 1");
    } else if (imc < 40) {
        console.log("Classificacao: Obesidade grau 2");
    } else {
        console.log("Classificacao: Obesidade grau 3");
    }
}

// ============================================================
// EXERCICIO 16 — Validar senha
// Solucao: usa expressoes regulares (regex) para verificar
// cada criterio individualmente. Cada teste retorna boolean.
// Se todos forem true, a senha e valida; caso contrario,
// exibe quais criterios nao foram atendidos.
// ============================================================
function atividade16(): void {
    console.log("Crie sua senha");
    console.log("Sua senha deve conter:");
    console.log("* Pelo menos 8 caracteres");
    console.log("* Pelo menos uma letra maiuscula");
    console.log("* Pelo menos uma letra minuscula");
    console.log("* Pelo menos um numero\n");

    const senha: string = readline.question("Informe sua senha: ");

    const tem8Caracteres: boolean = senha.length >= 8;
    const temMaiuscula: boolean  = /[A-Z]/.test(senha);
    const temMinuscula: boolean  = /[a-z]/.test(senha);
    const temNumero: boolean     = /[0-9]/.test(senha);

    if (tem8Caracteres && temMaiuscula && temMinuscula && temNumero) {
        console.log("\nSenha valida!");
    } else {
        console.log("\nSenha invalida. Falta:");
        if (!tem8Caracteres) console.log("- Pelo menos 8 caracteres");
        if (!temMaiuscula)   console.log("- Pelo menos uma letra maiuscula");
        if (!temMinuscula)   console.log("- Pelo menos uma letra minuscula");
        if (!temNumero)      console.log("- Pelo menos um numero");
    }
}

// ============================================================
// EXERCICIO 17 — Jogo de adivinhacao
// Solucao: gera um numero aleatorio entre 1 e 100 com
// Math.random() e Math.floor(). Um loop while mantem o jogo
// ativo ate o usuario acertar. A cada tentativa errada,
// exibe se o numero secreto e maior ou menor.
// ============================================================
function atividade17(): void {
    const numeroSecreto: number = Math.floor(Math.random() * 100) + 1;
    let tentativa: number = 0;

    while (tentativa !== numeroSecreto) {
        tentativa = readline.questionInt("Digite um numero entre 1 e 100: ");

        if (tentativa > numeroSecreto) {
            console.log("O numero secreto e MENOR!");
        } else if (tentativa < numeroSecreto) {
            console.log("O numero secreto e MAIOR!");
        } else {
            console.log("\nPARABENS! Voce acertou!");
            console.log(`Numero secreto: ${numeroSecreto}`);
        }
    }
}

// ============================================================
// EXERCICIO 18 — Contar palavras em uma string
// Solucao: remove espacos das extremidades com trim(), depois
// usa split(/\s+/) para dividir a string por um ou mais
// espacos (trata espacos duplos). filter() remove strings
// vazias remanescentes. O total e o tamanho do array.
// ============================================================
function atividade18(): void {
    const frase: string = readline.question("Informe a frase para contar as palavras: ");
    const palavras: string[] = frase.trim().split(/\s+/).filter(p => p !== "");
    console.log(`Quantidade de palavras: ${palavras.length}`);
}


while (true) {
    exibirMenu();

    const opcao: number = readline.questionInt("Escolha uma opcao: ");
    console.clear();

    switch (opcao) {
        case 1:  atividade1();  break;
        case 2:  atividade2();  break;
        case 3:  atividade3();  break;
        case 4:  atividade4();  break;
        case 5:  atividade5();  break;
        case 6:  atividade6();  break;
        case 7:  atividade7();  break;
        case 8:  atividade8();  break;
        case 9:  atividade9();  break;
        case 10: atividade10(); break;
        case 11: atividade11(); break;
        case 12: atividade12(); break;
        case 13: atividade13(); break;
        case 14: atividade14(); break;
        case 15: atividade15(); break;
        case 16: atividade16(); break;
        case 17: atividade17(); break;
        case 18: atividade18(); break;
        case 0:
            console.log("Saindo do programa...");
            process.exit(0);
        default:
            console.log("Opcao invalida! Tente novamente.");
    }

    readline.question("\nPressione [ENTER] para voltar ao menu...");
}
