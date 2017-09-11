$(document).ready(function () {
  $('.popup').hide();
  $('.question_button').click(function () {
    $('.popup').show();
    $('.fa-times').click(function () {
      $('.popup').fadeOut();
    });
  });
  $('.section1_items').each(function () {
    $(this).mousemove(function () {
      $(".section1__inner_item", this).css({"background-color":"#fafafa"});
      $(".section1_p", this).css({"color":"#000"});
    });
    $(this).mouseout(function () {
      $(".section1__inner_item", this).css({"background-color":"#fff"});
      $(".section1_p", this).css({"color":"#4a4a4a"});
    });
  });
  $(".regular").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1085,
      settings: {
        slidesToShow: 2,
        centerMod: true
      }
    }, {
      breakpoint: 784,
      settings: {
        slidesToShow: 1,
        centerMod: true
      }
    }, {
      breakpoint: 300
    }]
  });
  $(window).resize(function () {
    if($(window).width()<=410){
      $('.search__top_header').hide();
      $('.fa-search').click(function () {
        $('.search__top_header').toggle();
      });
    } else {
      $('.search__top_header').show();
    }
  });
});
