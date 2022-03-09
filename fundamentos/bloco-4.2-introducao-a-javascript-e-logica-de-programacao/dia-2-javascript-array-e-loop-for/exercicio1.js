var sequencia = [];
let maior = 0;
let menor = 0;
let soma = 0;
let media = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
    
    


}


menor = Math.min.apply(Math, numbers);
maior = Math.max.apply(Math, numbers);
media = soma / numbers.length;
if (media > 20) {
    console.log('valor maior que 20  sobre a media aritmetica');
    if (media <= 20)
        console.log("valor menor ou igual a 20")



}



for(var index=1; index <= 25; index++){
    sequencia.push(index);
}






console.log("criação sequencia de 1 a 25 :"+ sequencia);
console.log("o menor valor do array he " + menor);
console.log("o maior valor do array he " + maior);
console.log("a soma de todos os vares do array " + soma);
console.log("a media dos valores do array " + media);
