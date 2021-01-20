import './index.css';

import LocalStorage from './js/components/LocalStorage'

const localStorage = new LocalStorage()


import HEADER_SETTINGS from './js/constants/HeaderSettings'
import Header from './js/components/Header'

const header = new Header(HEADER_SETTINGS, localStorage)
header.headerListener()
header.accessСheck()


import NEWS_API_SETTINGS from './js/constants/newsApiSettings';
import NewsApi from './js/api/NewsApi';

export const newsApi = new NewsApi(NEWS_API_SETTINGS)


import MAIN_API_SETTINGS from './js/constants/mainApiSettings';
import MainApi from './js/api/MainApi';

const mainApi = new MainApi(MAIN_API_SETTINGS, localStorage)


import CARD_LIST_SETTINGS from './js/constants/CardListSettings';
import CardList from './js/components/CardList'

export const cardList = new CardList(CARD_LIST_SETTINGS, mainApi);
cardList.listener()

import { FORM_VALIDATOR_SETTINGS_LOGIN, FORM_VALIDATOR_SETTINGS_REGISTRATION }  from './js/constants/FormValidatorSettings';
import FormValidator from './js/components/FormValidator';

const validationLogin = new FormValidator(FORM_VALIDATOR_SETTINGS_LOGIN);
const validationRegistration = new FormValidator(FORM_VALIDATOR_SETTINGS_REGISTRATION);

validationLogin.setEventListeners()
validationRegistration.setEventListeners ()


import SEARCH_SETTINGS from './js/constants/SearchSettings'
import Search from './js/components/Search'

const search = new Search(SEARCH_SETTINGS, cardList, newsApi);

const formSearch = document.forms.search;
formSearch.addEventListener('submit', search.keyword); 


import POPUP_LOGIN_SETTINGS from './js/constants/PopupLoginSettings'
import PopupLogin from './js/components/PopupLogin'

const popupLogin = new PopupLogin(POPUP_LOGIN_SETTINGS);
popupLogin.listenerLogin()

import POPUP_REGISTRATION_SETTINGS from './js/constants/PopupRegistrationSettings'
import PopupRegistration from './js/components/PopupRegistration'

const popupRegistration = new PopupRegistration(POPUP_REGISTRATION_SETTINGS);
popupRegistration.listenerRegistration()

import POPUP_SUCCESSFUL_SETTINGS from './js/constants/PopupSuccessfulSettings'
import PopupSuccessful from './js/components/PopupSuccessful'

const popupSuccessful = new PopupSuccessful(POPUP_SUCCESSFUL_SETTINGS);
popupSuccessful.listenerSuccessful()


import POPUP_SUBMITH_SETTINGS from './js/constants/PopupSubmithSettings'
import PopupSubmith from './js/components/PopupSubmith'

const popupSubmith = new PopupSubmith(POPUP_SUBMITH_SETTINGS, mainApi , header, localStorage)


//------------------------------------------------------------------------------
const formLogin = document.forms.login
const formRegistration = document.forms.registration

formLogin.addEventListener('submit', popupSubmith.submitLogin); 
formRegistration.addEventListener('submit', popupSubmith.submitRegistration); 
//------------------------------------------------------------------------------
