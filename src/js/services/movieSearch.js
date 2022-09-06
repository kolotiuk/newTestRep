const formRef = document.querySelector('#search-form');

import TheMovieAPI from './theMovieAPI';
import renderMarkupMovieCards from '../templates/movie-card';
import { loadMoreContent } from './infinityScroll';
const theMovieAPI = new TheMovieAPI();

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
    renderMarkupMovieCards(results);
    loadMoreContent(results);
  } catch (error) {}
}

formRef.addEventListener('submit', handleSubmit);
