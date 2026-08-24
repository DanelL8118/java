const prompt = require("prompt-sync")();

let idade, cont=0, media=0;

do {

    idade = Number(prompt('digite a idade do sujeito: (0 para sair): '));
        while (idade < 0) { idade = Number(prompt('entrada inválida! digite a idade do sujeito novamente: ')); }

    media += idade;
        if (idade != 0) { cont++; }

} while (idade != 0);

if (cont != 0) { media = media / cont; }

console.log('\n=====================================');
console.log('\nquantidade de membros do grupo:', cont, '\nmédia de idade do grupo:', media, '\n');
console.log('=====================================\n');