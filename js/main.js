$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    navText : ["<i class='far fa-chevron-left'></i>","<i class='far fa-chevron-right'></i>"]
  })

  $('.header-nav-toggle').on('click', function (e) {
    e.stopImmediatePropagation();
    $('.header-nav').slideToggle();
  });

  $('.header-nav a').on('click', function (e) {
    $('.header-nav a').removeClass('active');
    $(this).addClass('active');
  });

  $('body').on('click', function () {
    const windowWidth = $(window).width();
    if (windowWidth < 768) {
      $('.header-nav').slideUp();
    }
  });
});