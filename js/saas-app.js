(function ($) {
    "use strict";

    // back to top start
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.backtotop:hidden').stop(true, true).fadeIn();
        } else {
            $('.backtotop').stop(true, true).fadeOut();
        }
    });
    $(function() {
        $(".scroll").on('click', function() {
            $("html,body").animate({scrollTop: 0}, "slow");
            return false
        });
    });

    // preloader js start
    function loader() {
        $(window).on('load', function () {
            $('#ctn-preloader').addClass('loaded');
            $("#loading").fadeOut(500);
            // Una vez haya terminado el preloader aparezca el scroll

            if ($('#ctn-preloader').hasClass('loaded')) {
                // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
                $('#preloader').delay(900).queue(function () {
                    $(this).remove();
                });
            }
        });
    }
    loader();

    // mobile menu start
    $('#mobile-menu-active').metisMenu();

    $('#mobile-menu-active .dropdown > a').on('click', function (e) {
        e.preventDefault();
    });

    $(".hamburger_menu > a").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").toggleClass("show");
        $("body").addClass("on-side");
        $('.body-overlay').addClass('active');
        $(this).addClass('active');
    });

    $(".close-mobile-menu > a").on("click", function (e) {
        e.preventDefault();
        $(".slide-bar").removeClass("show");
        $("body").removeClass("on-side");
        $('.body-overlay').removeClass('active');
        $('.hamburger_menu > a').removeClass('active');
    });

    $('.body-overlay').on('click', function () {
        $(this).removeClass('active');
        $(".slide-bar").removeClass("show");
        $("body").removeClass("on-side");
        $('.hamburger-menu > a').removeClass('active');
    });
    // mobile menu end

    //data background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
    })

    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));

    });

    // brand carousel active
    $('.brand__slide').owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        autoplay: true,
        autoplayTimeout:5000,
        smartSpeed: 800,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            767:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // brand carousel active
    $('.testimonial__slide').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout:5000,
        smartSpeed: 800,
        autoplayHoverPause:true,
        navText:['<i class="far fa-long-arrow-left"></i>','<i class="far fa-long-arrow-right"></i>'],
        nav: true,
        dots: false,
    });

    // Elements Animation
    if($('.wow').length){
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       true,       // trigger animations on mobile devices (default is true)
                live:         true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    // inhover active start
    $(".feature__item").on('mouseenter', function () {
        $(".feature__item").removeClass("active");
        $(this).addClass("active");
    });

    $(".review__item").on('mouseenter', function () {
        $(".review__item").removeClass("active");
        $(this).addClass("active");
    });

    $(".pricing__single").on('mouseenter', function () {
        $(".pricing__single").removeClass("active");
        $(this).addClass("active");
    });

    // nhover active start



    // Active Odometer Counter
    jQuery('.odometer').appear(function (e) {
        var odo = jQuery(".odometer");
        odo.each(function () {
            var countNumber = jQuery(this).attr("data-count");
            jQuery(this).html(countNumber);
        });
    });

    // Accordion Box
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");

            if ($(this).next(".acc-content").is(":visible")) {
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }

    $('.main-menu nav > ul > li').slice(-3).addClass('menu-last');




})(jQuery);