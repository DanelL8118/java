import promptSync from 'prompt-sync';
const prompt = promptSync();

/*
try {

var resultado = numero + 10

} catch (erro) {

console.log(erro.message)
console.log(erro.name)
} */



/*
try {

var lista = [];

lista.push(1);

console.log(lista)

} catch (error) {

console.log(error.name);
console.log(error.message);

} */

/*
try {

let numero = Number(prompt("digite um número: "));

if (isNaN(numero)) { throw new Error('valor inválido')}

console.log(`Número válido: ${numero}`);

} catch (error) {

console.log(`erro: ${error.message}`);

} finally {

console.log(`número verificado!`)

} */

class ErroDeValidação extends Error {

    constructor (mensagem) {

            super(mensagem);
            this.name = "ErroDeValidação";

    }
}

function calcularAreaTriangulo (base, altura) {
 
    if (base <= 0 || altura <= 0) { throw new ErroDeValidação('Valores menores que zero!'); }

    else if (isNaN(base) || isNaN(altura)) { throw new Error('Valores diferente de números!'); }

    return base * altura / 2;
}

try {

let base, altura, area;

base = Number(prompt(`digite um valor para a base: `));
altura = Number(prompt(`digite um valor para a altura: `));

area = calcularAreaTriangulo(base, altura)

console.log(`Área: ${area}`);

} catch (error) {

    if (error instanceof ErroDeValidação) { console.log(`Erro de validação: ${error.message}`); }

    else { console.log(`Erro inesperado: ${error.message}`); }

}