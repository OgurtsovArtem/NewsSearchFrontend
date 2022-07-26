export default class CardList  {
  constructor( {container, setFormatDate, idCreator, button, classCreate}, api ) {
    this.container = container;
    this.setFormatDate = setFormatDate;
    this.idCreator = idCreator;
    this.button = button;
    this.classCreate = classCreate;
    this.api = api;
    this.showСards = this.showСards.bind(this);
  }

  addCard(title, description, publishedAt, urlToImage, sourceName, sourceLink, keyword, cardControlKey = undefined, id) {
    let date;
    if(cardControlKey === 'Redrawing'){
      date = publishedAt
    }else {
      date = this.setFormatDate(publishedAt)
    };
    const newCard  = this.classCreate(this.api).create(
      title,
      description,
      date,
      urlToImage,
      sourceName,
      sourceLink,
      keyword,
      cardControlKey,
      id,
      );
    this.container.appendChild(newCard);
  }

  render(cardArr) {
    cardArr.forEach((obj) => {
      this.addCard(
        obj.title,
        obj.description,
        obj.publishedAt,
        obj.urlToImage,
        obj.source.name,
        obj.url,
        obj.id,
        )
    });
  }

  renderPrivateCard(cardArr){
    cardArr.forEach((obj) => {
      this.addCard(
        obj.title,
        obj.text,
        obj.date,
        obj.image,
        obj.source,
        obj.link,
        obj._id,
        obj.keyword,
        'Redrawing', //Ключ для определения какую карточку отрисовывать.
        )
    });
  }

  //(2) Принимает массив новостей и делает запрос на наш сервер для получения сохраненных статей
  // Отправляет два массива для сравнения в checkingSavedCard()
  arrayConverter(newsArray){
      this.api.getArticles()
      .then((result) => {
        if(result.totalResults === 0){
          console.log('Ничего не найдено')
        } else{
          this.checkingSavedCard(result.data, newsArray)
        }
      })
      .catch((err) => {
        console.log(err);
    })
    }
  //(3) Прогоняет два полученных массива чтобы найти повторяющиеся карточки
  // И возвращает переписанный массив новостей который содержит id сохранненых карт
  checkingSavedCard(arr2, arr1){
    arr2.forEach(function(arr2Element) {
      arr1.forEach(function(arr1Element) {
              if (arr2Element.text === arr1Element.description) {
                arr1Element.id = arr2Element._id
              } return 
          });
     
      });
      this.newArray= arr1 // используем в showСards(event) 
      this.showСards()
    }
    //(1) Первым получает массив newsArray и передает в arrayConverter()
    arrayControl(newsArray){
      this.currentIndex = 0;
      this.currentLimit = 0;
      this.arrayConverter(newsArray)
    }
    showСards() {
      this.currentLimit += 3;
      for (this.currentIndex; this.currentIndex < this.currentLimit && this.currentIndex <  this.newArray.length; this.currentIndex++) {
        this.render([ this.newArray[this.currentIndex]]);
      }
    }
    refreshCardList(){
      if (this.container.childNodes.lenght !== 0){
        localStorage.removeItem('articleKey'); // чистим хранилище от ключей
        while (this.container.firstChild) {
          this.container.removeChild(this.container.firstChild)
        }
      }
      return
    }
    listener(){
      this.button.addEventListener('click', this.showСards)
    }
}
