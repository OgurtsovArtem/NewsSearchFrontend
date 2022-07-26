export default class Card {
  constructor(api) {
    this.api = api;
  }

  create( title, description, publishedAt, urlToImage, sourceName, sourceLink, id, keyword, cardControlKey = undefined,) {
    
    const placeCard = document.createElement('div');
    const cardFlag = document.createElement('button');
    const cardPrompt = document.createElement('p');
    const cardImage = document.createElement('img');
    const cardDate = document.createElement('span');
    const cardTitle = document.createElement('h3');
    const cardText = document.createElement('p')
    const cardlink = document.createElement('a');
    // Redrawing
    const cardBucket = document.createElement('button')
    cardBucket.classList.add('place-card__backet');
    const cardKeyword = document.createElement('p');
    cardKeyword.classList.add('place-card__keyword');
    //
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

    placeCard.appendChild(cardFlag);
    placeCard.appendChild(cardPrompt);
    placeCard.appendChild(cardImage);
    placeCard.appendChild(cardDate);
    placeCard.appendChild(cardTitle);
    placeCard.appendChild(cardText);
    placeCard.appendChild(cardlink);


   if(cardControlKey === 'Redrawing'){
      cardPrompt.textContent = `Убрать из сохранённых`;
      placeCard.appendChild(cardBucket);
      placeCard.appendChild(cardKeyword);
      cardKeyword.textContent = keyword; 
      placeCard.removeChild(cardFlag);
      placeCard.dataset.id = id;
      this.cardBucket = cardBucket;
      this.cardControlKey = cardControlKey
      this.bucketListener()
   }

   if(id !== undefined){
    placeCard.dataset.id = id;
    cardFlag.classList.add('place-card__flag_active')
  }

    this.cardFlag = cardFlag;
    this.cardPrompt = cardPrompt;

    //Для сохранения
    this.cardTitle = cardTitle;
    this.cardText = cardText;
    this.cardDate = cardDate;
    this.cardlink = cardlink //source и name и link
    this.cardImage = cardImage;

    this.accessСheck();
    this.placeCard = placeCard
    return placeCard;
  }

  promt(){
    this.cardPrompt.classList.toggle('place-card__prompt_visible')
  }

  deleteCard () {
    this.api.deleteArticles(this.placeCard.dataset.id)
    .then(res => {
      if (res.ok){
        console.log("удалилась")
        this.cardFlag.classList.remove('place-card__flag_active')
        this.removelistener()
        if(this.cardControlKey === 'Redrawing'){
          this.placeCard.remove()
        }
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  accessСheck(){
    if (localStorage.authorizedUser !== undefined) {
      this.loginListener()
    } else {
      this.promtListener()
    } return
  }
  saveCard () {
    console.log(localStorage.getItem('articleKey'))
    
    this.api.postArticles(
      JSON.parse(localStorage.getItem('articleKey')),
      this.cardTitle.textContent,
      this.cardText.textContent,
      this.cardDate.textContent,
      this.cardlink.textContent,
      this.cardlink.href,
      this.cardImage.src,
     )
     .then(res => {
       if(res !== undefined){
        console.log('Сохранилась')
        // localStorage.setItem('cardKey', JSON.stringify(res.id)) Это надо чтобы при перезагрузке красить уже имеющиеся
        this.placeCard.dataset.id = res.id
        console.log(this.placeCard.dataset.id)
        this.cardFlag.classList.add('place-card__flag_active')
        // записываем карту в хранилище.
        // прогоняем по картам и присваиваем id 
       }else {
        this.cardPrompt.textContent = `Не могу сохранить:(`;
        this.cardPrompt.classList.toggle('place-card__prompt_visible')
       }
      })
    .catch(err => {
      console.log(err)
    })
  }
  flagControl(){
    if (this.cardFlag.classList.contains('place-card__flag_active')){
        this.deleteCard()
    }else {
        this.saveCard()
    }
  }
  removelistener(){
    if (this.cardControlKey === 'Redrawing'){
      this.cardBucket.removeEventListener('mouseout',  this.promt.bind(this));
      this.cardBucket.removeEventListener('mouseover',  this.promt.bind(this));
      this.cardBucket.removeEventListener('click',  this.deleteCard.bind(this));
      console.log('я удалил слушатель')
    }else {
      this.cardFlag.removeEventListener('mouseout',  this.promt.bind(this));
      this.cardFlag.removeEventListener('mouseover',  this.promt.bind(this));
      this.cardFlag.removeEventListener('click',  this.flagControl.bind(this));
      console.log('Я удалил слшуатель с флага')
    }
  }
  promtListener() {
    this.cardFlag.addEventListener('mouseout',  this.promt.bind(this));
    this.cardFlag.addEventListener('mouseover',  this.promt.bind(this));
  }
  loginListener(){
    this.cardFlag.addEventListener('click',  this.flagControl.bind(this));

  }
  bucketListener(){
    this.cardBucket.addEventListener('mouseout',  this.promt.bind(this));
    this.cardBucket.addEventListener('mouseover',  this.promt.bind(this));
    this.cardBucket.addEventListener('click',  this.deleteCard.bind(this));
  }
}
