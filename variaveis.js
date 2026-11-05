/*
- Instalar a biblioteca do prompt-sync() via CMD
    npm install prompt-sync

 - Executar os arquivos .js
    node nome-do-Arquivo.js
*/

/*
Print no console - console.log("Hello World");

// Variáveis e Constantes
// Variavel - Posso substitutir os valores e NÃO preciso atribuir na declaração

var nome; // Escopo global Global
let ola; // Escopo é o bloco em que foi criado

// Constante - Não posso substituir os valores e preciso atribuir na declaração
const a = "Joao";

// NÃO PODEMOS USAR O VAR!!!!!

let b = "Joao";
{
    let b = "Felipe";
    console.log(b);
}

let media = 6;
if (media >= 6); {
    let nota1 = 5.9;
    let nota2 = 8.1;
   let media = (nota1 + nota2) / 2;
   console.log("A Média é: " + media); 
};

let num = 0; 
if (num == 5) {
    console.log(num);
}  else {
    num++;
}


let texto = "Joao"
console.log(typeof texto); // Imprime: string

let int = 5
console.log(typeof int); // Imprime: number

let number = 5.15
console.log(typeof number); // Imprime: number

let nulo = null
console.log(typeof nulo); // Imprime: object

let boolean = false
console.log(typeof boolean); // Imprime: boolean


// Condicional IF e ELSE
let condicao;
let media = 6;
let nome = "João";

if (media >= 6) {
    condicao = "Aprovado";
    console.log(`${nome} está ${condicao} com média ${media}`); // Imprime "João está Aprovado"
} 
else {
    condicao = "Reprovado";
    console.log(condicao);
}

//condicao = media >= 6 ? "Aprovado" : condicao >= 5 ? "REA" : "Reprovado";
console.log(condicao); // Imprime "Aprovado" ou "Reprovado" dependendo da média


let num = 3;
num **=2;
console.log(num); 
*/

// Funções
// Sem argumentos/paramentros
function saudacao(){
    console.log("Olá, seja bem-vindo!");
}

saudacao(); // Chamada da função

// Com argumentos/paramentros
function soma(a, b){
    return a + b;
}

console.error(soma(2,4)); // Chamada da função com argumentos

// Função anônima
const sub = function(a,b) {
    return a - b;
}

console.log(sub(2,4));

// Função seta
const subtracao = (a,b) => {
    return a - b;
}

console.log(subtracao(4,2));