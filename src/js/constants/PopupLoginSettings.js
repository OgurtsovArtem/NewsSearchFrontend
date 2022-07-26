const buttonClose = [...document.querySelectorAll('.popup__close')];

const POPUP_LOGIN_SETTINGS = {
    element: document.querySelector('.popup-login'),
    buttonOpen: document.querySelector('.header__button-login'),
    buttonClose: buttonClose[0],
    secondButton: document.querySelector('.button-registration'),
    secondForm: document.querySelector('.popup-registration'),
  };
  
export default POPUP_LOGIN_SETTINGS;
