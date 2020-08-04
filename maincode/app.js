    //Grabbing Elements
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    //Event Handlers
    const openModal = (event) => {
      $modal.css('display', 'block');
    }
    const closeModal = (event) => {
      $modal.css('display', 'none');
    }
    //Event Listeners
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);

///////////////////////////////////////////////////////

// building cards that will randomly generate a function that determines the player move.

// These functions determine the amount of pixels our blue-runner will move across the screen. These will all be possibilities for the runner
const cardOneMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'20px'}, 1000)
}
const cardOneMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'40px'}, 1000)
}
const cardOneMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'60px'}, 1000)
}
const cardOneMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'80px'}, 1000)
}
const cardOneMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'100px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let run = [cardOneMoveOne, cardOneMoveTwo, cardOneMoveThree, cardOneMoveFour, cardOneMoveFive];
const getMovesOne =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button').on('click', getMovesOne(run))
// $('#run-button').on('click', () => getMoves(run))


////////////////////////////////////////////////////////

//functions to be the possibilities for card two.
const cardTwoMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'120px'}, 1000)
    }
const cardTwoMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'140px'}, 1000)
    }
const cardTwoMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'160px'}, 1000)
    }
const cardTwoMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'180px'}, 1000)
    }
const cardTwoMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'200px'}, 1000)
    }
    
    //random generator for card two. Player will get one of these functions ran on the click.
let runTwo = [cardTwoMoveOne, cardTwoMoveTwo, cardTwoMoveThree, cardTwoMoveFour, cardTwoMoveFive];

const getMovesTwo =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-2').on('click', getMovesTwo(runTwo))
    // $('#run-button').on('click', () => getMoves(run))

/////////////////////////////////////////////////////////

const cardThreeMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'220px'}, 1000)
    }
const cardThreeMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'240px'}, 1000)
    }
const cardThreeMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'260px'}, 1000)
    }
const cardThreeMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'280px'}, 1000)
    }
const cardThreeMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'300px'}, 1000)
    }
    
    //random generator for card two. Player will get one of these functions ran on the click.
let runThree = [cardThreeMoveOne, cardThreeMoveTwo, cardThreeMoveThree, cardThreeMoveFour, cardThreeMoveFive];

const getMovesThree =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-3').on('click', getMovesThree(runThree))
    // $('#run-button').on('click', () => getMoves(run))

//////////////////////////////////////////////////////////////////

const cardFourMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'320px'}, 1000)
    }
const cardFourMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'340px'}, 1000)
    }
const cardFourMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'360px'}, 1000)
    }
const cardFourMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'380px'}, 1000)
    }
const cardFourMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'400px'}, 1000)
    }
    
    //random generator for card two. Player will get one of these functions ran on the click.
let runFour = [cardFourMoveOne, cardFourMoveTwo, cardFourMoveThree, cardFourMoveFour, cardFourMoveFive];

const getMovesFour =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-4').on('click', getMovesFour(runFour))
    // $('#run-button').on('click', () => getMoves(run))

/////////////////////////////////////////////////////////////////

const cardFiveMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'420px'}, 1000)
    }
const cardFiveMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'440px'}, 1000)
    }
const cardFiveMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'460px'}, 1000)
    }
const cardFiveMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'480px'}, 1000)
    }
const cardFiveMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'500px'}, 1000)
    }
    
    //random generator for card two. Player will get one of these functions ran on the click.
let runFive = [cardFiveMoveOne, cardFiveMoveTwo, cardFiveMoveThree, cardFiveMoveFour, cardFiveMoveFive];

const getMovesFive =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-5').on('click', getMovesFive(runFive))
    // $('#run-button').on('click', () => getMoves(run))

/////////////////////////////////////////////////////////////////


const cardSixMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'520px'}, 1000)
    }
const cardSixMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'540px'}, 1000)
    }
const cardSixMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'560px'}, 1000)
    }
const cardSixMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'580px'}, 1000)
    }
const cardSixMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'600px'}, 1000)
    }
    
    //random generator for card two. Player will get one of these functions ran on the click.
