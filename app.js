$(document).ready(function(){
  
  navbar = document.querySelector('#navbarNav');

  // get window size
  windowSize = window.screen.availWidth;

  if (windowSize >= 1000) {
      navbar.classList.add('show');
      $('.projects .content').removeClass('owl-carousel owl-theme')
      $('.projects .content').addClass('container')

      $(window).on('scroll', () => {
        if ($(this).scrollTop() > 50) {
          $('.header-sticky').addClass('is-fixed')
        } else {
          $('.header-sticky').removeClass('is-fixed')
        }
      });
  } else {
      navbar.classList.remove('show');
      // $('.projects .content').addClass('owl-carousel owl-theme')
      $('.project').removeAttr('data-aos')
      $('header').removeClass('header-sticky fixed-top')
  }
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

  $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      console.log(scrollPos)
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav a').removeClass("active");
          currLink.addClass("active");
      }
      else if (scrollPos <= 450){
          currLink.removeClass("active");
      }
  });
}
