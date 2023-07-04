/*----- constants -----*/
const cupcakes = [
    {ccId: "0", image: null},
    {ccId: "1", image: "cupcakes/1.png"},
    {ccId: "2", image: "cupcakes/2.png"},
    {ccId: "3", image: "cupcakes/3.png"},
    {ccId: "4", image: "cupcakes/4.png"},
    {ccId: "5", image: "cupcakes/5.png"},
    {ccId: "6", image: "cupcakes/6.png"},
    {ccId: "7", image: "cupcakes/7.png"},
    {ccId: "8", image: "cupcakes/8.png"},
]

/*----- state variables -----*/
let board
let secretCode
let turn
let winner


/*----- cached elements  -----*/
// const letsGoBtn = document.getElementById('letsGo')
// const playAgainBtn = document.getElementById('playAgain')
// const resetBtn = document.getElementById('reset')
// const rulesBtn = document.getElementsByClassName('rulesBtn')

/*----- event listeners -----*/
// letsGoBtn.addEventListener('click', createGameBoard)
// playAgainBtn.addEventListener('click', createGameBoard)
// resetBtn.addEventListener('click', createGameBoard)
// rulesBtn.addEventListener('click', rulePopOut)

/*----- functions -----*/
init()

function init() {
    createGameBoard()
}


function createGameBoard() {
    board = [
        [0, 0, 0, 0, 0], // secret code, guess 0
        [0, 0, 0, 0, 0], // guess 1
        [0, 0, 0, 0, 0], // guess 2
        [0, 0, 0, 0, 0], // guess 3
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ]
    turn = 1
    winner = null
    // show first guess line
    unhideGuess()
    // add options for guess
    // add button for submitting guess
    // add turns remaining display
    // add reset btn
    // add rules btn
    // create secret code
    chooseSecretCode()
}

function chooseSecretCode() {
    let randomCupcake = cupcakes[Math.floor(Math.random() * cupcakes.length)]
    let ranCupImg = randomCupcake.image
    board[0].forEach((_plate, colIdx) => {
        let randomCupcake = cupcakes[Math.floor(Math.random() * (cupcakes.length-1)+1)]
        board[0][colIdx] = randomCupcake.ccId
        document.getElementById(`secretPlate${colIdx+1}`).innerHTML = `<img src="${randomCupcake.image}" class="hidden">`
    })
}

function renderBoard() {
    
    // show row for next guess
    
    // add options for guess
    // add button for submitting guess
    // add turns remaining display
    // add reset btn
    // add rules btn
    // create secret code
}

function playerGuesses() {
    // score last guess
    board[turn].forEach( (guess, rowIdx) => {
        if (board[turn][rowIdx] === board[0][rowIdx]) {
            document.getElementById(`g${turn}p${rowIdx}`).classList.add("green")
        } else if (board[0].includes(board[turn][rowIdx])) {
            document.getElementById(`g${turn}p${rowIdx}`).classList.add("yellow")
        } else {
            document.getElementById(`g${turn}p${rowIdx}`).classList.add("red")
        }
    });
}

function unhideGuess() {
    board[turn].forEach( (_plate, rowIdx) => {
        document.getElementById(`g${turn}p${rowIdx}`).removeAttribute("class")
    });
}
// // Pop out window with rules breakdown when Rules link is clicked

// function rulePopOut() {
//     const dialog = document.querySelector("dialog")
//     dialog.showModal()
// }