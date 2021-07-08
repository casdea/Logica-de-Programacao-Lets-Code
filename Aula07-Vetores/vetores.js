let vetor = [1,2,3,4,5,6,7,8,9,10];

vetor = [];
vetor[0] = 'teste';
vetor[1] = "teste";

console.log(vetor);

vetor['indice1'] = "1111";
vetor['indice2'] = '12sdasd';

console.log(vetor);

vetor = [1,2,3,4,false,'ccc'];

let primeiro = vetor[0];
let segundo = vetor[1];

console.log(primeiro);
console.log(segundo);

vetor = [1,2,3,4,5,6,7,8,9,10];

for (let index = 0; index < vetor.length; index++) {
    console.log(vetor[index]);    
}

vetor = [10,20,30,50];

//adicionar
let novo_elemento=60;
vetor.push(novo_elemento);

//remover do final
vetor = [10,20,30,50];
vetor.pop;

//adicionar no começo
vetor.unshift(novo_elemento);

vetor.shift();

//forof valor

vetor = [10,20,30,40,50];
for(let valor of vetor){
    console.log(valor);
}

//forin indice

vetor = [10,20,30,40,50];

for(let indice in vetor){
    console.log(indice, vetor[indice]);
}