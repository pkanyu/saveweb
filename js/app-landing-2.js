/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	let app_landing_2 = {
		init: function () {
			this.Basic.init();
		},
		Basic: {
			init: function () {
				this.appl2Testimonial(),
				this.appl2Filter(),
				this.appl2CountDown(),
				this.appl2GallerySlider();
			},


			appl2Testimonial: function () {
				$(".apl-review-slider").slick({
					slidesToShow: 1,
					autoplay: false,
					speed: 1000,
					prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
					nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
				});
			},

			appl2Filter: function () {
				$(".apl-demo-preview .filter-container").imagesLoaded(function () {
				});
				var e = $(".apl-demo-preview .filter-container");
				e.length && (e.filterizr({}), $(".apl-filter-btn").on("click", function () {
					$(".apl-filter-btn.apl-active").removeClass("apl-active"), $(this).addClass("apl-active");
				}));
				$(".apl-btns-container").each(function () {
					$(this).children("a:last-child").hover(function () {
						$(this).parent().children("a:first-child").addClass("active");
					});
					$(this).children("a:last-child").mouseout(function () {
						$(this).parent().children("a:first-child").removeClass("active");
					});
				})
			},

			appl2CountDown: function () {
				$('.apl-countdown').find('ul').each(function () {
					var timedate = $('.appl2-countdown-date').data('date');
					$('.apl-countdown ul').downCount({
						date: timedate,
						offset: +6
					});
				});
			},

			appl2GallerySlider: function () {
				$(".apl-gallery-slider").slick({
					autoplay: true,
					arrows: false,
					slidesToShow: 3,
					dots: true,
					speed: 2000,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 2,
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			},


			/* End Of js
            ================================================*/
		}
	};
	jQuery(document).ready(function (){
		app_landing_2.init();
		console.log('appilo app landing 2 js loaded');
});

})();