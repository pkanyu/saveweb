(function() {

	"use strict";

	let itsource = {
		init: function () {
			this.Basic.init();
		},
		Basic: {
			init: function () {
				this.itSourceTestimonial(),
				this.itSourceBlog(),
				this.itSourceVideoLightbox(),
				this.itSourcePortfolio();
			},

			// iTsoruce Testimonial
			itSourceTestimonial: function () {
				$('.it-nx-testimonial-slider').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				})
			},

			// iTsoruce Blog
			itSourceBlog: function () {
				$('.it-nw-blog-slider').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: false,
					dots: true,
					autoplay: false,
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:1,
						},
						1000:{
							items:2,

						}
					},
				})
			},

			// itsource portfolio
			itSourcePortfolio: function () {
				$('.it-nw-project-slider-area').owlCarousel({
					margin:30,
					responsiveClass:true,
					nav: true,
					dots: false,
					loop:true,
					center: true,
					autoplay: false,
					navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
					smartSpeed: 1000,
					responsive:{
						0:{
							items:1,
						},
						400:{
							items:1,
						},
						600:{
							items:1,
						},
						700:{
							items:2,
						},
						1000:{
							items:2,
						}
					},
				})
			},

			// itsource Video Lightbox
			itSourceVideoLightbox: function () {

				$('.it_source_video_box').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false,
				});

			},

			/* End Of js
            ================================================*/
		}
	};
	jQuery(document).ready(function (){
		itsource.init();
		console.log('appilo itsource js loaded');
});

})();