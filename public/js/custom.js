$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

//BACKGROUND SLIDEROTATION
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg-1.jpg",
			"images/bg-2.jpg",
			"images/bg-3.jpg",
			"images/bg-4.jpg"
		], 	{duration: 3100, fade: 1250});
		});
});