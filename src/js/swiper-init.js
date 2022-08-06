const swiper = new Swiper('.product__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 4,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 4,

  // grid: {
  //   rows: 2,
  // },

  // Расстояние между слайдами в px
  spaceBetween: 28,

  // Скорость перелистывания
  speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  // loop: true,

  // Брейкпоинты (точки останова)
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      grid: {
        rows: 2,
      },
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 28,
    },
  },

  //   Индек начального слайда
  //   initialSlide: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    // type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper('.all-carve__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 1,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  // spaceBetween: 28,

  // Скорость перелистывания
  speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  loop: true,

  // Брейкпоинты (точки останова)
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 5,
  //     grid: {
  //       rows: 2,
  //     },
  //   },
  //   400: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //     grid: {
  //       rows: 1,
  //     },
  //   },
  //   // when window width is >= 480px
  //   500: {
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   },
  //   // when window width is >= 640px
  //   700: {
  //     slidesPerView: 3,
  //     spaceBetween: 20,
  //   },
  //   900: {
  //     slidesPerView: 4,
  //     spaceBetween: 28,
  //   },
  // },

  //   Индек начального слайда
  //   initialSlide: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    // type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
