/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var aplpg_appilo = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.APLPGScrollTop();
				this.APLPGMobileMenu();
				this.APLPGSCrollToSection();
				this.APLPGStickyHeader();
				this.APLPGCarousel();
				this.APLPGVideoPopup();
				this.APLPGCounterUp();
			},

			preloader: function (){
				$(window).on('load', function() {
					$(".loading-preloader").fadeOut();
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},

            Animation: function (){
				$(window).on("load", function(){
					if($('.wow').length){
						new WOW({
							offset: 100,
							mobile: true
						}).init()
					}
				});
				
			},


			APLPGScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".aplpg-scroll-top").fadeIn(); 
					} else {
						$(".aplpg-scroll-top").fadeOut();
					}
				});

				$(".aplpg-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},

			//MObile Menu 
			APLPGMobileMenu: function (){
				//Mobile Menu 
				$(".aplpg-mobile-menu-btn").on("click", function(e){
					e.preventDefault(); 
					$(".aplpg-mobile-navigation").addClass("aplpg-mobile-menu-on");
					$(".aplpg-body-overlay").addClass("aplpg-body-overlay-on");
				}); 
				
				$(".aplpg-mobile-menu-close").on("click", function(e){
					e.preventDefault();
					$(".aplpg-mobile-navigation").removeClass("aplpg-mobile-menu-on");
					$(".aplpg-body-overlay").removeClass("aplpg-body-overlay-on");
				});

				$(".aplpg-body-overlay").on("click", function(){
					$(".aplpg-mobile-navigation").removeClass("aplpg-mobile-menu-on");
					$(this).removeClass("aplpg-body-overlay-on");
				});

				$(".aplpg-mobile-navigation li.has-submenu a").each(function(){
					$(this).on("click", function(){
						$(this).siblings('ul').slideToggle();
						$(this).parent().toggleClass('aplpg-submenu-icon-rotate');
					});
				});
			},

			//Sickey Header 
			APLPGStickyHeader: function (){
				$(window).on("scroll", function(){
					var ScrollBarPosition = $(this).scrollTop();
					if( ScrollBarPosition > 150 ) {
						$(".aplpg-header-section").addClass("aplpg-sticky-on"); 
					} else {
						$(".aplpg-header-section").removeClass("aplpg-sticky-on");
					}
				});
			},

			APLPGSCrollToSection: function (){
				$(".aplpg-nav-menu ul li a").each(function(){
					$(this).on("click", function(e){
						if(this.hash !=="") {
							e.preventDefault();  
							var hashvalue = $(this.hash);
							var hashoffset = hashvalue.offset().top - 100;
							var idName = hashvalue.attr("id"); 

							$("html,body").animate({
								scrollTop: hashoffset,
							});
						}
					});
				});

				//Menu active Class replace with Scroll
				$(window).scroll(function(){
					$(".aplpg-nav-menu ul li a").each(function(){
						if(this.hash !=="") {
							var menu_offset = $(this.hash).offset().top; 
							var WinHeight = $(window).scrollTop() + 200;
							if(WinHeight >= menu_offset){
								$(".aplpg-nav-menu ul li a.active").removeClass('active'); 
								$(this).addClass("active"); 
							}
						}
					});
				});

				$(".aplpg-mobile-menu-wrapper ul li a").each(function(){
					$(this).on("click", function(e){
						if(this.hash !=="") {
							e.preventDefault();  
							var hashvalue = $(this.hash);
							var hashoffset = hashvalue.offset().top - 100;

							$("html,body").animate({
								scrollTop: hashoffset,
							});
						}
					});
				});

				$(".aplpg-scroll-btn a").on("click", function(e){
					if(this.hash !=="") {
						e.preventDefault();  
						var hashvalue = $(this.hash);
						var hashoffset = hashvalue.offset().top - 100;
						$("html,body").animate({
							scrollTop: hashoffset,
						});
					}
				});



			},

			APLPGCarousel: function (){
				//Hero Slider 
				$(".aplpg-hero-slider-area").slick({
					slidesToShow: 1, 
					autoplay: false, 
					dots: true,
					fade: true,
					draggable: false,
				});

				//Blog Slider
				$(".aplpg-blog-slider").slick({
					slidesToShow: 3, 
					autoplay: true, 
					dots: true,
					arrows: false,
					responsive: [
						{
							breakpoint: 992, 
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

				//Testimonial Slider 
				$(".aplpg-testimonial-slider").slick({
					slidesToShow: 3, 
					autoplay: true, 
					dots: false,
					arrows: true,
					prevArrow: '<button type="button" class="prev-btn"><i class="fas fa-long-arrow-alt-right"></i></button>',
					nextArrow: '<button type="button" class="next-btn"><i class="fas fa-long-arrow-alt-left"></i></button>',
					responsive: [
						{
							breakpoint: 992, 
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

				var swiper = new Swiper(".aplpg-screen-slider", {
					effect: "coverflow",
					grabCursor: true,
					centeredSlides: true,
					slidesPerView: "auto",
					loop: true,
					loopFillGroupWithBlank: true,
					coverflow: {
					  rotate: 0,
					  stretch: 0,
					  depth: 100,
					  modifier: 2,
					  slideShadows: true,
					},
					autoplay: 3000,
					pagination: {
					  el: ".swiper-pagination",
					  dynamicBullets: true,
					},
				});
				 
			}, 

			//Video Poupup 
			APLPGVideoPopup: function (){
				$(".aplpg-video-btn a").magnificPopup({
					type: 'iframe', 
					iframe: {
						patterns: {
						  youtube: {
							index: 'youtube.com/',
							id: 'v=',
							src: 'https://www.youtube.com/embed/%id%?autoplay=1'
						  }
						}
					}
				});
			}, 

			APLPGCounterUp: function (){
				$(".aplpg-counter").counterUp({
					time: 2000,
				});
			}

		}	
	}
	jQuery(document).ready(function (){
		aplpg_appilo.init();
	});

})();
