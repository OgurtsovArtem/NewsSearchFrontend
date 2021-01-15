const buttonClose = [...document.querySelectorAll('.popup__close')];

const POPUP_REGISTRATION_SETTINGS = {
    element: document.querySelector('.popup-registration'),
    buttonOpen: document.querySelector('.popup__button-another-form'),
    buttonClose: buttonClose[1],
    secondButton: document.querySelector('.button-login-one'),
    secondForm: document.querySelector('.popup-login'),
  };
  
export default POPUP_REGISTRATION_SETTINGS;
