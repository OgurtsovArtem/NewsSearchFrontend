const buttonClose = [...document.querySelectorAll('.popup__close')];

const POPUP_SUCCESSFUL_SETTINGS = {
    element: document.querySelector('.popup-successful'),
    buttonClose: buttonClose[2],
    secondButton: document.querySelector('.button-login-two'),
    secondForm: document.querySelector('.popup-login'),
  };
  
export default POPUP_SUCCESSFUL_SETTINGS;
