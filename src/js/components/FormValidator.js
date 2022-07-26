export default class FormValidator {
  constructor( {words, formElement, formImput, popupButton} ) {
    this.words = words;
    this.formElement = formElement;
    this.formImput = formImput;
    this.popupButton = popupButton;
    this.listener()
  }

  setEventListeners () {
    let flag = true;
    this.formElement.forEach((input) =>{
      if (!this.checkInputValidity(input)) flag = false;
      return flag;
    });
    this.setSubmitButtonState(flag, this.popupButton)
  }

  checkInputValidity(input) {
    let inputId = input.id;
    const errorId = input.nextElementSibling.id;

    if (input.validity.tooShort === true) {
      inputId += '-error';
      if (inputId === errorId) {
        input.nextElementSibling.textContent = this.words.validationLenght;
      }
      return false;
    }
    if (input.validity.valueMissing === true) {
      inputId += '-error';
      if (inputId === errorId) {
        input.nextElementSibling.textContent = this.words.validationNull;
      }
      return false;
    };
    if (input.validity.typeMismatch === true) {
      inputId += '-error';
      if (inputId === errorId) {
        input.nextElementSibling.textContent = this.words.validationEmail;
      }
      return false;
    }

    input.nextElementSibling.textContent = '';
    return true;
  }

  setSubmitButtonState(Flag, button) {
    if (Flag === true) {
      button.removeAttribute('disabled');
      button.classList.add('popup__button_enable');
    } else {
      button.setAttribute('disabled', true);
      button.classList.remove('popup__button_enable');
    }
  }
  listener(){
    this.formImput.addEventListener('input', this.setEventListeners.bind(this))
  }
}
