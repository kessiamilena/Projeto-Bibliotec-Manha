
const botaoReservar = document.getElementById("botao-reservar");
const mensagemReserva = document.getElementById("mensagem-reserva");

botaoReservar.addEventListener("click", function () {

    // Desabilita o botão
    botaoReservar.disabled = true;

    // Exibe a mensagem
    mensagemReserva.style.display = "block";

});
