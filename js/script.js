$(document).ready(function() {
    $('.specialization_autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        vertical: true,
        arrows: false,
        easing: 'easy',
        pauseOnHover: false,
        pauseOnFocus: false,
    });




    if ($(window).width() >= 1200) {
        $('.algorithm_items_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 800,
            easing: 'linear',
            // arrows: false,
            responsive: [

                {
                    breakpoint: 1430,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }

    // ------------------------------------
    $('.button').click(() => {
        return false
    });
    // ------------------------------------   
});