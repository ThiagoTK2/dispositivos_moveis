const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
};


const { titulo, autor } = livro;
console.log("Título:", titulo);
console.log("Autor:", autor);


function obterInformacoesLivro(livro) {
    return `${livro.titulo} foi escrito por ${livro.autor}.`;
}

const informacoes = obterInformacoesLivro(livro);
console.log(informacoes);
