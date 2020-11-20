import './articles.css';

const buttonBurger = document.querySelector('.button__burger');
const headerNav = document.querySelector('.header__nav');

buttonBurger.addEventListener('click', () => {
  buttonBurger.classList.toggle('active');
  headerNav.classList.toggle('header__nav_open');
});
