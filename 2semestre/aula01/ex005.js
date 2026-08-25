const prompt = require('prompt-sync')();

var i=0, total=0;

let preco = Number(prompt('digite o valor inicial do carro: '));

let opc1 = String(prompt('Deseja cor metálica? (S ou N) '));

if (opc1 == 'S' || opc1 == 's') {

    total = preco + 2200;
    i++;

}

let opc2 = String(prompt('Deseja carregamento por indução? (S ou N) '));

if (opc2 == 'S' || opc2 == 's') {

    total = total + 890;
    i++
    
}

let opc3 = String(prompt('Deseja estribo lateral? (S ou N) '));

if (opc3 == 'S' || opc3 == 's') {

    total = total + 2516.32;
    i++;

}

let opc4 = String(prompt('Deseja suporte para bicicleta? (S ou N) '));

if (opc4 == 'S' || opc4 == 's') {

    total = total + 3159.90;
    i++;

}

console.log('\n===================================');
console.log('Valor inicial do veículo:', preco, '\nQuantidade de opções escolhidas:', i, '\nValor final do veículo:', total);
console.log('===================================\n');