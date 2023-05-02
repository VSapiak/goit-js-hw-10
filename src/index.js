import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import AppFetchCountrus from './fetchCountries.js';
import BildComponentsList from './countryCard';

// Експортуємо класи
const newsApiService = new AppFetchCountrus();
const bildComponentsList = new BildComponentsList();

const DEBOUNCE_DELAY = 300;

const inputSearchCountry = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputSearchCountry.addEventListener(
  'input',
  debounce(onSearchCountrise, DEBOUNCE_DELAY)
);

export default function clearMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function onSearchCountrise(e) {
  const countrySearch = e.target.value.trim().toLowerCase();
  if (!countrySearch) {
    clearMarkup();
    return;
  }
  newsApiService
    .fetchCountries(countrySearch)
    .then(searchCountryNumber)
    .catch(onError);
}

// Функція яка перевиріє чи можемо ми запушити розмітку
function searchCountryNumber(data) {
  if (data.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (data.length >= 2) {
    const markup = data
      .map(element => {
        return bildComponentsList.contentSeveralCountry(
          element.name.official,
          element.flags.svg
        );
      })
      .join('');
    countryList.innerHTML = markup;
    return;
  }

  const markup = bildComponentsList.constenCountry(data[0]);
  countryInfo.innerHTML = markup;
}

function onError() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
