$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 70,
        margin: 20
      },
      1000: {
        items: 3,
        margin: 20,
        stagePadding: 70,
        nav: true,
        center: true,
        smartSpeed: 800,
      }
    },
    autoHeight: true,
  });

  navbar = document.querySelector('#navbarNav');

  // get window size
  windowSize = window.screen.availWidth;

  if (windowSize >= 1000) {
      navbar.classList.add('show');
  } else {
      navbar.classList.remove('show');
  }
});