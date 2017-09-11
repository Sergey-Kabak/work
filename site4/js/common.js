$(document).ready(function() {
	$(window).scroll(function(){
		var st =$(this).scrollTop();
		$(".header_contant").css({
			"transform" : "translate3d(0px, " + st  + "%, .01px)",
			"-webkit-transform" : "translate3d(0px, " + st /2  + "%, .01px)"
		});
	});
	$(".header_title h1").animated("fadeInRight");
	$(".header_title p").animated("fadeInRight");
	$(".img_select").animated("lightSpeedIn");
	$(".akkordeon p").animated("lightSpeedIn");



		$('.tab_content').hide();
		$('.tab_content:first').show();
		$('.img_select:first').addClass('active_tab');

	$('.img_select').click(function(event){
		$('.img_select').removeClass('active_tab');
		$(this).addClass('active_tab');
		$('.tab_content').hide();

		var selectTab = $(this).find('a').attr("name");
		$(selectTab).fadeIn();
	});


  $(".owl-carousel").owlCarousel();


	$('.second_tab_content').hide();
		$('.second_tab_content:first').show();
		$('.second_img_select:first').addClass('active_tab');

	$('.second_img_select').click(function(event){
		$('.second_img_select').removeClass('active_tab');
		$(this).addClass('active_tab');
		$('.second_tab_content').hide();

		var selectTab = $(this).find('a').attr("name");
		$(selectTab).fadeIn();
	});

	

	$('ul.akkordeon li > p').removeClass('active');
			$('ul.akkordeon li > p').next('div').slideToggle();	//раскрываем/скрываем следующий за "кликнутым" p блок div с эффектом slide
			$('ul.akkordeon li > p').click(function(){	//при клике на пункт меню:

				$(this).toggleClass('active');		//делаем данный пункт активным/неактивным
				$(this).next('div').slideToggle(200);	//раскрываем/скрываем следующий за "кликнутым" p блок div с эффектом slide
			});
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
