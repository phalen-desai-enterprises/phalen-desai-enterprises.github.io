$(document).ready(function() {
	
	var d = new Date();
	var time = d.getHours();
	
	console.log(time);
	
	if (time >= 8) {
		$('h1').css('color', '#346AC7');
		$('h1').html('Yes');
	}
	else {
		$('h1').css('color', '#C73434');
		$('h1').html('No');
	}
})