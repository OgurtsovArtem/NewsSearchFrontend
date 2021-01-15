import setTimeAgo from '../utils/setTimeAgo'


const SEARCH_SETTINGS = {
    imput: document.querySelector('.intro__search'),
    setTimeAgo,
    preloader: document.querySelector('.preloader'),
    section: document.querySelector('.place-list'),
    searchError: document.querySelector('.not-found')
}

export default SEARCH_SETTINGS
