const prompt = require('prompt-sync')();


function calcularPrecoComDesconto (a, b) {

    return a - (a * b/100);

} 

/*function calcularPrecoComDesconto (a, b) {

   console.log('o produto que valia', preco, 'passou a valer:', a * (1.00 - b/100));

} */

let preco, desconto; 

preco = Number(prompt('digite o valor do produto: R$ '));
    while (preco <= 0) { preco = Number(prompt('digite o valor do produto novamente: R$ ')); }

desconto = Number(prompt('digite o desconto do produto: '));
    while (desconto <= 0) { desconto = Number(prompt('digite o desconto do produto novamente: ')); }

console.log('o produto que valia R$', preco, 'passou a valer: R$', calcularPrecoComDesconto(preco, desconto));

//calcularPrecoComDesconto(preco, desconto);