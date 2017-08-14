$(document).ready(function(){

  //BURGERMNUE

  $('.navbar-burger').click(function(){
    var th = $(this);
    $(th).toggleClass('is-active');
    $(th.attr('data-target')).toggleClass('is-active');
  });

  //Slider
  $('.valores-slider').slick({arrows:false, focusOnSelect: true,asNavFor: '.valores-slider-menu',});
  $('.valores-slider-menu').slick({
    asNavFor: '.valores-slider',
    slidesToShow: 6,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows:true,
          slidesToShow:1
        }
      }
    ]
  });



    //Slider Maps
    $('.maps').slick({arrows:false, focusOnSelect: true,asNavFor: '.maps-menu',});
    $('.maps-menu').slick({
      asNavFor: '.maps',
      slidesToShow: 2,
      focusOnSelect: true
    });


  //Galería
  $("[data-fancybox]").fancybox();

});
