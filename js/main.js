$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $('.home-image path');
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var modal = $('.modal');
  var modalCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');
  var currentFlats = 1;
  var flatsPath = $('.modal-image path');
  //var flatLink = $('.flat-link');
  var flat;
  var previousFlat = $(`.flat${currentFlats}`);
  var flatLink = $('.flat-link');
  let numberFlats = document.querySelectorAll('.number-flat');
  
  floorPath.on('mouseover', function() {
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
    floorPath.removeClass('current-floor');
    //console.log(currentFloor);
  });
  
  flatsPath.on('mouseover', function() {
    currentFlats = $(this).attr('data-flats');
    previousFlat.removeClass('underline');
    flat = $(`.flat${currentFlats}`);
    flat.toggleClass('underline');
    previousFlat = flat;
  });

  flatsPath.on('mouseout', function() {
    flat.toggleClass('underline');
  });

  flatLink.on('mouseover', function() {
    currentFlats = $(this).attr('data-flat');
    flatsPath.removeClass('visible');
    $(`[data-flats=${currentFlats}]`).toggleClass('visible');
  });

  flatLink.on('mouseout', function() {
    flatsPath.removeClass('visible');
  });

  function setNumberFlat() {
    for (let i = 0; i < numberFlats.length; i++) {
      numberFlats[i].innerHTML = `${String(+currentFloor) + i}`
    }
  }

  floorPath.on('click', function() {
    toggleModal();
    setNumberFlat();
  });
  
  modalCloseButton.on('click', toggleModal);

  viewFlatsButton.on('click', function() {
    toggleModal();
    setNumberFlat();
  });

  counterUp.on('click', function() {
    if (currentFloor >= 18) {
      currentFloor = 1;
    }
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  })
  counterDown.on('click', function() {
    if (currentFloor <= 2) {
      currentFloor = 19;
    }
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
  });

  function toggleModal() {
    modal.toggleClass('is-open');
    /*for (let i = 0; i < numberFlats.length; i++) {
      numberFlats[i].innerHTML = `${String(+currentFloor) + i}`
    }*/
  }
});