const swiper2 = new Swiper('.grid-price-slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  //   slidesPerView: 1,
  slidesPerView: 'auto',

  // breakpoints: {
  //   320: {
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //       draggable: true,
  //       enabled: true,
  //     },
  //   },
  //   800: {
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //       draggable: true,
  //       enabled: false,
  //     },
  //   },
  // },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    // dragSize: 50,
    // hide: false,
  },

  mousewheel: true,
  freeMode: true,
});
