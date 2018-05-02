$(function () {
    //Menu effect
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
    
//    Header effect
    if ( $(window).width() > 800 ) {
        let header= 'header .textos';
        $(header).css({
            opacity: 0,
            marginTop: 0
        });

        $(header).animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);

    }

//    Menu Scrolls
    let about       = $('.acerca-de').offset().top,
        menu        = $('#platillo').offset().top,
        gallery     = $('.galeria').offset().top,
        location    = $('.ubicacion').offset().top;

    $('#btn-about').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about -100
            }, 500
        )
    }, null);

    $('#btn-menu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
            }, 500
        )
    }, null);

    $('#btn-gallery').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: gallery
            }, 500
        )
    }, null);

    $('#btn-location').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: location
            }, 500
        )
    }, null);

});