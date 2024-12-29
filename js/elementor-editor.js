/*
Template Name: Appilo
Author: themexriver
Version: 2.9
*/

(function ($) {
	"use strict";

	/*----- ELEMENTOR LOAD FUNCTION CALL ---*/
	let elementorIconLightBox = function ($scope, $) {
		$scope.find('.appilo-icon-lightbox').each(function () {
			$(".appilo-icon-lightbox a, .apl-video-column a, .lightbox-image, .video_box, .smm-video-box").magnificPopup({
				type: 'iframe',
				iframe: {
					patterns: {
						youtube: {
							index: 'youtube.com/',
							id: 'v=',
							src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
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
		});
	};

	//App Showcase
	var ASCservices = function ($scope, $) {
		if ($("body.rtl").length) {
			var LangRtl = true;
		} else {
			var LangRtl = false;
		}
		if ($(".ei-service-slide").length) {
			var customPagerSlider = $(".ei-service-slide").bxSlider({
				adaptiveHeight: true,
				controls: true,
				rtl: LangRtl,
				pause: 5000,
				speed: 1000,
				nextText:
					'<span class="control-icon fa fa-angle-right"></span>',
				prevText: '<span class="control-icon fa fa-angle-left"></span>',
				pagerCustom: "#banner-pager",
			});
		}
	};

	var ASCteam = function ($scope, $) {
		if ($("body.rtl").length) {
			var LangRtl = true;
		} else {
			var LangRtl = false;
		}
		$("#ei-team-slide").owlCarousel({
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: false,
			loop: true,
			rtl: LangRtl,
			center: true,
			autoplay: false,
			navText: [
				"<i class='fas fa-angle-left'></i>",
				"<i class='fas fa-angle-right'></i>",
			],
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
	};

	var ASCpartner = function ($scope, $) {
		if ($("body.rtl").length) {
			var LangRtl = true;
		} else {
			var LangRtl = false;
		}
		$("#ei-partner-slide").owlCarousel({
			margin: 105,
			autoplay: true,
			loop: true,
			rtl: LangRtl,
			responsiveClass: true,
			nav: false,
			dots: false,
			slideTransition: "linear",
			autoplayTimeout: 10,
			autoplayHoverPause: false,
			autoplaySpeed: 4500,
			responsive: {
				0: {
					items: 2,
				},
				400: {
					items: 3,
				},
				600: {
					items: 4,
				},
				700: {
					items: 4,
				},
				1000: {
					items: 4,
				},
			},
		});
	};
	var ASCtestimonial = function ($scope, $) {
		if ($("body.rtl").length) {
			var LangRtl = true;
		} else {
			var LangRtl = false;
		}
		$("#testimonial-scroller").owlCarousel({
			margin: 105,
			responsiveClass: true,
			nav: false,
			dots: true,
			rtl: LangRtl,
			autoplay: false,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 1,
				},
				1000: {
					items: 2,
				},
			},
		});
	};
	var ASCscroller = function ($scope, $) {
		$("#how-workscrollbar").mCustomScrollbar({
			autoHideScrollbar: true,
		});
	};
	//End
	//Appilo
	var APfeature = function ($scope, $) {
		if ($(".app-features-carousel").length) {
			$(".app-features-carousel").owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				center: true,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>',
				],
				dots: false,
				autoWidth: false,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				responsive: {
					0: {
						items: 1,
					},
					480: {
						items: 1,
					},
					600: {
						items: 2,
					},
					768: {
						items: 2,
					},
					1000: {
						items: 3,
					},
				},
			});
		}
	};
	//Blog
	var APblog = function ($scope, $) {
		if ($(".blog-carousel").length) {
			$(".blog-carousel").owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				center: true,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>',
				],
				dots: false,
				autoWidth: false,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				responsive: {
					0: {
						items: 1,
					},
					480: {
						items: 1,
					},
					600: {
						items: 2,
					},
					768: {
						items: 2,
					},
					1000: {
						items: 3,
					},
				},
			});
		}
	};
	// Testimonial
	var APtestimonial = function ($scope, $) {
		if ($(".appilo-main .testimonials-slider .slider").length) {
			$(".testimonials-slider .slider").bxSlider({
				// adaptiveHeight: true,
				auto: false,
				controls: true,
				nextText: '<i class="fas fa-long-arrow-alt-right"></i>',
				prevText: '<i class="fas fa-long-arrow-alt-left"></i>',
				mode: "fade",
				pause: 3000,
				speed: 500,
				pager: true,
				pagerCustom: "#testimonials-slider-pager",
			});
		}
	};
	//Pricing
	var APpricing = function ($scope, $) {
		var toggleSwitch = $("#switch-toggle-tab label.switch");
		var TabTitle = $("#switch-toggle-tab li");
		var monthTabTitle = $("#switch-toggle-tab li.month");
		var yearTabTitle = $("#switch-toggle-tab li.year");
		var monthTabContent = $("#month");
		var yearTabContent = $("#year");
		// hidden show deafult;
		monthTabContent.fadeIn();
		yearTabContent.fadeOut();
		function toggleHandle() {
			if (toggleSwitch.hasClass("on")) {
				yearTabContent.fadeOut();
				monthTabContent.fadeIn();
				monthTabTitle.addClass("active");
				yearTabTitle.removeClass("active");
			} else {
				monthTabContent.fadeOut();
				yearTabContent.fadeIn();
				yearTabTitle.addClass("active");
				monthTabTitle.removeClass("active");
			}
		}
		monthTabTitle.on("click", function () {
			toggleSwitch.addClass("on").removeClass("off");
			toggleHandle();
			return false;
		});
		yearTabTitle.on("click", function () {
			toggleSwitch.addClass("off").removeClass("on");
			toggleHandle();
			return false;
		});
		toggleSwitch.on("click", function () {
			toggleSwitch.toggleClass("on off");
			toggleHandle();
		});
	};
	var APvideo = function ($scope, $) {
		if ($(".appilo-main .video-popup").length) {
			$(".video-popup").magnificPopup({
				disableOn: 700,
				type: "iframe",
				mainClass: "mfp-fade",
				removalDelay: 160,
				preloader: true,

				fixedContentPos: false,
			});
		}
	};
	//End
	//Topapp
	var TPteam = function ($scope, $) {
		// Team Carousel
		if ($(".topapp-team-carousel").length) {
			$(".topapp-team-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: true,
				center: true,
				smartSpeed: 500,
				autoplay: 4000,
				navText: [
					'<span class="fas fa-angle-left"></span>',
					'<span class="fas fa-angle-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},
					480: {
						items: 1,
					},
					600: {
						items: 2,
					},
					800: {
						items: 3,
					},
					1024: {
						items: 3,
					},
				},
			});
		}
	};
	//Pricing
	var TPpricing = function ($scope, $) {
		if ($(".tabs-box").length) {
			$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
				e.preventDefault();
				var target = $($(this).attr("data-tab"));

				if ($(target).is(":visible")) {
					return false;
				} else {
					target
						.parents(".tabs-box")
						.find(".tab-buttons")
						.find(".tab-btn")
						.removeClass("active-btn");
					$(this).addClass("active-btn");
					target
						.parents(".tabs-box")
						.find(".tabs-content")
						.find(".tab")
						.fadeOut(0);
					target
						.parents(".tabs-box")
						.find(".tabs-content")
						.find(".tab")
						.removeClass("active-tab");
					$(target).fadeIn(300);
					$(target).addClass("active-tab");
				}
			});
		}
	};
	var TPbanner = function ($scope, $) {
		if ($(".topapp-main .banner-slider").length) {
			var customPagerSlider = $(".topapp-main .banner-slider").bxSlider({
				adaptiveHeight: true,
				//auto:false,
				controls: true,
				pause: 5000,
				speed: 1000,
				nextText:
					'<span class="control-icon fas fa-angle-right"></span>',
				prevText:
					'<span class="control-icon fas fa-angle-left"></span>',
				pagerCustom: "#banner-pager",
			});
		}
		//Banner Mobile Pager
		$(
			".topapp-main .banner-section .carousel-column .inner-column .pager-box .pager.two"
		).on("click", function () {
			$(".mobile-small-image").addClass("visible");
		});

		$(
			" .banner-section .carousel-column .inner-column .pager-box .pager.one"
		).on("click", function () {
			$(".mobile-small-image").removeClass("visible");
		});

		$(
			".banner-section .carousel-column .inner-column .pager-box .pager.three"
		).on("click", function () {
			$(".mobile-small-image").removeClass("visible");
		});

		$(
			".banner-section .carousel-column .inner-column .pager-box .pager.three"
		).on("click", function () {
			$(".heart-image-icon").addClass("visible-heart");
		});

		$(
			".banner-section .carousel-column .inner-column .pager-box .pager.one"
		).on("click", function () {
			$(".heart-image-icon").removeClass("visible-heart");
		});
		$(
			".banner-section .carousel-column .inner-column .pager-box .pager.two"
		).on("click", function () {
			$(".heart-image-icon").removeClass("visible-heart");
		});

		$(
			".topapp-main .banner-section .carousel-column .inner-column .pager-box .pager.three"
		).on("click", function () {
			$(".plus-small-image").addClass("visible-plus");
		});

		$(
			".topapp-main .banner-section .carousel-column .inner-column .pager-box .pager.one"
		).on("click", function () {
			$(".plus-small-image").removeClass("visible-plus");
		});
		$(
			".banner-section .carousel-column .inner-column .pager-box .pager.two"
		).on("click", function () {
			$(".plus-small-image").removeClass("visible-plus");
		});
	};
	//Galaxy
	//Testimonial1
	var GYtestimonial1 = function ($scope, $) {
		if ($(".app-landing-testimonials-slider").length) {
			$(".app-landing-testimonials-slider").owlCarousel({
				//autoplay:true,
				mouseDrag: false,
				margin: 30,
				smartSpeed: 300,
				loop: true,
				nav: true,
				navText: [
					'<span class="fas fa-angle-left"></span>',
					'<span class="fas fa-angle-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},

					992: {
						items: 2,
					},
				},
			});
		}
	};
	//Testimonial2
	var GYtestimonial2 = function ($scope, $) {
		if ($(".agency-testimonial-slider").length) {
			$(".agency-testimonial-slider").owlCarousel({
				items: 1,
				mouseDrag: false,
				smartSpeed: 300,
				loop: true,
				nav: true,
				navText: [
					'<span class="fas fa-angle-left"></span>',
					'<span class="fas fa-angle-right"></span>',
				],
			});
		}
	};
	//Project Slider
	var GYprojectslider = function ($scope, $) {
		if ($(".agnecy-projects-slider").length) {
			$(".agnecy-projects-slider").owlCarousel({
				mouseDrag: false,
				margin: 25,
				smartSpeed: 300,
				loop: true,
				center: true,
				nav: true,
				navText: [
					'<span class="fas fa-angle-left"></span>',
					'<span class="fas fa-angle-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},

					500: {
						items: 2,
						center: false,
					},

					768: {
						items: 3,
					},

					1500: {
						items: 3,
					},

					1700: {
						items: 5,
					},
				},
			});
		}
	};
	var GYscreenshotslider = function ($scope, $) {
		if ($(".app-screenshot-slider").length) {
			$(".app-screenshot-slider").owlCarousel({
				loop: true,
				margin: 50,
				items: 1,
				smartSpeed: 700,
				autoplay: false,
				nav: false,
			});
			$(".app-screenshot-slider .owl-nav").addClass("d-none");
		}
	};
	var GYpricingtable = function ($scope, $) {
		if ($(".switcher-wrapper").length) {
			var switcher = $(".switcher-wrapper .switch");
			var pricingTab = $(".pricing-tab");
			var tablist = $(".switcher-wrapper .tablist");

			switcher.on("click", function () {
				var $this = $(this);
				$this.find(".slider").toggleClass("slide-off");
				pricingTab
					.children(".app-pricing-grids")
					.toggleClass("active-grids");
				tablist.children("span").toggleClass("active");
			});
		}
	};
	var GYblog = function ($scope, $) {
		if ($(".agency-blog-slider").length) {
			$(".agency-blog-slider").owlCarousel({
				mouseDrag: false,
				margin: 25,
				smartSpeed: 300,
				loop: true,
				nav: true,
				navText: [
					'<span class="fas fa-angle-left"></span>',
					'<span class="fas fa-angle-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},

					600: {
						items: 2,
						center: false,
					},

					992: {
						items: 3,
					},
				},
			});
		}
	};
	//SaaS Classic
	var SCteam = function ($scope, $) {
		$(".s2_team_slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: true,
			dots: false,
			loop: false,
			navText: [
				"<i class='fas fa-long-arrow-alt-left'></i>",
				"<i class='fas fa-long-arrow-alt-right'></i>",
			],
			autoplay: false,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 4,
				},
			},
		});
	};
	//Appilo SEO
	//Testimonial
	var AStestimonial = function ($scope, $) {
		$("#appseo-testimonial-id").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: "#testimonial-appseo-name",
		});
		$("#testimonial-appseo-name").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: "#appseo-testimonial-id",
			dots: true,
			centerMode: true,
			focusOnSelect: true,
		});
	};
	// App Startup
	//Slider
	var STRslider = function ($scope, $) {
		if ($("#str-banner-slide").length) {
			$("#str-banner-slide").owlCarousel({
				animateOut: "fadeOut",
				animateIn: "fadeIn",
				loop: true,
				margin: 0,
				nav: true,
				autoHeight: true,
				navText: [
					"<i class='fas fa-angle-left'></i>",
					"<i class='fas fa-angle-right'></i>",
				],
				smartSpeed: 500,
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 1,
					},
					800: {
						items: 1,
					},
					1024: {
						items: 1,
					},
					1200: {
						items: 1,
					},
				},
			});
		}
	};
	//Feature
	var STRfeature = function ($scope, $) {
		$("#str-slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: true,
			dots: false,
			loop: true,
			autoplay: false,
			navText: [
				"<i class='fas fa-angle-left'></i>",
				"<i class='fas fa-angle-right'></i>",
			],
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				700: {
					items: 3,
				},
				1000: {
					items: 4,
				},
			},
		});
	};
	var STRblog = function ($scope, $) {
		$("#str-blog-slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: false,
			dots: true,
			autoplay: false,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
	};
	var STRportfolio = function ($scope, $) {
		$("#str-protfolio-slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: true,
			dots: false,
			loop: true,
			center: true,
			autoplay: false,
			navText: [
				"<i class='fas fa-angle-left'></i>",
				"<i class='fas fa-angle-right'></i>",
			],
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 1,
				},
				1000: {
					items: 2,
				},
			},
		});
	};
	var STRteam = function ($scope, $) {
		$("#str-team-slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: true,
			dots: false,
			loop: true,
			autoplay: false,
			navText: [
				"<i class='fas fa-angle-left'></i>",
				"<i class='fas fa-angle-right'></i>",
			],
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				700: {
					items: 3,
				},
				1000: {
					items: 4,
				},
			},
		});
	};
	//Progress
	var STRpro = function ($scope, $) {
		$("#progress1").barfiller({ duration: 3000 });
		$("#progress2").barfiller({ duration: 3000 });
		$("#progress3").barfiller({ duration: 3000 });
		if ($(".fill").length) {
			var $progress_bar = $(".fill");
			$progress_bar.appear();
			$(document.body).on("appear", ".fill", function () {
				var current_item = $(this);
				if (!current_item.hasClass("appeared")) {
					var percent = current_item.data("percent");
				}
			});
		}
	};

	//Digital Agency

	//Portfolio
	var DiaPortSlider = function ($scope, $) {
		if ($("body.rtl").length) {
			var LangRtl = true;
		} else {
			var LangRtl = false;
		}
		$("#dia-portfolio-slider").owlCarousel({
			margin: 20,
			responsiveClass: true,
			nav: true,
			dots: false,
			loop: true,
			rtl: LangRtl,
			autoplay: false,
			navText: [
				"<i class='fas fa-chevron-left'></i>",
				"<i class='fas fa-chevron-right'></i>",
			],
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
				1300: {
					items: 4,
				},
				1600: {
					items: 5,
				},
			},
		});
	};

	// Skill Bar

	var SkillProgress = function ($scope, $) {
		if ($(".progress-bar").length) {
			var $progress_bar = $(".progress-bar");
			$progress_bar.appear();
			$(document.body).on("appear", ".progress-bar", function () {
				var current_item = $(this);
				if (!current_item.hasClass("appeared")) {
					var percent = current_item.data("percent");
					current_item
						.css("width", percent + "%")
						.addClass("appeared")
						.parent()
						.append("<span>" + percent + "%" + "</span>");
				}
			});
		}
	};

	// Appilo Landing
	// Demo Showcase

	var FilterDemoShowcase = function ($scope, $) {
		$(".demo-section .filtr-container").imagesLoaded(function () {});
		var filterizd = $(".demo-section .filtr-container");
		if (filterizd.length) {
			filterizd.filterizr({});
			$(".filtr-button").on("click", function () {
				$(".filtr-button.filtr-active").removeClass("filtr-active");
				$(this).addClass("filtr-active");
			});
		}
	};

	// Initial

	var AplAnimation = function ($scope, $) {
		$("[data-background]").each(function () {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ")"
			);
		});
		AOS.init({
			once: true,
			duration: 1000,
		});
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: "wow",
				animateClass: "animated",
				offset: 0,
				mobile: true,
				live: true,
			});
			wow.init();
		}
		$(".man-updown .elementor-image").css("animation", "man-updown 2s infinite alternate");

		$(window).on("scroll", function () {
			if ($(window).scrollTop() > 100) {
				$(".appilo-sticky").addClass("app-res-sticky-menu");
			} else {
				$(".appilo-sticky").removeClass("app-res-sticky-menu");
			}
		});
	};
	//Testimonial
	var AplReviewSlide = function ($scope, $) {
		$("#ln-review-slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: false,
			dots: true,
			autoplay: false,
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 2,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
	};
	//SaaS
	//Feature
	var SaasFeature = function ($scope, $) {
		$("#featured_scroll").mCustomScrollbar({
			axis: "x",
			mouseWheel: { enable: false },
			advanced: { autoExpandHorizontalScroll: true },
		});
		$("#featured_scroll").removeClass("mCustomScrollbar");
	};
	//Cloud Hosting

	//Ch1 Info slider
	var Ch1InfoSlider = function ($scope, $) {
		if ($(".information-carousel").length) {
			$(".information-carousel").owlCarousel({
				loop: true,
				autoplay: true,
				autoplayTimeout: 3000,
				margin: 30,
				nav: false,
				dots: true,
				scrollPerPage: true,
				responsive: {
					0: {
						items: 1,
						nav: false,
					},
					600: {
						items: 2,
						nav: false,
					},
					1000: {
						items: 3,
					},
				},
			});
		}
	};
	//Ch1 Testimonial slider
	var Ch1TestSlider = function ($scope, $) {
		if ($(".review-carousel").length) {
			$(".review-carousel").owlCarousel({
				loop: true,
				autoplay: false,
				margin: 30,
				nav: false,
				responsive: {
					0: {
						items: 1,
						nav: false,
					},
					600: {
						items: 1,
						nav: false,
					},
					1000: {
						items: 2,
					},
				},
			});
		}
		if ($("#testimonial-carousel-two").length) {
			$("#testimonial-carousel-two").owlCarousel({
				loop: true,
				autoplay: false,
				margin: 30,
				nav: false,
				responsive: {
					0: {
						items: 1,
						nav: false,
					},
					600: {
						items: 1,
						nav: false,
					},
					1000: {
						items: 2,
					},
				},
			});
		}
	};
	var Hrmposts = function ($scope, $) {
		$(".pm-blog-section .pm-blog-img-text:nth-child(2)").addClass("active");
	};

	var CRMScroller = function ($scope, $) {
		$("#crm-about-scroll").mCustomScrollbar({
			autoHideScrollbar: true,
		});
	};

	var CRMScreenSlider = function ($scope, $) {
		$("#crm-screen-slider").owlCarousel({
			margin: 0,
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			animateOut: "zoomOut",
			animateIn: "zoomIn",
			transitionStyle: "goDown",
			navText: [
				"<i class='fas fa-long-arrow-alt-left'></i>",
				"<i class='fas fa-long-arrow-alt-right'></i>",
			],
		});
	};

	var CRMTestimonialSlider = function ($scope, $) {
		$("#crm-testimonial-id").owlCarousel({
			margin: 0,
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			navText: [
				"<i class='fas fa-long-arrow-alt-left'></i>",
				"<i class='fas fa-long-arrow-alt-right'></i>",
			],
		});
	};

	var SMMTestimonialSlider = function ($scope, $) {
		$("#smm-testimonial-id").owlCarousel({
			margin: 0,
			items: 1,
			loop: true,
			nav: true,
			animateOut: "slideOutUp",
			animateIn: "slideInUp",
			dots: true,
			navText: [
				"<i class='fas fa-long-arrow-alt-left'></i>",
				"<i class='fas fa-long-arrow-alt-right'></i>",
			],
		});
	};

	var SMMfilter = function ($scope, $) {
		$(".smm-case-study-section .filtr-container").imagesLoaded(
			function () {}
		);
		var filterizd = $(".smm-case-study-section .filtr-container");
		if (filterizd.length) {
			filterizd.filterizr({});
			$(".filtr-button").on("click", function () {
				$(".filtr-button.active").removeClass("active");
				$(this).addClass("active");
			});
		}
	};

	var SmmSkillProgress = function ($scope, $) {
		if ($(".progress-bar").length) {
			var $progress_bar = $(".progress-bar");
			$progress_bar.appear();
			$(document.body).on("appear", ".progress-bar", function () {
				var current_item = $(this);
				if (!current_item.hasClass("appeared")) {
					var percent = current_item.data("percent");
					current_item
						.css("width", percent + "%")
						.addClass("appeared")
						.parent()
						.append("<span>" + percent + "%" + "</span>");
				}
			});
		}

		if ($(".smm-video-box").length) {
			$(".smm-video-box").fancybox({
				openEffect: "fade",
				closeEffect: "fade",
				helpers: {
					media: {},
				},
			});
		}
	};

	var SMMSideInnerE = function ($scope, $){
		$('.smm-side-toggle-btn').on("click", function () {
			$('.smm-sidebar-inner').toggleClass('wide_side_on');
			$('body').toggleClass('body_overlay_on');
		});
	};

	var SMMMemberSocialE = function ($scope, $) {
		$(".smm-team-img").on("click", function () {
			if ($(this).hasClass("social-show")) {
				$(this).removeClass("social-show");
			} else {
				$(".smm-team-img.social-show").removeClass("social-show");
				$(this).addClass("social-show");
			}
		});
	};

	var Cybtestimonial = function ($scope, $) {
		$("#cyb-testimonial-id").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: false,
			dots: true,
			loop: true,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
				1300: {
					items: 3,
				},
				1900: {
					items: 3,
				},
			},
		});
	};
	var emtestimonial = function ($scope, $) {
		$("#em-testimonial-slide-id").owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
		});

		if ($(".video_box").length) {
			$(".video_box").fancybox({
				openEffect: "fade",
				closeEffect: "fade",
				helpers: {
					media: {},
				},
			});
		}
	};

	var WebTestimonial = function ($scope, $) {
		$("#web-app-testimoial-slide").owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: true,
			autoplay: true,
		});
	};

	var CircleCounter = function ($scope, $) {
		if ($(".count-box").length) {
			$(".count-box").appear_c(
				function () {
					var $t = $(this),
						n = $t.find(".count-text").attr("data-stop"),
						r = parseInt(
							$t.find(".count-text").attr("data-speed"),
							10
						);
					if (!$t.hasClass("counted")) {
						$t.addClass("counted");
						$({
							countNum: $t.find(".count-text").text(),
						}).animate(
							{
								countNum: n,
							},
							{
								duration: r,
								easing: "linear",
								step: function () {
									$t.find(".count-text").text(
										Math.floor(this.countNum)
									);
								},
								complete: function () {
									$t.find(".count-text").text(this.countNum);
								},
							}
						);
					}
				},
				{ accY: 0 }
			);
		}
		if ($(".dial").length) {
			$(".dial").appear_c(
				function () {
					var elm = $(this);
					var color = elm.attr("data-fgColor");
					var perc = elm.attr("value");
					var thickness = elm.attr("thickness");
					elm.knob({
						value: 0,
						min: 0,
						max: 100,
						skin: "tron",
						readOnly: true,
						thickness: thickness,
						dynamicDraw: true,
						displayInput: false,
					});
					$({ value: 0 }).animate(
						{ value: perc },
						{
							duration: 3500,
							easing: "swing",
							progress: function () {
								elm.val(Math.ceil(this.value)).trigger(
									"change"
								);
							},
						}
					);
				},
				{ accY: 0 }
			);
		}
	};
	var Seo2Portfolio = function ($scope, $) {
		if ($(".seo-2-portfolio-content").length) {
			$(".seo-2-portfolio-content").owlCarousel({
				loop: true,
				nav: true,
				margin: 30,
				autoplay: 0,
				smartSpeed: 500,
				navText: [
					'<i class="fas fa-chevron-left"></i>',
					'<i class="fas fa-chevron-right"></i>',
				],
				responsive: {
					0: {
						items: 1,
					},
					480: {
						items: 1,
					},
					600: {
						items: 1,
					},
					700: {
						items: 2,
					},
					800: {
						items: 2,
					},
					900: {
						items: 3,
					},
					1024: {
						items: 3,
					},
				},
			});
		}
	};
	var MediService = function ($scope, $) {
		$(".medi-app-service-content").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: false,
			dots: true,
			loop: true,
			autoplay: false,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
	};
	var MediTestimonial = function ($scope, $) {
		$(".app-medi-testimonial-slider").owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			navSpeed: 800,
			smartSpeed: 1000,
		});
	};
	var ResSlider = function ($scope, $) {
		if ($(".app-res-slider-area").length) {
			$(".app-res-slider-area").owlCarousel({
				animateOut: "fadeOut",
				animateIn: "fadeIn",
				loop: true,
				margin: 0,
				nav: true,
				items: 1,
				dots: false,
				navText: [
					"<i class='fas fa-angle-left'></i>",
					"<i class='fas fa-angle-right'></i>",
				],
			});
		}
	};
	var ItTesti = function ($scope, $) {
		$(".it-up-testimonial-slider-wrap").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: false,
			dots: true,
			loop: true,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
				1100: {
					items: 3,
				},
				1300: {
					items: 3,
				},
				1900: {
					items: 3,
				},
			},
		});
	};
	var ItBlog = function ($scope, $) {
		$(".it-up-blog-slide").owlCarousel({
			margin: 30,
			responsiveClass: true,
			nav: false,
			dots: true,
			loop: true,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 1,
				},
				600: {
					items: 1,
				},
				700: {
					items: 2,
				},
				1000: {
					items: 3,
				},
				1100: {
					items: 3,
				},
				1300: {
					items: 3,
				},
				1900: {
					items: 3,
				},
			},
		});
	};

	var OsaasIntro = function ($scope, $) {
		if ($(".app-osaas-intro-feature-carousel").length) {
			$(".app-osaas-intro-feature-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: true,
				smartSpeed: 500,
				autoplay: 6000,
				navText: [
					'<span class="flaticon-left-arrow-3"></span>',
					'<span class="flaticon-right-arrow-3"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 1,
					},
					800: {
						items: 1,
					},
					1024: {
						items: 1,
					},
					1200: {
						items: 1,
					},
					1500: {
						items: 1,
					},
				},
			});
		}
	};

	var OsaasFeature = function ($scope, $) {
		if ($(".app-osaas-featured-carousel").length) {
			$(".app-osaas-featured-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: true,
				smartSpeed: 500,
				autoplay: 6000,
				navText: [
					'<span class="fa fa-caret-left"></span>',
					'<span class="fa fa-caret-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					800: {
						items: 3,
					},
					1024: {
						items: 3,
					},
					1200: {
						items: 4,
					},
					1500: {
						items: 5,
					},
					1800: {
						items: 6,
					},
				},
			});
		}
	};
	var OsaasPlatform = function ($scope, $) {
		//Tabs Box
		if ($(".app-osaas-tabs-box").length) {
			$(".app-osaas-tabs-box .tab-buttons .tab-btn").on(
				"click",
				function (e) {
					e.preventDefault();
					var target = $($(this).attr("data-tab"));

					if ($(target).is(":visible")) {
						return false;
					} else {
						target
							.parents(".app-osaas-tabs-box")
							.find(".tab-buttons")
							.find(".tab-btn")
							.removeClass("active-btn");
						$(this).addClass("active-btn");
						target
							.parents(".app-osaas-tabs-box")
							.find(".tabs-content")
							.find(".tab")
							.fadeOut(0);
						target
							.parents(".app-osaas-tabs-box")
							.find(".tabs-content")
							.find(".tab")
							.removeClass("active-tab");
						$(target).fadeIn(300);
						$(target).addClass("active-tab");
					}
				}
			);
		}
	};

	var OsaasLightbox = function ($scope, $) {
		if ($(".video_box").length) {
			$(".video_box").fancybox({
				openEffect: "fade",
				closeEffect: "fade",
				helpers: {
					media: {},
				},
			});
		}
	};
	var OsaasTeam = function ($scope, $) {
		if ($(".app-osaas-three-item-carousel").length) {
			$(".app-osaas-three-item-carousel").owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				smartSpeed: 500,
				autoplay: 6000,
				navText: [
					'<span class="fa fa-caret-left"></span>',
					'<span class="fa fa-caret-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 2,
					},
					800: {
						items: 2,
					},
					1024: {
						items: 3,
					},
					1200: {
						items: 3,
					},
					1500: {
						items: 3,
					},
				},
			});
		}
	};

	var OsaasSearch = function ($scope, $) {
		if ($(".app-osaas-search-box-outer").length) {
			$(".app-osaas-search-box-outer").on("click", function () {
				$("body").addClass("search-active");
			});
			$(".close-search").on("click", function () {
				$("body").removeClass("search-active");
			});
		}
	};
	var OsaasEngineers = function ($scope, $) {
		if ($(".app-osaas-single-item-carousel").length) {
			$(".app-osaas-single-item-carousel").owlCarousel({
				loop: true,
				margin: 0,
				nav: true,
				smartSpeed: 500,
				autoplay: 6000,
				navText: [
					'<span class="fa fa-caret-left"></span>',
					'<span class="fa fa-caret-right"></span>',
				],
				responsive: {
					0: {
						items: 1,
					},
					600: {
						items: 1,
					},
					800: {
						items: 1,
					},
					1024: {
						items: 1,
					},
					1200: {
						items: 1,
					},
					1500: {
						items: 1,
					},
				},
			});
		}
	};
	var gymtestimnial = function ($scope, $) {
		if ($(".app-gym-testimonial-slider").length) {
			$(".app-gym-testimonial-slider").owlCarousel({
				margin: 8,
				responsiveClass: true,
				nav: false,
				dots: true,
				loop: true,
				autoplay: false,
				smartSpeed: 1000,
				responsive: {
					0: {
						items: 1,
					},
					400: {
						items: 1,
					},
					600: {
						items: 2,
					},
					700: {
						items: 2,
					},
					900: {
						items: 3,
					},
					1000: {
						items: 3,
					},
				},
			});
		}
	};

