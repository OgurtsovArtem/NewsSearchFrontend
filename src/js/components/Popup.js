export default class Popup  {
  constructor(option) {
    this.option = option;
  }

  open() {
      this.option.element.classList.remove('disabled');
  }

  close() {
      this.option.element.classList.add('disabled');
  }
  
  listener() {
      this.option.buttonOpen.addEventListener('click', this.open.bind(this))
      this.option.buttonClose.addEventListener('click', this.close.bind(this))

  }
}

