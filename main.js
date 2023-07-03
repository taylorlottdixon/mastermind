/*----- constants -----*/
const cupcakes = [
    {ccId: "empty", image: null},
    {ccId: "cupcake1", image: "cupcakes/1.png"},
    {ccId: "cupcake2", image: "cupcakes/2.png"},
    {ccId: "cupcake3", image: "cupcakes/3.png"},
    {ccId: "cupcake4", image: "cupcakes/4.png"},
    {ccId: "cupcake5", image: "cupcakes/5.png"},
    {ccId: "cupcake6", image: "cupcakes/6.png"},
    {ccId: "cupcake7", image: "cupcakes/7.png"},
    {ccId: "cupcake8", image: "cupcakes/8.png"},
]

/*----- state variables -----*/
let board
let secretCode
let turn
let winner

/*----- cached elements  -----*/
const letsGoBtn = document.getElementById('letsGo')
const playAgainBtn = document.getElementById('playAgain')
const resetBtn = document.getElementById('reset')
const rulesBtn = document.getElementById('rules')

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

// To randomize cupcakes on the landing page, I'll need:
//     to setTimeout to change each cupcake at intervals (random intervals?  >>>>  Math.floor(Math.random() * 11) seconds
//     iterate through the different divs
//     iterate through the cupcakes array of objects to insert images
//        Math.floor(Math.random() * 10) <<<< Random number between 0-9 <<<< will need to ignore 8s and 9s



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

function rulePopOut() {

}

function unhideGuess() {
    board[turn].forEach( (_plate, rowIdx) => {
        document.getElementById(`g${turn}p${rowIdx}`).removeAttribute("class")
        console.log(`g${turn}p${rowIdx}`)
    });
    console.log(turn)
    
}