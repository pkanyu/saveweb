/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Appilo_Digital_Marketing = {
		init: function() {
			this.Basic.init();
		},
		Basic: {
			init: function() {
				this.Animation();
				this.AppDmSliderCarousel();
				this.CounterUp();
			},

			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
						{
							boxClass:     'wow',
							animateClass: 'animated',
							offset:       0,
							mobile:       true,
							live:         true
						}
					);
					wow.init();
				}
			},
			AppDmSliderCarousel: function (){
				$('.app-dm-project-slider-area').slick({
					arrow: false,
					dots: true,
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				});
				$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
					e.target
					e.relatedTarget
					$('.app-dm-project-slider-area').slick('setPosition');
				});
				$('.app-dm-testimonial-slider').owlCarousel({
					margin:30,
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
							items:2,
						},
						1000:{
							items:3,

						}
					},
				});
				$('.app-dm-blog-slider').owlCarousel({
					margin:30,
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
				var tpj = jQuery;
				if(window.RS_MODULES === undefined) window.RS_MODULES = {};
				if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
				RS_MODULES.modules["revslider231"] = {once: RS_MODULES.modules["revslider231"]!==undefined ? RS_MODULES.modules["revslider231"].once : undefined, init:function() {
						window.revapi23 = window.revapi23===undefined || window.revapi23===null || window.revapi23.length===0  ? document.getElementById("rev_slider_23_1") : window.revapi23;
						if(window.revapi23 === null || window.revapi23 === undefined || window.revapi23.length==0) { window.revapi23initTry = window.revapi23initTry ===undefined ? 0 : window.revapi23initTry+1; if (window.revapi23initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider231"].init()}); return;}
						window.revapi23 = jQuery(window.revapi23);
						if(window.revapi23.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_23_1"); return;}
						revapi23.revolutionInit({
							revapi:"revapi23",
							DPR:"dpr",
							sliderLayout:"fullwidth",
							visibilityLevels:"1240,1024,778,480",
							gridwidth:"1240,1024,778,480",
							gridheight:"1030,768,750,450",
							perspective:600,
							perspectiveType:"global",
							editorheight:"1030,768,960,450",
							responsiveLevels:"1240,1024,778,480",
							progressBar:{disableProgressBar:true},
							navigation: {
								onHoverStop:false
							},
							viewPort: {
								global:false,
								globalDist:"-200px",
								enable:false
							},
							fallbacks: {
								allowHTML5AutoPlayOnAndroid:true
							},
						});

					}}
				if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
			},
			CounterUp: function (){
				$('.counter123').counterUp({
					delay: 10,
					time: 1500
				});
			},


			/* End Of js
            ================================================*/
		}
	}
	jQuery(document).ready(function (){
		Appilo_Digital_Marketing.init();
		console.log('appilo digital marketing js loaded');
	});

})();