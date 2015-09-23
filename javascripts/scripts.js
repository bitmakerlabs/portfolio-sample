	// How many px have I scrolled?
$(window).on('scroll', function() {

		// Height of the window
	var w = $(window).height();

		// Number of px scrolled
	var px = $(window).scrollTop();
	

	// 1. Move the logo in relation to the scroller (1/2)
	
		// This is how I move an element up
		// Note: -100, actually moves -50
	$('.logo').css('top', -px);


	// 2. *IF* the amount scrolled (px) exceeds (>) the window height (w), .fadeIn() the .bar
	console.log("px scrolled:", px, "w height:", w);

	if (px > w) {
		$('.bar').fadeIn();
	}
	else {
		$('.bar').fadeOut();
	}

	// 3. Use the % scrolled to affect transparency
	var percent = px / w;
	$('.logo').css('opacity', 1-percent);


});


// Fluidbox (lightbox images)
$('.photo a').fluidbox();



// When something comes into view
$('.photo').bind('inview', function (event, visible) {
	if (visible) {
		$(this).css('opacity', 1);
	}
	else {
		$(this).css('opacity', 0);
	}
});



// Stack the images like masonary (tiles)
$('.photos').masonry({
	itemSelector: '.photo',
	columnWidth: function( containerWidth ) {
		return containerWidth/3;
	}
});



$('.tooltip').tooltipster();






