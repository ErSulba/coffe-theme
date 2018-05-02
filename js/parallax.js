$(function () {
   $(window).on('scroll', function () {

       let windowsWidth = $(window).width();

       if (windowsWidth > 800) {
           let scroll = $(window).scrollTop();

           $('header .textos').css({
               'transform': `translate(0px, ${ scroll/2 }%)`
           });

           $('.acerca-de article').css({
               'transform': `translate(0px, -${ scroll/4 }%)`
           })

       }
   })

    $(window).on('resize', function () {
        let windowsWidth = $(window).width();

        if(windowsWidth < 800) {
            $('.acerca-de article').css({
                'transform' : `translate(0px, 0px)`
            })

            $('header .textos').css({
                'transform' : `translate(0px, 0px)`
            })


        }
    })
});