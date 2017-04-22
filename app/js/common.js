$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
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


// SCROLL EVENT
	$(window).scroll(function(){
		var $scroll = $(window).scrollTop();

		if($scroll >= 50){
			$('.top-baner').addClass('fixed');
		}
		else{
			$('.top-baner').removeClass('fixed');
		}
});
//SCROLL EVENT END

	$(document).ready(function(){
		$('.hamburger').click(function(){
			$('.hamburger').toggleClass('is-active');
			$('#nav').toggleClass('ham-open');
		});

		$(window).resize(function(){
			var w_th = $(this).width();
			if(w_th > 1024){
				$('#nav').removeClass('ham-open');
				$('.hamburger').removeClass('is-active');
			}
			
		});

	});

//EqualHeights

$('.yourelements').equalHeights();



});
