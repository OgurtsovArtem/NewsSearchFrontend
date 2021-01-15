export default class NewsApi {
  constructor({ baseUrl, endpoint, sortBy, pageSize, apiKey }) {
    this.baseUrl = baseUrl
    this.endpoint = endpoint;
    this.sortBy = sortBy;
    this.apiKey = apiKey;
    this.pageSize = pageSize;
  }

  getNews(keyword, setTimeAgo){
    return fetch(`${this.baseUrl}${this.endpoint}?q=${keyword}&` +
    `from=${setTimeAgo(7)}&` +
    `sortBy=${this.sortBy}&pageSize=${this.pageSize}&` +
    `apiKey=${this.apiKey}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
    }
};
