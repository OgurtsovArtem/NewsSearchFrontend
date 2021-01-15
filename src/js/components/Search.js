export default class Search {
    constructor({imput, setTimeAgo, preloader, section, searchError}, cardList, newsApi) {
        this.imput = imput
        this.cardList = cardList
        this.setTimeAgo = setTimeAgo
        this.newsApi = newsApi
        this.preloader = preloader
        this.section = section
        this.searchError = searchError;
        this.keyword = this.keyword.bind(this);
    }
    keyword(event){
        event.preventDefault();
        this.open()
        const key = document.forms.search.elements.search.value;
        this.newsApi.getNews(key, this.setTimeAgo)
        .then((result) => {
            if(result.totalResults === 0){
                this.searchError.classList.remove('disabled');
            } else{
                this.section.classList.remove('disabled');
                this.searchError.classList.add('disabled');
                this.cardList.refreshCardList(); //очищаем предыдущий массив
                this.cardList.arrayControl(result.articles); // передаем текущий 
                this.cardList.showСards(event); // отрисовываем начальные карточки
            }
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            this.close()
        })
    }
    open(){
        this.searchError.classList.add('disabled');
        this.preloader.classList.remove('disabled');
        this.section.classList.add('disabled');
    }
    close(){
        this.preloader.classList.add('disabled');
    }
}


