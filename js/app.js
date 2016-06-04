
/*change color menú*/
$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 350) {
        $("#scroll").addClass("active");
    } else {
        $("#scroll").removeClass("active");
    }

});




 $(document).ready(function(){ 
      
      $(window).scroll(function(){
        if ($(this).scrollTop() > 2000) {
          $('.scrollup').fadeIn();
        } else {
          $('.scrollup').fadeOut();
        }
      }); 
      
      $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
      });
 
    });




//Code stolen from css-tricks for smooth scrolling:
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});











