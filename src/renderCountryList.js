export function renderCountryList(allcountries) {

  return allcountries
    .map(({ flags, name }) => 
          `<li class="country-item">
          <img 
          class ="country-img"
          src="${flags.svg}"
          alt="flag"
          width=60px
          height=30px
          />
        <p class = "country-name">${name.official}</p>
      </li>`).join('');  
}