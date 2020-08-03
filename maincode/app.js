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

// building card that will randomly generate a function that determines the player move.


const moveOne = (event) =>{
$blueRun1 = $('#blue-runner').animate({left:'300px'}, 4000)
// $(event.currentTarget).$blueRun1
}
// $('#run-btn').on('click', moveOne)

const moveTwo = (event) =>{
$blueRun2 = $('#blue-runner').animate({left:'600px'}, 3000)
// $(event.currentTarget).$blueRun2
}
// $('#run-btn').on('click', moveTwo)

const moveThree = (event) =>{
$blueRun3 = $('#blue-runner').animate({left:'50px'}, 3000)
// $(event.currentTarget).$blueRun3
}
// $('#run-btn').on('click', moveThree)

let run = [moveOne, moveTwo, moveThree];
const getMoves =(arr)=> {
    let newPos;
    let temp;
    for(let i = run.length -1; i > 0; i--){
        newPos = Math.floor(Math.random() * (i + 1))
        temp = arr[i];
        arr[i] = arr[newPos]
        arr[newPos] = temp
    }
    return arr;
    $(event.currentTarget).run[temp]
}
let movesOrder = getMoves(run)
console.log(movesOrder)

$('#run-btn').on('click', run[0])