// Landing 2 Review Slider
	var Appl2testimnial = function ($scope, $) {
		$(".apl-review-slider").slick({
			slidesToShow: 1,
			autoplay: false,
			speed: 1000,
			prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
			nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		});
	};

	// Landing 2 Filter
	var Appl2filtr = function ($scope, $) {
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
	};

	// Landing 2 Countdown
	let Appl2countdown = function ($scope, $) {
		$('.apl-countdown').find('ul').each(function () {
			var timedate = $('.appl2-countdown-date').data('date');
			$('.apl-countdown ul').downCount({
				date: timedate,
				offset: +6
			});
		});
	};
	// Landing 2 Gallery
	let Appl2gallery = function ($scope, $) {
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
	};

// Prysm Team
	let prysmTeam = function ($scope, $) {
		$scope.find('.pr1-team-section').each(function () {
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
		});
	};

	// Prysm Testimonial
	let prysmTestimonial = function ($scope, $) {
		$scope.find('.pr1-testimonial-section').each(function () {
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
		});
	};

// iTsoruce Testimonial
	let itSourceTestimonial = function ($scope, $) {
		$scope.find('.it-nx-testimonial-content').each(function () {
			if ($('.it-nx-testimonial-slider').length) {
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
			}
		});
	};
	// iTsoruce Blog
	let itSourceBlog = function ($scope, $) {
		$scope.find('.it-nw-blog-content').each(function () {
			if ($('.it-nw-blog-slider').length) {
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
			}
		});
	};
