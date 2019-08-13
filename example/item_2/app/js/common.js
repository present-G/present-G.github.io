(function($){
    $(window).on("load",function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id();
        $('.section-client__wrap').owlCarousel({
            loop:false,
            slideBy:2,
            margin:0,
            nav:false,
            dots:true,
            responsive:{
                0: {
                    items:1
                },
                350:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:6
                }
            }
        });






        $('.section-blog__flex').owlCarousel({
            loop:true,
            slideBy:3,
            margin:10,
            nav:false,
            dots:true,
            responsive:{
                0: {
                    items:1
                },
                576:{
                    items:2
                },
                1232: {
                    center:true,
                    items:3
                }
            }
        });


        var $preloader = $('.loader-wrap'),
        $svg_anm   = $preloader.find('.loader');
        $svg_anm.fadeOut();
        $('body').removeClass('full-screen');
        $preloader.delay(500).fadeOut('slow');

        new WOW().init();

    });
})(jQuery);