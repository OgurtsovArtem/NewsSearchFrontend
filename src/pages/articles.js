import './articles.css';

const buttonBurger = document.querySelector('.button__burger');
const headerNav = document.querySelector('.header__nav');

const headerTitle = document.querySelector('.header__title');
const headerButton = document.querySelector('.header__button');

const backet = document.querySelectorAll('.place-card__backet');
const promt = document.querySelector('.place-card__prompt');
const keyword = document.querySelector('.place-card__keyword');


buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  buttonBurger.classList.toggle('button_color-dark')
  buttonBurger.classList.toggle('button_color-light')
  headerTitle.classList.toggle('header__title_color-dark')
  headerTitle.classList.toggle('header__title_color-light')
  headerButton.classList.toggle('button_color-dark');
  headerButton.classList.toggle('button_color-light');
  headerNav.classList.toggle('header__nav_open');
});


[].forEach.call(backet,function(el){
  el.addEventListener('mouseout', function () {
    promt.classList.remove('place-card__prompt_visible')
    keyword.classList.remove('place-card__keyword_hide')
  })
  el.addEventListener('mouseover', function () {
    promt.classList.add('place-card__prompt_visible')
    keyword.classList.add('place-card__keyword_hide')
  })
});