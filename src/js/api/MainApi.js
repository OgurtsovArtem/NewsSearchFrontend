export default class MainApi {
    constructor(options, localStorage) {
        this.options = options;
        this.localStorage = localStorage;
    }


    login(email, password){
      console.log(`${this.options.baseUrl}/signin`)
        return fetch(`${this.options.baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            // mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password,
            })
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .catch(err => {
            console.log(err)
          })
    }

    registration(email, password, name) {
        return fetch(`${this.options.baseUrl}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            })
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            console.log(JSON.stringify({
              email: email,
              password: password,
              name: name,
          }))
            return Promise.reject(`Ошибка: ${res.status}`);
          })
          .catch(err => {
            console.log(err)
          })
    }
    getUser(token){
      console.log(token)
      return fetch(`${this.options.baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            // mode: 'no-cors',
            headers: { 
              authorization: `Bearer ${token}`,
            },
          })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }

    getArticles () {
      return fetch(`${this.options.baseUrl}/articles`, {
        method: 'GET',
        credentials: 'include',
        // mode: 'no-cors',
        headers: {
          authorization: `Bearer ${this.localStorage.getKey('key')}`,
          'Content-Type': 'application/json'
        },
      })
        .then (res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`)
        })
    }
    postArticles(keyword, title, text, date, source, link, image) {
        return fetch(`${this.options.baseUrl}/articles`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.localStorage.getKey('key')}`,
        },
        body: JSON.stringify({
            keyword: keyword,
            title: title,
            text: text,
            date: date,
            source: source,
            link: link,
            image: image,
        })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch(err => {
          console.log(err.massage)
        })

    }
    deleteArticles(id) {
      return fetch(`${this.options.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          authorization: `Bearer ${this.localStorage.getKey('key')}`,
          'Content-Type': 'application/json'
        },
      });
    }


}
