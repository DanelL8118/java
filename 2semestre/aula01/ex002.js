const prompt = require('prompt-sync')();

let conta = Number(prompt('digite o número da conta: '));

    let c = Math.trunc(conta / 100);
    let d = Math.trunc(conta % 100);
    let e = Math.trunc(d / 10);
    let u = Math.trunc(d % 10);

    let invertido = u*100 + e*10 + c;
    let soma = conta + invertido

    let centena = Math.trunc(soma / 100);
    let dez = Math.trunc(soma % 100);
    let dezena = Math.trunc(dez / 10);
    let unidade = Math.trunc(dez % 10);

    let digito = Math.trunc((centena*1 + dezena*2 + unidade*3) % 10);

console.log('\n====================================================')
console.log('conta com digito verificador:', conta,'-',digito);
console.log('====================================================\n')