/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:

-------------------------------------------------------------------------------- */
(function() {

    "use strict";

    //Submenu Dropdown Toggle
	if($('.apl3-main-header li.dropdown ul').length){
		$('.apl3-main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.apl3-main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
		//Disable dropdown parent link
		$('.apl3-main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
		
	}
    function headerStyle() {
	if($('.apl3-main-header').length){
        var windowpos = $(window).scrollTop();
        var siteHeader = $('.apl3-main-header');
        var scrollLink = $('.scroll-to-top');
        
        var HeaderHight = $('.apl3-main-header').height();
        if (windowpos >= HeaderHight) {
            siteHeader.addClass('fixed-header');
            scrollLink.fadeIn(300);
        } else {
            siteHeader.removeClass('fixed-header');
            scrollLink.fadeOut(300);
        }
        
    }
}
	
headerStyle();
$(window).on('scroll', function() {
    headerStyle();
});
	
	//Mobile Nav Hide Show
	if($('.apl3-mobile-menu').length){
		
		$('.apl3-mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.apl3-main-header .nav-outer .apl3-main-menu').html();
		$('.apl3-mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .apl3-main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.apl3-mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('apl3-mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.apl3-mobile-menu .menu-backdrop,.apl3-mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('apl3-mobile-menu-visible');
		});
		
	}

    //Typeit Text On Main Page
    function typyScriptRun($scope, $) {
        if ($('.variable-text').length) {
            
            $('.variable-text').typeIt({
                strings: ["Make Your life easy <br> by Our app."],
                speed: 200,
                breakLines: true,
                loop:false,
                autoStart: true
            });	
        }
	}

    function appScreenSlider($scope, $) {
        // App Carousel
        if ($('.apl3-app-carousel').length) {
            $('.apl3-app-carousel').owlCarousel({
                //animateOut: 'fadeOut',
                //animateIn: 'fadeIn',
                loop:true,
                margin:80,
                nav:true,
                center:true,
                //autoHeight: true,
                smartSpeed: 500,
                autoplay: 6000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2,
                        margin:20
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:3,
                        margin:40
                    },
                    1200:{
                        items:3
                    },
                    1400:{
                        items:3
                    }
                }
            });    		
        }
	}
    function appScreenshotSlider($scope, $) {
        if ($('.appScreenshotCarousel-container').length) {

            var swiper = new Swiper('.appScreenshotCarousel-container', {
                effect: 'coverflow',
                loop: true,
                auto: true,
                centeredSlides: true,
                slidesPerView: 3,
                initialSlide: 3,
                keyboardControl: true,
                mousewheelControl: false,
                grabCursor: true,
                lazyLoading: true,
                autoplay: 5000,
                speed: 600,
                paginationClickable: true,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows : true,
                },
                //preventClicks: false,
                //preventClicksPropagation: false,
                //lazyLoadingInPrevNext: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                coverflow: {
                    rotate: 0,
                    stretch: -15,
                    depth: 30,
                    modifier: 5,
                    slideShadows: false,
                },
                breakpoints: {
                    1699: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    330: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                },
            });

        }
	}
    function apl3TestimonialActive($scope, $) {
        // Single Item Carousel
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                //animateOut: 'fadeOut',
                //animateIn: 'fadeIn',
                loop:true,
                margin:0,
                nav:true,
                center:true,
                //autoHeight: true,
                smartSpeed: 500,
                autoplay: 6000,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:1
                    },
                    1024:{
                        items:1
                    },
                    1200:{
                        items:1
                    },
                    1400:{
                        items:1
                    }
                }
            });    		
        }
	}

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/landing3_appscreen.default', appScreenSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/landing3_banner.default', typyScriptRun);
        elementorFrontend.hooks.addAction('frontend/element_ready/landing3_appscreenshot.default', appScreenshotSlider);
        elementorFrontend.hooks.addAction('frontend/element_ready/landing3_testimonial.default', apl3TestimonialActive);
    });

})();