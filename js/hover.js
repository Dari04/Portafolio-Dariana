$( document ).ready( function() {
  
  function cssTransitionFallback() {
    // Queue : false means both animations occur simultaneously 
    $( 'letters' ).hover(
      function() {
        
        $( 'letters1' ).animate({
          opacity: 1
        }, { duration: 200, queue: false });
        
        $('img').animate({
          'left': '-5px',
          'max-width': '520px'
        }, { duration: 200, queue: false });
      }, 
      function() {

       $('letters1').animate({
          opacity: 0
        }, { duration: 200, queue: false });
        
        $('img').animate({
          'left': '-20px',
          'max-width': '600px'
        }, { duration: 200, queue: false });
    });
  }
  
  // Only call the function if there's no transition support
  if( !Modernizr.csstransitions ) {
    cssTransitionFallback();
  } 
  
});