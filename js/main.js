// Acessa os elementos do DOM
const cells = document.querySelectorAll('.btn-square');
const statusMessage = document.getElementById('status-message');
const restartButton = document.getElementById('restart-button');

// Variáveis de estado do jogo
let gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

// Condições de vitória (todas as combinações possíveis)
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Função para exibir mensagens de status
const showStatusMessage = (message) => {
    statusMessage.textContent = message;
};

// Função para verificar se o jogo terminou
const handleCheckResult = () => {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        showStatusMessage(`O jogador ${currentPlayer} venceu!`);
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes('');
    if (roundDraw) {
        showStatusMessage('O jogo empatou!');
        gameActive = false;
        return;
    }

    // Se ninguém venceu, continua o jogo e alterna o jogador
    handlePlayerChange();
};

// Função para alternar o jogador
const handlePlayerChange = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    showStatusMessage(`É a vez do jogador ${currentPlayer}`);
};

// Função para lidar com o clique em uma célula
const handleCellClick = (e) => {
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return; // Sai da função se a célula já está preenchida ou o jogo terminou
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    
    handleCheckResult();
};

// Função para reiniciar o jogo
const handleRestartGame = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    showStatusMessage(`É a vez do jogador ${currentPlayer}`);
    cells.forEach(cell => {
        cell.textContent = '';
    });
};

// Adiciona os event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', handleRestartGame);

// Mensagem inicial do jogo
showStatusMessage(`É a vez do jogador ${currentPlayer}`);