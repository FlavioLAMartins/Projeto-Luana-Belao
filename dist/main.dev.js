"use strict";

/* opens and closes the menu when clicked on the burger icon and x */
var nav = document.querySelector('#header nav');
var toggle = document.querySelectorAll('nav .toggle');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = toggle[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;
    element.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
  /* when clicking on a menu item, hide the menu */

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var links = document.querySelectorAll('nav ul li a');
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var link = _step2.value;
    link.addEventListener('click', function () {
      nav.classList.remove('show');
    });
  }
  /* change the page header when scroll is activated*/

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function changeHeaderWhenScroll() {
  var header = document.querySelector('#header');
  var navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}
/* Testimonials carousel slider swiper */


var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});
/*ScrollReveal*/

var scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});
scrollReveal.reveal("#home .image, #home .text,\n  #about .image, #about .text,\n  #services header, #services .card,\n  #testimonials header, #testimonials .testimonials\n  #contact .text, #contact .links,\n  footer .brand, footer .social\n  ", {
  interval: 100
});
/* Button back-to-top*/

function backToTop() {
  var backToTopButton = document.querySelector('.back-to-top');

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}
/* When Scroll*/


window.addEventListener('scroll', function () {
  changeHeaderWhenScroll();
  backToTop();
});
/* menu as activated the visible section on the page */