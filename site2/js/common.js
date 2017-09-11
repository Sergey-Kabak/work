$(document).on('ready', function() {
	$(".regular").slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.sub_menu').hide();
	$('.menu ul > li:nth-child(3)').focusin(function(){
		$('.sub_menu').toggle()
		$(this).focusout(function(){
			$('.sub_menu').hide();
		});
	});
	$('.media_menu__wrapper ul').hide();
	$('.sub_media_menu').hide();
	$('.button_container').mouseup(function(){
			if( $('.media_menu__wrapper ul').hide() ){
					$('.sub_media_menu').hide();
			}
			if($('.button_container').hasClass('active_media_button')){
				$(this).removeClass('active_media_button');
				$('.media_menu__wrapper ul').slideUp();
			}
			else{
				$(this).addClass('active_media_button');
				$('.media_menu__wrapper ul').slideDown();
			}
	});

	$('.media_menu__wrapper ul li:nth-child(3)').click(function(){
			$('.sub_media_menu').slideToggle();
	});
$('.media_menu').hide();



	var fixed = false;
		$(window).scroll(function(){
				if( $(this).scrollTop() >= 50 && $(window).width() > 1030) {
					$('nav').hide();
					if(!fixed){
						fixed = true;
						$('.media_menu').slideDown();
		        $('.media_menu').css({position:'fixed',top:0});
					}
				}else {
		        if( fixed ) {
		            fixed = false;
		            $('.media_menu').slideUp();
		            $('nav').slideDown();
		        }
		    }
		});
		$(window).resize(function(){
			if( $(window).width() <= 1030){
				$('nav').hide();
				$('.media_menu').show();
				$('.media_menu').css({"position":"fixed", "top":"0"});
			}
			else{
				$('nav').slideDown();
				$('.media_menu').slideUp();
			}
		});


		$('.slick-dots').appendTo('.slider_buttons__header');

		$(window).scroll(function(){
			if( $(this).scrollTop() >= 711 && $(this).scrollTop() <= 1903 ){
				$('.media_menu').css({"background":"rgba(0,0,0,0.8)"});
				$('.media_menu').css({"transition":"ease 0.5s"});
			}
			else if( $(this).scrollTop() >= 2108 && $(this).scrollTop() <= 3006 ){
				$('.media_menu').css({"background":"rgba(0,0,0,0.8)"});
			}
			else{
				$('.media_menu').css({"background":"rgba(255,255,255,0.9)"});
			}
		});

});