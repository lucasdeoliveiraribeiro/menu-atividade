# 📚 Prática de Desenvolvimento com TypeScript

---

## 🏫 Informações Acadêmicas

| Campo | Informações |
|-------|------------|
| **Curso** | Tecnologia em Análise e Desenvolvimento de Sistemas |
| **Disciplina** | Programação Front-End |
| **Professor** | José Carlos Flores |
| **Turma** | ADS3B |

---

## 👥 Componentes do Grupo

| RA | Nome |
|----|------|
| RA 25362588-2 | Lucas de Oliveira Ribeiro |
| RA 25361575-2 | Victor Gabriel da Silva |
| RA 25361837-2 | Gustavo Dell Bianco Tomazelli |
| RA 25357943-2 | Emanoel Aparecido Ferreira da Cruz |
| RA 25362298-2 | Leonardo Mozart |

---

## 📋 Descrição do Projeto

Programa de linha de comando desenvolvido em **TypeScript** com um menu interativo contendo **18 exercícios práticos**, abrangendo:

- Estruturas de controle (`if`, `switch`, `while`, `for`)
- Arrays e manipulação de dados
- Funções tipadas
- Programação Orientada a Objetos (classes, herança, interfaces)
- Expressões regulares (regex)
- Algoritmos de busca e ordenação

---

## 📁 Estrutura do Projeto

```
MeuProjetoTS/
├── src/
│   └── Projeto1.ts       ← código-fonte principal em TypeScript
├── dist/
│   └── Projeto1.js       ← código compilado (gerado pelo tsc)
├── tsconfig.json         ← configurações do compilador TypeScript
├── package.json          ← dependências e scripts do projeto
└── README.md             ← este arquivo
```

---

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** versão 16 ou superior → [nodejs.org](https://nodejs.org)
- **npm** (já vem junto com o Node.js)

Para verificar se estão instalados, abra o terminal e execute:

```bash
node --version
npm --version
```

---

## ⚙️ Instalação

**1. Clone ou extraia o projeto na sua máquina**

**2. Acesse a pasta do projeto no terminal:**
```bash
cd MeuProjetoTS
```

**3. Instale as dependências:**
```bash
npm install
```

Isso vai instalar automaticamente:
- `readline-sync` — leitura de dados pelo terminal
- `typescript` — compilador TypeScript
- `@types/node` — tipos do Node.js
- `@types/readline-sync` — tipos do readline-sync

---

## ▶️ Como Executar

### Opção 1 — Compilar e executar separadamente

```bash
# 1. Compilar o TypeScript para JavaScript
tsc

# 2. Executar o programa
node dist/Projeto1.js
```

### Opção 2 — Compilar e executar de uma vez

```bash
npm run dev
```

### Opção 3 — Apenas executar (se já compilado)

```bash
npm start
```

---

## 📌 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| Compilar | `npm run build` | Compila o TypeScript para JavaScript |
| Executar | `npm start` | Executa o programa compilado |
| Dev | `npm run dev` | Compila e executa em sequência |

---

## 🗂️ Lista de Exercícios

| Nº | Exercício | Conceito aplicado |
|----|-----------|-------------------|
| 1 | Soma de dois números | Operadores aritméticos |
| 2 | Verificar par ou ímpar | Operador módulo `%` |
| 3 | Média de três notas | Média aritmética |
| 4 | Converter Celsius para Fahrenheit | Fórmula matemática |
| 5 | Números pares de 1 a 20 | Loop `for` + condição |
| 6 | Ler 5 números e armazenar em array | Array + `push()` |
| 7 | Encontrar o maior número | Algoritmo de busca linear |
| 8 | Contar vogais em uma string | Loop `for...of` + string |
| 9 | Calculadora simples | `switch` + 4 operações |
| 10 | Ordenar array crescente | `Array.sort()` |
| 11 | Classe Pessoa | Classes e construtores |
| 12 | Classe Aluno | Herança com `extends` e `super()` |
| 13 | Classe Carro | Interface + `implements` |
| 14 | Tabuada | Loop `for` |
| 15 | Calculadora de IMC | Fórmula + `if/else if` |
| 16 | Validar senha | Expressões regulares (regex) |
| 17 | Jogo de adivinhação | Loop `while` + `Math.random()` |
| 18 | Contar palavras em string | `split()` + `filter()` |
| 0 | Sair | `process.exit()` |

---

## 💻 Demonstração de Uso

```
___________Menu de exercicios___________
(1)  Somar dois valores
(2)  Verificar par ou impar
...
(0)  Sair

Escolha uma opcao: 1

Digite o primeiro numero: 10
Digite o segundo numero: 25
Soma: 35

Pressione [ENTER] para voltar ao menu...
```

---

## 🔧 Configurações Técnicas

| Configuração | Valor |
|-------------|-------|
| **Linguagem** | TypeScript 5.x |
| **Target** | ES6 |
| **Module** | CommonJS |
| **Modo estrito** | Ativado (`strict: true`) |
| **Entrada** | `src/**/*.ts` |
| **Saída** | `dist/` |

---
