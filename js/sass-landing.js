(function ($) {
	"use strict";


    /* magnificPopup img view */
	$('.sl-popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$('.sl-popup-video').magnificPopup({
		type: 'iframe'
	});

	// inhover active start
	$(".sl-counter-single").on('mouseenter', function () {
		$(".sl-counter-single").removeClass("active");
		$(this).addClass("active");
	});
	$(".sl-tab-info-item").on('mouseenter', function () {
		$(".sl-tab-info-item").removeClass("active");
		$(this).addClass("active");
	});

	// nhover active start


	$('.main-menu nav > ul > li').slice(-3).addClass('menu-last');




})(jQuery);