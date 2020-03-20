"use strict";

const tabletWidth = 768;

let blogSelectButton = document.querySelector('.blog__button_select');
let blogTagsList = document.querySelector('.blog__tags-list');

window.addEventListener('resize', function() {

  /* ------------- Blog tags show/hide ------------- */

  if (window.innerWidth < tabletWidth) {
    blogSelectButton.addEventListener('click', function() {
      blogSelectButton.classList.toggle('blog__button_select_active');
      blogTagsList.classList.toggle('blog__tags-list_active');
    });
  }

});
