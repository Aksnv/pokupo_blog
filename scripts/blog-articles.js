"use strict";

const tabletWidth = 768;

let blogSelectButton = document.querySelector('.blog__button_select');

document.addEventListener('DOMContentLoaded', function() {

  /* ------------- Blog tags show/hide ------------- */

  blogSelectButton.addEventListener('click', function(e) {
    if (window.innerWidth < tabletWidth) {
      blogSelectButton.classList.toggle('blog__button_select_active');

      if (blogSelectButton.classList.contains('blog__button_select_active')) {
        $('.blog__tags-list').slideDown(300);
      } else {
        $('.blog__tags-list').slideUp(300);
      }
    }
  });

});

window.addEventListener('resize', function() {

  /* ------------- Blog tags show/hide ------------- */

  if (window.innerWidth >= tabletWidth) {
    $('.blog__tags-list').css('display', 'flex');
  } else {
    if (blogSelectButton.classList.contains('blog__button_select_active')) {
      $('.blog__tags-list').css('display', 'block');
    } else {
      $('.blog__tags-list').css('display', 'none');
    }
  }

});
