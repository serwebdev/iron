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
