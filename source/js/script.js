'use strict';

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const bullets = document.querySelectorAll('.slider-controls__button');
let price = 0;
const priceTable = document.querySelector('.price__table');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if (bullets) {
bullets.forEach(function (bullet) {
  bullet.addEventListener('click', function () {
    console.log(bullet.dataset.price);
    price = bullet.dataset.price;
    let margin = -1 * (document.documentElement.clientWidth - 40) * price + 27;
    priceTable.style.marginLeft = `${margin}px`;

    document.querySelector('.slider-controls__button--current').classList.remove('slider-controls__button--current');
    bullet.classList.add('slider-controls__button--current');
  });
});
}

window.addEventListener('resize', function () {
  let margin = -1 * (document.documentElement.clientWidth - 40) * price + 27;
  priceTable.style.marginLeft = `${margin}px`;
});

if (document.documentElement.clientWidth >= 660) {
  priceTable.style.marginLeft = 0;
}
