$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $('.home-image path')
  var counterUp = $('.counter-up');
  var counterDown = $('.counter-down');
  var modal = $('.modal');
  var modalCloseButton = $('.modal-close-button');
  var viewFlatsButton = $('.view-flats');
  var currentFlats = 1;
  
  floorPath.on('mouseover', function() {
    currentFloor = $(this).attr('data-floor');
    $('.counter').text(currentFloor);
    floorPath.removeClass('current-floor');
  });
  
  /*flatsPath.on('mouseover', function() {
    currentFlats = $(this).attr('data-flats');
  });*/

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);

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
  }
});