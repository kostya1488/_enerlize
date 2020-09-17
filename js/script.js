$(document).ready(function() {
    // ------------------------------------ hide/show text 
    if ($(window).width() <= 576) {
        $(".content").hide();
        $(".show_hide").on("click", function() {
            var txt = $(".content").is(':visible') ? 'Далее...' : 'Скрыть';
            $(".show_hide").text(txt);
            $('.content').slideToggle(200);
        });

    }
    // ------------------------------------ scroll to id
    $(".nav_link").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
    // ------------------------------------ reload page disable
    $('.button').click(() => {
        return false
    });
    // ------------------------------------ 
    $('.card_item_wrap[tabindex="0"]').css('transform', 'scale(1.1)')
});