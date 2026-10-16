// BUSCANDO OS ELEMENTOS DO HTML


// Busca o botão que abre os filtros
const botaoFiltros = document.getElementById("abrir-filtros");

// Busca a caixa de filtros
const caixaFiltros = document.getElementById("caixa-filtros");

// Busca o botão X
const botaoFechar = document.getElementById("fechar-filtros");

// Busca o botão de limpar
const botaoLimpar = document.getElementById("limpar-filtros");

// Busca o botão de aplicar
const botaoAplicar = document.getElementById("aplicar-filtros");

// Busca o select de categoria
const categoria = document.getElementById("categoria");

// Busca o select de autor
const autor = document.getElementById("autor");


// ABRIR FILTROS
botaoFiltros.addEventListener("click", function () {

    caixaFiltros.classList.add("aberto");

});


// FECHAR FILTROS
botaoFechar.addEventListener("click", function () {

    caixaFiltros.classList.remove("aberto");

});


// LIMPAR FILTROS
botaoLimpar.addEventListener("click", function () {

    // Volta o select de categoria para a primeira opção
    categoria.selectedIndex = 0;

    // Volta o select de autor para a primeira opção
    autor.selectedIndex = 0;

});


// APLICAR FILTROS
botaoAplicar.addEventListener("click", function () {

    // Por enquanto apenas fecha a caixa.
    // Depois podemos adicionar aqui a lógica
    // para filtrar os livros.
    caixaFiltros.classList.remove("aberto");
});