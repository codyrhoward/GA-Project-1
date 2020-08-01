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


