

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:true,
    refresh:true,


    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})