// itsource portfolio
	let itSourcePortfolio = function ($scope, $) {
		$scope.find('.it-nw-project-content').each(function () {

			if ($('.it-nw-project-slider-area').length) {
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
			}

		});
	};

// itsource video Lightbox
	let itSourceVideoLightBox = function ($scope, $) {
		$scope.find('.it-nw-why-choose-video-play').each(function () {

			jQuery('.video_box').magnificPopup({
				disableOn: 200,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
			});

		});
	};

	// Digital Marketing Counterup
	let digitalMarketingCounterUp = function ($scope, $) {
		$scope.find('.counter123').each(function () {
			$('.counter123').counterUp({
				delay: 10,
				time: 1500
			});
		});
	};

	// Digital Marketing Testimonial
	let digitalMarketingTestimonial = function ($scope, $) {
		$scope.find('.app-dm-testimonial-content').each(function () {

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


		});
	};

	// Digital Marketing Blog
	let digitalMarketingBlog = function ($scope, $) {
		$scope.find('.app-dm-blog-slider').each(function () {

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

		});
	};

	// Digital Marketing Project slider
	let digitalMarketingProjectSlider = function ($scope, $) {
		$scope.find('.app-dm-project-tab-slider-content').each(function () {
			$('.app-dm-project-slider-area').slick({
				arrow: false,
				dots: true,
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			});
		});
	};

	// Digital Marketing Project Nav Tab
	let digitalMarketingProjectNavTab = function ($scope, $) {
		$scope.find('.app-dm-project-tab-slider-content').each(function () {
			$('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
				e.target
				e.relatedTarget
				$('.app-dm-project-slider-area').slick('setPosition');
			});
		});
	};

	// Scrol Top
	let scrolTop2 = function ($scope, $) {
		$scope.find('.scrollup2').each(function () {
			$(window).on("scroll", function() {
				if ($(this).scrollTop() > 200) {
					$('.scrollup2').fadeIn();
				} else {
					$('.scrollup2').fadeOut();
				}
			});

			$('.scrollup2').on("click", function()  {
				$("html, body").animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});
	};

	// Business Expert About Countdown
	let APBCCounterup = function ($scope, $) {
		$scope.find('.apbc-counterup').each(function () {
			$(".apbc-counterup").counterUp({
				time: 1800,
			});
		});
	};
	// Business Expert Number Countdown
	let APBCNumberCounterup = function ($scope, $) {
		$scope.find('.apbc-video-content').each(function () {
			$(".apbc-counterup").counterUp({
				time: 1800,
			});
		});
	};
	// Business Expert Service Slider
	let APBCServiceSlider = function ($scope, $) {
		$scope.find('.apbc-service-slider').each(function () {
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
		});
	};
	// Business Expert Team
	let APBCTeamCarousel = function ($scope, $) {
		$scope.find('.apbc-team-carousel').each(function () {
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

        });
	};
	// Business Expert Testimonial
	let APBCFeedBack = function ($scope, $) {
		$scope.find('.apbc-client-feedback').each(function () {
            $(".apbc-client-feedback").slick({
                slidesToShow: 1,
                prevArrow: '<button type="button" class="prev-arrow"><i class="flaticon-left-arrow-2"></i></button>',
                nextArrow: '<button type="button" class="next-arrow"><i class="flaticon-right-arrow-2"></i></button>',
                autoplay: true,
                dots: true,
            });
        });
	};
	// Business Expert Toggle
	let APBCToggle = function ($scope, $) {
		$scope.find('.apbc-sidebar-btn').each(function () {
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
        });
	};
	// Business Expert Slider
	let APBCHeroSlider = function ($scope, $) {
		$scope.find('.apbc-hero-slider').each(function () {
			$(".apbc-hero-slider").slick({
				slidesToShow: 1,
				autoplaySpeed: 6000,
				autoplay: true,
				arrows: false,
				dots: true,
			});
        });
	};

	// Seo Agency Slider
	let seoAgencySlider = function ($scope, $) {
		$scope.find('.apldg2-hero-slider').each(function () {
			$(".apldg2-hero-slider").slick({
				slidesToShow: 1,
				autoplay: false,
				dots: true,
				arrows: false,
			});
		});
	};
	// Seo Agency progress bar
	let seoAgencyProgressBar = function ($scope, $) {
		$scope.find('.progress-bar-seo-agency').each(function () {
            $(".progress-bar-seo-agency").ProgressBar();
		});
	};
	// Seo Agency Counter Up
	let seoAgencyCounterUp = function ($scope, $) {
		$scope.find('.apldg2-achivement-right').each(function () {
			$(".counterup").counterUp({
				delay: 10,
				time: 1000
			});
		});
	};
	// Seo Agency Service Slider
	let seoAgencyServiceSlider = function ($scope, $) {
		$scope.find('.apldg2-services-slider').each(function () {
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
						}
					}
				]
			});
		});
	};
	// Seo Agency testimonial Slider
	let seoAgencyTestimonialSlider = function ($scope, $) {
		$scope.find('.apldg2-feedback-slider').each(function () {
			$(".apldg2-feedback-slider").slick({
				slidestoShow: 1,
				autoplay: true,
				dots: false,
				arrows: true,
				prevArrow: '<button type="button" class="prev-btn"><i class="fas fa-arrow-left"></i></button>',
				nextArrow: '<button type="button" class="next-btn"><i class="fas fa-arrow-right"></i></button>',
			});
		});
	};
	// Seo Agency Blog Slider
	let seoAgencyBlogSlider = function ($scope, $) {
		$scope.find('.apldg2-blog-slider').each(function () {
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
		});
	};
	// Seo Agency Project slider
	let seoAgencyProjectSlider = function ($scope, $) {
		$scope.find('.apldg2-project-slider').each(function () {
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
        });
	};
	// Seo Agency Video Popup
	let seoAgencyVideoPopUp = function ($scope, $) {
		$scope.find('.apldg2-video-popup').each(function () {
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
		});
	};
	// Resume/CV Testimonial
	let resumeTestimonial = function ($scope, $) {
		$scope.find('.apihu-port-testimonial-slider').each(function () {
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
		});
	};
	// Resume/CV Client Logo
	let resumeClientLogo = function ($scope, $) {
		$scope.find('.apihu-port-clients-carousel').each(function () {
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
		});
	};
	// Resume/CV Blog
	let resumeBlog = function ($scope, $) {
		$scope.find('.apihu-port-blog-carousel').each(function () {
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
		});
	};
	// Resume/CV portfolio
	let resumePortfolio = function ($scope, $) {
		$scope.find('.apihu-port-portfolio-area').each(function () {
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
		});
	};

	// Crypto Partner Slider
	let CrPartnerSlide = function ($scope, $) {
		$scope.find('.cr-partner-slide').each(function () {
			$('.cr-partner-slide').owlCarousel({
				margin:100,
				responsiveClass:true,
				nav: false,
				dots: false,
				loop:true,
				items: 5,
				autoplay: true,
				smartSpeed: 1000,
				responsive:{
					0:{
						items:2,
					},
					400:{
						items:2,
					},
					600:{
						items:2,
					},
					700:{
						items:3,
					},
					1000:{
						items:5,

					}
				},
			});
		});
	};

	// Crypto Count Down
	let CRcountDown = function ($scope, $) {
		$scope.find('.countdown_timer').each(function () {
			$('.countdown_timer').each(function(){
				$('[data-countdown]').each(function() {
					var $this = $(this), finalDate = $(this).data('countdown');
					$this.countdown(finalDate, function(event) {
						var $this = $(this).html(event.strftime(''
							+ '<li class="days_count"><strong>%D</strong><span>Days</span></li>'
							+ '<li class="hours_count"><strong>%H</strong><span>Hours</span></li>'
							+ '<li class="minutes_count"><strong>%M</strong><span>Mins</span></li>'
							+ '<li class="seconds_count"><strong>%S</strong><span>Secs</span></li>'));
					});
				});
			});
		});
	};

	// Crypto Blog Slider
	let CrblogSlide = function ($scope, $) {
		$scope.find('.cr-blog-slider').each(function () {
			$('.cr-blog-slider').owlCarousel({
				margin:30,
				responsiveClass:true,
				nav: false,
				dots: true,
				loop:true,
				items: 3,
				autoplay: true,
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
					1000:{
						items:3,

					}
				},
			});
		});
	};

	// NFT Top Creator
	let nftTopCreator = function ($scope, $) {
		$scope.find('.nft-top-creator-slider').each(function () {
            $('.nft-top-creator-slider').slick({
                infinite: false,
                arrow: true,
                rows: 2,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: ".main_left_arrow2",
                nextArrow: ".main_right_arrow2",
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            arrows: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            slidesToShow: 1
                        }
                    }
                ]
            });
		});
	};
	// NFT Live Bid
	let nftLiveBid = function ($scope, $) {
		$scope.find('.nft-live-bid-slider').each(function () {
            $('.nft-live-bid-slider').owlCarousel({
                nav: false,
                dots: true,
                loop:true,
                items: 1,
                autoplay: false,
                smartSpeed: 1000,
            });
		});
	};
	// Demo Page 3 video box
	let demoPage3VideoBox = function ($scope, $) {
		$scope.find('.thx_video_box').each(function () {
			$('.thx_video_box').magnificPopup({
				disableOn: 200,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false,
			});
		});
	};

	// Demo Page 3 video box slider
	let demoPage3VideoBoxSlider = function ($scope, $) {
		$scope.find('.thx-video-item-slider').each(function () {
			$('.thx-video-item-slider').slick({
				infinite: false,
				slidesToShow: 1,
				autoplay: false,
				slidesToScroll: 1,
				dots: false,
				nav: true,
				autoplaySpeed: 5000,
				nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
				prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
			});
		});
	};

	// Demo Page 3 Demo filter
	let demoPage3DemoFilter = function ($scope, $) {
		$scope.find('.filtr-container').each(function () {

            $('.filtr-container').imagesLoaded ( function(){});
            var filterizd = $('.filtr-container');

            if(filterizd.length) {
                filterizd.filterizr({

                });
                $('.filtr-button').on('click', function() {

                    $('.filtr-button.filtr-active').removeClass('filtr-active');
                    $(this).addClass('filtr-active');
                });
            }

		});
	};

	// Demo Page 3 Inner page slider
	let demoPage3InnerPageSlider = function ($scope, $) {
		$scope.find('.inner-page-slider').each(function () {

			$('.inner-page-slider').slick({
				centerMode: true,
				dots: false,
				nav: true,
				centerPadding: '0px',
				variableWidth: true,
				slidesToShow: 1,
				nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
				prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
				responsive: [
					{
						breakpoint: 1450,
						settings: {
							arrows: true,
							centerMode: true,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 850,
						settings: {
							arrows: true,
							centerMode: true,
							slidesToShow: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: true,
							centerMode: true,
							slidesToShow: 1
						}
					}
				]
			});

		});
	};

	// Demo Page 3 page speed counter
	let demoPage3PageSpeedCircle = function ($scope, $) {
		$scope.find('.thx-count-box').each(function () {

            if($('.thx-count-box').length){
                $('.thx-count-box').appear_c(function(){
                    var $t = $(this),
                        n = $t.find(".thx-count-text").attr("data-stop"),
                        r = parseInt($t.find(".thx-count-text").attr("data-speed"), 10);
                    if (!$t.hasClass("counted")) {
                        $t.addClass("counted");
                        $({
                            countNum: $t.find(".thx-count-text").text()
                        }).animate({
                            countNum: n
                        }, {
                            duration: r,
                            easing: "linear",
                            step: function() {
                                $t.find(".thx-count-text").text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $t.find(".thx-count-text").text(this.countNum);
                            }
                        });
                    }
                },{accY: 0});
            }

		});
	};

	// IT Source 2 Slider
	let ItSource_2_MianSlider = function ($scope, $) {
		$scope.find('#thx-it-slider-id').each(function () {

			jQuery('#thx-it-slider-id').owlCarousel({
				items: 1,
				margin: 0,
				loop: true,
				nav: true,
				dots: false,
				navSpeed: 800,
				autoplay: true,
				navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
				smartSpeed: 2000,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
			});

		});
	};
	// IT Source 2 style 2 feature slider
	let ItSource_2_style2_feature = function ($scope, $) {
		$scope.find('.thx-it-feature-slide-item').each(function () {
			jQuery('.thx-it-feature-slide-item').owlCarousel({
				items: 1,
				loop: true,
				nav: false,
				dots: true,
				autoplay: true,
				navSpeed: 800,
				smartSpeed: 1000,
			});
		});
	};
	// IT Source 2 style 2 portfolio slider
	let ItSource_2_portfolio_slider = function ($scope, $) {
		$scope.find('#thx-it-portfolio-slide').each(function () {
			$('#thx-it-portfolio-slide').owlCarousel({
				margin:30,
				responsiveClass:true,
				nav: true,
				dots: false,
				loop:true,
				center: true,
				lazyLoad : true,
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

					},
					1300:{
						items:3,

					},
					1900:{
						items:4,

					},
				},
			})
		});
	};
	// IT Source 2 testimonial
	let ItSource_2_Testimonial = function ($scope, $) {
		$scope.find('#thx-it-testimonial-slide').each(function () {
			$('#thx-it-testimonial-slide').owlCarousel({
				items:1,
				nav:false,
				dots: true,
				loop:true,
				margin:30,
				autoplay: false,
				smartSpeed:1000,
				autoplayTimeout:5000,
				autoplayHoverPause:true,
				animateIn: 'lightSpeedIn'
			});
		});
	};
	// IT Source 2 Circle counter
	let ItSource_2_CircleCounter = function ($scope, $) {
		if($('.count-box').length){
			$('.count-box').appear_c(function(){
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
			},{accY: 0});
		}
		if($('.thx-it_2-dial').length){
			$('.thx-it_2-dial').appear_c(function(){
				var elm = $(this);
				var color = elm.attr('data-fgColor');
				var perc = elm.attr('value');
				var thickness = elm.attr('thickness');
				elm.knob({
					'value': 0,
					'min':0,
					'max':100,
					'skin':'tron',
					'readOnly':true,
					'thickness':.2,
					'dynamicDraw': true,
					'displayInput':false
				});
				$({value: 0}).animate({ value: perc }, {
					duration: 3500,
					easing: 'swing',
					progress: function () { elm.val(Math.ceil(this.value)).trigger('change');
					}
				});
			},{accY: 0});
		}
	};


	$(window).on("elementor/frontend/init", function () {
		if (elementorFrontend.isEditMode()) {


			// IT Source 2 Circle Counter
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource_platform_2.default',
				ItSource_2_CircleCounter
			);
			// IT Source 2 style Testimonial
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource_testimonial_2.default',
				ItSource_2_Testimonial
			);
			// IT Source 2 style 2 portfolio slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource_portfolio_2.default',
				ItSource_2_portfolio_slider
			);
			// It source 2 slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource_slider_2.default',
				ItSource_2_MianSlider
			);
			// Demo Page 3 page speed counter
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/demo_3_load_speed.default',
                demoPage3PageSpeedCircle
			);

			// Demo Page 3 Inner Page Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/demo_3_inner_pages.default',
				demoPage3InnerPageSlider
			);

			// Demo Page 3 Demo Filter
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/demo_3_demo_list.default',
                demoPage3DemoFilter
			);

			// Demo Page 3 video box slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/demo_3_video.default',
				demoPage3VideoBoxSlider
			);
			// Demo Page 3 Video box
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/demo_3_video.default',
				demoPage3VideoBox
			);
			// NFT Live Bid
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/nft_live_bid.default',
                nftLiveBid
			);
			// NFT Top Creator
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/nft_top_creator.default',
                nftTopCreator
			);
			// Crypto Countdown
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/crypto_blog.default',
				CrblogSlide
			);
			// Crypto Countdown
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/crypto_offer.default',
				CRcountDown
			);
			// Crypto partner
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/crypto_partner.default',
				CrPartnerSlide
			);
			// Resume portfolio
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/resume_portfolio.default',
				resumePortfolio
			);
			// Resume Blog
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/resume_blog.default',
				resumeBlog
			);
			// Resume Client Logo
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/resume_client_area.default',
				resumeClientLogo
			);
			// Resume Testimonial
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/resume_testimonial.default',
				resumeTestimonial
			);
			// Seo Agency Blog Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo-agency-video-lightbox-btn.default',
				seoAgencyVideoPopUp
			);
			// Seo Agency Blog Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo_agency_project.default',
                seoAgencyProjectSlider
			);
			// Seo Agency Blog Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo_agency_blog.default',
				seoAgencyBlogSlider
			);
			// Seo Agency Tesimonial Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo-agency-testimonial.default',
				seoAgencyTestimonialSlider
			);
			// Seo Agency Service Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo-agency-service.default',
				seoAgencyServiceSlider
			);
			// Seo Agency Counter Up
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo-agency-counter.default',
				seoAgencyCounterUp
			);
			// Seo Agency Progress Bar
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo-agency-progress-bar.default',
                seoAgencyProgressBar
			);
			// Seo Agency Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/seo-agency-slider.default',
				seoAgencySlider
			);
			// Business Expert Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-slider.default',
				APBCHeroSlider
			);
			// Business Expert Toggle
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-toggle.default',
				APBCToggle
			);
			// Business Expert Feedback
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-testimonial.default',
                APBCFeedBack
			);
			// Business Expert Team
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-team.default',
                APBCTeamCarousel
			);
			// Business Expert Service Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-service.default',
				APBCServiceSlider
			);
			// Business Expert Number Countdown
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-counter.default',
				APBCNumberCounterup
			);
			// Business Expert About Countdown
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/bx-about-counter.default',
				APBCCounterup
			);
			// Scrol Top
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/appilo-scroll-top-2.default',
				scrolTop2
			);

			// Digital Marketing Project Nav Tab
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/dm_project.default',
				digitalMarketingProjectNavTab
			);

			// Digital Marketing Project Slider
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/dm_project.default',
				digitalMarketingProjectSlider
			);

			// Digital Marketing Testimonial
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/dm-blog.default',
				digitalMarketingBlog
			);

			// Digital Marketing Testimonial
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/dm-testimonial.default',
				digitalMarketingTestimonial
			);

			// Digital Marketing Counterup
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/dm-counter.default',
				digitalMarketingCounterUp
			);

			// Elementor Icon LightBox
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/global',
				elementorIconLightBox
			);

			// itsource Video Lightbox
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/it-video-lightbox-btn.default',
				itSourceVideoLightBox
			);

			// itsource Portfolio
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource-portfolio.default',
				itSourcePortfolio
			);

			// itsource blog
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource-blog.default',
				itSourceBlog
			);

			// iTsoruce Testimonial
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/itsource-testimonial.default',
				itSourceTestimonial
			);

			// Prysm Team
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/prysm-team.default',
				prysmTeam
			);

			// Prysm Testimonial
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/prysm-testimonial-slider.default',
				prysmTestimonial
			);


			// Landing 2 Gallery
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/appl2-gallery.default',
				Appl2gallery
			);

			//Landing 2 Countdown
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/appl2-countdown.default',
				Appl2countdown
			);

			//Landing 2 Filter
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/appl2-filter.default',
				Appl2filtr
			);

			//Landing 2 Reviews
			elementorFrontend.hooks.addAction(
				'frontend/element_ready/appl2-testimonial.default',
				Appl2testimnial
			);

			//App Showcase
			//Service
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/gym-testimonial.default",
				gymtestimnial
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-engineers.default",
				OsaasEngineers
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-search.default",
				OsaasSearch
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-members.default",
				OsaasTeam
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-platform.default",
				OsaasPlatform
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-testimonial.default",
				OsaasPlatform
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-platform2.default",
				OsaasPlatform
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-lightbox.default",
				OsaasLightbox
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-features2.default",
				OsaasFeature
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/osaas-intro.default",
				OsaasIntro
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-showcase-service.default",
				ASCservices
			);
			//Team
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-showcase-team-members.default",
				ASCteam
			);
			//Team
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-showcase-partner.default",
				ASCpartner
			);
			//Testimonial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-showcase-testimonial.default",
				ASCtestimonial
			);
			//Scroller
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-showcase-scroller.default",
				ASCscroller
			);

			//Appilo
			//Features
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-app-features.default",
				APfeature
			);
			//Blog
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-blog-style.default",
				APblog
			);
			//Pricing
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-pricing-table.default",
				APpricing
			);
			//Testimonial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-testimonial.default",
				APtestimonial
			);
			//Video Play
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-video-play.default",
				APvideo
			);

			//Topapp
			//Team
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/topapp-team.default",
				TPteam
			);
			//Pricing
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/topapp-pricing-table.default",
				TPpricing
			);
			//Banner
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/topapp-banner-slider.default",
				TPbanner
			);
			//Galaxy
			//Testimonial 1
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/galaxy-testimonial-one.default",
				GYtestimonial1
			);
			//Testimonial 2
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/galaxy-testimonial-two.default",
				GYtestimonial2
			);
			//Project Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/galaxy-projects-slider.default",
				GYprojectslider
			);
			//Screenshots Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/galaxy-screenshots-slider.default",
				GYscreenshotslider
			);
			//Pricing Table
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/galaxy-pricing-table.default",
				GYpricingtable
			);
			//Galaxy Blog
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/galaxy-blog.default",
				GYblog
			);
			//SaaS Classic
			//Team
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/saas-classic-team-members.default",
				SCteam
			);

			//Appilo SEO
			//Testimonial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appilo-seo-testimonial.default",
				AStestimonial
			);

			//App Startup
			//Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-startup-slider.default",
				STRslider
			);
			//Feature
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-startup-feature.default",
				STRfeature
			);
			//Blog
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-startup-blog.default",
				STRblog
			);
			//Portfolio
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-startup-portfolio.default",
				STRportfolio
			);
			//Team
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-startup-team.default",
				STRteam
			);
			//About Progress
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/app-startup-about.default",
				STRpro
			);

			elementorFrontend.hooks.addAction(
				'frontend/element_ready/global',
				AplAnimation
			);

			//Digital Agency
			//Portfolio
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/dia-portfolio.default",
				DiaPortSlider
			);
			//Skill Bar
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/dia-experience.default",
				SkillProgress
			);

			//Appilo Landing
			//Filter Demo Showcase
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/demo-filter-showcase.default",
				FilterDemoShowcase
			);
			//Initial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/global",
				AplAnimation
			);
			//Testimonial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/appl-testimonial.default",
				AplReviewSlide
			);

			// SaaS
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/saas-features.default",
				SaasFeature
			);

			// Cloud Hosting
			//    Ch1 Info Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/cloud-hosting-features.default",
				Ch1InfoSlider
			);
			//    Ch1 Testimonial Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/cloud-hosting-testimonial.default",
				Ch1TestSlider
			);

			//HRM Counter
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/hrm-blog.default",
				Hrmposts
			);

			//CRM Services
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/crm-services.default",
				CRMScroller
			);
			//CRM Screen Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/crm-screen-slider.default",
				CRMScreenSlider
			);
			//CRM Testi Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/crm-testimonial-slider.default",
				CRMTestimonialSlider
			);

			//smm Testi Slider
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/smm-testimonial-slider.default",
				SMMTestimonialSlider
			);

			//smm team
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/smm-members.default",
				SMMMemberSocialE
			);
			//smm case study
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/smm-portfolio-filter.default",
				SMMfilter
			);
			//smm progress
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/smm-progress.default",
				SmmSkillProgress
			);
			//smm toggle
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/smm-toggle.default",
				SMMSideInnerE
			);
			//cyber security testimonial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/cyber-security-testimonial.default",
				Cybtestimonial
			);
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/email-marketing-testimonial.default",
				emtestimonial
			);
			//Web Testimonial
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/web-app-testimonial.default",
				WebTestimonial
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/circle-counter.default",
				CircleCounter
			);

			elementorFrontend.hooks.addAction(
				"frontend/element_ready/seo2-portfolio.default",
				Seo2Portfolio
			);
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/medi-service.default",
				MediService
			);
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/medi-testimonial.default",
				MediTestimonial
			);
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/restaurant-slider.default",
				ResSlider
			);
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/it-testimonial.default",
				ItTesti
			);
			elementorFrontend.hooks.addAction(
				"frontend/element_ready/it-blog.default",
				ItBlog
			);
		}
	});
	console.log("editor mood js loaded");
})(jQuery);
