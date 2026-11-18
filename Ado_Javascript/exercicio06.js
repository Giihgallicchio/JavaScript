// Nome: Giovanna Alves Galichio
// Turma: ADS 2º Semestre
// Exercício: 6

/* 
Programa que armazena três números e verifica qual
deles é o maior
*/

let numero1 = 5;
let numero2 = 4;
let numero3 = 7;

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log(numero1 + " é o maior número entre " + numero1 + ", " + numero2 + " e " + numero3);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log(numero2 + " é o maior número entre " + numero1 + ", " + numero2 + " e " + numero3);
} else {
    console.log(numero3 + " é o maior número entre " + numero1 + ", " + numero2 + " e " + numero3);
}