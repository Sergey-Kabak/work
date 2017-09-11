$('body').append('<a href="http://google.com">Go to google</a>');
$('document').ready(function(){
	$('div').remove();

	var variable_name;
	variable_name = $('p').clone();
	$('body').append(variable_name);

	var p1,p2;
	p1=5.55;
	p2=p1;
	alert(Math.sqrt(p1*p2));
});

$('document').ready(function(){
	$('button').on('click',function(){
		var value1, value2, value3, value4;
		value1 = $('#val1').val();
		value2 = $('#val2').val();

		value1 = parseInt(value1)*parseInt(value1);
		value2 = parseInt(value2)*parseInt(value2);

		value3 = value1 + value2;
		value4 = Math.sqrt(value3);
		alert(Math.round(value4));
		//alert("Значение 1:" +value1+'\n'+'Значение 2:' +value2);

	});
}); 

$('document').ready(function(){
	$('input').on('keyup',function(){
		var value1, value2, value3;
		value1 = $('#val1').val();
		value2 = $('#val2').val();

		value1 = parseInt(value1);
		value2 = parseInt(value2);

		value3 = value1 + value2;

		$('.result').html(value3);

	});
}); 

$('document').ready(function(){
	
	var test1;

	test1 = prompt('Введите ваше имя:','');
	$('.result').html(test1);

}); 

$('document').ready(function(){
	
	var test1;

	//test1 = confirm('Удалить?');
	var a1 = 555;

	if(a1>555){
		alert('MORE THAN 555!');
	}
	else{
		alert('NOT OK!');
	}
	
});