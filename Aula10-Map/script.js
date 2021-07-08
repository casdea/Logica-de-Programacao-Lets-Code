const vetor1 = ["10","20","30"];
const stringToInt = (x) => parseInt(x);
const vetorNumero = vetor1.map(stringToInt);

console.log(vetorNumero);

const vetorQuadradao = vetorNumero.map(x => x*x);

console.log(vetorQuadradao);

const vetor2 = [1,2,3,4,5,6];
const dobro = (item) => 2*item;
const vetorDobrado = vetor2.map(dobro);

console.log(vetorDobrado);

const vetor4 = ["a","b","c"];
const toUpper = (str) => str.toUpperCase();
const maisculas = vetor4.map(toUpper);

console.log(maisculas);
