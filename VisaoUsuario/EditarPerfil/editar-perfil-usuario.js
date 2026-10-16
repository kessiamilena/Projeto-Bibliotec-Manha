
const conteudoPerfil = document.querySelector(".conteudo-perfil");

const sobreposicao = document.getElementById("sobreposicao-perfil");

const avisoConfirmacao = document.getElementById("aviso-confirmacao");
const avisoEmailEnviado = document.getElementById("aviso-email-enviado");

const botaoAlterarSenha = document.getElementById("alterar-senha");
const botaoEnviarEmail = document.getElementById("enviar-email");
const botaoVoltar = document.getElementById("voltar-perfil");


// ABRIR POP-UP

botaoAlterarSenha.addEventListener("click", function (event) {

    event.preventDefault();

    conteudoPerfil.classList.add("desfocado");

    sobreposicao.classList.add("ativo");
    avisoConfirmacao.classList.add("ativo");

});


// ENVIAR E-MAIL

botaoEnviarEmail.addEventListener("click", function () {

    avisoConfirmacao.classList.remove("ativo");
    avisoEmailEnviado.classList.add("ativo");

});


// IR PARA ALTERAR SENHA

botaoVoltar.addEventListener("click", function () {

    window.location.href = "AlterarSenha/alterar-senha-perfil.html";

});
