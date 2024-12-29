/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:         

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Education = {
		init: function() {
			this.Basic.init();  
		},
		Basic: {
			init: function() {
				this.APPgymTestimonial();
			},




			APPgymTestimonial: function (){
				$('.app-gym-testimonial-slider').owlCarousel({
					margin:8,
					responsiveClass:true,
					nav: false,
					dots: true,
					loop:true,
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
							items:2,
						},
						700:{
							items:2,
						},
						900:{
							items:3,
						},
						1000:{
							items:3,

						}
					},
				});
			},



/* End Of js
================================================*/
}
}
jQuery(document).ready(function (){
	Appilo_Education.init();
});

})();