import './index.css';

const buttonBurger = document.querySelector('.button__burger');
const headerNav = document.querySelector('.header__nav');

const buttonRegistration = document.querySelector('.popup__button-another-form');
const buttonAuth = document.querySelector('.header__button-login');

const popupLogin = document.querySelector('.popup-login');
const popupReg = document.querySelector('.popup-registration');
const successful = document.querySelector('.popup-successful');
const popupClose = document.querySelector('.popup__close');
const popupButton = document.querySelector('.popup__button');

popupButton.addEventListener('click', () => {
  successful.classList.remove('disabled');
  popupLogin.classList.add('disabled');
});

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  headerNav.classList.toggle('header__nav_open');
});

buttonAuth.addEventListener('click', () => {
  popupLogin.classList.remove('disabled');
  headerNav.classList.remove('header__nav_open');
});
buttonRegistration.addEventListener('click', () => {
  popupReg.classList.toggle('disabled');
  popupLogin.classList.add('disabled');
});

popupClose.addEventListeners('click', () => {
  popupLogin.classList.remove('disabled');
  popupReg.classList.remove('disabled');
});
