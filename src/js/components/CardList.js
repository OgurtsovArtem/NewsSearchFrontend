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

  addCard(title, description, publishedAt, urlToImage, sourceName, sourceLink) {
    const newCard  = this.classCreate(this.api).create(
      title,
      description,
      this.setFormatDate(publishedAt),
      urlToImage,
      sourceName,
      sourceLink,
      this.idCreator(),
      );
    this.container.appendChild(newCard);
  }

  render(cardArr) {
    this.cardArr = cardArr;
    this.cardArr.forEach((obj) => {
      this.addCard(obj.title,
        obj.description,
        obj.publishedAt,
        obj.urlToImage,
        obj.source.name,
        obj.url,
        )
    });
  }
  arrayControl(array){
    this.array = array;
    this.currentIndex = 0;
    this.currentLimit = 0;
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
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild)
      }
    }
    return
  }
  listener(){
    this.button.addEventListener('click', this.showСards)
  }

  //Метод проверки на добавленную карточку.
}
