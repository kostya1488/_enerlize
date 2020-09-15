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
    $('.algorithm_items_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        speed: 800,
        // vertical: true,
        // arrows: true,
        easing: 'linear',
        // pauseOnHover: false,
        // pauseOnFocus: false,
    });
});