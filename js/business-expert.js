/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var businessExpert = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.APBCServiceSlider();
				this.APBCTeamCarousel();
				this.APBCFeedBack();
				this.APBCSkillsProgress();
				this.APBCCounterup();
				this.APBCPopupVideo();
				this.APBCToggle();
				this.APBCHeroSlider();
			},

			APBCServiceSlider: function (){
				$(".apbc-service-slider").slick({
					slidesToShow: 3, 
					autoplay: true, 
					dots: true,
					responsive: [
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
							}
						}, 
						{
							breakpoint: 700, 
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			}, 
			APBCTeamCarousel: function (){
				$(".apbc-team-carousel").slick({
					slidesToShow: 4, 
					autoplay: true, 
					dots: true,
					arrows: false,
					responsive: [
						{
							breakpoint: 900, 
							settings: {
								slidesToShow: 3,
							}
						}, 
						{
							breakpoint: 700, 
							settings: {
								slidesToShow: 2,
							}
						}, 
						{
							breakpoint: 460, 
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			}, 
			APBCFeedBack: function (){
				$(".apbc-client-feedback").slick({
					slidesToShow: 1, 
					prevArrow: '<button type="button" class="prev-arrow"><i class="flaticon-left-arrow-2"></i></button>',
					nextArrow: '<button type="button" class="next-arrow"><i class="flaticon-right-arrow-2"></i></button>',
					autoplay: true, 
					dots: true, 
				});
			}, 
			APBCSkillsProgress: function (){
				$(window).on("load", function(){
					$(".progress-bar-vb").ProgressBar();
				});
			},
			APBCCounterup: function (){
				$(".apbc-counterup").counterUp({
					time: 1800,
				}); 
			}, 
			APBCPopupVideo: function (){
				$(".apbc-video-right a").magnificPopup({
					type: 'iframe', 
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
							id: 'v=', 
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  },
					  
						},
						srcAction: 'iframe_src', 
					}

				});
			},
			APBCToggle: function (){
				//SideBar
				$(".apbc-sidebar-btn a").on("click", function(e){
					e.preventDefault();
					$(".apbc-body-overlay").addClass("apbc-body-overlay-on");
					$(".apbc_sidebar_info_content").addClass("apbc-sidebar-on");

				});

				$(".apbc-body-overlay").on("click", function(){
					$(".apbc_sidebar_info_content").removeClass("apbc-sidebar-on");
					$(this).removeClass("apbc-body-overlay-on");
				});

				$(".apbc-sidebar-info .close-menu").on("click", function(){
					$(".apbc_sidebar_info_content").removeClass("apbc-sidebar-on");
					$(".apbc-body-overlay").removeClass("apbc-body-overlay-on");
				});
			},
			APBCHeroSlider: function (){
				$(".apbc-hero-slider").slick({
					slidesToShow: 1,
					autoplaySpeed: 6000,
					autoplay: true,
					arrows: false,
					dots: true,
				});
			}

		}	
	}
	jQuery(document).ready(function (){
		businessExpert.init();
		console.log('appilo business expert js loaded');
	});

})();
