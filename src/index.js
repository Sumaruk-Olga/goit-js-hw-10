import './css/styles.css';
import './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const debounce = require('lodash.debounce');
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const name = 'jlhfj';
fetchCountries(name).then(allcountries => {

    console.log(allcountries);

    if (allcountries.length > 10) {
       Notify.info('Too many matches found. Please enter a more specific name.');
    }
    if (allcountries.length > 1 && allcountries.length <= 10) {
        
    }
    if (allcountries.length === 1) {
        //
    }
}).catch(error => {
    if (error.message === "404") {
        Notify.failure('Oops, there is no country with that name');
    }
    // console.log(typeof(error.message));
})