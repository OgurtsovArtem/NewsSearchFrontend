export default class Page {
    constructor(options, mainApi, localStorage, cardList) {
      this.cardList = cardList;
      this.localStorage = localStorage;
      this.mainApi = mainApi;
      this.options = options;
      // console.log(this.options.title)
      // this.topicControl = this.topicControl.bind(this)
   
    }
    accessСheck(){
      // Переделать отрисовку при 0 карточек
        if (localStorage.authorizedUser !== undefined) {
          console.log('я нашел топик!')
            this.savedCard()
            this.options.keywords.classList.remove('disabled')  
        }else{
          console.log('Чет я ничего не нашел:(')
          window.location.href="../index.html"
        }
    }
    //Корректирует описание класса topic
    topicControl(arrLenght , keyword){
      this.options.title.textContent = 
      `
      ${this.localStorage.getKey("authorizedUser")}, у вас 
      ${arrLenght} ${this.options.declOfNum(arrLenght,['сохранённая', 'сохранённые', 'сохранённых'])} 
      ${this.options.declOfNum(arrLenght,['статья', 'статьи', 'статей'])}
      `;
      this.options.keywords.textContent = `${keyword[0]}, ${keyword[1]}`

      if (arrLenght > 2){
        this.options.keynumber.textContent = 
        `
        ${arrLenght - 2}-${this.options.declOfNum(arrLenght - 2,['му', 'м', 'и'])}
        ${this.options.declOfNum(arrLenght - 2,['другому', 'другим', 'другим'])}
        `;
      }else if (arrLenght < 2 && arrLenght !== 0 ){
        this.options.keywords.textContent = `${keyword[0]}`;
        this.options.keynumber.textContent = ``;
        this.options.union.textContent =``;
      }else if (arrLenght == 0) {
        console.log('я отработал')
        this.options.title.textContent = `${this.localStorage.getKey("authorizedUser")}, у вас нет сохранённых статей`;
        this.options.topicKeywords.classList.add('disabled')
      } else {
        this.options.keywords.textContent = `${keyword[0]}`;
        this.options.keynumber.textContent = `${keyword[1]}`;
      } 
    }
    savedCard(){
      this.mainApi.getArticles()
      .then((result) => {
        if(result.totalResults === 0){
          console.log('Не найдено добавленных карт')
          //Выводить секцию с недобавленными карточками.
        } else{
          // Посчитали повторения.
          const reduceCard = result.data.reduce((reducer, article) =>{
            if (!reducer[article.keyword]){
                reducer[article.keyword] = 0;
            }
            reducer[article.keyword]++;
            return reducer
          }, [])
          // Отсортировали наиболее встречающиеся и передали 2 первых
          const keySorted = Object.keys(reduceCard).sort(function(a,b){return reduceCard[b]-reduceCard[a]}).slice(0,2)
          this.topicControl(result.data.length, keySorted) 
          this.cardList.renderPrivateCard(result.data.reverse())
        }
      })
  }
}