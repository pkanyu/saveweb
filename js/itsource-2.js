(function ($) {
    "use strict";

    var Itsource = {
        init: function() {
            this.Basic.init();
        },

        Basic: {
            init: function() {
                this.Animation();
                this.StickeyHeader();
                this.MobileMenu();
                this.MianSlider();
                this.BackgroundImage();
                this.searchPopUp();
                this.SideInner();
                this.counterUp();
                this.blogSlider();
                this.FeatureSlider();
                this.CirleProgress();
                this.portfolioSlide();
                this.testiSlider();
                this.ProjectFilter();
                this.faqShadow();
                this.ContactForm();

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
            StickeyHeader: function (){
                jQuery(window).on('scroll', function() {
                    if (jQuery(window).scrollTop() > 100) {
                        jQuery('.thx-it-header-area').addClass('sticky-header-overlay')
                    } else {
                        jQuery('.thx-it-header-area').removeClass('sticky-header-overlay')
                    }
                })
            },
            MobileMenu: function (){
                $('.open_mobile_menu').on("click", function() {
                    $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.open_mobile_menu').on('click', function () {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if($('.mobile_menu-dropdown li.dropdown ul').length){
                    $('.mobile_menu-dropdown li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.mobile_menu-dropdown li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
                $(".dropdown-btn").on("click", function () {
                    $(this).toggleClass("toggle-open");
                });
            },
            MianSlider: function (){
                $('#thx-it-slider-id').owlCarousel({
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
            },
            BackgroundImage: function (){
                $('[data-background]').each(function() {
                    $(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
                });
            },
            searchPopUp: function (){
                $('.search-btn').on('click', function() {
                    $('.search-body').toggleClass('search-open');
                });
            },
            SideInner: function (){
                $('.open_side_area').on("click", function() {
                    $('.wide_side_inner').toggleClass("wide_side_on");
                });
                $('.open_side_area').on('click', function () {
                    $('body').toggleClass('body_overlay_on');
                });
            },
            counterUp: function (){
                if($('.thx-it-counter').length){
                    $('.thx-it-counter').counterUp({
                        delay: 50,
                        time: 2000,
                    });
                }
            },
            FeatureSlider: function (){
                $('.thx-it-feature-slide-item').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: false,
                    dots: true,
                    autoplay: true,
                    navSpeed: 800,
                    smartSpeed: 1000,
                });
            },

            blogSlider: function (){
                $('#blod_slide').owlCarousel({
                    items: 1,
                    loop: true,
                    nav: true,
                    dots: false,
                    autoplay: false,
                    navSpeed: 800,
                    smartSpeed: 1000,
                    animateOut: 'fadeOut',
                    navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
                });
            },

            CirleProgress: function (){
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
            },

            portfolioSlide: function (){
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
            },
            testiSlider: function (){
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
            },
            ProjectFilter: function (){
                var $grid = $('.grid').imagesLoaded( function() {
                    $grid.masonry({
                        percentPosition: true,
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-sizer'
                    });
                });
                var $grid = $(".grid").isotope({
                    itemSelector: ".grid-item",
                    layoutMode: "fitRows"
                });
                var filterFns = {
                    numberGreaterThan50: function() {
                        var number = $(this)
                            .find(".number")
                            .text();
                        return parseInt(number, 10) > 50;
                    },
                    ium: function() {
                        var name = $(this)
                            .find(".name")
                            .text();
                        return name.match(/ium$/);
                    }
                };
                $(".button-group").on("click", "button", function() {
                    var filterValue = $(this).attr("data-filter");
                    filterValue = filterFns[filterValue] || filterValue;
                    $grid.isotope({ filter: filterValue });
                });

                $(".button-group").each(function(i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on("click", "button", function() {
                        $buttonGroup.find(".is-checked").removeClass("is-checked");
                        $(this).addClass("is-checked");
                    });
                });
            },
            faqShadow: function (){
                $(".faq_area1").on('click', function() {
                    $(".faq_area1").removeClass("active");
                    $(this).addClass("active");
                });
                $(".faq_area2").on('click', function() {
                    $(".faq_area2").removeClass("active");
                    $(this).addClass("active");
                });
            },
            ContactForm: function (){
                if($('#contact_form').length){
                    $('#contact_form').validate({
                        rules: {
                            name: {
                                required: true
                            },
                            email: {
                                required: true,
                            },
                            phone: {
                                required: true
                            },
                            subject: {
                                required: true
                            },
                            message: {
                                required: true
                            }
                        }
                    });
                }
            },
        }
    };
    jQuery(document).ready(function (){
        Itsource.init();

// menus sidebar
        $('.open_side_area').on("click", function() {
            $('.wide_side_inner').toggleClass("wide_side_on");
        });
        $('.open_side_area').on('click', function () {
            $('body').toggleClass('body_overlay_on');
        });

// Mobile Menu
        $('.open_mobile_menu').on("click", function() {
            $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
        });
        $('.open_mobile_menu').on('click', function () {
            $('body').toggleClass('mobile_menu_overlay_on');
        });
        $(".dropdown-btn").on("click", function () {
            $(this).toggleClass("toggle-open");
        });





    });

})(jQuery);


