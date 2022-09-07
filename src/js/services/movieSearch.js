const formRef = document.querySelector('#search-form');

import TheMovieAPI from './theMovieAPI';
import renderMarkupMovieCards from '../templates/movie-card';
import { loadMoreContent } from './infinityScroll';
export const theMovieAPI = new TheMovieAPI();
const gallery = document.querySelector('.movie-cards__list');

let page = 1;

async function handleSubmit(e) {
  e.preventDefault();
  theMovieAPI.resetPage();

  const { query } = e.currentTarget.elements;
  const inputValue = query.value.trim();
  if (!inputValue) {
    alert('введіть дані для пошуку');
    return;
  }

  theMovieAPI.query = inputValue;
  try {
    const { results } = await theMovieAPI.fetchSearchMovies(page);
    if (results.length === 0) {
      alert('введіть дані для пошуку');
      return;
    }
    gallery.innerHTML = '';
    renderMarkupMovieCards(results);
    loadMoreContent();
  } catch (error) {}
}

formRef.addEventListener('submit', handleSubmit);
