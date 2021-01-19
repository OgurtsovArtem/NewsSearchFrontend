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
    this.cardArr = cardArr;
    this.cardArr.forEach((obj) => {
      this.addCard(
        obj.title,
        obj.description,
        obj.publishedAt,
        obj.urlToImage,
        obj.source.name,
        obj.url,
        )
    });
  }
  renderPrivateCard(cardArr){
    this.cardArr = cardArr;
    this.cardArr.forEach((obj) => {
      this.addCard(
        obj.title,
        obj.text,
        obj.date,
        obj.image,
        obj.source,
        obj.link,
        obj.keyword,
        'Redrawing', //Ключ для определения какую карточку отрисовывать.
        obj._id,
        )
    });
  }
  arrayControl(array){
    this.array = array;
    this.currentIndex = 0;
    this.currentLimit = 0;
    this.checkingSavedCard(array)
  }
  showСards(event) {
    event.preventDefault();
    this.currentLimit += 3;
    for (this.currentIndex; this.currentIndex < this.currentLimit && this.currentIndex <  this.array.length; this.currentIndex++) {
      this.render([ this.array[this.currentIndex]]);
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
// Взять два массива и уже рабоать перебором с нимим
// Иначе слишком много операций
  checkingSavedCard(findObj){
    this.api.getArticles()
    .then((result) => {
      if(result.totalResults === 0){
        console.log('Ничего не найдено')
      } else{
        console.log('я спросил')   
         const a = result.data.forEach(car => {
          Object.keys(findObj).every(key => {
            // console.log(car.text,'Я 1 ',findObj,'Я 2 ')
          if(car.text === findObj){
            console.log('О такая уже есть')
            console.log(car.text,'Я 1 ',findObj,'Я 2 ')
            return true
          }else {
            console.log('А этих нету')
            return false
          }
          })
          console.log(car)
         })
      console.log(a)
        // console.log(firstArr.every((v,i)=>v.description ==  result.data[i].text))
        if (a == true){
          console.log('О такая уже есть')
        } else {
          console.log('хто я')
        }
      }
    })
  }

  arrayConverter(array, findObj){

    }

   // Когда рендер гонит обьект он вызывает функцию сравнения  
   // передает значения 2х или больше значений которые прогоняются через модуль 
  
  // Присвоить id и покрасить маркер

  // this.firstArr = firstArr;

  // Метод проверки на добавленную карточку.
  // используем массив проверки и красим флажок проверив на залогиненого пользователя
}
