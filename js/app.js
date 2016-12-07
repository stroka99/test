$(document).ready(function(){
	
	"use strict";
		
	$(document).foundation();

	$('.is-notify').on('click', function() {
		$(this).removeClass('is-notify');
		$(this).children('.notify-bubble').remove();
	});
	
	$('.eclipsed').on('click', function() {
		 $(this).addClass('show');
		 $('#header').addClass('back');
	});
	
	$('.eclipse-body').on('click', function() {
		$(this).removeClass('show');
		$('#header').removeClass('back');
	});
	
	
});