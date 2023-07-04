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
// const rulesBtn = document.getElementById('rules')

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

    unhideGuess()
    chooseSecretCode()
    /////// ADD LATER -- want cupcakes to randomly change on landing page plates
    // landingPlates.forEach( (plate) => {     
    //     let randomCupcake = cupcakes[Math.floor(Math.random() * cupcakes.length)].image
    //     let imgCupcake = document.createElement("img")
    //     imgCupcake.setAttribute('src', `${randomCupcake}`)
    //     imgCupcake.setAttribute('class', 'cupcake')
    //     document.getElementById(`${plate}`).appendChild(`${imgCupcake}`)
    //     console.log(plate)
    // });
}

function chooseSecretCode() {
    let randomCupcake = cupcakes[Math.floor(Math.random() * cupcakes.length)]
    let ranCupImg = randomCupcake.image
    console.log(randomCupcake)
    console.log(ranCupImg)
    console.log(randomCupcake.ccId)
    board[turn].forEach((_plate, colIdx) => {
        let randomCupcake = cupcakes[Math.floor(Math.random() * (cupcakes.length-1)+1)]
        board[turn][colIdx] = randomCupcake.ccId
        document.getElementById(`g${turn}p${colIdx}`).innerHTML = `<img src="${randomCupcake.image}">`
    })
}

function renderBoard() {
    // show row for guess
    
    // add options for guess
    // add button for submitting guess
    // add turns remaining display
    // add reset btn
    // add rules btn
    // create secret code
}

// // Pop out window with rules breakdown when Rules link is clicked

function unhideGuess() {
    board[turn].forEach( (_plate, rowIdx) => {
        document.getElementById(`g${turn}p${rowIdx}`).removeAttribute("class")
    });
}