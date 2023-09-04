// var swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: true,
//   breakpoints: {
//     375: {
//       slidesPerView: 1,
//       spaceBetween: 0,
//     },
//     // when window width is >= 768px
//     768: {
//       slidesPerView: 2.46,
//       spaceBetween: 19,
//     },
//     // when window width is >= 1200px
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 19,
//     },
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

// Swiper for reviews
const reviewsSwiper = new Swiper('.swiper-review', {
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
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
