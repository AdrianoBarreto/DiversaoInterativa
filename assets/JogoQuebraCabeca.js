document.addEventListener('DOMContentLoaded', function() {
    const containerQuebraCabeca = document.getElementById('quebra-cabeca-container');
    const botaoResolver = document.getElementById('resolver-botao');
    const contadorMovimentos = document.getElementById('contador-movimentos');
    const tamanhoGrid = 3;
    let movimentos = 0;

    alert('De um clique na peça que deseja mover!');

    const embaralharArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const gerarNumeros = () => {
        const numeros = Array.from({ length: tamanhoGrid * tamanhoGrid - 1 }, (_, i) => i + 1);
        numeros.push(null); // Aqui ajusa a c�lula vazia
        embaralharArray(numeros);
        return numeros;
    };

const criarQuebraCabeca = () => {
    containerQuebraCabeca.innerHTML = '';
    const numeros = gerarNumeros();

    for (let i = 0; i < tamanhoGrid * tamanhoGrid; i++) {
        const peca = document.createElement('div');
        peca.classList.add('peca');
        peca.textContent = numeros[i];

        peca.addEventListener('click', () => moverPeca(peca));

        containerQuebraCabeca.appendChild(peca);
    }
    containerQuebraCabeca.classList.remove('correto'); // Remover a classe 'correto'
};

const moverPeca = (pecaClicada) => {
    const pecaVazia = document.querySelector('.peca:empty'); // Corrigir a sele��o da pe�a vazia
    const indiceClicado = Array.from(containerQuebraCabeca.children).indexOf(pecaClicada);
    const indiceVazio = Array.from(containerQuebraCabeca.children).indexOf(pecaVazia);

    if (movimentoValido(indiceClicado, indiceVazio)) {
        trocarPecas(pecaClicada, pecaVazia);
        verificarVitoria();
        movimentos++;
        atualizarContadorMovimentos();
    }
};

const movimentoValido = (indiceClicado, indiceVazio) => {
    const indicesAdjacentes = obterIndicesAdjacentes(indiceVazio);
    return indicesAdjacentes.includes(indiceClicado);
};

const obterIndicesAdjacentes = (indice) => {
    const indices = [];
    const linha = Math.floor(indice / tamanhoGrid);
    const coluna = indice % tamanhoGrid;

    if (linha > 0) indices.push(indice - tamanhoGrid); // cima
    if (linha < tamanhoGrid - 1) indices.push(indice + tamanhoGrid); // baixo
    if (coluna > 0) indices.push(indice - 1); // esquerda
    if (coluna < tamanhoGrid - 1) indices.push(indice + 1); // direita

    return indices;
};

    const trocarPecas = (peca1, peca2) => {
        const tempTexto = peca1.textContent;
        peca1.textContent = peca2.textContent;
        peca2.textContent = tempTexto;
    };

    const verificarVitoria = () => {
        const pecas = Array.from(document.querySelectorAll('.peca'));
        const ordemCorreta = Array.from({ length: tamanhoGrid * tamanhoGrid - 1 }, (_, i) => i + 1);
        ordemCorreta.push(null);

        if (pecas.every((peca, indice) => peca.textContent == ordemCorreta[indice])) {
            containerQuebraCabeca.classList.add('correto');
            alert('Parab�ns! Voc� concluiu o Quebra-Cabe�a.');
        }
    };

    const resolverQuebraCabeca = () => {
        const pecas = Array.from(document.querySelectorAll('.peca'));
        const numeros = Array.from({ length: tamanhoGrid * tamanhoGrid - 1 }, (_, i) => i + 1);
        numeros.push(null);

        for (let i = 0; i < pecas.length; i++) {
            pecas[i].textContent = numeros[i];
        }

        containerQuebraCabeca.classList.remove('correto');
        movimentos = 0;
        atualizarContadorMovimentos();
    };

    const atualizarContadorMovimentos = () => {
        contadorMovimentos.textContent = `Movimentos: ${movimentos}`;
    };

    criarQuebraCabeca();

    botaoResolver.addEventListener('click', resolverQuebraCabeca);
});
