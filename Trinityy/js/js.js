
// 	function ff(){
// 	var e = document.getElementById("demo");
// 	if (e.style.visibility =='visible') {
// 		e.style.visibility='hidden'
// 	}
// 	else{
// 			e.style.display="none";
// 	}
// }
   $(document).ready(function(){
        $(".done").click(function(){
            $(".z").hidden();
        });
    });


// var acc = document.getElementsByClassName("z");
// var q = document.getElementsByClassName("testa");

// for ( var i = 1; i < acc.length; i++) {
//     acc[i].onclick = function(){
     
//         // var testa = this.nextElementSibling;
//         // console.log(testa)
//         if ( q[i].style.display == "none" || q[i].style.display == "") {
//            	q[i].style.display = "block";
//         } else {
//             q[i].style.display = "none";
//         }
//     }


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,


    responsive:{
        0:{
            items:1
        },
        600:{
            items:8
        },
        1000:{
            items:1
        }
    }
})