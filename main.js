/*----- constants -----*/
const cupcakes = [
    {ccId: 0, image: ""},
    {ccId: 1, image: "cupcakes/1.png"},
    {ccId: 2, image: "cupcakes/2.png"},
    {ccId: 3, image: "cupcakes/3.png"},
    {ccId: 4, image: "cupcakes/4.png"},
    {ccId: 5, image: "cupcakes/5.png"},
    {ccId: 6, image: "cupcakes/6.png"},
    {ccId: 7, image: "cupcakes/7.png"},
    {ccId: 8, image: "cupcakes/8.png"},
]



/*----- state variables -----*/
let board
let secretCode
let turn = 1
let winner
let plate1ThisTurn = document.getElementById(`guessBtn1`)
let plate2ThisTurn = document.getElementById(`guessBtn2`)
let plate3ThisTurn = document.getElementById(`guessBtn3`)
let plate4ThisTurn = document.getElementById(`guessBtn4`)
let plate5ThisTurn = document.getElementById(`guessBtn5`)
const guessBtns = [plate1ThisTurn, plate2ThisTurn, plate3ThisTurn, plate4ThisTurn, plate5ThisTurn]

/*----- cached elements  -----*/
const playAgainBtn = document.getElementById('playAgain')
const rulesButton = document.getElementById('rulesBtn')
const guessThisTurn = document.getElementById(`guessBtns`)
const submitBtn = document.getElementById(`submit`)


/*----- event listeners -----*/
playAgainBtn.addEventListener('click', playAgain)
rulesButton.addEventListener('click', rulePopOut)
guessThisTurn.addEventListener('click', nextGuess)
submitBtn.addEventListener('click', playerGuesses)

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
        [0, 0, 0, 0, 0], // guess 4
        [0, 0, 0, 0, 0], // guess 5
        [0, 0, 0, 0, 0], // guess 6

    ]
    turn = 1
    winner = null
    unhideGuess()
    chooseSecretCode()
}

function chooseSecretCode() {
    let randomCupcake = cupcakes[Math.floor(Math.random() * cupcakes.length)]
    let ranCupImg = randomCupcake.image
    board[0].forEach((_plate, colIdx) => {
        let randomCupcake = cupcakes[Math.floor(Math.random() * (cupcakes.length-1)+1)]
        board[0][colIdx] = randomCupcake.ccId
        
    })
}

function renderBoard() {
    board.forEach((_row, rowIdx) => {
        board[rowIdx].forEach((_plate, colIdx) => {
            if (rowIdx === 0) {
                return
            } else {
                let cupcake = board[rowIdx][colIdx]
                if (cupcake !== 0) {
                    document.getElementById(`g${rowIdx}p${colIdx}`).innerHTML = `<img src="${cupcakes[cupcake].image}">`
                }                
            }
        })    
    })   
    unhideGuess()
}

function nextGuess(evt) {
    if (evt.target === plate1ThisTurn) {
        if (board[turn][0] < 8) {
            board[turn][0] += 1
        } else {
            board[turn][0] = 1
        }        
    } else if (evt.target === plate2ThisTurn) {
        if (board[turn][1] < 8) {
            board[turn][1] += 1
        } else {
            board[turn][1] = 1
        } 
    } else if (evt.target === plate3ThisTurn) {
        if (board[turn][2] < 8) {
            board[turn][2] += 1
        } else {
            board[turn][2] = 1
        } 
    } else if (evt.target === plate4ThisTurn) {
        if (board[turn][3] < 8) {
            board[turn][3] += 1
        } else {
            board[turn][3] = 1
        } 
    } else if (evt.target === plate5ThisTurn) {
        if (board[turn][4] < 8) {
            board[turn][4] += 1
        } else {
            board[turn][4] = 1
        } 
    } 
    renderBoard()
}

function playerGuesses() {
    board[turn].forEach( (_guess, rowIdx) => {
        if (board[turn][rowIdx] === board[0][rowIdx]) {
            document.getElementById(`g${turn}p${rowIdx}`).classList.add("green")
            document.getElementById(`secretPlate${rowIdx+1}`).innerHTML = `<img src="${cupcakes[board[0][rowIdx]].image}">`
        } else if (board[0].includes(board[turn][rowIdx])) {
            document.getElementById(`g${turn}p${rowIdx}`).classList.add("yellow")
        } else {
            document.getElementById(`g${turn}p${rowIdx}`).classList.add("red")
        }
    });
    if (JSON.stringify(board[0]) === JSON.stringify(board[turn])) {
        gameEnds()
        winnerMessage()
    } else if (turn === 6) {
        gameEnds()
        loserMessage()
    } else {
        turn += 1
        renderBoard()
    }
}

function winnerMessage() {
    document.getElementById("winner").innerText = "Congrats! You guessed all of the cupcakes!"
}

function loserMessage() {
    document.getElementById("winner").innerText = "Shoot... you ran out of guesses. No cupcakes for you!"
}

function gameEnds() {
    submitBtn.setAttribute("class", "hidden")
    guessBtns.forEach((plate) => {
        plate.classList.add("hidden")
    })
    document.getElementById("winner").removeAttribute("class")
    playAgainBtn.removeAttribute("class")
}

function unhideGuess() {
    board[turn].forEach( (_plate, rowIdx) => {
        document.getElementById(`g${turn}p${rowIdx}`).removeAttribute("class")
    });
}

function rulePopOut() {
    if (document.querySelector("p").classList.contains("hidden")) {
        document.querySelector("p").removeAttribute("class")
    } else {
        document.querySelector("p").classList.add("hidden")
    }
}

function playAgain() {
    location.reload()
}