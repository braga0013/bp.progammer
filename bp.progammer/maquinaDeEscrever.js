var texto = "Seu futuro negocio digital esta aqui";

// Elemento onde o texto será exibido
var elemento = document.getElementById('texto-maquina');

// Função para simular o efeito de máquina de escrever
function maquinaEscrever(texto, elemento) {
    var i = 0;
    var tempo = 100; // tempo entre cada caractere (em milissegundos)

    // Criar um span para conter o texto
    var span = document.createElement('span');
    elemento.appendChild(span);

    function escrever() {
        if (i < texto.length) {
            span.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, tempo);
        } else {
            setTimeout(apagar, 2000); // aguarda 0,5 segundos antes de começar a apagar
        }
    }

    


    // Inicia o efeito de escrita
    escrever();
}

// Iniciar o efeito quando a página carregar
window.onload = function() {
    maquinaEscrever(texto, elemento);
};
