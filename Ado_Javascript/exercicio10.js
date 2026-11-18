// Nome: Giovanna Alves Galichio
// Turma: ADS 2º Semestre
// Exercício: 10

/*
Programa que cria um vetor com dez números e 
encontra o maior valor armzenado e também exibe o resultado
*/

let numeros = [23, 67, 90, 55, 3, 97, 33, 86, 64, 17];
// Começa considerando o primeiro número do vetor como maior
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    // Se achar um número maior que o atual, substitui
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("O Maior valor do vetor é: " + maior);