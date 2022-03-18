/* seletor de número aleatório. */
var numeroSecreto = parseInt(Math.random () * 11);

function Chutar() {
    var chute = parseInt( document.getElementById('valor').value);
    console.log(chute);
    var elementoResultado = document.getElementById('resultado');
    
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = 'Você acertou';
    } else if (chute > 10 || chute  < 0 ) {
        elementoResultado.innerHTML = 'digite um número entre 0 e 10 ';
    }
    
    else{
        elementoResultado.innerHTML= 'Você errou o número secreto era:' + numeroSecreto ;
    } 


}