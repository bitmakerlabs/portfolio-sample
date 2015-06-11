// When the document is loaded into the DOM
$(document).on('ready', function(e) {

	// For every px the browser scrolls, run all this code
	$(document).on('scroll', function() {

		// Store the num of px scrolled
		var pxscrolled = $(this).scrollTop();

		// Store the height of the window (viewport)
		var winh = $(window).height();

		// Get the percentage of the page that's been scrolled as %
		var percentscrolled = pxscrolled / winh;

		// For every px scrolled, move the logo 0.5px up
		// **Note: Only goes half px because top/bottom are 0 (pulling opposites)
		// Also then set the inverse (1-x) percentage of scroll as the opacity
		$('.logo')
			.css('top', -pxscrolled)
			.css('opacity', 1 - percentscrolled);

		// If the browser has scrolled one full window length (main at top)
		// Note this can also be done checking offset().top on "main" is 0
		if (pxscrolled > (winh - 70)) {
			$('.bar').fadeIn();
		}
		else {
			$('.bar').fadeOut();
		}

		// When the <h1> hits the top, scroll in a duplicate <h1>
		// **Note: this is very static, we should use real
		// values by selecting position() from dom elements

		// Calculate the num pxs scrolled over the top + an offset
		var diff = winh - pxscrolled + 54;
		if (pxscrolled > winh && diff > 0) {
			// if the h1 is moving under the bar, move the duplicate
			$('.bar-title').css('top', diff);
		}
		else if (pxscrolled > winh) {
			// if the h1 is out of view of the page (scrolled above the bar)
			$('.bar-title').css('top', 0);
		}
		else {
			// if the h1 is within view of the page (below the bar)
			$('.bar-title').css('top', 54);
		}

	});


	// PLUGIN: Masonry (http://masonry.desandro.com/)
	// Tile the photos like bricks to remove any white space
	$('.photos').masonry({
		itemSelector: '.photo',
		columnWidth: function( containerWidth ) {
			// Fluid (responsive):
			// Note it's a bit wonkey when you scale down to mobile unless we
			// refresh the page after a scale down, perhaps an .on('refresh')?
			return containerWidth / 3;  
		}
	});


	// PLUGIN: Sweet Alert (https://github.com/t4t5/sweetalert)
	// Show any alerted message in a pretty format
	$('.bar-logo').on('click', function(e) {
		sweetAlert("Bitmaker Labs Toronto, 2015!")
	})


	// PLUGIN: Inview (https://github.com/protonet/jquery.inview)
	// When an element comes into view, fade it to opaque (visible)
	// When an element goes out of view, fade it transparent (invisible)
	$('.photo').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
	  	$(this).css('opacity', 1);
	  }
	  else {
	  	$(this).css('opacity', 0);
	  }
	});


	// PLUGIN: Fuidbox (http://terrymun.github.io/Fluidbox/)
	// Make each of the images a responsive lightbox
	$('.photo a').fluidbox();
});