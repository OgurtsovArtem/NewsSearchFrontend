export default class LocalStorage {
    constructor(options) {
      this.options = options
   
    }

    saveKey (key,value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getKey(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    removeKey(key){
        localStorage.removeItem(key);
    }
}