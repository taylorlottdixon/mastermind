/*----- constants -----*/
const cupcakes = [
    {ccId: "cupcake1", image: "cupcakes/1.png"},
    {ccId: "cupcake2", image: "cupcakes/2.png"},
    {ccId: "cupcake3", image: "cupcakes/3.png"},
    {ccId: "cupcake4", image: "cupcakes/4.png"},
    {ccId: "cupcake5", image: "cupcakes/5.png"},
    {ccId: "cupcake6", image: "cupcakes/6.png"},
    {ccId: "cupcake7", image: "cupcakes/7.png"},
    {ccId: "cupcake8", image: "cupcakes/8.png"},
]


const landingPlates = [codePlate1, codePlate2, codePlate3, codePlate4, codePlate5]

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


/*----- functions -----*/
initLanding()

function initLanding() {
    createLandingPage
}

function createLandingPage() {
    
    landingPlates.forEach( (plate) => {     
        let randomCupcake = cupcakes[Math.floor(Math.random() * cupcakes.length)].image
        let imgCupcake = document.createElement("img")
        imgCupcake.setAttribute('src', `${randomCupcake}`)
        imgCupcake.setAttribute('class', 'cupcake')
        document.getElementById(`${plate}`).appendChild(`${imgCupcake}`)
        console.log(plate)
    });
}

// To randomize cupcakes on the landing page, I'll need:
//     to setTimeout to change each cupcake at intervals (random intervals?  >>>>  Math.floor(Math.random() * 11) seconds
//     iterate through the different divs
//     iterate through the cupcakes array of objects to insert images
//        Math.floor(Math.random() * 10) <<<< Random number between 0-9 <<<< will need to ignore 8s and 9s

letsGoBtn.addEventListener('click', createGameBoard)
playAgainBtn.addEventListener('click', createGameBoard)
resetBtn.addEventListener('click', createGameBoard)

function createGameBoard() {
    // add row for guess
    // add options for guess
    // add button for submitting guess
    // add turns remaining display
    // add reset btn
    // add rules btn
    // create secret code
}

// Pop out window with rules breakdown when Rules link is clicked
rulesBtn.addEventListener('click', () => {

})