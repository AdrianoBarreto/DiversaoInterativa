const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;
let gameActive = true; // Adicionado para controlar o estado do jogo

function checkGuess() {
    if (!gameActive) {
        return; // Retorna se o jogo não estiver mais ativo
    }

    const guessInput = document.getElementById('guess');
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Insira um número válido entre 1 e 100.';
    } else {
        attempts++;
        if (guess === secretNumber) {
            messageElement.textContent = `Parabéns! Você adivinhou o número em ${attempts} tentativas.`;
            guessInput.disabled = true;
            document.getElementById('guess').disabled = true; // Desabilita o botão "Palpitar"
            endGame();
        } else if (guess < secretNumber) {
            messageElement.textContent = 'Tente um número maior.';
        } else {
            messageElement.textContent = 'Tente um número menor.';
        }

        if (attempts === maxAttempts) {
            messageElement.textContent = `Fim de jogo! O número secreto era ${secretNumber}.`;
            guessInput.disabled = true;
            document.getElementById('guess').disabled = true; // Desabilita o botão "Palpitar"
            endGame();
        }

        attemptsElement.textContent = `Tentativas: ${attempts}`;
    }
}

function endGame() {
    gameActive = false;
    // Restante do código, se houver
}
