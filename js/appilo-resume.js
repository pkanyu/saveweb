/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var apihu_port_appilo = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {
				this.Animation();
				this.APIHUPORTScrollTop();
				this.APIHUPORTPortfolio();
				this.APIHUPORTTestimonialCarousel(); 
				this.APIHUPORTClientsCarousel();
				this.APIHUPORTBlogCarousel();
				this.APIHUPORTNavScroll();
			},

			APIHUPORTNavScroll: function (){
				//Desktop Menu
				$('.resume-nav-menu li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -100
							}, 1000);
							return false;
						}
					}
				});

				// /Mobile Menu
				$('.resume-nav-menu li a').on("click", function(){
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var target = $(this.hash);
						target = target.length ? target : $('[name="DCSext.Level"' + this.hash.slice(1) +']');
						if (target.length) {
							$('html, body').animate({
								scrollTop: target.offset().top -100
							}, 1000);
							return false;
						}
					}
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


			APIHUPORTScrollTop: function (){
				$(window).on("scroll", function(){
					var ScrollBarLocation = $(this).scrollTop();
					if( ScrollBarLocation > 150 ) {
						$(".apihu-port-scroll-top").fadeIn(); 
					} else {
						$(".apihu-port-scroll-top").fadeOut();
					}
				});

				$(".apihu-port-scroll-top").on("click", function(e){
					e.preventDefault(); 
					$("body,html").animate({
						scrollTop: 0,
					});
				});
			},

			APIHUPORTPortfolio: function () {
				var $grid = $('.apihu-port-portfolio-grid').isotope({
					itemSelector: '.apihu-port-portfolio-item'
				});

				$('.apihu-port-portfolio-navigation').on('click', 'li', function() {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({filter: filterValue});
				});
				
				$('.apihu-port-portfolio-navigation').on('click', 'li', function() {
					$(this).addClass('active').siblings().removeClass('active');
				});
			},
			
			APIHUPORTTestimonialCarousel: function (){
				$(".apihu-port-testimonial-slider").owlCarousel({
					loop: true,
					nav: true,
					navText: ['<i class="flaticon-left-arrow"></i>','<i class="flaticon-right-arrow"></i>'],
					margin: 30,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 2
						}
					}
				});
			},

			APIHUPORTClientsCarousel: function() {
				$(".apihu-port-clients-carousel").owlCarousel({
					loop: true,
					nav: false,
					dots: false,
					margin: 25,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 5
						}
					}
				});
			},

			APIHUPORTBlogCarousel: function() {
				$('.apihu-port-blog-carousel').owlCarousel({
					loop: true,
					nav: false,
					dots: true,
					margin: 30,
					responsive: {
						0: {
							items: 1
						},
						600: {
							items: 2
						},
						1000: {
							items: 3
						}
					}
				});
			},

		}	
	}
	jQuery(document).ready(function (){
		apihu_port_appilo.init();
		console.log('appilo resume js loaded');
	});

})();
