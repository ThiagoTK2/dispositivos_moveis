const calcular = (numero) => {
    return {  dobro: numero * 2,
            triplo: numero * 3,
            quadrado: numero ** 2
    };
};

const resultado = calcular (5);
console.log("Dobro:", resultado.dobro);
console.log("Triplo:", resultado.triplo);
console.log("Quadrado:", resultado.quadrado);