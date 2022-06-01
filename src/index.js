import './css/styles.css';
import './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';
import { renderCountryCard } from './renderCountryCard';
import { renderCountryList } from './renderCountryList';

const DEBOUNCE_DELAY = 300;

const refs = {
    searchInput: document.querySelector('#search-box'),
    countryList: document.querySelector('country-list'),
    countryCard: document.querySelector('country-info'),
};

refs.searchInput.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(event) {
    const name = event.target.value.trim();

    fetchCountries(name).then(allcountries => {
        clearPage();
    if (allcountries.length > 10) {            
       Notify.info('Too many matches found. Please enter a more specific name.');
    }
    if (allcountries.length > 1 && allcountries.length <= 10) {
        renderCountryList(allcountries, refs.countryList);

    }
    if (allcountries.length === 1) {
        renderCountryCard(allcountries, refs.countryCard);
    }
}).catch(error => {
    if (error.message === "404") {
        Notify.failure('Oops, there is no country with that name');
    }
    // console.log(typeof(error.message));
})
}

function clearPage(){
    refs.countryList.innerHTML = '';
    refs.countryCard.innerHTML = '';
}

