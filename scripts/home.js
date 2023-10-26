if(!('ontouchstart' in document.documentElement)) {
  // Cursor device detected - run functions that require a cursor
//SCRIBBLE
$('.home__inner').hover(function() {
  // Change the background of the hovered element to "../assets/backgrounds/scribble.svg" and set the background size to "cover"
  $(this).css({
    'background': 'url("./assets/backgrounds/scribble.svg")',
    'background-size': 'cover'
  });

  // Make all other .home__inner elements have 50% opacity
  $('.home__inner').not(this).css('opacity', '0.25');
}, function() {
  // Change the background of the hovered element to nothing on hover out
  $(this).css('background', 'none');

  // Make all .home__inner elements have full opacity on hover out
  $('.home__inner').css('opacity', '1');
});


//BACKGROUNDS
//Contact
$('.home__outer .c-link').hover(function() {
  // Get the width of the home__outer element
  var outerWidth = $('.home__outer').width();

  // Get the position of the c-link element relative to the home__outer element
  var linkPosition = $(this).position();

  // Calculate whether the c-link element is on the right half of the home__outer element
  var isRightHalf = linkPosition.left > (outerWidth / 2);

  // If the c-link element is on the right half of the home__outer element, flip the c-bg element horizontally
  if (isRightHalf) {
    $('#c-bg').css('transform', 'scaleX(-1)');
  } else {
    $('#c-bg').css('transform', 'scaleX(1)');
  }

  // Display the c-bg element
  $('#c-bg').fadeIn(333);
}, function() {
  // Hide the c-bg element when the mouse is no longer hovering over the c-link element
  $('#c-bg').fadeOut(333);
});


//Happenings
$('.home__outer .h-link').hover(function() {
  // Get the width of the home__outer element
  var outerWidth = $('.home__outer').width();

  // Get the position of the h-link element relative to the home__outer element
  var linkPosition = $(this).position();

  // Calculate whether the h-link element is on the right half of the home__outer element
  var isRightHalf = linkPosition.left > (outerWidth / 2);

  // If the h-link element is on the right half of the home__outer element, flip the h-bg element horizontally
  if (isRightHalf) {
    $('#h-bg').css('transform', 'scaleX(-1)');
  } else {
    $('#h-bg').css('transform', 'scaleX(1)');
  }

  // Display the h-bg element
  $('#h-bg').fadeIn(333);
}, function() {
  // Hide the h-bg element when the mouse is no longer hovering over the h-link element
  $('#h-bg').fadeOut(333);
});


//Manifesto
$('.home__outer .m-link').hover(function() {
  // Get the width of the home__outer element
  var outerWidth = $('.home__outer').width();

  // Get the position of the m-link element relative to the home__outer element
  var linkPosition = $(this).position();

  // Calculate whether the m-link element is on the right half of the home__outer element
  var isRightHalf = linkPosition.left > (outerWidth / 2);

  // If the m-link element is on the right half of the home__outer element, flip the m-bg element horizontally
  if (isRightHalf) {
    $('#m-bg').css('transform', 'scaleX(-1)');
  } else {
    $('#m-bg').css('transform', 'scaleX(1)');
  }

  // Display the m-bg element
  $('#m-bg').fadeIn(333);
}, function() {
  // Hide the m-bg element when the mouse is no longer hovering over the m-link element
  $('#m-bg').fadeOut(333);
});


//People
$('.home__outer .p-link').hover(function() {
// Get the width of the home__outer element
var outerWidth = $('.home__outer').width();

// Get the position of the p-link element relative to the home__outer element
var linkPosition = $(this).position();

// Calculate whether the p-link element is on the right half of the home__outer element
var isRightHalf = linkPosition.left > (outerWidth / 2);

// If the p-link element is on the right half of the home__outer element, flip the p-bg element horizontally
if (isRightHalf) {
  $('#p-bg').css('transform', 'scaleX(-1)');
} else {
  $('#p-bg').css('transform', 'scaleX(1)');
}

// Display the p-bg element
$('#p-bg').fadeIn(333);
}, function() {
// Hide the p-bg element when the mouse is no longer hovering over the p-link element
$('#p-bg').fadeOut(333);
});


//Sounds
$('.home__outer .s-link').hover(function() {
// Get the width of the home__outer element
var outerWidth = $('.home__outer').width();

// Get the position of the s-link element relative to the home__outer element
var linkPosition = $(this).position();

// Calculate whether the s-link element is on the right half of the home__outer element
var isRightHalf = linkPosition.left > (outerWidth / 2);

// If the s-link element is on the right half of the home__outer element, flip the s-bg element horizontally
if (isRightHalf) {
  $('#s-bg').css('transform', 'scaleX(-1)');
} else {
  $('#s-bg').css('transform', 'scaleX(1)');
}

// Display the s-bg element
$('#s-bg').fadeIn(333);
}, function() {
// Hide the s-bg element when the mouse is no longer hovering over the s-link element
$('#s-bg').fadeOut(333);
});
}



// $(window).on('pageshow', function(event) {
//   if (event.originalEvent.persisted) {
//     window.location.reload();
//   }
// });
