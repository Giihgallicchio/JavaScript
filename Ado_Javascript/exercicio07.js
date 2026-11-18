// Nome: Giovanna Alves Galichio
// Turma: ADS 2º Semestre
// Exercício: 7

/*
Programa que calcula o valor aproximado de PI usando
o método de Gregory-leibniz com 1 milhão de repetições
*/

let pi = 0;
let denominador = 1;

for (let i = 0; i < 1000000; i++) {
    // Alterna entre somar nas posições pares e subtrair nas ímpares
    if (i % 2 == 0) {
        pi = pi + (4 / denominador);
    } else {
        pi = pi - (4 / denominador);
    }
    // Pula sempre para o próximo número ímpar
    denominador = denominador + 2;
}

console.log("Valor aproximado de PI: " + pi);