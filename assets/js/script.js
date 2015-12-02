$(document).ready(function() {

/*menu hover*/

	$("#about-one").hover(function(){
		$("#about-one").css("color","#C8C8C8");
		}, function(){
		$("#about-one").css("color","black");
	});

	$("#gallery-one").hover(function(){
		$("#gallery-one").css("color","#C8C8C8");
		}, function(){
		$("#gallery-one").css("color","black");
	});

	$("#hello").hover(function(){
		$("#hello").css("color","#C8C8C8");
		}, function(){
		$("#hello").css("color","black");
	});


/*scrolltop*/

	$("#top").click(function() {
    	$('html, body').animate({
       		scrollTop: $("#title").offset().top
    	}, 2000);
	});

/*hide say-hello*/

	$("#say-hello").click(function() {
		$('#say-hello').hide();
	});
	
/*click submit*/

	$("#submit").click(function(){
                console.log('submit button clicked');
	});

/*change message box into a text*/
	$("#message").click(function(){
		$("#message").text('Hi Sam!');
	});
	
/*fadeOut email button*/ 

	$("#email").click(function(){
    	$("#email").fadeOut();
	})
	
/*click about and scroll down to about section*/

	$("#about-one").click(function() {
	    	$('html, body').animate({
	       		scrollTop: $("#about").offset().top
	    	}, 2000);
		});

/*click gallery and scroll down to gallery section*/
	$("#gallery-one").click(function() {
	    	$('html, body').animate({
	       		scrollTop: $("#gallery").offset().top
	    	}, 2000);
		});

/* click say hello! and scroll down to say-hello section*/

	$("#hello").click(function() {
	    	$('html, body').animate({
	       		scrollTop: $("#closing").offset().top
	    	}, 2000);
		});
});
