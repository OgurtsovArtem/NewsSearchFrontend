import Popup from './Popup'

export default class PopupLogin extends Popup  {
    constructor({element, buttonOpen, buttonClose, secondButton}) {
      super({element, buttonOpen, buttonClose})
      super.listener()
      this.element = element;
      this.secondButton = secondButton;
    }
   closeLogin() {
      this.element.classList.add('disabled');
    }

  listenerLogin() {
      this.secondButton.addEventListener('click', this.closeLogin.bind(this))
   }
  }