headerTxt = $('header').html();

$(window).scroll(function () {
    var imgCCR = $("<img src='images/ccr.png'>");

    if ($(this).scrollTop() > 1) {
        $('header').html("");
        if (!$('header').hasClass("sticky")) {
            $('header').append(imgCCR);
        }
        $('header').addClass("sticky");
    } else {
        $('header').html(headerTxt);
        $('header').removeClass("sticky");
        $('header img').remove();
    }
});