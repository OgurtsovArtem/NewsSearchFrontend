export default class Card {
  constructor(api) {
    this.api = api;
    console.log(this.api)
    // this.listener =this.listener.bind(this)
  }

  create( title, description, publishedAt, urlToImage, sourceName, sourceLink, _id) {

    const placeCard = document.createElement('div');
    const cardFlag = document.createElement('button');
    const cardPrompt = document.createElement('p');
    const cardImage = document.createElement('img');
    const cardDate = document.createElement('span');
    const cardTitle = document.createElement('h3');
    const cardText = document.createElement('p')
    const cardlink = document.createElement('a');

    placeCard.classList.add('place-card');
    cardFlag.classList.add('place-card__flag');
    cardPrompt.classList.add('place-card__prompt');
    cardImage.classList.add('place-card__image');
    cardDate.classList.add('place-card__date');
    cardTitle.classList.add('place-card__title');
    cardText.classList.add('place-card__text');
    cardlink.classList.add('place-card__link');
    cardlink.classList.add('link');

    cardImage.setAttribute('alt',"Изображение");
    cardImage.setAttribute('src',`${urlToImage}`);
    cardlink.setAttribute('target',"_blank");
    cardlink.setAttribute('href', `${sourceLink}`)

    cardPrompt.textContent = `Войдите, чтобы сохранять статьи`;
    cardDate.textContent  = publishedAt;
    cardTitle.textContent = title;
    cardText.textContent = description;
    cardlink.textContent = sourceName;
    placeCard.dataset.id = _id

    placeCard.appendChild(cardFlag);
    placeCard.appendChild(cardPrompt);
    placeCard.appendChild(cardImage);
    placeCard.appendChild(cardDate);
    placeCard.appendChild(cardTitle);
    placeCard.appendChild(cardText);
    placeCard.appendChild(cardlink);

    this.cardFlag = cardFlag;
    this.cardPrompt = cardPrompt;

    //Для сохранения
    this.cardTitle = cardTitle;
    this.cardText = cardText;
    this.cardDate = cardDate;
    this.cardlink = cardlink //source и name и link
    this.cardImage = cardImage;

    this.accessСheck();
    return placeCard;
  }

  promt(){
    this.cardPrompt.classList.toggle('place-card__prompt_visible')
  }

  deleteCard () {
    console.log('Пока')
  }

  accessСheck(){
    if (localStorage.authorizedUser !== undefined) {
      this.loginListener()
    } else {
      this.promtListener()
    } return
  }
  saveCard () {
    console.log('Привет')
    this.api.postArticles(
      'Power Point',
      this.cardTitle.textContent,
      this.cardText.textContent,
      this.cardDate.textContent,
      this.cardlink.textContent,
      this.cardlink.href,
      this.cardImage.src,
     )
     .then(res => {
        console.log(res)
      })
    .catch(err => {
      console.log(err)
    })

    // keyword: keyword,
    // title: title,
    // text: text,
    // date: date,
    // source: source,
    // link: link,
    // image: image,
  }
  flagControl(){
    if (this.cardFlag.classList.contains('place-card__flag_active')){
      this.cardFlag.classList.remove('place-card__flag_active')
      this.deleteCard()
    }else {
      this.cardFlag.classList.add('place-card__flag_active')
      this.saveCard()
    }
  }

  promtListener() {
    this.cardFlag.addEventListener('mouseout',  this.promt.bind(this));
    this.cardFlag.addEventListener('mouseover',  this.promt.bind(this));
  }
  loginListener(){
    this.cardFlag.addEventListener('click',  this.flagControl.bind(this));
  }
}
