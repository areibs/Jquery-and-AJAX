
///when a cell in the grid is clicked, an X or O should appear, depending on whose turn it is
///make a heading saying whose turn it is and changes with each move made, and if the game is still active
///make button clear the grid and restart the game , refresh the page , location.reload()

//bootstrap alert declaring the winner
///create variables for X and O, variables when the game is active(boolean), something to determine what the win conditions are

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector('#restartBtn');
const gameWinner = document.querySelector("#gameWinner");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = true;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartBtn.addEventListener('click', restartGame);
    statusText.textContent = `${currentPlayer}'s turn`

}
function cellClicked(){
    const cellIndex = this.getAttribute('cellIndex');

    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();

}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;

}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`

}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        
        if(cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }
    
    if(roundWon){
        gameWinner.textContent = `${currentPlayer} wins!`
        running = false;
    }
    else if(!options.includes("")){
        gameWinner.textContent = `It's a Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    gameWinner.textContent = '';
    cells.forEach(cell => cell.textContent = "");
    running = true;

}
