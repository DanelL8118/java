import promptSync from 'prompt-sync';
const prompt = promptSync();

import * as estoque from "./biblioteca/estoque.js"
let i = 0, produto = [], quantidade = [], confirm, opc, nome, resultado;

do {
    produto[i] = String(prompt("Digite o nome do produto: ")).toUpperCase()

    quantidade[i] = Number(prompt("Digite a quantidade do produto: "))
        while ( quantidade[i] < 0 ) {

           quantidade[i] = Number(prompt("Digite a quantidade do produto novamente: ")) 
        }

    confirm = Number(prompt("Deseja adicionar algo mais? (1) SIM (0) NÃO: "))
        while (confirm != 0 && confirm != 1) {

            confirm = Number(prompt("Digite uma opção válida! (1) SIM (0) NÃO: "))
        }
    
    if (confirm == 1) {
        i++;
    }
} while (confirm == 1);

do {
console.log('\n===MENU===\n[1] Buscar produtos\n[2] Consultar quantidade\n[3] Consultar menor quantidade em estoque\n[4] Consultar total de itens\n[0] Sair\n==========')
opc = Number(prompt('digite a opção que deseja: '))
    while (opc != 1 && opc != 2 && opc != 3 && opc != 4 && opc != 0) {

        console.log('\n===MENU===\n[1] Buscar produtos\n[2] Consultar quantidade\n[3] Consultar menor quantidade em estoque\n[4] Consultar total de itens\n[0] Sair\n==========')
        opc = Number(prompt('digite uma opção válida! : '))
    }

switch (opc) {

    case 1: 
        nome = String(prompt('digite o nome do produto: ')).toUpperCase()
        resultado = estoque.buscarProdutos(produto, nome);
        console.log('Posição do produto:', resultado);
    break;
    
    case 2: 
        nome = String(prompt('digite o nome do produto: ')).toUpperCase()
        resultado = estoque.consultarQuantidade(produto, quantidade, nome);
        console.log('Quantidade do produto:', resultado);
    break;
    
    case 3: 
        resultado = estoque.menorQuantidade(produto, quantidade);
        console.log('Menor estoque do produto:', resultado);
    break;

    case 4: 
        resultado = estoque.calcularTotal(quantidade);
        console.log('Total de estoque:', resultado);
    break;

}

} while (opc != 0)

console.log('saindo...')

===================================================================================

function buscarProdutos (vetor, nome) {

let posicao=0, ind=0;

    for (let posi=0; posi <= vetor.length; posi++) {

        if (vetor[posi] == nome) { posicao = posi; ind = 1; }

        if (ind != 1) { posicao = -1; }
    }

return posicao+1;
}

function menorQuantidade (vetor1, vetor2) {

let menor = 10000000, i, nome;

    for ( i = 0; i < vetor2.length; i++)

        if (vetor2[i] < menor) { 

            nome = vetor1[i];
            menor = vetor2[i];
        }

return nome;
}

function consultarQuantidade (produtos, quantidades, nome) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] == nome) {

            return quantidades[i];
        }
    }
}

function calcularTotal (quantidades) {
    
let total = 0;

    for( let i=0; i < quantidades.length; i++) {
        total += quantidades[i];
    }

return total;
}

export {

calcularTotal,
menorQuantidade,
consultarQuantidade,
buscarProdutos
};
