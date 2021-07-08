//funcao tradicional

function escreva() {
    console.log("Ola");
}

escreva();

function escreva2(texto) {
    console.log(texto);
}

escreva2("Opa eu aqui de novo");

//funcao anomima
const soma2 = function(a,b) {
    return a+b;
}

console.log("somar por funcao anonima "+soma2(10,20));

//funcao utilizando flecha
const soma3 = (a,b) => a+b;

console.log("somar por funcao flecha "+soma3(20,70));