//recebendo uma funcao como parametro

const subtrair = (a,b) => a-b;
const somar = (a,b) => a + b;

const aplicaOperacao =(a,b,operacao) => operacao(a,b);
let resultado1 = aplicaOperacao(4,2,subtrair);

console.log(resultado1);

let resultado2 = aplicaOperacao(10,20,somar);
console.log(resultado2);

//retornando funcoes

const somarX = (x) => (y) => x + y;

const somar1 = somarX(1);
const somar2 = somarX(2);
const somar3 = somarX(3);

console.log(somar1(7));
console.log(somar2(5));
console.log(somar3(4));
