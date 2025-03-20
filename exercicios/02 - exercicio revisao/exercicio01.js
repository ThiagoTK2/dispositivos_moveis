let str = "Thiago"

let maiusculas = str.toUpperCase();
console.log("Maiúsculas:", maiusculas);
let minusculas = str.toLocaleLowerCase();
console.log("Minúsculas:", minusculas);
let invertida = str.split("").reverse().join("");
console.log("Invertida:", invertida);
let substituida = str.replace("Thiago", "T. Ribeiro");
console.log("Substituída (Thiago por T. Ribeiro):", substituida);