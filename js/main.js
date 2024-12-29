(function ($) {
    "use strict";
    var t = {
        init: function () {
            this.Basic.init();
        },
        Basic: {
            init: function () {
                    this.ImageAnimation(),
                    this.ImageDataAnimation(),
                    this.ImageHoverAnimation(),
                    this.MegaMenuMobile(),
                    this.RandomOptions(),
                    this.elementorIconLightbox(),
                    this.scrollTop(),
                    this.InViewAnimation();
            },
            MegaMenuMobile: function () {
                $(window).on('load', function () {
                    if ($(window).width() < 991) {
                        $('.htmegamenu-content-wrapper').addClass('dropdown-menu');
                    }
                });
                if ($('.tmx-mega-menu').length) {
                    $('li.tmx-mega-menu').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('li.tmx-mega-menu .dropdown-btn').on('click', function () {
                        $(this).prev('.htmegamenu-content-wrapper').slideToggle(500);
                    });
                }
                $('.js-tilt').tilt({});
            },
            ImageAnimation: function () {
                $(".man-updown.elementor-widget-image").css("animation", "man-updown 2s infinite alternate");
                $(".IT_animation_1.elementor-widget-image").css("animation", "IT_animation_1 12s infinite linear alternate");
                $(".IT_animation_2.elementor-widget-image").css("animation", "IT_animation_2 12s infinite linear alternate");
                $(".IT_animation_3.elementor-widget-image").css("animation", "IT_animation_3 12s infinite linear alternate");
                $(".IT_animation_4.elementor-widget-image").css("animation", "IT_animation_4 12s infinite linear alternate");
                $(".IT_animation_5.elementor-widget-image").css("animation", "IT_animation_5 12s infinite linear alternate");
                $(".rotate-anim.elementor-widget-image").css("animation", "rotate-anim 3s infinite linear");
                $(".icon-bounce.elementor-widget-image").css("animation", "icon-bounce 0.8s ease-out infinite");
                $(".image-infint.elementor-widget-image").css("animation", "50s linear infinite img-infinity");
            },
            ImageHoverAnimation: function () {
                $('.flip-animation').hover(
                    function () {
                        $(this).addClass('flip-animations')
                    },
                    function () {
                        $(this).removeClass('flip-animations')
                    }
                )
            },
            ImageDataAnimation: function () {
                var x1 = $('.it-data-animation-1.elementor-widget-image');
                var x2 = $('.it-data-animation-2.elementor-widget-image');
                var x3 = $('.it-data-animation-3.elementor-widget-image');
                var x4 = $('.it-data-animation-4.elementor-widget-image');

                x1.attr('data-parallax', '{"x" : -70}');
                x2.attr('data-parallax', '{"y" : -70}');
                x3.attr('data-parallax', '{"y" : 70}');
                x4.attr('data-parallax', '{"y" : -50}');
            },
            InViewAnimation: function () {
                $(window).on('scroll', function () {
                    $(".js-inview-animation.elementor-widget-image").each(function (i, el) {
                        var el = $(el);
                        if (el.visible(true)) {
                            el.addClass("now-in-view");
                        } else {
                            el.removeClass("now-in-view");
                        }
                    });
                });
            },
            RandomOptions: function () {
                if ($('.osaas-tilt-animation.elementor-widget-image').length) {
                    var tilt_selector = $('.osaas-tilt-animation.elementor-widget-image');

                    tilt_selector.attr('data-tilt', '');
                    tilt_selector.attr('data-tilt-max', 8);
                    tilt_selector.tilt({
                        glare: true,
                        maxGlare: .5
                    });
                }
            },

            elementorIconLightbox: function () {
                $(".appilo-icon-lightbox a, .apl-video-column a, .lightbox-image, .video_box, .smm-video-box, .appilo_seo_video_popup, .top-app-lightbox-image, .cr_banner_video_box, .video_lightbox").magnificPopup({
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

            },
            scrollTop: function (){
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
            },


        },
    };
    jQuery(document).ready(function () {
        t.init();
        console.log('appilo core main js loaded');

    });

})(jQuery);






