
/* BUSCANDO OS ELEMENTOS DO HTML */

const botaoFiltros = document.getElementById("abrir-filtros");
const caixaFiltros = document.getElementById("caixa-filtros");
const botaoFechar = document.getElementById("fechar-filtros");
const botaoLimpar = document.getElementById("limpar-filtros");
const botaoAplicar = document.getElementById("aplicar-filtros");

const categoria = document.getElementById("categoria");
const autor = document.getElementById("autor");
const busca = document.getElementById("busca");

const livros = document.querySelectorAll(".card-livro");
const mensagemVazia = document.getElementById("mensagem-vazia");

let categoriaAplicada = "";
let autorAplicado = "";


/* CATEGORIAS DOS LIVROS */

const categoriasLivros = {
    "Filhas da lua": "fantasia",
    "TI para negócios": "tecnologia",
    "Mestres do tempo": "ficcao"
};


// ABRIR FILTROS
botaoFiltros.addEventListener("click", function () {

    caixaFiltros.classList.add("aberto");

});


// FECHAR FILTROS
botaoFechar.addEventListener("click", function () {

    caixaFiltros.classList.remove("aberto");

});


// FILTRAR LIVROS
function filtrarLivros() {

    const textoBusca = busca.value.toLowerCase().trim();

    let quantidadeEncontrada = 0;

    livros.forEach(function (livro) {

        // Busca o nome e o autor diretamente no HTML
        const nomeLivro = livro.querySelector(".informacoes-card h2").innerText;
        const nomeAutor = livro.querySelector(".informacoes-card p").innerText;

        // Busca a categoria correspondente ao livro
        const categoriaLivro = categoriasLivros[nomeLivro];

        // Verifica o texto digitado
        const correspondeBusca =
            nomeLivro.toLowerCase().includes(textoBusca) ||
            nomeAutor.toLowerCase().includes(textoBusca);

        // Verifica a categoria selecionada
        const correspondeCategoria =
            categoriaAplicada === "" ||
            categoriaLivro === categoriaAplicada;

        // Verifica o autor selecionado
        const correspondeAutor =
            autorAplicado === "" ||
            nomeAutor.toLowerCase() === autorAplicado;

        // Exibe ou oculta o livro
        if (correspondeBusca && correspondeCategoria && correspondeAutor) {

            livro.style.display = "flex";
            quantidadeEncontrada++;

        } else {

            livro.style.display = "none";

        }

    });

    // Mensagem quando nenhum livro for encontrado
    if (mensagemVazia !== null) {

        if (quantidadeEncontrada === 0) {
            mensagemVazia.style.display = "block";
        } else {
            mensagemVazia.style.display = "none";
        }

    }

}


// PESQUISAR LIVROS
busca.addEventListener("input", function () {

    filtrarLivros();

});


// LIMPAR FILTROS
botaoLimpar.addEventListener("click", function () {

    categoria.selectedIndex = 0;
    autor.selectedIndex = 0;

    categoriaAplicada = "";
    autorAplicado = "";

    filtrarLivros();

});


// APLICAR FILTROS
botaoAplicar.addEventListener("click", function () {

    categoriaAplicada = categoria.value;

    // Obtém o nome do autor selecionado
    autorAplicado = autor.options[autor.selectedIndex].text.toLowerCase();

    // Caso nenhuma opção tenha sido selecionada
    if (autor.value === "") {
        autorAplicado = "";
    }

    filtrarLivros();

    caixaFiltros.classList.remove("aberto");

});
