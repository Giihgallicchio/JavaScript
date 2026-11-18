// Nome: Giovanna Alves Galichio
// Turma: ADS 2º Semestre
// Exercício: 3

/*
Programa que calcula a média de duas notas e informa
se o aluno foi aprovado (média >= 6) ou reprovado
*/

let nota1 = 7.0;
let nota2 = 8.0;

let media = (nota1 + nota2) / 2;

if (media >= 6) {
    console.log("Parabéns! Você foi aprovado!!!\nSua média foi: " + media);
} else {
    console.log("Você foi reprovado!!!\nSua média foi: " + media);
}