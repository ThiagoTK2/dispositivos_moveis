let number =[10, 20, 30, 40, 50]

number.push(60);
console.log("Após adicionar 60:", number);

number.shift();
console.log("Após remover o primeiro número",number);

const maiorNumber = Math.max(...number);
console.log("Maior número:", maiorNumber);

const menorNumber = Math.min(...number);
console.log("Menor número:", menorNumber)