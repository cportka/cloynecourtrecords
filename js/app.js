headerTxt = $('header p');
imgCCR = $('header img');

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        if (!$('header').hasClass("sticky")) {
            $('header p').remove();
            $('header').prepend(imgCCR);
            $('header').addClass("sticky");
            $('.header-links').css('float', "right");
            $('.main').addClass("sticky");
        }
    } else {
        if ($('header').hasClass("sticky")) {
            $('header').prepend(headerTxt);
            $('header').removeClass("sticky");
            $('header img').remove();
            $('.header-links').css('float', "none");
            $('.main').removeClass("sticky");
        }
    }
});
/*
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
*/
$(document).ready(function () {
    $('header img').remove();
});

window.onload = function() {
    $('.carousel').carousel({
        interval: 2000
    })
}