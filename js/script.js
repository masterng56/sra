$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
