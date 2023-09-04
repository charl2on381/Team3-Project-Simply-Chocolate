
var swiper = new Swiper('.swiper-rew', {
  
  slidesPerView: 1,
  // slidesPerGroup: 2,
  spaceBetween: 28,
  // centerInsufficientSlides: true,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination-review',
    clickable: true,
  },
});
