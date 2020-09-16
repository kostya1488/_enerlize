$(document).ready(function() {
    $('.specialization_autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        speed: 1500,
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

    if ($(window).width() <= 576) {
        $(".content").hide();
        $(".show_hide").on("click", function() {
            var txt = $(".content").is(':visible') ? 'Далее...' : 'Скрыть';
            $(".show_hide").text(txt);
            $('.content').slideToggle(200);
        });

    }
    // ------------------------------------
    $(".nav_link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
    // ------------------------------------
    $('.button').click(() => {
        return false
    });
    // ------------------------------------ 
});