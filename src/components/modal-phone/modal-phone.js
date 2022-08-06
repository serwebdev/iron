// const headerBottomBtn = document.querySelector('.header__bottom-btn');
modal('.modal-phone', '.header__bottom-btn');

const modalPhoneLabel = document.querySelectorAll('.modal-phone__label');
const modalPhoneInput = document.querySelectorAll('.modal-phone__input');

if (modalPhoneLabel && modalPhoneInput) {
  modalPhoneLabel.forEach(item => {
    item.addEventListener('click', () => {
      item.querySelector('.modal-phone__input').classList.add('show');
    });
  });
}
