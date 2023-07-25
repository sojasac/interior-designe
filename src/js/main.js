import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });