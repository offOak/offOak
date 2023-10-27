  $(document).ready(function () {
      $(".scroll-to-top").click(function () {
          $(".event__wrapper, .event__main, .event__side").animate({
              scrollTop: 0
          }, 1000);
      });
  });


  $(document).ready(function() {
    let animating = false; // Flag to indicate if animation is in progress

    // Handler for scroll event on .event__main
    $('.event__main').on('scroll', function() {
        if (animating) return; // Return if animation is in progress

        // Check if scrolled to the bottom
        if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            animating = true;
            $('.event__wrapper').animate({
                scrollTop: $('.event__wrapper')[0].scrollHeight
            }, 500, function() {
                animating = false; // Reset the flag after animation
            });
        }
    });

    // Helper function to detect upward scroll
    let lastScrollTop = 0;
    function checkScrollUp(element) {
        $(element).on('scroll', function() {
            if (animating) return; // Return if animation is in progress

            let st = $(this).scrollTop();
            if (st < lastScrollTop) {
                // Scrolled up
                animating = true;
                $('.event__wrapper').animate({
                    scrollTop: 0
                }, 500, function() {
                    animating = false; // Reset the flag after animation
                });
            }
            lastScrollTop = st;
        });
    }

    // Apply checkScrollUp on both .event__main and .event__side
    checkScrollUp('.event__main');
    checkScrollUp('.event__side');
});

