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

// Burger =============================================
(function () {
  const burger = document.querySelector('.header__burger');
  const headerTop = document.querySelector('.header__top');
  const headerBottom = document.querySelector('.header__bottom');

  burger.addEventListener('click', () => {
    headerTop.classList.toggle('show');
    headerBottom.classList.toggle('show');
    if (headerBottom.classList.contains('show')) {
      burger.src = 'img/main-page/burger-close.svg';
    } else {
      burger.src = 'img/main-page/burger.svg';
    }
  });
})();

// Скрывает header top при скроле
if (document.querySelector('.header__top')) {
  const header = document.querySelector('.header');
  const headerTop = document.querySelector('.header__top');
  const headerBottom = document.querySelector('.header__bottom');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      headerTop.classList.add('fixed');
      header.classList.add('fixed');
    } else {
      headerTop.classList.remove('fixed');
      header.classList.remove('fixed');
    }
  });
}

// Делает активными пункты меню
(function () {
  const menuLink = document.querySelectorAll('.menu__link');

  let strUrl = window.location.pathname;
  if (strUrl === '/') {
    menuLink.forEach(item => {
      if (item.dataset.href === 'index') {
        item.classList.add('active');
      }
    });
  } else {
    menuLink.forEach(item => {
      let strHref = item.dataset.href;
      if (strHref) {
        if (strUrl.includes(strHref)) {
          item.classList.add('active');
        }
      }
    });
  }
})();

// Плавный скролл первого экрана главной страницы
(function () {
  const fullscreen = document.querySelector('.fullscreen');
  const fullscreenMouse = document.querySelectorAll('.fullscreen__mouse');

  if (fullscreen && fullscreenMouse) {
    fullscreenMouse.forEach(item => {
      item.addEventListener('click', () => {
        window.scrollBy(0, fullscreen.offsetHeight);
      });
    });
  }
})();

// Страница contacts, высота input
(function () {
  const label = document.querySelectorAll('.contacts__form-label');
  const input = document.querySelectorAll('.contacts__form-input');

  if (label && input) {
    label.forEach(item => {
      item.addEventListener('click', () => {
        item.querySelector('.contacts__form-input').classList.add('show');
      });
    });
  }
})();


// Компоненты
// const headerBottomBtn = document.querySelector('.header__bottom-btn');
modal('.modal-phone', '.header__bottom-btn');

const modalPhoneLabel = document.querySelectorAll('.modal-phone__label');
const modalPhoneInput = document.querySelectorAll('.modal-phone__input');

if (modalPhoneLabel && modalPhoneInput) {
  modalPhoneLabel.forEach(item => {
    item.addEventListener('click', () => {
      if (item.querySelector('.modal-phone__input')) {
        item.querySelector('.modal-phone__input').classList.add('show');
      }
    });
  });
}

function modal(selectorModal, selectorButton) {
  // Кнопка открытия модального окна
  const openModal = document.querySelector(selectorButton);

  // Элементы модального окна
  const modal = document.querySelector(selectorModal);
  if (modal && openModal) {
    const modalBody = modal.querySelector('.modal__body');
    const closeModal = modal.querySelector('.modal__btn');

    let clientWidth = document.documentElement.clientWidth;

    // Функция удаляет класс open
    function delClassOpen() {
      modal.classList.remove('open');
      modalBody.classList.remove('open');
    }

    // Возвращаем прокрутку и убираем padding-right
    function scrollShow() {
      document.body.style.overflowY = '';
      document.body.style.paddingRight = '';
    }

    // Открытие модального окна
    openModal.addEventListener('click', function () {
      modal.classList.add('open');
      modalBody.classList.add('open');

      // Убираем прокрутку с body и добавляем padding-right
      document.body.style.overflowY = 'hidden';
      let scrollWidth = document.documentElement.clientWidth - clientWidth;
      document.body.style.paddingRight = `${scrollWidth}px`;
    });

    // Закрытие модального окна по нажатию на крестик
    closeModal.addEventListener('click', function () {
      delClassOpen();

      scrollShow();
    });

    // Закрытие модального окна по клику вне окна
    window.addEventListener('click', function (e) {
      if (e.target === modal) {
        delClassOpen();

        scrollShow();
      }
    });

    // Закрытие по нажатию клавиши Esc
    document.addEventListener('keydown', function (e) {
      if (e.code === 'Escape') {
        delClassOpen();

        scrollShow();
      }
    });
  }
}

// Первый аргумент - селектор модального окна, второй - селектор кнопки открытия
modal('.modal-order', '.fullscreen__btn');

// Страница services
modal('.modal-order', '.carve__button');

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



