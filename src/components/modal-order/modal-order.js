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
