export default class BildComponentsList {
  constructor() {}

  contentSeveralCountry(name, flag) {
    return `
	<li class="list_item">
		<img src="${flag}" alt="flag of ${name}" width="35px" height="35px"/>
		<p class="country_name">${name}</p>
	</li>
	`;
  }

  // BUILD ONE COUNTRY MARKUP
  constenCountry({ name, flags, capital, population, languages }) {
    const languageBlock = Object.values(languages).join(',');
    const markup = `
	<div class="country_header">
		<img src="${flags.svg}" alt="$flag of ${name.official}" class="country_flag""/>
		<h2>${name.official}</h2>
	</div>
	<ul class="country_info_list">
		<li class="country_info_list_item"><h3>Capital:</h3> ${capital[0]}</li>
		<li class="country_info_list_item"><h3>Population:</h3>${population.toLocaleString()}</li>
		<li class="country_info_list_item"><h3>Languages:</h3>${languageBlock}</li>
	</ul>
	`;
    return markup;
  }
}
