const palavras = [
    "casa", "gato", "bola", "pato", "mesa",
    "lixo", "rosa", "faca", "vela", "tela"
];
// Vamos sortear uma das palavras 
// Math.floor -> Arredonda para baixo -> inteiro
const sorteada = palavras[Math.floor(Math.random() * palavras.length)]


//
const inputs = document.querySelectorAll('.palavra input');
const verificar = document.getElementById('verificar')
// Preenchimento dos inputs ao difitar a palavra 
inputs.forEach((input, i) => {
    input.addEventListener("input", () => {
        if(input.value && i < inputs.length - 1) {
            inputs[i+1].focus();
        }
    })
});
// Atribuindo a tabela
const corpoTabela = document.querySelector('#tentativas tbody');

verificar.addEventListener("click", () =>{

    const linha = corpoTabela.insertRow();
    

    inputs.forEach((input, i) => {
        linha.insertCell().textContent = input,value;

        if(input.readOnly) {
            return
        }
        if(input.value === sorteada[i]) {
            input.readOnly = true;
        }
        else {
            input.value = "";
        }
    });

    if([...inputs].every((input) => input.readOnly)) {
        alert("Parabéns, você venceu")
    }

});
