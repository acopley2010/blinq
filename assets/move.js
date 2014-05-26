// JavaScript Document
$(document).ready(function(){
	$("#downArrow").click(function (){
         $('html, body').animate({
      	scrollTop: $("#second").offset().top
       	}, 1000 );
		$('.downArrow').fadeOut( 300 , function(){
		$('#downArrow1').fadeIn(300);
		});
	});
	$("#downArrow1").click(function (){
         $('html, body').animate({
      	scrollTop: $("#third").offset().top
       	}, 1000 );
			$('.downArrow').fadeOut( 300 , function(){
		$('#downArrow2').fadeIn(300);
		});
	});
		$("#downArrow2").click(function (){
         $('html, body').animate({
      	scrollTop: $("#fourth").offset().top
       	}, 1000 );
		$('.downArrow').fadeOut( 300 , function(){
		$('#downArrow3').fadeIn(300);
		});
	});
		$("#downArrow3").click(function (){
         $('html, body').animate({
      	scrollTop: $("#fifth").offset().top
       	}, 1000 );
		$('.downArrow').fadeOut( 300 , function(){
		$('#downArrow4').fadeIn(300);
		});
	});
		$("#downArrow4").click(function (){
         $('html, body').animate({
      	scrollTop: $("#sixth").offset().top
       	}, 1000 );
		$('.downArrow').fadeOut( 300 , function(){
		$('#downArrow5').fadeIn(300);
		});
	});
		$("#downArrow5").click(function (){
         $('html, body').animate({
      	scrollTop: $("#last").offset().top
       	}, 1000 );
		$('.downArrow').fadeOut( 300);
	});
	
});