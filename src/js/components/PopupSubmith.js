export default class PopupSubmith {
  constructor(options, api, header, localStorage) {
    this.options = options
    this.api = api;
    this.header = header;
    this.localStorage = localStorage;

    this.submitLogin = this.submitLogin.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }
  submitLogin(event) {
    event.preventDefault();
    const email = this.options.formLogin.elements.email.value;
    const password = this.options.formLogin.elements.password.value;
    this.api.login(email, password)
    .then((result) => {
      if (result === undefined){
        console.log(result) // Выводить ошибку над кнопкой!
      } else {
        this.options.loginPopup.classList.add('disabled');
        this.localStorage.saveKey ('key', result.token)
        this.api.getUser(result.token)
        .then((res) => {
          console.log(res)
          this.header.headerLogin(res.user)
          this.localStorage.saveKey ('authorizedUser', res.user)
          //Перезагружать страницы с обновленными данными
        })
        .catch((err) => {
          console.log(err);
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  submitRegistration(event) {
    event.preventDefault();
    const password = this.options.formRegistration.elements.password.value;
    const email = this.options.formRegistration.elements.email.value;
    const name = this.options.formRegistration.elements.name.value;
    this.api.registration(email, password, name)
    .then((result) => {
      if (result === undefined){
        console.log(result) // Выводить ошибку над кнопкой!
      } else {
        this.options.registrationPopup.classList.add('disabled');
        this.options.successfulPopup.classList.remove('disabled');
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


//Отправляем статью и сохраняем ее
//Удаляем статью