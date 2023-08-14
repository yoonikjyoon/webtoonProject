import axios from 'axios';

export default class WebtoonClient {
  constructor() {
    this.httpClient = axios.creat({
      baseURL: 'https://www.kmas.or.kr/openapi/search/rgDtaMasterList',
      params: {prvKey: process.env.API_APP_KEY},
    });
  }
}
