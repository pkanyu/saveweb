(function() {

	"use strict";

	let prysm = {
		init: function () {
			this.Basic.init();
		},
		Basic: {
			init: function () {
				this.prysmTeam(),
				this.prysmTestimonial();
			},


			prysmTeam: function () {
				$(".pr1-team-slider").slick({
					slidesToShow: 3,
					arrows: false,
					dots: true,
					autoplay: true,
					speed: 500,
					responsive: [
						{
							breakpoint: 1160,
							settings: {
								slidesToShow: 2,
							}
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
							}
						},
					]
				});
			},
			prysmTestimonial: function () {
				$(".pr1-clients-slider").slick({
					slidesToShow: 2,
					arrows: false,
					dots: true,
					responsive : [
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
		prysm.init();
		console.log('appilo prysm js loaded');
});

})();