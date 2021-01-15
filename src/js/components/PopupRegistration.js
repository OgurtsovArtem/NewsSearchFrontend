import Popup from './Popup'

export default class PopupRegistration extends Popup  {
    constructor({element, buttonOpen, buttonClose, secondButton, secondForm}) {
      super({element, buttonOpen, buttonClose})
      super.listener()
      this.element = element;
      this.secondButton = secondButton;
      this.secondForm = secondForm;
    }
    openRegistration() {
      this.secondForm.classList.remove('disabled');
    }
    closeRegistration() {
      this.element.classList.add('disabled');
    }

    listenerRegistration() {
      this.secondButton.addEventListener('click', this.openRegistration.bind(this))
      this.secondButton.addEventListener('click', this.closeRegistration.bind(this))
   }
  }

// Я могу сдесь добавить на кнопки дополнительные слушатели 
// и повешать на них опен из супер