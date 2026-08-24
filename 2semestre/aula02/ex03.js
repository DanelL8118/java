const prompt = require("prompt-sync")();

let tabuada=0, inicio=0, fim=0;

tabuada = Number(prompt('digite a tabuada que deseja: '));
    while (tabuada <= 0) { tabuada = Number(prompt('digite a tabuada que deseja novamente: ')); }

inicio = Number(prompt('digite o inicio da tabuada: '));
    while (inicio < 0) { inicio = Number(prompt('digite o inicio da tabuada novamente: ')); }

fim = Number(prompt('digite o fim da tabuada: '));
    while (fim < inicio) { fim = Number(prompt('digite o fim da tabuada novamente: ')); }

console.log('\n=====================================\n');

for ( let i = inicio; i<=fim; i++) {

    console.log(tabuada, 'x', i, '=', tabuada*i);

}

console.log('\n=====================================\n');