// WOW active
new WOW().init();
$(document).ready(function(){
    $(".burger-tst").owlCarousel({
        items:1,
        nav:false,
        dots:false,
        autoplay:false,
        loop:true,
        autoplayTimeout:5000,
        margin:30,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false
    
            }
        }

    });
    $(window).on('scroll', function (){   
        var sticky = $('.nabvar'),
        scroll = $(window).scrollTop();
        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    
      });


    $(".header-bar").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").addClass(".active");  
      });
      
      
      $(".manu-close, .offcanvas-overylay").on("click", function(){
        $(".offcanvas-manu, .offcanvas-overylay").removeClass(".active");  
      });


// manu scrool





    
  });