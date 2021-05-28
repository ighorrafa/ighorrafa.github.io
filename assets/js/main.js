$(window).load(function() {
    startSite();
    AOS.init();
});

$(window).scroll(function() {
    var vh = $(window).height();
    var posY = $(window).scrollTop();
    var display = $('#sec-04').offset().top + 150;
    var endPoint = $('.endpoint').offset().top - vh;
    if (posY > display) {
        $('.border-display').css("position", "fixed");
    }
    if (posY > endPoint) {
        $('.border-display').css({ "position": "absolute", "bottom": "0", "top": "unset" });
    } else if (posY < display) {
        $('.border-display').css({ "position": "absolute", "top": "0" });
    }
});

var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function() { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        console.log('descendo');
    } else {
        console.log('subindo');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);