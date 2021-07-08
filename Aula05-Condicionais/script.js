let estaSol = false;

if (estaSol) {
    console.log("Vou para praia");
}
else {
   console.log("nao vou para a praia");
}

let numero = 10;

if (numero>=0) {
    console.log("numero positivo");
}
else {
   console.log("numero negativo");
}

x = 13;

let paridade = x % 2 === 0 ? 'par' : 'impar';

console.log(paridade);

let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}

console.log(dia);