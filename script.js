
let gameCells = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]
const player = (name, number) => {
    let won = 'no'
    let tie = 'no'
    let cellsPlayed = [];
    return { name, number, won, tie, cellsPlayed };
};
const playerOne = player('uno', 1);
const playerTwo = player('dos', 2);
playerCurrent = playerOne;

const board = (function () {
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
                    playerOne.cellsPlayed.push(Number(gameCell.id));
                    gameCells[gameCell.id] = 'X';
                } else if (playerCurrent.number === 2) {
                    e.target.textContent = 'O';
                    playerTwo.cellsPlayed.push(Number(gameCell.id));
                    gameCells[gameCell.id] = 'O';
                }
                checkWin();
                if (playerCurrent.won === 'no') {
                    switchTurns();
                }
            }
        })

    })
}

function switchTurns() {
    if (playerCurrent.number === 1) {
        playerCurrent = playerTwo;
    } else if (playerCurrent === playerTwo) {
        playerCurrent = playerOne;
    }
}

function checkWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let winCondition = winningCombinations[i];
        let a = gameCells[winCondition[0]];
        let b = gameCells[winCondition[1]];
        let c = gameCells[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            playerCurrent.won = 'yes';
            isWin(playerCurrent);
            break
        }
    }
    if (playerOne.cellsPlayed.length === 5 && playerTwo.cellsPlayed.length === 4) {
        isTie();
    }
}


function isWin(player) {
    alert(`${player.name} wins!`)
    removeBoard();

}

function removeBoard() {
    cells = document.querySelectorAll('.cell')
    cells.forEach(cell => cell.innerHTML = '')
    playerOne.cellsPlayed.length = 0;
    playerTwo.cellsPlayed.length = 0;
    gameCells = ['', '', '', '', '', '', '', '', ''];
    playerOne.won = 'no';
    playerTwo.won = 'no';

}

function isTie() {
    alert('is tie!')
    removeBoard();

}

