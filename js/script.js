$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,

  });
  $(".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
  $(".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
});