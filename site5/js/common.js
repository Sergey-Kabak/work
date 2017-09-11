$('document').ready(function(){
	$('.check1').click(function(){
				$(".check1").focusout(function(){
				var Value = $('.check1').val();
				if(Value == ""){
				$(".check1").css({"border" : "2px solid #c44741"});
				$(".check1").css({"background-color" : "#fff0f0"});
					}
				});
		if ($( '.check1' ).val() == "") {
				$(".display1").css({"display" : "inline-block"});
				$(".check1").css({"border" : "2px solid #c44741"});
				$(".check1").css({"background-color" : "#fff0f0"});
			}
		else{
			$(".display1").css({"display" : "none"});
			$(".check1").css({"border" : "2px solid #5199db"});
			$(".check1").css({"background-color" : "#fff"});
		}
	});
	$('.check1').keyup(function(){
		var Value = $('.check1').val();
		$('.display1').css({"display" : "none"});
		$(".check1").css({"border" : "2px solid #5199db"});
		$(".check1").css({"background-color" : "#fff"});
		if(Value == ""){
			$('.display1').css({"display" : "inline-block"});
			$(".check1").css({"border" : "2px solid #c44741"});
			$(".check1").css({"background-color" : "#fff0f0"});
			$(".check1").focusout(function(){
				var Value = $('.check1').val();
				if(Value == ""){
				$(".check1").css({"border" : "2px solid #c44741"});
				$(".check1").css({"background-color" : "#fff0f0"});
					}
				});
		}
		else{
			$(".check1").focusout(function(){
			if(Value != ""){
			$(".check1").css({"border" : "1px solid #d9d9d9"});
			$(".check1").css({"border-top" : "1px solid #a9a9a9"});
				}
			else{}
  	});
		}
	});


			////////////////////////
			/////////  2   //////////
			////////////////////////





	$('.check2').click(function(){
				$(".check2").focusout(function(){
				var Value = $('.check2').val();
				if(Value == ""){
				$(".check2").css({"border" : "2px solid #c44741"});
				$(".check2").css({"background-color" : "#fff0f0"});
					}
				});
		if ($( '.check2' ).val() == "") {
				$(".display2").css({"display" : "inline-block"});
				$(".check2").css({"border" : "2px solid #c44741"});
				$(".check2").css({"background-color" : "#fff0f0"});
			}
		else{
			$(".display2").css({"display" : "none"});
			$(".check2").css({"border" : "2px solid #5199db"});
			$(".check2").css({"background-color" : "#fff"});
		}
	});
	$('.check2').keyup(function(){
		var Value = $('.check2').val();
		$('.display2').css({"display" : "none"});
		$(".check2").css({"border" : "2px solid #5199db"});
		$(".check2").css({"background-color" : "#fff"});
		if(Value == ""){
			$('.display2').css({"display" : "inline-block"});
			$(".check2").css({"border" : "2px solid #c44741"});
			$(".check2").css({"background-color" : "#fff0f0"});
			$(".check2").focusout(function(){
				var Value = $('.check2').val();
				if(Value == ""){
				$(".check2").css({"border" : "2px solid #c44741"});
				$(".check2").css({"background-color" : "#fff0f0"});
					}
				});
		}
		else{
			$(".check2").focusout(function(){
			if(Value != ""){
			$(".check2").css({"border" : "1px solid #d9d9d9"});
			$(".check2").css({"border-top" : "1px solid #a9a9a9"});
				}
			else{}
  	});
		}
	});


			////////////////////////
			/////////  3   //////////
			////////////////////////




	$('.check3').click(function(){
				$(".check3").focusout(function(){
				var Value = $('.check3').val();
				if(Value == ""){
				$(".check3").css({"border" : "2px solid #c44741"});
				$(".check3").css({"background-color" : "#fff0f0"});
					}
				});
		if ($( '.check3' ).val() == "") {
				$(".display3").css({"display" : "inline-block"});
				$(".check3").css({"border" : "2px solid #c44741"});
				$(".check3").css({"background-color" : "#fff0f0"});
			}
		else{
			$(".display3").css({"display" : "none"});
			$(".check3").css({"border" : "2px solid #5199db"});
			$(".check3").css({"background-color" : "#fff"});
		}
	});
	$('.check3').keyup(function(){
		var Value = $('.check3').val();
		$('.display3').css({"display" : "none"});
		$(".check3").css({"border" : "2px solid #5199db"});
		$(".check3").css({"background-color" : "#fff"});
		if(Value == ""){
			$('.display3').css({"display" : "inline-block"});
			$(".check3").css({"border" : "2px solid #c44741"});
			$(".check3").css({"background-color" : "#fff0f0"});
			$(".check3").focusout(function(){
				var Value = $('.check3').val();
				if(Value == ""){
				$(".check3").css({"border" : "2px solid #c44741"});
				$(".check3").css({"background-color" : "#fff0f0"});
					}
				});
		}
		else{
			$(".check3").focusout(function(){
			if(Value != ""){
			$(".check3").css({"border" : "1px solid #d9d9d9"});
			$(".check3").css({"border-top" : "1px solid #a9a9a9"});
				}
			else{}
  	});
		}
	});

	});


$('document').ready(function(){
	if(window.matchMedia('(max-width : 1024px)').matches) {
		$('.main_contant').hide();
	$('.active_name').click(function(){
		$('.navigation').hide();
		$('.main_contant').css({"width" : "100%"})
		$('.main_contant').show();
	});
	$('.article__title a+a').click(function(){
			$('.main_contant').hide();
  		$('.navigation').show();
	});
	}
});