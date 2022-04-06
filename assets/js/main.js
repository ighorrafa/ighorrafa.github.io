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

window.addEventListener("scroll", function() { 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        console.log('descendo');
    } else {
        console.log('subindo');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

function switchNightMode(obj){
    const body = document.getElementsByTagName("body");

    if($(obj).is(":checked")){
        body[0].classList.remove('night');
        body[0].classList.add('day');
    } else {
        body[0].classList.remove('day');
        body[0].classList.add('night');
    }
}