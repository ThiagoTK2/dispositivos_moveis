let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};


pessoa.profissao = "Militarnp";
console.log("Após adicionar profissão:", pessoa);


delete pessoa.cidade;
console.log("Após remover a cidade:", pessoa);


console.log("Propriedades do objeto:");
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
