import setFormatDate from '../utils/setFormatDate'
import Card from '../components/Card'

const classCreate = (api) => {
    return new Card(api)

  }

const CARD_LIST_SETTINGS = {
    container: document.querySelector('.place-list__container'),
    setFormatDate,
    button: document.querySelector('.place-list__button'),
    classCreate,
}


export default CARD_LIST_SETTINGS