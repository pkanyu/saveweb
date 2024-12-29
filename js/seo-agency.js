/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var aplpg2_appilo = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.APLDG2ScrollTop();
				this.APLDG2HeaderFunction();
				this.APLDG2MobileMenu();
				this.APLDG2ProgressBar(); 
				this.APLDG2Carousel(); 
				this.APLDG2VideoPopup();
				this.APLDGCounterUp();
			},


			APLDG2ScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".apldg2-scroll-top").fadeIn(); 
					} else {
						$(".apldg2-scroll-top").fadeOut();
					}
				});

				$(".apldg2-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},

			APLDG2HeaderFunction: function (){

				//Header Sidebar 
				$(".apldg2-sidebar-hamburger a").on("click", function(){
					$(".apldg2_sidebar_info_content").addClass("apldg2-sidebar-on");
					$(".apldg2-body-overlay").addClass("apldg2-body-overlay-on"); 
					return false;
				});


				$(".apldg2_sidebar_info_content .close-menu").on("click", function(){
					$(".apldg2_sidebar_info_content").removeClass("apldg2-sidebar-on");
					$(".apldg2-body-overlay").removeClass("apldg2-body-overlay-on"); 
				});

				$(".apldg2-body-overlay").on("click", function(){
					$(".apldg2_sidebar_info_content").removeClass("apldg2-sidebar-on"); 
					$(this).removeClass("apldg2-body-overlay-on");
				});

				//Sticky Header 
				$(window).on("scroll", function(){
					var ScrollBarPostion = $(window).scrollTop(); 
					if (ScrollBarPostion > 150 ) {
						$(".apldg2-header-area").addClass("apldg2-header-sticky"); 
					} else {
						$(".apldg2-header-area").removeClass("apldg2-header-sticky");
					}
				}); 

				$(".apldg2-scroll-next a").on("click", function(e){
					if(this.hash !== "") {
						e.preventDefault();
						var hashValue = $(this.hash).offset().top - 100; 
						$("body,html").animate({
							scrollTop: hashValue, 
						});
					}
				})

			}, 

			APLDG2MobileMenu: function (){
				$(".apldg2-mobile-menu-hamburger").on("click", function(e){
					e.preventDefault();
					$(".apldg2-mobile-menu").toggleClass("apldg2-mobile-menu-on");
					$(".apldg2-body-overlay").toggleClass("apldg2-body-overlay-on");
				});

				$(".apldg2-body-overlay").on("click", function(){
					$(".apldg2-mobile-menu").removeClass("apldg2-mobile-menu-on");
					$(".apldg2-mobile-menu-open").removeClass("open");
				});

				$(".apldg2-menu-close").on("click", function(){
					$(".apldg2-mobile-menu").removeClass("apldg2-mobile-menu-on");
					$(".apldg2-body-overlay").removeClass("apldg2-body-overlay-on"); 
					$(".apldg2-mobile-menu-open").removeClass("open");
				});

				$(".apldg2-mobile-menu li.has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).siblings('ul').slideToggle();
						$(this).parent().toggleClass('apldg2-submenu-icon-rotate');
					});
				});
			},

			APLDG2ProgressBar: function (){
				$(".progress-bar-seo-agency").ProgressBar();
			}, 
			
			APLDG2Carousel: function (){
				//Hero slider 
				$(".apldg2-hero-slider").slick({
					slidesToShow: 1, 
					autoplay: false, 
					dots: true, 
					arrows: false,
				});

				//Service Slider 
				$(".apldg2-services-slider").slick({
					slidesToShow: 4, 
					autoplay: true, 
					dots: true, 
					arrows: false, 
					slidesToScroll: 2,
					responsive: [
						{
							breakpoint: 992, 
							settings: {
								slidesToShow: 3,
							}
						}, 
						{
							breakpoint: 768, 
							settings: {
								slidesToShow: 2,
							}
						}, 
						{
							breakpoint: 576, 
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
					]
				});
				

				//Project slider 
				$(".apldg2-project-slider").each(function(){
					var ItemLength = $(this).children().length;
					if(ItemLength > 1 ) {
						$(this).slick({
							slidesToShow: 2,
							dots: true,
							autoplay: true, 
							arrows: false,
							responsive: [
								{
									breakpoint: 768, 
									settings: {
										slidesToShow: 1,
									}
								}
							]
						});
					}
				}); 

				//Feedback Slider 
				$(".apldg2-feedback-slider").slick({
					slidestoShow: 1, 
					autoplay: true, 
					dots: false, 
					arrows: true,
					prevArrow: '<button type="button" class="prev-btn"><i class="fas fa-arrow-left"></i></button>', 
					nextArrow: '<button type="button" class="next-btn"><i class="fas fa-arrow-right"></i></button>',
				});

				//Blog Slider 
				$(".apldg2-blog-slider").slick({
					slidesToShow: 3,
					autoplay: true, 
					arrows: false, 
					dots: true,
					slidesToScroll: 2,
					responsive: [
						{
							breakpoint: 1200, 
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

			APLDG2VideoPopup: function (){
				$('.apldg2-video-popup').magnificPopup({
					type: 'iframe', 
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
					  
							id: 'v=',
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  },
						  vimeo: {
							index: 'vimeo.com/',
							id: '/',
							src: '//player.vimeo.com/video/%id%?autoplay=1'
						  },
						  gmaps: {
							index: '//maps.google.',
							src: '%id%&output=embed'
						  }
						},
					  
						srcAction: 'iframe_src', 
					}
				}); 
			}, 
			APLDGCounterUp: function (){
				$(".counterup").counterUp({
					delay: 10,
    				time: 1000
				});
			}
		}	
	}
	jQuery(document).ready(function (){
		aplpg2_appilo.init();
		console.log('appilo seo agency js loaded');
	});

})();
