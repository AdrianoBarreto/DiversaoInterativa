let currentPlayer = 'O';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
    if (gameActive && !board[index]) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].textContent = currentPlayer;

        if (checkWinner()) {
            document.getElementById('status').textContent = `Quadrantes de ${currentPlayer} ganharam!`;
            highlightWinner();
            endGame();
        } else if (checkTie()) {
            document.getElementById('status').textContent = 'Empate!';
            endGame();
        } else {
            currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
            document.getElementById('status').textContent = `Jogador atual: ${currentPlayer}`;
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function checkTie() {
    return board.every(cell => cell !== '');
}

function highlightWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]             // Diagonais
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('board').children[a].classList.add('green');
            document.getElementById('board').children[b].classList.add('green');
            document.getElementById('board').children[c].classList.add('green');
            break;
        }
    }
}

function restartGame() {
    currentPlayer = 'O';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('status').textContent = `Jogador atual: ${currentPlayer}`;

    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
        cell.classList.remove('green', 'red');
    }

    document.getElementById('restartBtn').style.display = 'none';
}

function endGame() {
    gameActive = false;
    document.getElementById('restartBtn').style.display = 'block';
}
