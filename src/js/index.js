import renderMarkupMovieCards from './templates/movie-card';
import '../js/services/theMovieAPI';
import TheMovieAPI from '../js/services/theMovieAPI';
const theMovieAPI = new TheMovieAPI();

theMovieAPI.fetchMovies(1).then(({ results }) => {
  renderMarkupMovieCards(results);
});
theMovieAPI.fetchGenres();