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

/*----- state variables -----*/
let board
let secretCode

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function initLanding() {
    createLandingPage()
}

function createLandingPage() {
    let cupcakeLanding = () => {

    }
}


// To randomize cupcakes on the landing page, I'll need:
//     to setTimeout to change each cupcake at intervals (random intervals?  >>>>  Math.floor(Math.random() * 11) seconds
//     iterate through the different divs
//     iterate through the cupcakes array of objects to insert images
//        Math.floor(Math.random() * 10) <<<< Random number between 0-9 <<<< will need to ignore 8s and 9s