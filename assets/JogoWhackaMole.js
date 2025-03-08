  document.addEventListener('DOMContentLoaded', () => {
            const scoreDisplay = document.getElementById('score');
            const timerDisplay = document.getElementById('timer');
            const gameBoard = document.getElementById('game-board');
            const startButton = document.getElementById('start-button');
            const gridSize = 6; // Ajustado para 6x6
            let score = 0;
            let timeLeft = 30;
            let moleTimer;
            let countdownTimer;

            // Criar tabuleiro do jogo
            for (let i = 0; i < gridSize * gridSize; i++) {
                const hole = document.createElement('div');
                hole.classList.add('hole');
                hole.addEventListener('click', () => handleHoleClick(hole));
                gameBoard.appendChild(hole);
            }

            const handleHoleClick = (hole) => {
                if (!timeLeft) return;
                if (hole.classList.contains('mole')) {
                    score += 10;
                    hole.classList.remove('mole');
                } else {
                    score -= 5;
                }
                updateScore();
            };

            const updateScore = () => {
                scoreDisplay.textContent = `Placar: ${score}`;
            };

            const updateTimer = () => {
                timerDisplay.textContent = `Tempo: ${timeLeft}`;
            };

            const randomHole = () => {
                const holes = document.querySelectorAll('.hole');
                holes.forEach(hole => hole.classList.remove('mole'));
                const randomIndex = Math.floor(Math.random() * holes.length);
                holes[randomIndex].classList.add('mole');
            };

            const startGame = () => {
                score = 0;
                timeLeft = 30;
                updateScore();
                updateTimer();
                startButton.disabled = true;
                gameBoard.classList.remove('finished');

                moleTimer = setInterval(randomHole, 800);
                countdownTimer = setInterval(() => {
                    timeLeft--;
                    updateTimer();
                    if (timeLeft === 0) {
                        clearInterval(moleTimer);
                        clearInterval(countdownTimer);
                        gameBoard.classList.add('finished');
                        startButton.disabled = false;
                    }
                }, 1000);
            };

            startButton.addEventListener('click', startGame);
        });
