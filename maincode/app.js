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


const firstCard = (event) =>{
$blueRun1 = $('#blue-runner').animate({left:'400px'}, 5000)
$(event.currentTarget).$blueRun1
}
$('#run-btn').on('click', firstCard)
