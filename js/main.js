$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();

     if (startchange.length){
        $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();

        if(scroll_start > offset.top) {
            $(".fixed-top").css({
                "background-color": "#beb0fc",
                "transition": "all linear .5s",
                "width":"100%",
                "padding": "0.5rem 1rem",
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
