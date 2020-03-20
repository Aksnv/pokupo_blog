"use strict";

document.addEventListener('DOMContentLoaded', function() {

  /* ------------- Additional articles slider ------------- */

  $('.additional-articles .blog__articles-list').slick({
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 2
        }
      }
    ]
  });

});
