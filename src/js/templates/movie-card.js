import infiniteObserver from '../services/infinityScroll';

const gallery = document.querySelector('.movie-cards__list');

const allGenres = localStorage.getItem('genres');
const parse = JSON.parse(allGenres);

export default function renderMarkupMovieCards(results) {
  const markup = results
    .map(
      ({
        id,
        poster_path,
        genre_ids,
        original_language,
        vote_average,
        title,
        release_date,
      }) => {
        const genres =
        genre_ids
        .filter(id => parse[id])
        .map(id => parse[id])
        .join(', ') || 'Genres are not specified';

        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : '';

        return /*html*/ `
    <li class="movie-card__item" data-id="${id}">
      <div class="movie-card">
        <img class="movies__img" src="${poster}" alt="${title}">
        <h2 class="movie-info-title">${title}</h2>
        <div class="movie-card__description">
          <div class="movie-info-list">
            <p class="info-item">${genres}</p>
            <span>&#127871;</span>
            <p class="info-item-year">${release_date?.slice(0, 4)}</p>
          </div>
          <div class="language-rating">
            <span class="info-item-language"> ${original_language} </span>
            <p class="info-item-rating"><span>&#9733;</span> ${vote_average}</p>
          </div>
        </div>
      </div>
    </li>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  const lastCard = document.querySelector('.movie-card__item:last-child');
  if (lastCard) {
    infiniteObserver.observe(lastCard);
  }
}
