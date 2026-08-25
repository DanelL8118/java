const prompt = require('prompt-sync')();

let cpu1 = Number(prompt('digite a porcentagem de uso da CPU pela manhã(%): '));
let cpu2 = Number(prompt('digite a porcentagem de uso da CPU pela tarde(%): '));
let cpu3 = Number(prompt('digite a porcentagem de uso da CPU pela noite(%): '));

console.log('\n====================================================');
console.log('Média de uso da CPU durante o dia:', media = (cpu1+cpu2+cpu3)/3, '%');
console.log('====================================================\n');