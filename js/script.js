$(document).ready(function() {
    $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        vertical: true,
        arrows: false,
        easing: 'easy',
        pauseOnHover: false,
    });
});