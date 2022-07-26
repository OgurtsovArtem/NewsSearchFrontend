import words from '../constants/FromErrors'

const FORM_VALIDATOR_SETTINGS_LOGIN = {
    words,
    formElement: [...document.querySelector('.popup-login').querySelectorAll('.popup__input')],
    formImput: document.forms.login,
    popupButton: document.querySelector('.button__login'),
}

const FORM_VALIDATOR_SETTINGS_REGISTRATION = {
    words,
    formElement: [...document.querySelector('.popup-registration').querySelectorAll('.popup__input')],
    formImput: document.forms.registration,
    popupButton: document.querySelector('.button__registration'),
}

export { FORM_VALIDATOR_SETTINGS_LOGIN, FORM_VALIDATOR_SETTINGS_REGISTRATION } 