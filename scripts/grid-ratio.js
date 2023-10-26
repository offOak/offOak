
$(window).ready(function() {
    var outer = $('.static__grid-outer');
    var inner = $('.static__grid-inner');
  
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
  });
  


$(window).resize(function() {
    var outer = $('.static__grid-outer');
    var inner = $('.static__grid-inner');
  
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
  });
  