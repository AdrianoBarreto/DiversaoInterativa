function openJogodavelha() {
    // Dimensões da nova janela
    const width = 500;
    const height = 500;

    // Cálculo para centralizar a janela
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 3) - (height / 3);

    // Abrir o Jogo da Velha em uma nova janela centralizada
    window.open('Jogodavelha.html', 'Jogo da Velha', `width=${width},height=${height},top=${top},left=${left}`);
}

function openJogoadivinhacao() {
    const width = 500;
    const height = 300;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 3) - (height / 3);
    window.open('Jogoadivinhacao.html', 'Jogo da Adivinhação', `width=${width},height=${height},top=${top},left=${left}`);
}

function openJogodamemoria() {
    const width = 480;
    const height = 650;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 3) - (height / 3);
    window.open('Jogodamemoria.html', 'Jogo da Memória', `width=${width},height=${height},top=${top},left=${left}`);
}

function openJogoWhackaMole() {
    const width = 490;
    const height = 650;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 3) - (height / 3);
    window.open('JogoWhackaMole.html', 'Jogo Whack-a-Mole', `width=${width},height=${height},top=${top},left=${left}`);
}

function openJogoQuebraCabeca() {
    const width = 500;
    const height = 500;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 3) - (height / 3);
    window.open('JogoQuebraCabeca.html', 'Jogo Quebra-cabeça', `width=${width},height=${height},top=${top},left=${left}`);
}