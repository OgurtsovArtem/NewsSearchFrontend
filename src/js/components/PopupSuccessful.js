export default class PopupSuccessful  {
    constructor({element,buttonClose, secondForm, secondButton}) {
        this.element = element;
        this.secondForm = secondForm;
        this.buttonClose = buttonClose;
        this.secondButton = secondButton;
    }
    openSuccessful() {
        this.secondForm.classList.remove('disabled');
      }
    closeSuccessful() {
        this.element.classList.add('disabled');
      }
  
    listenerSuccessful() {
        this.buttonClose.addEventListener('click', this.closeSuccessful.bind(this))
        this.secondButton.addEventListener('click', this.openSuccessful.bind(this))
        this.secondButton.addEventListener('click', this.closeSuccessful.bind(this))
     }
    }