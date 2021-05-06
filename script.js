const gameCells = [];

const player = (number, won) => {
    
    return { number, won    };
};

const playerOne = player(1, 'no');
const playerTwo = player(2, 'no');
playerCurrent = playerOne;

(function () {
    body = document.querySelector('body')
    let gameBoard = document.createElement('div');
    gameBoard.setAttribute('class', 'board')
    for (let i = 0; i < 9; i++) {
        gameCells[i] = document.createElement('div')
        gameCells[i].setAttribute('class', 'cell');
        gameCells[i].setAttribute('id', i)
        gameBoard.appendChild(gameCells[i]);
    }
    body.appendChild(gameBoard)
    game();
})();

function game() {
    gameCells.forEach(gameCell => {
        gameCell.addEventListener('click', (e) => {
            if (!e.target.textContent) {
                if (playerCurrent.number === 1) {
                    e.target.textContent = 'X';
                } else if (playerCurrent.number === 2) {
                    e.target.textContent = 'O';
                }
                if (playerCurrent.won === 'yes') {
                    alert(`player ${playerCurrent.number} won!`);
                } else if (playerCurrent.number === 1) {
                    playerCurrent = playerTwo
                } else if (playerCurrent === playerTwo) {
                    playerCurrent = playerOne;
                }
            }
        })
    }
    )
}

