export default class Page {
    constructor(options, mainApi, localStorage, cardList) {
      this.cardList = cardList;
      this.localStorage = localStorage;
      this.mainApi = mainApi;
      this.options = options;
    }

    accessСheck(){
        if (localStorage.authorizedUser !== undefined) {
          // Сделать проверку если сервер недоступен!
            this.savedCard()
            this.options.keywords.classList.remove('disabled')  
        }else{
          document.location.href = '../'
        }
    }

    //Корректирует описание класса topic
    topicControl(arrLenght , keyword){
      console.log(keyword)
      this.options.title.textContent = 
      `
      ${this.localStorage.getKey("authorizedUser")}, у вас 
      ${arrLenght} ${this.options.declOfNum(arrLenght,['сохранённая', 'сохранённые', 'сохранённых'])} 
      ${this.options.declOfNum(arrLenght,['статья', 'статьи', 'статей'])}
      `;
      this.options.keywords.textContent = `${keyword[0]}, ${keyword[1]}`

      if (arrLenght > 2 && keyword.length > 2){
        this.options.keynumber.textContent = 
        `
        ${keyword.length - 2}-${this.options.declOfNum(keyword.length - 2,['му', 'м', 'и'])}
        ${this.options.declOfNum(keyword.length - 2,['другому', 'другим', 'другим'])}
        `;
      }else if (keyword.length < 2 && arrLenght !== 0 ){
        this.options.keywords.textContent = `${keyword[0]}`;
        this.options.keynumber.textContent = ``;
        this.options.union.textContent =``;
      }else if (arrLenght == 0) {
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
          // Отсортировали наиболее встречающиеся и передали в topicControl
          const keySorted = Object.keys(reduceCard).sort(function(a,b){return reduceCard[b]-reduceCard[a]})
          this.topicControl(result.data.length, keySorted) 
          this.cardList.renderPrivateCard(result.data.reverse())
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}