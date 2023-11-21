
// $('.testimonial_slider').slick({
//   dots: false,
//   arrows:false,

//   infinite: true,
//   autoplay: true,
//   speed: 300,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false
//       }
//     },
    
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
    
//   ]
// });



// navbar section and tack to top
$(window).scroll(function(){
var scroll = $(window).scrollTop();

if(scroll >=10) {
$(".navbar").addClass("nav-scroll");
$(".back-to-top").addClass("show-btn");

} else{
  $(".navbar").removeClass("nav-scroll")
  $(".back-to-top").removeClass("show-btn")

}

});







  