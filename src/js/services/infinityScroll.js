import TheMovieAPI from './theMovieAPI';
const theMovieAPI = new TheMovieAPI();
import renderMarkupMovieCards from '../templates/movie-card';

export default infiniteObserver = new IntersectionObserver(
  ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      loadMoreContent();
    }
  },
  {
    threshold: 0.9,
  }
);

async function loadMoreContent() {
  theMovieAPI.incrementPage();

  try {
    const { results } = await theMovieAPI.fetchMovies();
    renderMarkupMovieCards(results);
  } catch (error) {}
}
