function startSite() {
    var name = localStorage.getItem('name');
    var position = $(window).scrollTop();

    if (name) {
        $('.form-area').css({ "display": "none" });
        $('.client-name').html(name);
    };

    if (position > 1) {
        $('body').removeClass('lock');
    }

    paralaxScroll();

    buttonClick();
};

function buttonClick() {
    $('#wellcome .btn-theme').on("click", function() {
        var input = $('.client-name-input').val();

        if (input) {
            localStorage.setItem('name', input);
            $('.form-area').css({ "display": "none" });
            $('.client-name').html(input);
        };

        $('body').removeClass('lock');

        $('html, body').animate({
            scrollTop: $("#sec-01").offset().top
        }, 0);
    });
}

function paralaxScroll() {
    $(window).scroll(function() {
        var y = $(window).scrollTop();
        var num = y / 500;
        var num2 = y * .0004;
        var num2mod = num2 + 1;
        var num3 = y * .2;
        var num3mod = num3 + 1;
        if (y == 0) {
            return $('#wellcome').css({ "z-index": "0" }),
                $('#wellcome .bg').css({ "position": "relative", "transform": "scale(1)" });
        } else {
            return $('.shade').css('opacity', num),
                $('#wellcome').css({ "z-index": "-1" }),
                $("#wellcome .bg").css({ "position": "fixed", "transform": "scale(" + num2mod + ")" }),
                $("#wellcome .content").css({ "margin-top": "-" + num3mod + "px" });
        };
    });
};