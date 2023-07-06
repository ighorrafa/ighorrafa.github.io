var lastScrollTop = 0;

var st = window.pageYOffset || document.documentElement.scrollTop;

// PARALAX SCROLL

function paralaxScroll() {
  $(window).scroll(function () {
    var posY = $(window).scrollTop();
    var num = posY / 500;
    var num2 = posY * 0.0004;
    var num2mod = num2 + 1;
    var num3 = posY * 0.2;
    var num3mod = num3 + 1;
    if (posY == 0) {
      return (
        $("#wellcome").css({ "z-index": "0" }),
        $("#wellcome .bg").css({ position: "relative", transform: "scale(1)" })
      );
    } else {
      return (
        $(".shade").css("opacity", num),
        $("#wellcome").css({ "z-index": "-1" }),
        $("#wellcome .bg").css({
          position: "fixed",
          transform: "scale(" + num2mod + ")",
        }),
        $("#wellcome .content").css({ "margin-top": "-" + num3mod + "px" })
      );
    }
  });
}

// SECTION #4 SCROLL EFFECT

$(window).scroll(function () {
  var vh = $(window).height();
  var posY = $(window).scrollTop();
  var display = $("#sec-04").offset().top + 100;
  var endPoint = $(".endpoint").offset().top - vh;
  if (posY > display) {
    $(".border-display").css("position", "fixed");
  }
  if (posY > endPoint) {
    $(".border-display").css({
      position: "absolute",
      bottom: "0",
      top: "unset",
    });
  } else if (posY < display) {
    $(".border-display").css({ position: "absolute", top: "0" });
  }
});

// SECTION #5 SLIDE EFFECT

window.addEventListener(
  "scroll",
  function () {
    lastScrollTop = st <= 0 ? 0 : st;
    var posY = $(window).scrollTop();
    var sectionOffset = $("#sec-05").offset().top / 2.3;
    $(".markee-1").css("padding-left", posY / 2 - sectionOffset);
    $(".markee-2").css("padding-right", posY / 2 - sectionOffset);
  },
  false
);

// NIGHT MODE SWITCH

function switchNightMode(obj) {
  const body = $("body");

  if ($(obj).is(":checked")) {
    body.attr("data-mode", "day");
    localStorage.setItem("mode", "day");
  } else {
    body.attr("data-mode", "night");
    localStorage.setItem("mode", "night");
  }
}

// particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

$(window).load(function () {
  startSite();
  paralaxScroll();
  AOS.init();
});
