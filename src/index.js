import './index.css';

const buttonBurger = document.querySelector('.button__burger');
const headerNav = document.querySelector('.header__nav');

const buttonAnother = document.querySelectorAll('.popup__button-another-form');
const buttonAuth = document.querySelector('.header__button-login');

const popupLogin = document.querySelector('.popup-login');
const popupReg = document.querySelector('.popup-registration');
const successful = document.querySelector('.popup-successful');
const popupClose = document.querySelectorAll('.popup__close');
const popupButton = document.querySelector('.button__registration');

const promt = document.querySelector('.place-card__prompt');
const flag = document.querySelectorAll('.place-card__flag');

popupButton.addEventListener('click', () => {
  successful.classList.remove('disabled');
  popupLogin.classList.add('disabled');
  popupReg.classList.toggle('disabled');
});

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  headerNav.classList.toggle('header__nav_open');
});

buttonAuth.addEventListener('click', () => {
  popupLogin.classList.remove('disabled');
  headerNav.classList.remove('header__nav_open');
  buttonBurger.classList.remove('active');
  buttonBurger.classList.add('disabled');
});

//FORM CLOSE
[].forEach.call(popupClose,function(el){
  el.addEventListener('click', function () {
    popupLogin.classList.add('disabled');
    popupReg.classList.add('disabled');
    successful.classList.add('disabled')
    buttonBurger.classList.remove('disabled');
  })
});

//TOOLTIP
[].forEach.call(flag,function(el){
  el.addEventListener('mouseout', function () {
    promt.classList.remove('place-card__prompt_visible')
  })
  el.addEventListener('mouseover', function () {
    promt.classList.add('place-card__prompt_visible')
  })
});

//SWITCHING FORMS
[].forEach.call(buttonAnother,function(el){
  el.addEventListener('click', function () {
    popupReg.classList.toggle('disabled');
    popupLogin.classList.toggle('disabled');
    successful.classList.add('disabled');
  })
});