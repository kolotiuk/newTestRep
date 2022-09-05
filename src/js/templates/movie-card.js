export default function renderMarkupMovieCards({ results }) {
  const gallery = document.querySelector('.movie-cards__list');
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
        return /*html*/ `
    <li class="movie-card__item" data-id="${id}">
      <div class="movie-card">
        ${
          poster_path
            ? `<img
          src="${poster_path}"
          `
            : `<img
          src=""
          `
        }
          class="movie-card__poster"
          alt="${title}"
          loading="lazy"
        />
        <h2 class="movie-info-title">${title}</h2>
        <div class="movie-card__description">
          <div class="movie-info-list">
            <p class="info-item">${genre_ids}</p>
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
}