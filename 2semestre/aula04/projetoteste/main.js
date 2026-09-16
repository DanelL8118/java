import promptSync from 'prompt-sync';
const prompt = promptSync();

//import { somar, subtrair, multiplicar, dividir } from "./matematica.js";
import * as matematica from "./matematica.js";

let opc, n1, n2;

console.log('\n===MENU===\n(1) somar\n(2) subtrair\n(3) multiplicar\n(4) dividir\n==========');
opc = Number(prompt('digite a opção que deseja: '));

while (opc != 1 && opc != 2 && opc != 3 && opc != 4) { opc = Number(prompt('digite a opção que deseja novamente: ')); }

n1 = Number(prompt('\ndigite o primeiro número: '));
n2 = Number(prompt('\ndigite o segundo número: '));

if (opc == 1) { console.log(`\n${n1} + ${n2} =`, matematica.somar(n1, n2)); }

if (opc == 2) { console.log(`\n${n1} - ${n2} =`, matematica.subtrair(n1, n2)); }

if (opc == 3) { console.log(`\n${n1} * ${n2} =`, matematica.multiplicar(n1, n2)); }

if (opc == 4) { console.log(`\n${n1} / ${n2} =`, matematica.dividir(n1, n2)); }