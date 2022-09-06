import TheMovieAPI from './theMovieAPI';
const theMovieAPI = new TheMovieAPI();
import renderMarkupMovieCards from '../templates/movie-card';

const infiniteObserver = new IntersectionObserver(
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
export default infiniteObserver;

async function loadMoreContent() {
  theMovieAPI.incrementPage();

  try {
    const { results } = await theMovieAPI.fetchMovies();
    renderMarkupMovieCards(results);
  } catch (error) {}
}
