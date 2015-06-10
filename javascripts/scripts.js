$(document).on('scroll', function() {

	// Num of px scrolled
	var pxscrolled = $(this).scrollTop();

	// Get the window height
	var winh = $(window).height();

	// Get the percentage of the page that's been scrolled
	var percentscrolled = pxscrolled / winh;

	// For every px scrolled, move the logo 0.5px up
	//    ** It goes half px because top and bottom are pulling
	// Also set the inverse percentage of scroll as the opacity
	$('.logo')
		.css('top', -pxscrolled)
		.css('opacity', 1 - percentscrolled);

	// If the browser has scrolled to the top one full window...
	if (pxscrolled > (winh - 70)) {
		$('.bar').fadeIn();
	}
	else {
		$('.bar').fadeOut();
	}

});