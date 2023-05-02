import clearMarkup from './index.js';

export default class AppFetchCountries {
  constructor() {
    this.BASE_URL = 'https://restcountries.com/v3.1/name/';
    this.fetchOptions = 'name,capital,population,flags,languages';
  }

  fetchCountries(name) {
    const url = `${this.BASE_URL}${name}?fields=${this.fetchOptions}`;

    return fetch(url)
      .then(responseCheck)
      .catch(error => console.error('Error', error));
  }
}

function responseCheck(response) {
  clearMarkup();
  if (!response.ok) {
    throw new Error('Response is NOT OK!');
  }
  return response.json();
}
