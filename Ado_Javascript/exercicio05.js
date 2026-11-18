// Nome: Giovanna Alves Galichio
// Turma: ADS 2º Semestre
// Exercício: 5

/* 
Programa que verifica se um número inteiro é primo
contando quantos divisores exatos ele possui
*/

let numero = 10;
let divisores = 0;

// Conta quantas vezes o número pode ser dividido sem deixar resto
for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        divisores++;
    }
}

// Número primo só é divisível por 1 e por ele mesmo (2 divisores)
if (divisores == 2) {
    console.log(numero + " é número primo");
} else {
    console.log(numero + " não é número primo");
}