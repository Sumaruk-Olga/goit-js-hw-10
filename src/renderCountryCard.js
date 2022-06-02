export function renderCountryCard(country) {
   const { flags, name, capital, population, languages } = country[0];
    const languagesList = Object.values(languages);
    const languagesString = languagesList.join(', '); 

    return `
    <div class="country-card">
    <img 
          class ="country-img"
          src="${flags.svg}"
          alt="flag"
          width=60px
          height=30px
          />
    <p class = "name">${name.official}</p>
</div>
    <p class="description-data"><span class="description">Capital: </span> ${capital}</p>
    <p class="description-data"><span class="description">Population: </span>${population}</p>
    <p class="description-data"><span class="description">Languages: </span>${languagesString}</p>
    `
}