let runSix = [cardSixMoveOne, cardSixMoveTwo, cardSixMoveThree, cardSixMoveFour, cardSixMoveFive];

const getMovesSix =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-6').on('click', getMovesSix(runSix))
    // $('#run-button').on('click', () => getMoves(run))

////////////////////////////////////////////////////RED-RUNNER///////////////////////////////////

const redCardOneMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'20px'}, 1000)
}
const redCardOneMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'40px'}, 1000)
}
const redCardOneMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'60px'}, 1000)
}
const redCardOneMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'80px'}, 1000)
}
const redCardOneMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'100px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let redRun = [redCardOneMoveOne, redCardOneMoveTwo, redCardOneMoveThree, redCardOneMoveFour, redCardOneMoveFive];
const getRedMovesOne =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button').on('click', getRedMovesOne(redRun))

//////////////////////////////////////////////////////////////////////

const redCardTwoMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'120px'}, 1000)
}
const redCardTwoMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'140px'}, 1000)
}
const redCardTwoMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'160px'}, 1000)
}
const redCardTwoMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'180px'}, 1000)
}
const redCardTwoMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'200px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let redRunTwo = [redCardTwoMoveOne, redCardTwoMoveTwo, redCardTwoMoveThree, redCardTwoMoveFour, redCardTwoMoveFive];
const getRedMovesTwo =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-2').on('click', getRedMovesTwo(redRunTwo))

////////////////////////////////////////////////////////////////////

const redCardThreeMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'220px'}, 1000)
}
const redCardThreeMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'240px'}, 1000)
}
const redCardThreeMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'260px'}, 1000)
}
const redCardThreeMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'280px'}, 1000)
}
const redCardThreeMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'300px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let redRunThree = [redCardThreeMoveOne, redCardThreeMoveTwo, redCardThreeMoveThree, redCardThreeMoveFour, redCardThreeMoveFive];
const getRedMovesThree =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-3').on('click', getRedMovesThree(redRunThree))

/////////////////////////////////////////////////////////////////////////

const redCardFourMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'320px'}, 1000)
}
const redCardFourMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'340px'}, 1000)
}
const redCardFourMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'360px'}, 1000)
}
const redCardFourMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'380px'}, 1000)
}
const redCardFourMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'400px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let redRunFour = [redCardFourMoveOne, redCardFourMoveTwo, redCardFourMoveThree, redCardFourMoveFour, redCardFourMoveFive];
const getRedMovesFour =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-4').on('click', getRedMovesFour(redRunFour))

//////////////////////////////////////////////////////////////////////////////

const redCardFiveMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'420px'}, 1000)
}
const redCardFiveMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'440px'}, 1000)
}
const redCardFiveMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'460px'}, 1000)
}
const redCardFiveMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'480px'}, 1000)
}
const redCardFiveMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'500px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let redRunFive = [redCardFiveMoveOne, redCardFiveMoveTwo, redCardFiveMoveThree, redCardFiveMoveFour, redCardFiveMoveFive];
const getRedMovesFive =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-5').on('click', getRedMovesFive(redRunFive))

////////////////////////////////////////////////////////////////////////////

const redCardSixMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'520px'}, 1000)
}
const redCardSixMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'540px'}, 1000)
}
const redCardSixMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'560px'}, 1000)
}
const redCardSixMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'580px'}, 1000)
}
const redCardSixMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'600px'}, 1000)
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let redRunSix = [redCardSixMoveOne, redCardSixMoveTwo, redCardSixMoveThree, redCardSixMoveFour, redCardSixMoveFive];
const getRedMovesSix =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-6').on('click', getRedMovesSix(redRunSix))










   // let newPos;
    // let temp;
    // for(let i = run.length -1; i > 0; i--){
    //     newPos = Math.floor(Math.random() * (i + 1))
    //     temp = arr[i];
    //     arr[i] = arr[newPos]
    //     arr[newPos] = temp

// return arr;
// $(event.currentTarget).run[temp]

// getMoves(run)