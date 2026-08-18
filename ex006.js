const prompt = require('prompt-sync')();
var total=0;

console.log('\n======CÓDIGOS======\n  (1001)   (1324)\n  ( 987)   (6548)\n===================');

let codigo = Number(prompt('digite o código do produto: '));
let quant = Number(prompt('digite a quantidade comprada: '));

if (quant == 0) { console.log('\nquantiddade digitada inválida! tente novamente\n'); }

switch (codigo) {

    case 1001:
        total = quant*5.32;

    break;

    case 1324:
        total = quant*6.45;
    
    break;

    case 987:
        total = quant*3.42;

    break;

    case 6548:
        total = quant*2.37;

    break;

    default:
        console.log('\ncódigo digitado inexistente! tente novamente\n')
    
    break;
}

if (total != 0) {

    console.log('\n===================================');
    console.log('código do produto:', codigo, '\nquantidade:', quant, '\ntotal a pagar: R$', total);
    console.log('===================================\n');
}