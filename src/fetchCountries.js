export function fetchCountries(name) {
    const URL = 'https://restcountries.com/v3.1/name';
  return  fetch(`${URL}/${name}?fields=name,capital,population,flags,languages`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })  
}

// fields=name,capital,population,flags,languages
  // https://restcountries.com/v2/{service}?fields={field},{field},{field}
  //https://restcountries.com/v2/all?fields=name,capital,currencies
