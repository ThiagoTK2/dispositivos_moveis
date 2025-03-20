idade = 70;

if (idade >= 65) {
    console.log("Idosa");
} else if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

const mensagem = idade >= 65 ? "Idosa" : idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log("Mensagem -> ", mensagem);