



$(function(){
	
var bar = 0;
var time = setInterval(function(){
	bar += 1;
	$('.bar').css('width',bar+'%');
	if(bar>=100){
		clearInterval(time);
		$('.outLayer').addClass('complete');
		setTimeout(function(){
			$('.outLayer').css('opacity','0')
		},500);
		
		setTimeout(function(){
			$('.text').html('<h2>We are<br>ZHUYAO\'s<br>MONSTER!</h2><h3>Ahhhh,we will eat you</h3>')
		},3000);
		
	}
	
	
},30);
	
	
	
	
	
	
	
	
})