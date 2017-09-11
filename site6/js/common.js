$(window).ready(function(){

	$('.toggle-menu__nav').hide();
	$('.second__inner-menu_wrap').hide();
	$('.inner__nav li:first-child').click(function(){
		$('.toggle-menu__nav').toggle();
		$('.inner-menu__nav li:nth-child(4)').click(function(){
			$('.second__inner-menu_wrap').toggle();
		});
		if( $('.toggle-menu__nav').end() ){
			$('.second__inner-menu_wrap').hide();
		}
	});

	$('.right_button__slider').hover(function(){
		$(this).css({"background-color": "#fff"});
		$('.right_button__slider i').css({"color": "#cb944c"});
		$(this).mouseleave(function(){
			$('.right_button__slider').css({"background-color": "#cb944c"});
			$('.right_button__slider i').css({"color": "#fff"});
		});
	});

	$('.left_button__slider').hover(function(){
		$(this).css({"background-color": "#fff"});
		$('.left_button__slider i').css({"color": "#cb944c"});
		$(this).mouseleave(function(){
			$('.left_button__slider').css({"background-color": "#cb944c"});
			$('.left_button__slider i').css({"color": "#fff"});
		});
	});
	$( window ).resize(function(){
		if( $( window ).width() < 848 ){
			$('.login__nav').appendTo( $('.phone__header') );
		}
		else{
			$('.login__nav').appendTo( $('.inner__nav') );
		}
	});
	$('.mobile__menu_item:first-child').css('background', '#3eade2');
	$('.mobile__menu_item:first-child').css({"height" : "40px"});
	$('.mobile__menu_item').click(function(){
		$('.mobile__menu_item').css('background', 'inherit');
		$('.mobile__menu_item').css('height', 'inherit');
		$(this).css({"background" : "#3eade2"});
		$(this).css({"height" : "40px"});
	});
});