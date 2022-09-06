import renderMarkupMovieCards from './templates/movie-card';
import '../js/services/theMovieAPI';
import TheMovieAPI from '../js/services/theMovieAPI';
const theMovieAPI = new TheMovieAPI();

async function theMovieApiRender() {
  try {
    const { results } = await theMovieAPI.fetchMovies(1);
    renderMarkupMovieCards(results);

    const lastCard = document.querySelector('.movie-card__item:last-child');
    console.log("~ lastCard", lastCard)
    if (lastCard) {
      infiniteObserver.observe(lastCard);
    }
  } catch (error) {}
}
theMovieApiRender();
theMovieAPI.fetchGenres();
