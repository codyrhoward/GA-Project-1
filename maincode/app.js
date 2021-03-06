   
let redPlayerPos;
let bluePlayerPos;
const $results = document.querySelector("#results-text");
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


const checkWin =()=>{
    if(redPlayerPos > bluePlayerPos) {
        $('#results-text').html('Red Runner Wins!').css('color', 'rgb(196, 55, 37)')
    }else if(bluePlayerPos > redPlayerPos){
        $('#results-text').html('Blue Runner Wins!').css('color', 'rgb(83, 171, 224)')
    }else{
        $('#results-text').html('Its a Tie! - Race Again!').css('color', 'gray')
    }
}


const cardOneMoveOne = (event) =>{
  $('#blue-runner').animate({left:'220px'}, 1000)
  $("#run-button-1").text('move 1 stride').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
}
const cardOneMoveTwo = (event) =>{
   $('#blue-runner').animate({left:'240px'}, 1000)
   $("#run-button-1").text('move 2 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
}
const cardOneMoveThree = (event) =>{
   $('#blue-runner').animate({left:'260px'}, 1000)
   $("#run-button-1").text('move 3 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
}
const cardOneMoveFour = (event) =>{
   $('#blue-runner').animate({left:'280px'}, 1000)
   $("#run-button-1").text('move 4 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
}
const cardOneMoveFive = (event) =>{
   $('#blue-runner').animate({left:'300px'}, 1000)
   $("#run-button-1").text('move 5 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
}

// this is the random generator to determine which function is ran on the click for the blue-runner.
let run = [cardOneMoveOne, cardOneMoveTwo, cardOneMoveThree, cardOneMoveFour, cardOneMoveFive];
const getMovesOne =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-1').on('click', getMovesOne(run))
// $('#run-button').on('click', () => getMoves(run))


////////////////////////////////////////////////////////

//functions to be the possibilities for card two.
const cardTwoMoveOne = (event) =>{
    $('#blue-runner').animate({left:'320px'}, 1000)
    $("#run-button-2").text('move 1 stride').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardTwoMoveTwo = (event) =>{
    $('#blue-runner').animate({left:'340px'}, 1000)
    $("#run-button-2").text('move 2 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardTwoMoveThree = (event) =>{
    $('#blue-runner').animate({left:'360px'}, 1000)
    $("#run-button-2").text('move 3 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardTwoMoveFour = (event) =>{
    $('#blue-runner').animate({left:'380px'}, 1000)
    $("#run-button-2").text('move 4 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardTwoMoveFive = (event) =>{
    $('#blue-runner').animate({left:'400px'}, 1000)
    $("#run-button-2").text('move 5 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
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
    $blueRun1 = $('#blue-runner').animate({left:'420px'}, 1000)
    $cardOne = $("#run-button-3").text('move 1 stride').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardThreeMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'440px'}, 1000)
    $cardOne = $("#run-button-3").text('move 2 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardThreeMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'460px'}, 1000)
    $cardOne = $("#run-button-3").text('move 3 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardThreeMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'480px'}, 1000)
    $cardOne = $("#run-button-3").text('move 4 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardThreeMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'500px'}, 1000)
    $cardOne = $("#run-button-3").text('move 5 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
    
    //random generator for card three. Player will get one of these functions ran on the click.
let runThree = [cardThreeMoveOne, cardThreeMoveTwo, cardThreeMoveThree, cardThreeMoveFour, cardThreeMoveFive];

const getMovesThree =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-3').on('click', getMovesThree(runThree))
    // $('#run-button').on('click', () => getMoves(run))

//////////////////////////////////////////////////////////////////

const cardFourMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'520px'}, 1000)
    $cardOne = $("#run-button-4").text('move 1 stride').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFourMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'540px'}, 1000)
    $cardOne = $("#run-button-4").text('move 2 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFourMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'560px'}, 1000)
    $cardOne = $("#run-button-4").text('move 3 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFourMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'580px'}, 1000)
    $cardOne = $("#run-button-4").text('move 4 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFourMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'600px'}, 1000)
    $cardOne = $("#run-button-4").text('move 5 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
    
    //random generator for card four. Player will get one of these functions ran on the click.
let runFour = [cardFourMoveOne, cardFourMoveTwo, cardFourMoveThree, cardFourMoveFour, cardFourMoveFive];

const getMovesFour =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-4').on('click', getMovesFour(runFour))
    // $('#run-button').on('click', () => getMoves(run))

/////////////////////////////////////////////////////////////////

const cardFiveMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'620px'}, 1000)
    $cardOne = $("#run-button-5").text('move 1 stride').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFiveMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'640px'}, 1000)
    $cardOne = $("#run-button-5").text('move 2 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFiveMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'660px'}, 1000)
    $cardOne = $("#run-button-5").text('move 3 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFiveMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'680px'}, 1000)
    $cardOne = $("#run-button-5").text('move 4 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
const cardFiveMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'700px'}, 1000)
    $cardOne = $("#run-button-5").text('move 5 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    }
    
    //random generator for card five. Player will get one of these functions ran on the click.
let runFive = [cardFiveMoveOne, cardFiveMoveTwo, cardFiveMoveThree, cardFiveMoveFour, cardFiveMoveFive];

const getMovesFive =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-5').on('click', getMovesFive(runFive))
    // $('#run-button').on('click', () => getMoves(run))

/////////////////////////////////////////////////////////////////


const cardSixMoveOne = (event) =>{
    $blueRun1 = $('#blue-runner').animate({left:'720px'}, 1000)
    $cardOne = $("#run-button-6").text('move 1 stride').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    bluePlayerPos = 720
    // checkWin()
}
const cardSixMoveTwo = (event) =>{
    $blueRun2 = $('#blue-runner').animate({left:'740px'}, 1000)
    $cardOne = $("#run-button-6").text('move 2 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    bluePlayerPos = 740
    // checkWin()
}
const cardSixMoveThree = (event) =>{
    $blueRun3 = $('#blue-runner').animate({left:'760px'}, 1000)
    $cardOne = $("#run-button-6").text('move 3 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    bluePlayerPos = 760
    // checkWin()
}
const cardSixMoveFour = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'780px'}, 1000)
    $cardOne = $("#run-button-6").text('move 4 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    bluePlayerPos = 780
    // checkWin()
}
const cardSixMoveFive = (event) =>{
    $blueRun4 = $('#blue-runner').animate({left:'800px'}, 1000)
    $cardOne = $("#run-button-6").text('move 5 strides').css('background', 'rgb(83, 171, 224)').css('color', 'ghostwhite');
    bluePlayerPos = 800
    // checkWin()
}
    

let runSix = [cardSixMoveOne, cardSixMoveTwo, cardSixMoveThree, cardSixMoveFour, cardSixMoveFive];

const getMovesSix =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#run-button-6').on('click', getMovesSix(runSix))
    // $('#run-button').on('click', () => getMoves(run))

////////////////////////////////////////////////////RED-RUNNER///////////////////////////////////

const redCardOneMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'220px'}, 1000)
    $cardOne = $("#red-run-button-1").text('move 1 stride').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardOneMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'240px'}, 1000)
    $cardOne = $("#red-run-button-1").text('move 2 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardOneMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'260px'}, 1000)
    $cardOne = $("#red-run-button-1").text('move 3 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardOneMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'280px'}, 1000)
    $cardOne = $("#red-run-button-1").text('move 4 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardOneMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'300px'}, 1000)
    $cardOne = $("#red-run-button-1").text('move 5 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}

// this is the random generator to determine which function is ran on the click for the red-runner.
let redRun = [redCardOneMoveOne, redCardOneMoveTwo, redCardOneMoveThree, redCardOneMoveFour, redCardOneMoveFive];
const getRedMovesOne =(arr)=> {
    console.log('test')
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-1').on('click', getRedMovesOne(redRun))

//////////////////////////////////////////////////////////////////////

const redCardTwoMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'320px'}, 1000)
    $cardOne = $("#red-run-button-2").text('move 1 stride').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardTwoMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'340px'}, 1000)
    $cardOne = $("#red-run-button-2").text('move 2 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardTwoMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'360px'}, 1000)
    $cardOne = $("#red-run-button-2").text('move 3 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardTwoMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'380px'}, 1000)
    $cardOne = $("#red-run-button-2").text('move 4 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardTwoMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'400px'}, 1000)
    $cardOne = $("#red-run-button-2").text('move 5 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}

// this is the random generator to determine which function is ran on the click for the red-runner.
let redRunTwo = [redCardTwoMoveOne, redCardTwoMoveTwo, redCardTwoMoveThree, redCardTwoMoveFour, redCardTwoMoveFive];
const getRedMovesTwo =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-2').on('click', getRedMovesTwo(redRunTwo))

////////////////////////////////////////////////////////////////////

const redCardThreeMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'420px'}, 1000)
    $cardOne = $("#red-run-button-3").text('move 1 stride').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardThreeMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'440px'}, 1000)
    $cardOne = $("#red-run-button-3").text('move 2 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardThreeMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'460px'}, 1000)
    $cardOne = $("#red-run-button-3").text('move 3 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardThreeMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'480px'}, 1000)
    $cardOne = $("#red-run-button-3").text('move 4 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardThreeMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'500px'}, 1000)
    $cardOne = $("#red-run-button-3").text('move 5 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}

// this is the random generator to determine which function is ran on the click for the red-runner.
let redRunThree = [redCardThreeMoveOne, redCardThreeMoveTwo, redCardThreeMoveThree, redCardThreeMoveFour, redCardThreeMoveFive];
const getRedMovesThree =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-3').on('click', getRedMovesThree(redRunThree))

/////////////////////////////////////////////////////////////////////////

const redCardFourMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'520px'}, 1000)
    $cardOne = $("#red-run-button-4").text('move 1 stride').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFourMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'540px'}, 1000)
    $cardOne = $("#red-run-button-4").text('move 2 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFourMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'560px'}, 1000)
    $cardOne = $("#red-run-button-4").text('move 3 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFourMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'580px'}, 1000)
    $cardOne = $("#red-run-button-4").text('move 4 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFourMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'600px'}, 1000)
    $cardOne = $("#red-run-button-4").text('move 5 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}

// this is the random generator to determine which function is ran on the click for the red-runner.
let redRunFour = [redCardFourMoveOne, redCardFourMoveTwo, redCardFourMoveThree, redCardFourMoveFour, redCardFourMoveFive];
const getRedMovesFour =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-4').on('click', getRedMovesFour(redRunFour))

//////////////////////////////////////////////////////////////////////////////

const redCardFiveMoveOne = (event) =>{
    $redRun1 = $('#red-runner').animate({left:'620px'}, 1000)
    $cardOne = $("#red-run-button-5").text('move 1 stride').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFiveMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'640px'}, 1000)
    $cardOne = $("#red-run-button-5").text('move 2 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFiveMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'660px'}, 1000)
    $cardOne = $("#red-run-button-5").text('move 3 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFiveMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'680px'}, 1000)
    $cardOne = $("#red-run-button-5").text('move 4 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}
const redCardFiveMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'700px'}, 1000)
    $cardOne = $("#red-run-button-5").text('move 5 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
}

// this is the random generator to determine which function is ran on the click for the red-runner.
let redRunFive = [redCardFiveMoveOne, redCardFiveMoveTwo, redCardFiveMoveThree, redCardFiveMoveFour, redCardFiveMoveFive];
const getRedMovesFive =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}
$('#red-run-button-5').on('click', getRedMovesFive(redRunFive))

////////////////////////////////////////////////////////////////////////////

const redCardSixMoveOne = (event) =>{
    $('#red-runner').animate({left:'720px'}, 1000)
    $("#red-run-button-6").text('move 1 stride').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
    redPlayerPos = 720
    setTimeout(checkWin(), 3000);
}
const redCardSixMoveTwo = (event) =>{
    $redRun2 = $('#red-runner').animate({left:'740px'}, 1000)
    $cardOne = $("#red-run-button-6").text('move 2 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
    redPlayerPos = 740
    setTimeout(checkWin(), 3000);
}
const redCardSixMoveThree = (event) =>{
    $redRun3 = $('#red-runner').animate({left:'760px'}, 1000)
    $cardOne = $("#red-run-button-6").text('move 3 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
    redPlayerPos = 760
    setTimeout(checkWin(), 3000);
}
const redCardSixMoveFour = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'780px'}, 1000)
    $cardOne = $("#red-run-button-6").text('move 4 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
    redPlayerPos = 780
    setTimeout(checkWin(), 3000);
}
const redCardSixMoveFive = (event) =>{
    $redRun4 = $('#red-runner').animate({left:'800px'}, 1000)
    $cardOne = $("#red-run-button-6").text('move 5 strides').css('background', 'rgb(196, 55, 37)').css('color', 'ghostwhite');
    redPlayerPos = 800
     setTimeout(checkWin(), 3000);
}

// this is the random generator to determine which function is ran on the click for the red-runner.
let redRunSix = [redCardSixMoveOne, redCardSixMoveTwo, redCardSixMoveThree, redCardSixMoveFour, redCardSixMoveFive];
const getRedMovesSix =(arr)=> {
    return arr[Math.floor(Math.random() * arr.length)]
}

$('#red-run-button-6').on('click', getRedMovesSix(redRunSix));

// $('#red-run-button-6').on('click', (()=>{
//     getRedMovesSix(redRunSix)
//     checkWin()
// })());



// const nextRace = () =>{
//     $('#level-one').css('background', 'purple')
//     event.preventDefault()
// }
// $('#next-race').on('click', nextRace)

// const $redRunner = $('#red-runner')


