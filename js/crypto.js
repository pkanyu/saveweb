/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Author:

-------------------------------------------------------------------------------- */
(function() {

    "use strict";

    var Appilo_Crypto = {
        init: function() {
            this.Basic.init();
        },
        Basic: {
            init: function() {
                this.Animation();
                this.CrPartnerSlide();
                this.CRcountDown();
                this.CrblogSlide();
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
            CrPartnerSlide: function (){
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
            },
            CRcountDown:  function (){
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
            },
            CrblogSlide: function (){
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
            },
            /* End Of js
            ================================================*/
        }
    }
    jQuery(document).ready(function (){
        Appilo_Crypto.init();
    });

})();

// Crypto BTC Calculator
jQuery(document).ready(function (){
    $(".currencyField").keyup(function(){ //input[name='calc']
        let convFrom;
        if($(this).prop("name") == "btc") {
            convFrom = "btc";
            convTo = "usd";
        }
        else {
            convFrom = "usd";
            convTo = "btc";
        }
        $.getJSON( "https://api.coindesk.com/v1/bpi/currentprice/usd.json",
            function( data) {
                var origAmount = parseFloat($("input[name='" + convFrom + "']").val());
                var exchangeRate = parseInt(data.bpi.USD.rate_float);
                let amount;
                if(convFrom == "btc")
                    amount = parseFloat(origAmount * exchangeRate);
                else
                    amount = parseFloat(origAmount/ exchangeRate);
                $("input[name='" + convTo + "']").val(amount.toFixed(2));
            });
    });
});