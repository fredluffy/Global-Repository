$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      rtl: true,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      margin: 10,
      loop: true,
      nav: true,
      navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
      responsive: {
        0: {
          items: 1,
        },
        577: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 5,
        }
      },
    });
    owl.on("mousewheel", ".owl-stage", function (e) {
      if (e.deltaY > 0) {
        owl.trigger("next.owl");
      } else {
        owl.trigger("prev.owl");
      }
      e.preventDefault();
    });
  });