export default class Header {
    constructor(options, localStorage) {
        this.options = options;
        this.localStorage = localStorage;
    }

//Модуль для открывания навигации
    navControl(){
        this.options.navСurtain.classList.toggle('header__nav_open');
        this.options.navButton.classList.toggle('active');
        if(this.options.headerTitle.classList.contains('header-article')){
            this.colorControl()
        }
    }
//Модуль для обработки цвета шапки
    colorControl(){
        this.options.navButton.classList.toggle('button_color-dark')
        this.options.navButton.classList.toggle('button_color-light')
        this.options.headerTitle.classList.toggle('header__title_color-dark')
        this.options.headerTitle.classList.toggle('header__title_color-light')
        this.options.headerButton.classList.toggle('button_color-dark');
        this.options.headerButton.classList.toggle('button_color-light');
    }
//Модуль для обработки кнопок залогиненого пользователя
    headerLogin(name){
        this.name = name
        this.options.saveArticles.classList.remove('disabled');
        this.options.loginButton.classList.remove('disabled');
        this.options.navAuthButton.classList.add('disabled');
        this.options.buttonText.textContent = this.name;
    }
    headerLogout(){
        if (confirm("Вы действительно хотите выйти") === true) {
            this.options.saveArticles.classList.add('disabled');
            this.options.loginButton.classList.add('disabled');
            this.options.navAuthButton.classList.remove('disabled');
            this.options.buttonText.textContent = 'Hacker';
            document.location.href = '../'
            // this.localStorage.removeKey("authorizedUser");
            // this.localStorage.removeKey("key")
            localStorage.clear()
        } return

    }
    accessСheck(){
        if (localStorage.authorizedUser !== undefined) {
            console.log('я нашел!')
            this.options.buttonText.textContent = this.localStorage.getKey("authorizedUser");
            this.options.navAuthButton.classList.add('disabled');
            this.options.loginButton.classList.remove('disabled');
            this.options.saveArticles.classList.remove('disabled');
        } return
    }
//Слушатели
    headerListener(){
        this.options.loginButton.addEventListener('click', this.headerLogout.bind(this))
        this.options.navButton.addEventListener('click', this.navControl.bind(this))
        this.options.navAuthButton.addEventListener('click', this.navControl.bind(this))
    }
}