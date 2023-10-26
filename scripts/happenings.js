$(document).ready(function() {
    $('.trigger').click(function() {
      // Add the class .orange-bg to the parent of the clicked .trigger
      $(this).parent().toggleClass('orange-bg');
      
      // Remove the class .orange-bg from the parents of other .trigger elements
      $('.trigger').not(this).parent().removeClass('orange-bg');
      
      // Find the direct sibling .dropdown elements
      var dropdown = $(this).siblings('.dropdown');
      
      // Slide toggle all sibling .dropdown elements
      dropdown.slideToggle();
      
      // Slide up all non-sibling .dropdown elements
      $('.dropdown').not(dropdown).slideUp();
    });
  });


  $(document).ready(function() {
    var outer = $('.static__grid-outer');
    var inner = $('.static__grid-inner');
    
    function setInitialDimensions() {
        var outerRatio = outer.width() / outer.height();
        if (outerRatio > 1.5046296444) {
            inner.css({
                'width': '72.727272%',
                'max-width': 'none',
                'aspect-ratio': 'none',
                'height': 'auto'
            });
        } else {
            inner.css({
                'width': 'auto',
                'aspect-ratio': '1.5046296444',
                'height': '72.727272%'
            });
        }
    }

    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }

    inner.on('scroll', function() {
        // Calculate the pixel value for 50vh
        var halfViewportHeight = $(window).height() * 0.25;

        var scrollPercentage = Math.min(1, $(this).scrollTop() / halfViewportHeight);

        var currentWidth = (outer.width() / outer.height() > 1.5046296444) ? '72.727272%' : 'auto';
        var currentHeight = (outer.width() / outer.height() <= 1.5046296444) ? '72.727272%' : 'auto';

        var newWidth = currentWidth === 'auto' ? 'auto' : lerp(parseFloat(currentWidth), 100, scrollPercentage) + '%';
        var newHeight = currentHeight === 'auto' ? 'auto' : lerp(parseFloat(currentHeight), 100, scrollPercentage) + '%';

        $(this).css({
            'width': newWidth,
            'height': newHeight
        });
    });

    // Setting initial dimensions on page ready
    setInitialDimensions();
    
    $(window).resize(setInitialDimensions);
});
