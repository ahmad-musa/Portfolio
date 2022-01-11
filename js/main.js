$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();

            if (scroll_start > offset.top) {
                $(".fixed-top").css({
                    "background-color": "#beb0fc",
                    "transition": "all linear .5s",
                    "width": "100%",
                    "padding": "0.25rem 1rem",
                });
            } else {
                $(".fixed-top").css({
                    "background-color": "transparent",
                    "padding": "1.5rem 1rem",
                });
            }
        });
    }

});


// ADDING SIMPLE STYLE NAVBAR SCROLLING STYLE

// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".fixed-top");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });




$(document).ready(function () {

    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        center: true,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },
            800: {
                items: 3,
                nav: true,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })

});