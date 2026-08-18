const prompt = require('prompt-sync')();

console.log('\n');
let nome = String(prompt('digite seu nome: '));
console.log('\n');
let idade = Number(prompt('digite a sua idade: '));

console.log('\n===================================');

if (idade >= 18) { 

    console.log(nome, 'tem', idade, 'anos e é maior de idade');

}

else {

    console.log(nome, 'tem', idade, 'anos e é menor de idade');

}


console.log('===================================\n');